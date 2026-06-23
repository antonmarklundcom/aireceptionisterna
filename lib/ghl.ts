/**
 * GoHighLevel (GHL) inbound webhook fan-out.
 *
 * This site is the capture engine; operations (calls, CRM, bookings) run in
 * GHL. We POST each lead to a GHL inbound webhook. The exact field names a
 * given GHL workflow expects are NOT verified yet — every unverified name is
 * marked with TODO(GHL). When GHL_SANDBOX is true we still attempt the call
 * but never throw; failures are reported to the caller so the lead can be
 * marked "pending" in the Sheets backup.
 *
 * NEVER-BLOCK contract: nothing in here may cause a user submission to fail.
 */

import type { LeadPayload } from "./lead-schema";

const RETRIES = 3;

export type DeliveryResult = {
  ok: boolean;
  skipped: boolean;
  detail?: string;
};

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** Map our normalized lead into the shape a GHL inbound webhook consumes. */
function toGhlBody(lead: LeadPayload) {
  return {
    // TODO(GHL): confirm these custom field keys against the actual
    // inbound webhook / workflow mapping in the GHL sub-account.
    first_name: lead.name ?? "",
    email: lead.email ?? "",
    phone: lead.phone ?? "",
    company: lead.company ?? "",
    message: lead.message ?? "",
    lead_source: lead.source,
    // UTM + consent metadata for attribution & GDPR audit trail.
    utm_source: lead.utm_source ?? "",
    utm_medium: lead.utm_medium ?? "",
    utm_campaign: lead.utm_campaign ?? "",
    utm_term: lead.utm_term ?? "",
    utm_content: lead.utm_content ?? "",
    consent: lead.consent,
    consent_timestamp: lead.consentTimestamp,
    page: lead.page ?? "",
    user_agent: lead.userAgent ?? "",
  };
}

export async function sendToGhl(lead: LeadPayload): Promise<DeliveryResult> {
  const url = process.env.GHL_INBOUND_WEBHOOK_URL;
  const sandbox = process.env.GHL_SANDBOX === "true";

  if (!url) {
    return { ok: false, skipped: true, detail: "GHL_INBOUND_WEBHOOK_URL unset" };
  }

  const body = JSON.stringify(toGhlBody(lead));

  for (let attempt = 0; attempt < RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // TODO(GHL): some workflows require a shared secret header.
          ...(sandbox ? { "X-GHL-Sandbox": "true" } : {}),
        },
        body,
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (res.ok) return { ok: true, skipped: false };
      // 4xx is unlikely to be fixed by retrying.
      if (res.status >= 400 && res.status < 500) {
        return { ok: false, skipped: false, detail: `GHL ${res.status}` };
      }
    } catch (err) {
      // network/abort — fall through to backoff & retry
      if (attempt === RETRIES - 1) {
        return {
          ok: false,
          skipped: false,
          detail: err instanceof Error ? err.message : "GHL request failed",
        };
      }
    }
    await sleep(2 ** attempt * 500); // 500ms, 1s, 2s
  }
  return { ok: false, skipped: false, detail: "GHL retries exhausted" };
}

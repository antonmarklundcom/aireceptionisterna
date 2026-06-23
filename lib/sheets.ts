/**
 * Google Sheets backup append. Service-account auth. Reads:
 *   GOOGLE_SHEETS_ID, GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY
 *
 * This is the durable backup so non-booked leads are never invisible while
 * GHL is still being wired. NEVER-BLOCK: any failure here is reported, never
 * thrown into the request path. When GHL delivery failed we still append the
 * row but mark it "pending" so a human can follow up.
 */

import { google } from "googleapis";
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

function getConfig() {
  const id = process.env.GOOGLE_SHEETS_ID;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  // Private keys are stored with literal "\n"; restore real newlines.
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );
  if (!id || !clientEmail || !privateKey) return null;
  return { id, clientEmail, privateKey };
}

function toRow(lead: LeadPayload, status: "ok" | "pending"): string[] {
  return [
    lead.consentTimestamp,
    lead.source,
    status,
    lead.name ?? "",
    lead.email ?? "",
    lead.phone ?? "",
    lead.company ?? "",
    lead.message ?? "",
    lead.utm_source ?? "",
    lead.utm_medium ?? "",
    lead.utm_campaign ?? "",
    lead.utm_term ?? "",
    lead.utm_content ?? "",
    lead.consent ? "true" : "false",
    lead.page ?? "",
    lead.userAgent ?? "",
  ];
}

export async function appendToSheet(
  lead: LeadPayload,
  status: "ok" | "pending"
): Promise<DeliveryResult> {
  const config = getConfig();
  if (!config) {
    return { ok: false, skipped: true, detail: "Google Sheets not configured" };
  }

  for (let attempt = 0; attempt < RETRIES; attempt++) {
    try {
      const auth = new google.auth.JWT({
        email: config.clientEmail,
        key: config.privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
      const sheets = google.sheets({ version: "v4", auth });
      await sheets.spreadsheets.values.append({
        spreadsheetId: config.id,
        range: "Leads!A1",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values: [toRow(lead, status)] },
      });
      return { ok: true, skipped: false };
    } catch (err) {
      if (attempt === RETRIES - 1) {
        return {
          ok: false,
          skipped: false,
          detail: err instanceof Error ? err.message : "Sheets append failed",
        };
      }
    }
    await sleep(2 ** attempt * 500);
  }
  return { ok: false, skipped: false, detail: "Sheets retries exhausted" };
}

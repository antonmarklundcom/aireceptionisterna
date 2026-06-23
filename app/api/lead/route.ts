import { NextResponse } from "next/server";
import { leadInputSchema, type LeadPayload } from "@/lib/lead-schema";
import { sendToGhl } from "@/lib/ghl";
import { appendToSheet } from "@/lib/sheets";

/**
 * Single lead orchestrator. Validates input with zod, then fans out to GHL +
 * Google Sheets with Promise.allSettled. NEVER-BLOCK: a logger/CRM failure
 * never fails the user submission — we always return 200 with { ok: true }
 * unless the input itself is invalid. The client shows the e-post fallback
 * only when it cannot reach this endpoint at all.
 *
 * We parse JSON from the raw text body because leads may arrive via
 * navigator.sendBeacon (which sends a Blob without a guaranteed content-type).
 */

export const runtime = "nodejs";

export async function POST(req: Request) {
  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ ok: false, error: "unreadable" }, { status: 400 });
  }

  let json: unknown;
  try {
    json = JSON.parse(raw || "{}");
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = leadInputSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const lead: LeadPayload = {
    ...parsed.data,
    consentTimestamp: new Date().toISOString(),
  };

  // Fan out. GHL first so we know whether to mark the Sheets row pending.
  const ghl = await sendToGhl(lead).catch(() => ({
    ok: false,
    skipped: false as const,
    detail: "ghl threw",
  }));

  const status: "ok" | "pending" = ghl.ok ? "ok" : "pending";

  const [sheet] = await Promise.allSettled([appendToSheet(lead, status)]);

  // Log delivery outcome server-side for the operator; never surfaced to user.
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.info("[lead]", {
      source: lead.source,
      ghl,
      sheet: sheet.status === "fulfilled" ? sheet.value : sheet.reason,
    });
  }

  // Always succeed for the user.
  return NextResponse.json({ ok: true });
}

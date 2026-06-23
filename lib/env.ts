/**
 * Central, typed access to public env config. Everything here is safe to
 * read on the client (only NEXT_PUBLIC_* values). Server-only secrets live
 * in lib/ghl.ts and lib/sheets.ts and are read with process.env directly.
 *
 * Every marketing claim is a toggle: empty/false by default. A value that
 * literally equals "[KOMPLETTERA]" is rendered verbatim on purpose so it is
 * obvious in the UI that a real value is still missing.
 */

const bool = (v: string | undefined) => v === "true";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aireceptionisterna.se",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hej@aireceptionisterna.se",
  responsePromise:
    process.env.NEXT_PUBLIC_RESPONSE_PROMISE || "Vi svarar inom 1 arbetsdag",
  orgName: process.env.NEXT_PUBLIC_ORG_NAME || "AI Receptionisterna AB",
  orgNr: process.env.NEXT_PUBLIC_ORG_NR || "[KOMPLETTERA]",
  fskatt: bool(process.env.NEXT_PUBLIC_FSKATT),
  ort: process.env.NEXT_PUBLIC_ORT || "[KOMPLETTERA]",

  priceOrdinarie: Number(process.env.NEXT_PUBLIC_PRICE_ORDINARIE || "2995"),
  priceKampanj: Number(process.env.NEXT_PUBLIC_PRICE_KAMPANJ || "1995"),
  campaignActive: bool(process.env.NEXT_PUBLIC_CAMPAIGN_ACTIVE),

  guaranteeLine: process.env.NEXT_PUBLIC_GUARANTEE_LINE || "",

  voiceAiWidgetUrl: process.env.NEXT_PUBLIC_VOICEAI_WIDGET_URL || "",
  demoPhone: process.env.NEXT_PUBLIC_DEMO_PHONE || "",
  callbackEnabled: bool(process.env.NEXT_PUBLIC_CALLBACK_ENABLED),
  calendarEmbedUrl: process.env.NEXT_PUBLIC_CALENDAR_EMBED_URL || "",
  loginUrl: process.env.NEXT_PUBLIC_LOGIN_URL || "",
} as const;

/** Format a SEK amount with space thousand-separators, e.g. 1995 -> "1 995". */
export function formatSek(amount: number): string {
  return amount.toLocaleString("sv-SE").replace(/ /g, " ");
}

/** A tel: href stripped of spaces, or null when no demo phone is set. */
export function demoPhoneHref(): string | null {
  if (!siteConfig.demoPhone) return null;
  return `tel:${siteConfig.demoPhone.replace(/\s+/g, "")}`;
}

import { z } from "zod";

/**
 * Shared lead schema. Used by /api/lead for validation and by the GHL /
 * Sheets modules for typing. The `source` discriminator routes which GHL
 * workflow / Sheet tab the lead belongs to.
 */

export const leadSourceSchema = z.enum([
  "contact_form",
  "booking_request",
  "demo_callback",
  "guide_cta",
  "bransch_page",
]);

export type LeadSource = z.infer<typeof leadSourceSchema>;

export const leadInputSchema = z.object({
  source: leadSourceSchema,
  name: z.string().trim().max(200).optional(),
  email: z.string().trim().email().max(200).optional(),
  phone: z.string().trim().max(60).optional(),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().max(5000).optional(),
  // GDPR: consent must be explicitly true to submit.
  consent: z.literal(true),

  // UTM / attribution (optional, captured client-side)
  utm_source: z.string().max(300).optional(),
  utm_medium: z.string().max(300).optional(),
  utm_campaign: z.string().max(300).optional(),
  utm_term: z.string().max(300).optional(),
  utm_content: z.string().max(300).optional(),
  gclid: z.string().max(300).optional(),
  fbclid: z.string().max(300).optional(),

  page: z.string().max(500).optional(),
  userAgent: z.string().max(1000).optional(),
});

export type LeadInput = z.infer<typeof leadInputSchema>;

/** Server-normalized payload with a guaranteed consent timestamp. */
export type LeadPayload = LeadInput & {
  consentTimestamp: string;
};

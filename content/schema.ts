import { z } from "zod";

/** Zod schemas for all typed content (no DB). Imported by content modules so
 *  a malformed edit fails the build instead of shipping broken pages. */

export const faqItemSchema = z.object({
  q: z.string(),
  a: z.string(),
});
export type FaqItem = z.infer<typeof faqItemSchema>;

export const featureSchema = z.object({
  title: z.string(),
  body: z.string(),
  // icon = key into the inline SVG motif set in components/icons.tsx
  icon: z.enum([
    "phone",
    "calendar",
    "summary",
    "sms",
    "clock",
    "transfer",
    "language",
    "shield",
  ]),
});
export type Feature = z.infer<typeof featureSchema>;

export const stepSchema = z.object({
  title: z.string(),
  body: z.string(),
  leveranstid: z.string(),
  ingar: z.string(),
});
export type Step = z.infer<typeof stepSchema>;

// icon = key into the inline SVG motif set in components/icons.tsx
export const branschIconSchema = z.enum([
  "wrench",
  "bolt",
  "hammer",
  "paintroller",
  "roof",
  "truck",
  "car",
  "tire",
  "clinic",
  "tooth",
  "scissors",
]);
export type BranschIcon = z.infer<typeof branschIconSchema>;

export const branschKategoriSchema = z.enum([
  "bygg-hantverk",
  "fordon",
  "kliniker-salonger",
  "ovrigt",
]);
export type BranschKategori = z.infer<typeof branschKategoriSchema>;

export const branschSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, "ASCII slug only (no å/ä/ö)"),
  namn: z.string(),
  // navLabel used in the dropdown
  navLabel: z.string(),
  h1: z.string(),
  intro: z.string(),
  pains: z.array(z.string()).min(1),
  faq: z.array(faqItemSchema),
  caseRef: z.string().nullable(),
  // full = content-complete page; stub = real shell, breadth fills content
  status: z.enum(["full", "stub"]),
  // hub = category landing page rendering an icon-grid of its children;
  // page = a single industry page (the default, matches v1 pages).
  kind: z.enum(["hub", "page"]).default("page"),
  kategori: branschKategoriSchema,
  icon: branschIconSchema,
  // short, number-free outcome line (nav dropdown + hub grid + hero)
  outcome: z.string(),
});
export type Bransch = z.infer<typeof branschSchema>;

export const guideFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  cluster: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string(),
  sources: z.array(z.string()).default([]),
});
export type GuideFrontmatter = z.infer<typeof guideFrontmatterSchema>;

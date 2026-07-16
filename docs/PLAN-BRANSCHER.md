# PLAN — Branschsidor v2 (Rossy-style industries, svensk marknad)

> Status: **planned, not yet built.** This is the spec for the next build.
> Foundation (v1) proved the bransch template end-to-end — this build is
> mostly content replication plus a thin "hub" layer. **No re-architecture.**

## 1. Goal

Copy the *structure* of rossy.ai's Industries pages (category hubs → industry
sub-pages), adapted to the Swedish market and our design system. Start with
three categories:

1. **Bygg & hantverk** (≈ Rossy "Home Service" / construction)
2. **Fordon** (bilhandlare + bilverkstäder)
3. **Kliniker & salonger**

### What we copy from Rossy — and what we deliberately do NOT

| Copy (structure/UX) | Do NOT copy (compliance) |
|---|---|
| Grouped industries dropdown in nav | Fabricated stat bar (99.99% uptime, +35%, 50K+, 4K+) — we never invent metrics |
| Category hub page with icon-grid of sub-industries | "Get 4X more bookings" multiplier claims — we use honest outcome framing without invented numbers |
| Per-industry page: outcome hero + industry pains + FAQ | Stock photos of people — our design system uses product-UI motifs, no generated/stock faces |
| Hub ↔ sub-page internal linking | Their dark-blue AI-slop look — our locked `ljus-editorial-varm` system stays |

Outcome lines are allowed but number-free, e.g. Rossy's
"Get 4X more bookings, even after hours" → **"Fler bokningar — även efter
stängning"**. Any real, sourced figure can be added later via content edit.

## 2. Page tree (batch 1)

All pages stay on the proven flat route `/bransch/[slug]` (ASCII slugs).
Hubs and sub-pages are distinguished by a `kind` field in the content model —
the existing dynamic route renders both. Existing URLs keep working.

```
/bransch/hantverkare        HUB  Bygg & hantverk        (upgrade existing stub → hub)
/bransch/vvs                sub  VVS & rörmokare                     NEW
/bransch/elektriker         sub  Elektriker                          NEW
/bransch/byggfirmor         sub  Bygg- & snickerifirmor              NEW
/bransch/malare             sub  Målerifirmor                        NEW
/bransch/taklaggare         sub  Takläggare                          NEW
/bransch/flyttfirmor        sub  Flytt- & städfirmor                 NEW

/bransch/fordon             HUB  Fordon                              NEW
/bransch/bilhandlare        sub  Bilhandlare        (fill existing stub → full)
/bransch/bilverkstader      sub  Bilverkstäder & däck                NEW

/bransch/kliniker-salonger  HUB  Kliniker & salonger                 NEW
/bransch/kliniker           sub  Kliniker & mottagningar  (already FULL — link under hub)
/bransch/tandlakare         sub  Tandläkare                          NEW
/bransch/salonger           sub  Frisörer & skönhetssalonger         NEW

/bransch/e-handel           standalone stub — untouched (batch 2)
```

**Total: 3 hubs + 9 full sub-pages** (2 upgrades + 10 new pages, 1 already done).

Batch 2 (later, same pattern, zero new code): fler underbranscher per hub
(golv, trädgård, lås, pool …), e-handel category, /guider clusters linking
into each hub.

## 3. Data model changes (`content/schema.ts` + `content/branscher.ts`)

Extend `branschSchema` — additive only, existing entries stay valid:

```ts
kind: z.enum(["hub", "page"]).default("page"),
kategori: z.enum(["bygg-hantverk", "fordon", "kliniker-salonger", "ovrigt"]),
icon: iconKeySchema,            // for the hub grid + nav (inline SVG set)
outcome: z.string(),            // number-free outcome line under the nav/hub label
// hubs additionally get: children derived by filtering on kategori
```

Every **sub-page** ships content-complete (no stubs in batch 1):

- `h1`: "AI-receptionist för [bransch]" (primary keyword as outcome)
- `intro`: 2–3 meningar, du-form, verksamhetsnära
- `pains[]`: 4 st, vertical-specific (like kliniker has today)
- `faq[]`: 4 st vertical FAQ (feeds FAQPage JSON-LD)
- `outcome`: kort, ärlig (no invented numbers)
- `caseRef: null` until a real consented case exists (unchanged rule)

Every **hub** gets: `h1`, `intro`, shared pains (3), category FAQ (3–4),
and renders the icon-grid of its children.

## 4. New/changed code (small — everything else is reuse)

| Item | File | Effort |
|---|---|---|
| Schema fields above | `content/schema.ts` | XS |
| ~12 content entries | `content/branscher.ts` | **M — the real work** |
| A few new icons (wrench, bolt, car, scissors, tooth, truck, paint) | `components/icons.tsx` | S |
| `BranschHubGrid` — icon grid of children (Rossy-style) | `components/BranschHubGrid.tsx` | S |
| Grouped nav dropdown (3 categories w/ sub-links; mobile accordion) | `components/Nav.tsx` | S |
| Render `kind: hub` variant (hero → grid → pains → HowItWorks → FAQ → FinalCta) | `app/bransch/[slug]/page.tsx` | S |
| Footer bransch column → grouped by category | `components/Footer.tsx` | XS |

**Automatic, zero work** (already wired in v1): sitemap, robots, per-page
metadata + canonical, Service/FAQPage/Breadcrumb JSON-LD, lead capture
(`source: bransch_page`), FAST bottenpanel, cookie/GDPR layer.

## 5. SEO per page (baked in, not a separate phase)

- H1 = "AI-receptionist för [bransch]" — matches search intent per vertical.
- Hubs internal-link to all children + to `/tjanster/ai-receptionist` +
  `/priser` + `/boka-demo`; children link back to hub + 2–3 siblings.
- FAQPage JSON-LD on every page with FAQ (automatic via `FaqAccordion`).
- Sitemap picks all pages up automatically from `branscher.ts`.
- Thematic topical authority only — **no geo pages** (unchanged v1 rule).

## 6. One build or split? → **ONE build**

Structure + copy + SEO + design ship together, because:

1. **Design is already done** — the locked design system and the proven
   bransch template cover everything; the only new UI is the hub grid.
2. **SEO is baked into the template** — splitting it out would mean
   re-touching every page twice.
3. **The only heavy lift is Swedish copy** (~12 pages × pains/FAQ), and that
   parallelizes cleanly inside one build.

The right split is **batching by category count** (this batch = 3 categories),
not by discipline. Batch 2 adds more verticals later with zero new code.

### Build order (single session)

1. Schema + icons (unblocks everything)
2. `branscher.ts` content — all 12 entries, zod-validated
3. `BranschHubGrid` + hub rendering in the dynamic route
4. Grouped Nav dropdown + Footer grouping
5. `npm run build` green → mobile check 360–390px → commit → push

### Acceptance criteria

- [ ] All 13 URLs render with full content (no "kommer snart", no lorem)
- [ ] Nav dropdown grouped by 3 categories, works on mobile (44px targets)
- [ ] Every sub-page: 4 pains + 4 FAQ + JSON-LD + lead capture
- [ ] No invented metrics, testimonials, faces or logos anywhere
- [ ] Sitemap contains all new URLs; `npm run build` green

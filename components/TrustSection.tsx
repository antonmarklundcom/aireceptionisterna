import Link from "next/link";
import { siteConfig } from "@/lib/env";

/**
 * Founder strip (läge utan case). Real photo + first-person promise + real
 * background — using [KOMPLETTERA] placeholders. We do NOT invent a face or
 * bio. The photo slot shows a neutral placeholder until a real photo is added
 * to /public/images.
 */
export function FounderStrip() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="card grid gap-8 p-8 sm:grid-cols-[180px_1fr] sm:items-center sm:p-10">
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl border border-dashed border-hairline bg-surface text-center text-xs text-faint">
          [KOMPLETTERA: grundarens foto i /public/images]
        </div>
        <div>
          <span className="eyebrow mb-4">Bakom tjänsten</span>
          <blockquote className="font-display text-2xl leading-snug">
            “[KOMPLETTERA: grundarens löfte i första person — varför tjänsten
            finns och vad du står för.]”
          </blockquote>
          <p className="mt-4 text-sm text-muted">
            [KOMPLETTERA: grundarens namn, roll och relevanta bakgrund.]
          </p>
          <Link href="/om-oss" className="mt-5 inline-flex text-sm font-semibold text-green-soft-ink underline">
            Läs mer om oss
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Trust bar under the hero — only true facts. No invented client counts. */
export function TrustBar() {
  const items = [
    siteConfig.fskatt ? "Innehar F-skattsedel" : null,
    siteConfig.orgNr !== "[KOMPLETTERA]" ? `Org.nr ${siteConfig.orgNr}` : "Org.nr [KOMPLETTERA]",
    "Kostnadsfri demo",
    siteConfig.responsePromise,
    "GDPR-säkrad",
  ].filter(Boolean) as string[];

  return (
    <div className="border-y border-hairline bg-surface">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-sm text-muted-2">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-faint" aria-hidden>·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

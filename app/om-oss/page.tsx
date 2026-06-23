import type { Metadata } from "next";
import { FounderStrip } from "@/components/TrustSection";
import { HowItWorks } from "@/components/HowItWorks";
import { DataHandling } from "@/components/DataHandling";
import { FinalCta } from "@/components/FinalCta";
import { siteConfig } from "@/lib/env";

export const metadata: Metadata = {
  title: "Om oss — människorna bakom receptionisten",
  description:
    "Vi bygger AI-receptionister för svenska företag. Fast pris, transparent process och en riktig människa som svarar på dina frågor.",
  alternates: { canonical: "/om-oss" },
};

export default function OmOssPage() {
  return (
    <>
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">Om oss</span>
          <h1>Vi vill att inget kundsamtal ska gå förlorat</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {siteConfig.orgName} bygger AI-receptionister som svarar på svenska
            dygnet runt. Vi tror på transparent process, fast pris innan start
            och en riktig människa som finns där när du behöver oss.
          </p>
        </div>
      </section>

      {/* Founder presence — carries the trust stack on this page */}
      <FounderStrip />

      {/* Process transparency */}
      <HowItWorks />

      {/* Risk reversal */}
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center">Så minimerar vi risken för dig</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Kostnadsfri demo", "Du hör receptionisten innan du bestämmer något."],
              ["Fast pris innan start", "Inga överraskningar — du vet vad det kostar i förväg."],
              ["Ingen bindningstid", "Du betalar per månad och kan avsluta när du vill."],
              ["Du godkänner allt", "Manus, röst och tider godkänns av dig innan vi går live."],
            ].map(([title, body]) => (
              <div key={title} className="card p-6">
                <h3 className="font-display text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </div>
            ))}
          </div>
          {siteConfig.guaranteeLine && (
            <p className="mt-6 rounded-xl bg-green-soft-bg px-5 py-4 text-center text-sm text-green-soft-ink">
              {siteConfig.guaranteeLine}
            </p>
          )}
        </div>
      </section>

      <DataHandling />
      <FinalCta />
    </>
  );
}

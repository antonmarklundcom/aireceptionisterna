import type { Metadata } from "next";
import { PriceCompare } from "@/components/PriceCompare";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { generalFaq } from "@/content/faq";
import { siteConfig } from "@/lib/env";

export const metadata: Metadata = {
  title: "Priser — fast månadspris utan bindningstid",
  description:
    "AI-receptionist till ett fast månadspris, exkl. moms. En bråkdel av kostnaden för en bemannad reception. Ingen bindningstid, kostnadsfri demo.",
  alternates: { canonical: "/priser" },
};

export default function PriserPage() {
  return (
    <>
      <section className="container-page pt-16 text-center sm:pt-20">
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow mb-4">Priser</span>
          <h1>Transparent pris, inga överraskningar</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Ett fast månadspris för hela tjänsten. Alla priser anges exkl. moms
            (B2B). {siteConfig.responsePromise}.
          </p>
        </div>
      </section>

      <PriceCompare />
      <FaqAccordion items={generalFaq} heading="Frågor om pris och villkor" />
      <FinalCta />
    </>
  );
}

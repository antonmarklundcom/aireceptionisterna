import { Hero } from "@/components/Hero";
import { TrustBar, FounderStrip } from "@/components/TrustSection";
import { StatBar } from "@/components/StatBar";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { PriceCompare } from "@/components/PriceCompare";
import { DataHandling } from "@/components/DataHandling";
import { Testimonial } from "@/components/Testimonial";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { generalFaq } from "@/content/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatBar />
      <FeatureGrid />
      <HowItWorks />
      <PriceCompare />
      {/* Trust stack (läge utan case): founder + data transparency. */}
      <FounderStrip />
      <DataHandling />
      {/* Renders only if a real consented review is supplied. */}
      <Testimonial />
      <FaqAccordion items={generalFaq} />
      <FinalCta />
    </>
  );
}

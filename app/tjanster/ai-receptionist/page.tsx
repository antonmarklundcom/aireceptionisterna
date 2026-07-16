import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getService } from "@/content/services";
import { getHubs } from "@/content/branscher";
import { siteConfig } from "@/lib/env";
import { JsonLd } from "@/components/JsonLd";
import { serviceLd, breadcrumbLd } from "@/lib/jsonld";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { PriceCompare } from "@/components/PriceCompare";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { DataHandling } from "@/components/DataHandling";

const SLUG = "ai-receptionist";

export function generateMetadata(): Metadata {
  const service = getService(SLUG);
  if (!service) return {};
  return {
    title: `${service.namn} — ${service.h1}`,
    description: service.intro,
    alternates: { canonical: `/tjanster/${SLUG}` },
    openGraph: {
      title: `${service.namn} · AI Receptionisterna`,
      description: service.intro,
      url: `${siteConfig.url}/tjanster/${SLUG}`,
    },
  };
}

export default function ServicePage() {
  const service = getService(SLUG);
  if (!service) notFound();

  const url = `${siteConfig.url}/tjanster/${SLUG}`;

  return (
    <>
      <JsonLd data={serviceLd({ name: service.namn, description: service.intro, url })} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Hem", url: siteConfig.url },
          { name: "Tjänster", url: `${siteConfig.url}/tjanster/${SLUG}` },
          { name: service.namn, url },
        ])}
      />

      {/* Hero */}
      <section className="container-page py-16 sm:py-20">
        <nav className="mb-6 text-sm text-faint" aria-label="Brödsmulor">
          <Link href="/" className="hover:text-green-deep">Hem</Link>
          <span className="px-2" aria-hidden>/</span>
          <span className="text-muted">{service.namn}</span>
        </nav>
        <div className="max-w-2xl">
          <span className="eyebrow mb-4">{service.namn}</span>
          <h1>{service.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/boka-demo" className="btn-primary text-base">Boka kostnadsfri demo</Link>
            <Link href="/priser" className="btn-ghost text-base">Se priser</Link>
          </div>
          <p className="mt-3 text-sm text-faint">{siteConfig.responsePromise}.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-page pb-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {service.benefits.map((b) => (
            <div key={b.title} className="card p-6">
              <h2 className="font-display text-xl">{b.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <FeatureGrid />
      <HowItWorks />
      <PriceCompare />

      {/* Internal links to branschsidor */}
      <section className="container-page py-12">
        <h2 className="text-center">För din bransch</h2>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {getHubs().map((hub) => (
            <Link key={hub.slug} href={`/bransch/${hub.slug}`} className="card p-5 transition-colors hover:bg-surface">
              <span className="font-display text-lg">{hub.namn}</span>
              <span className="mt-1 block text-sm text-green-soft-ink">Läs mer →</span>
            </Link>
          ))}
        </div>
      </section>

      <DataHandling />
      <FaqAccordion items={service.faq} />
      <FinalCta />
    </>
  );
}

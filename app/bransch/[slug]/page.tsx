import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { branscher, getBransch } from "@/content/branscher";
import { siteConfig } from "@/lib/env";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, serviceLd } from "@/lib/jsonld";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { HowItWorks } from "@/components/HowItWorks";
import { LeadForm } from "@/components/LeadForm";

export function generateStaticParams() {
  return branscher.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = getBransch(slug);
  if (!b) return {};
  return {
    title: b.h1,
    description: b.intro,
    alternates: { canonical: `/bransch/${b.slug}` },
    openGraph: {
      title: `${b.h1} · AI Receptionisterna`,
      description: b.intro,
      url: `${siteConfig.url}/bransch/${b.slug}`,
    },
  };
}

export default async function BranschPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = getBransch(slug);
  if (!b) notFound();

  const url = `${siteConfig.url}/bransch/${b.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Hem", url: siteConfig.url },
          { name: "Branscher", url: `${siteConfig.url}/bransch/${b.slug}` },
          { name: b.namn, url },
        ])}
      />
      <JsonLd data={serviceLd({ name: b.h1, description: b.intro, url })} />

      {/* Hero */}
      <section className="container-page py-16 sm:py-20">
        <nav className="mb-6 text-sm text-faint" aria-label="Brödsmulor">
          <Link href="/" className="hover:text-green-deep">Hem</Link>
          <span className="px-2" aria-hidden>/</span>
          <span className="text-muted">{b.namn}</span>
        </nav>
        <div className="max-w-2xl">
          <span className="eyebrow mb-4">{b.namn}</span>
          <h1>{b.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{b.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/boka-demo" className="btn-primary text-base">Boka kostnadsfri demo</Link>
            <Link href="/tjanster/ai-receptionist" className="btn-ghost text-base">Så fungerar tjänsten</Link>
          </div>
          <p className="mt-3 text-sm text-faint">{siteConfig.responsePromise}.</p>
        </div>
      </section>

      {/* Pains */}
      <section className="container-page pb-8">
        <h2 className="max-w-xl">Vad branschen brottas med</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {b.pains.map((pain) => (
            <div key={pain} className="card flex gap-3 p-5">
              <span className="mt-0.5 text-danger" aria-hidden>•</span>
              <p className="text-sm text-muted">{pain}</p>
            </div>
          ))}
        </div>
      </section>

      {b.status === "full" ? (
        <>
          <HowItWorks />
          <FaqAccordion items={b.faq} heading={`Vanliga frågor — ${b.namn}`} />
        </>
      ) : (
        // Stub: a real shell, no fabricated content. A genuine capture path
        // (bransch_page lead) so the page converts even before breadth fills it.
        <section className="container-page py-12">
          <div className="mx-auto max-w-2xl card p-7 text-center">
            <h2>Vill du veta hur det fungerar för {b.namn.toLowerCase()}?</h2>
            <p className="mt-3 text-muted">
              Vi går igenom just dina samtal i en kostnadsfri demo och visar hur
              receptionisten kan hantera dem. {siteConfig.responsePromise}.
            </p>
            <div className="mt-6 text-left">
              <LeadForm
                source="bransch_page"
                fields={["name", "email", "phone"]}
                requiredFields={["name", "email"]}
                submitLabel="Boka demo"
                successText="Tack! Vi hör av oss om en demo."
              />
            </div>
          </div>
        </section>
      )}

      {/* Cross-links to other branschsidor */}
      <section className="container-page py-12">
        <h2 className="text-center text-2xl">Fler branscher</h2>
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
          {branscher
            .filter((x) => x.slug !== b.slug)
            .map((x) => (
              <Link key={x.slug} href={`/bransch/${x.slug}`} className="btn-ghost text-sm">
                {x.namn}
              </Link>
            ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}

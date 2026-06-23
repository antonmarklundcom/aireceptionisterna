import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Guider — om AI, telefoni och kundbemötande",
  description:
    "Guider och artiklar om AI-receptionister, telefonhantering och att aldrig missa ett kundsamtal.",
  alternates: { canonical: "/guider" },
};

export default function GuiderPage() {
  const guides = getAllGuides();

  return (
    <>
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">Guider</span>
          <h1>Guider och kunskap</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Praktiska guider om telefonhantering, kundbemötande och hur AI kan
            avlasta din verksamhet.
          </p>
        </div>

        {guides.length === 0 ? (
          <div className="mx-auto mt-12 max-w-xl card p-8 text-center">
            <p className="text-muted">
              Vi publicerar våra första guider inom kort. Vill du veta hur
              receptionisten fungerar redan nu?
            </p>
            <Link href="/boka-demo" className="btn-primary mt-5 inline-flex">
              Boka kostnadsfri demo
            </Link>
          </div>
        ) : (
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map(({ frontmatter }) => (
              <Link
                key={frontmatter.slug}
                href={`/guider/${frontmatter.slug}`}
                className="card p-6 transition-colors hover:bg-surface"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-green-soft-ink">
                  {frontmatter.cluster}
                </span>
                <h2 className="mt-2 font-display text-xl">{frontmatter.title}</h2>
                <p className="mt-2 text-sm text-muted">{frontmatter.description}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <FinalCta />
    </>
  );
}

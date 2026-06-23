import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getGuide, getGuideSlugs } from "@/lib/guides";
import { siteConfig } from "@/lib/env";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { FinalCta } from "@/components/FinalCta";

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    alternates: { canonical: `/guider/${slug}` },
    openGraph: {
      type: "article",
      title: guide.frontmatter.title,
      description: guide.frontmatter.description,
      url: `${siteConfig.url}/guider/${slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const { frontmatter, content } = guide;
  const url = `${siteConfig.url}/guider/${slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Hem", url: siteConfig.url },
          { name: "Guider", url: `${siteConfig.url}/guider` },
          { name: frontmatter.title, url },
        ])}
      />
      <article className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <nav className="mb-6 text-sm text-faint" aria-label="Brödsmulor">
            <Link href="/guider" className="hover:text-green-deep">Guider</Link>
            <span className="px-2" aria-hidden>/</span>
            <span className="text-muted">{frontmatter.cluster}</span>
          </nav>
          <h1>{frontmatter.title}</h1>
          <p className="mt-3 text-sm text-faint">
            {frontmatter.author} · {frontmatter.date}
          </p>

          <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display">
            <MDXRemote source={content} />
          </div>

          {frontmatter.sources.length > 0 && (
            <div className="mt-10 border-t border-hairline pt-6">
              <h2 className="text-lg">Källor</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {frontmatter.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
      <FinalCta />
    </>
  );
}

import { siteConfig } from "@/lib/env";

/** Shared shell for legal pages. */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1>{title}</h1>
        <p className="mt-3 text-sm text-faint">Senast uppdaterad: {updated}</p>
        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-a:text-green-soft-ink">
          {children}
        </div>
        <p className="mt-10 border-t border-hairline pt-6 text-sm text-muted">
          {siteConfig.orgName} · Org.nr {siteConfig.orgNr}
          {siteConfig.fskatt && " · Innehar F-skattsedel"} · {siteConfig.ort}
        </p>
      </div>
    </section>
  );
}

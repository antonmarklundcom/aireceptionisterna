import Link from "next/link";
import { Icon } from "./icons";
import type { Bransch } from "@/content/schema";

/**
 * Rossy-style icon-grid of a hub's industry sub-pages. Each tile shows an
 * icon, the industry name and its number-free outcome line, linking to the
 * full industry page.
 */
export function BranschHubGrid({ children }: { children: Bransch[] }) {
  if (children.length === 0) return null;
  return (
    <section className="container-page pb-8">
      <h2 className="max-w-xl">Välj din bransch</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children.map((b) => (
          <Link
            key={b.slug}
            href={`/bransch/${b.slug}`}
            className="card flex items-start gap-4 p-5 transition-colors hover:bg-surface"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-soft-bg text-green-soft-ink">
              <Icon name={b.icon} />
            </span>
            <span>
              <span className="block font-display text-lg">{b.namn}</span>
              <span className="mt-1 block text-sm text-muted">{b.outcome}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

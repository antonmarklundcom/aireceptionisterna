import Link from "next/link";
import { LiveCallCard } from "./LiveCallCard";
import { siteConfig } from "@/lib/env";

/**
 * Home hero. Two-column on desktop (copy + live-call card), stacked on
 * mobile. Trust row uses only true risk-reversal claims (kostnadsfri demo,
 * GDPR, ingen bindningstid) — not the design's unverified "klar inom 24h".
 */
export function Hero() {
  return (
    <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
      <div className="fade-up">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-soft-bg px-3.5 py-1.5 text-sm font-semibold text-green-soft-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Svarar på svenska — dygnet runt
        </span>

        <h1 className="mt-6">Missa aldrig ett kundsamtal igen</h1>

        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
          Din AI-receptionist svarar i telefon, bokar möten och fångar varje
          kund — naturligt på svenska, dygnet runt. Utan sjukdagar, köer eller
          missade samtal.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/boka-demo" className="btn-primary text-base">
            Boka kostnadsfri demo
          </Link>
          <a href="#sa-fungerar-det" className="btn-ghost text-base">
            Se hur det fungerar
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-2">
          <span>✓ Kostnadsfri demo</span>
          <span>✓ GDPR-säkrad</span>
          <span>✓ Ingen bindningstid</span>
        </div>
        <p className="mt-3 text-sm text-faint">{siteConfig.responsePromise}.</p>
      </div>

      <div className="fade-up" style={{ animationDelay: "120ms" }}>
        <LiveCallCard />
      </div>
    </section>
  );
}

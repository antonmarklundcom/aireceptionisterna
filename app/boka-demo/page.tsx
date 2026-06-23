import type { Metadata } from "next";
import { BookingEmbed } from "@/components/BookingEmbed";
import { LiveCallCard } from "@/components/LiveCallCard";
import { CallbackForm } from "@/components/CallbackForm";
import { siteConfig, demoPhoneHref } from "@/lib/env";

export const metadata: Metadata = {
  title: "Boka demo — hör receptionisten live",
  description:
    "Boka en kostnadsfri demo och hör AI-receptionisten svara på svenska. Testa den direkt eller be den ringa upp dig.",
  alternates: { canonical: "/boka-demo" },
};

export default function BokaDemoPage() {
  const phoneHref = demoPhoneHref();

  return (
    <>
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">Boka demo</span>
          <h1>Hör din AI-receptionist live</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Kostnadsfri demo utan förpliktelser. Vi visar hur receptionisten
            hanterar just dina samtal. {siteConfig.responsePromise}.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          {/* Booking / request-a-time */}
          <BookingEmbed />

          {/* Voice AI demo + callback */}
          <div className="space-y-6">
            <LiveCallCard />

            {/* Test directly when a demo phone is configured */}
            {phoneHref && (
              <div className="card p-6 text-center">
                <h2 className="font-display text-xl">Testa direkt på telefon</h2>
                <p className="mt-2 text-sm text-muted">
                  Ring numret och prata med receptionisten precis som en kund
                  skulle göra.
                </p>
                <a href={phoneHref} className="btn-accent mt-4 inline-flex">
                  Ring {siteConfig.demoPhone}
                </a>
              </div>
            )}

            {/* Callback — gated behind NEXT_PUBLIC_CALLBACK_ENABLED */}
            {siteConfig.callbackEnabled && (
              <div className="card p-6">
                <h2 className="font-display text-xl">Be receptionisten ringa upp dig</h2>
                <p className="mt-2 text-sm text-muted">
                  Lämna namn och nummer så ringer receptionisten upp dig för en
                  kort demo.
                </p>
                <div className="mt-4">
                  <CallbackForm />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

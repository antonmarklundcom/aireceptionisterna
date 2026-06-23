"use client";

import Link from "next/link";
import { siteConfig, demoPhoneHref } from "@/lib/env";

/**
 * The hero call-card — also the Voice AI demo container. Three modes chosen
 * by env, NEVER-BLOCK (never a dead button):
 *   1) VOICEAI_WIDGET_URL set  -> embed in-browser widget ("Prata med ... nu")
 *   2) else DEMO_PHONE set     -> tel: "Ring och testa receptionisten"
 *   3) else                    -> illustrative card + "Boka demo ..."
 *
 * The transcript is clearly labelled as an example/illustration — not a real
 * named client (anti-fabrication).
 */
export function LiveCallCard() {
  const phoneHref = demoPhoneHref();
  const hasWidget = Boolean(siteConfig.voiceAiWidgetUrl);

  return (
    <div className="card overflow-hidden shadow-card">
      {/* Call header */}
      <div className="flex items-center justify-between border-b border-hairline-soft bg-surface px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-deep text-sm font-bold text-white">
            AR
          </span>
          <div>
            <div className="text-sm font-bold leading-tight">Inkommande samtal</div>
            <div className="text-xs text-faint">Exempel på ett samtal</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-green-soft-bg px-2.5 py-1 text-xs font-bold text-green-soft-ink">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-green" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
          </span>
          LIVE
        </div>
      </div>

      {/* Waveform motif */}
      <div className="flex items-end justify-center gap-1 px-5 pt-6" aria-hidden>
        {[0.5, 0.8, 0.4, 1, 0.6, 0.9, 0.5, 0.7, 0.45, 0.85, 0.55, 0.95].map((h, i) => (
          <span
            key={i}
            className="w-1.5 origin-bottom rounded-full bg-green/70 animate-bar"
            style={{ height: `${h * 36 + 8}px`, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>

      {/* Illustrative transcript (example, not a real client) */}
      <div className="space-y-3 px-5 py-6 text-sm">
        <Bubble who="Inringare">Hej, jag skulle vilja boka en tid nästa vecka.</Bubble>
        <Bubble who="Receptionisten" accent>
          Vad kul, det fixar vi! Vad passar bäst — förmiddag eller eftermiddag?
        </Bubble>
        <Bubble who="Inringare">Helst en förmiddag, gärna tisdag.</Bubble>
        <Bubble who="Receptionisten" accent>
          Tisdag kl. 09:30 är ledigt. Ska jag boka in det och skicka en
          SMS-bekräftelse?
        </Bubble>
      </div>

      {/* Booking confirmation chip (honest illustration of the outcome) */}
      <div className="mx-5 mb-5 flex items-center gap-3 rounded-xl border border-green/25 bg-green-soft-bg px-4 py-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green text-sm font-bold text-white" aria-hidden>
          ✓
        </span>
        <div>
          <div className="text-[13px] font-bold text-green-soft-ink">Möte bokat · tis 09:30</div>
          <div className="text-xs text-green-soft-ink/80">Bekräftelse skickad via SMS</div>
        </div>
      </div>

      {/* CTA — never a dead button */}
      <div className="border-t border-hairline-soft bg-surface px-5 py-4">
        {hasWidget ? (
          <a href={siteConfig.voiceAiWidgetUrl} className="btn-accent w-full" target="_blank" rel="noopener noreferrer">
            Prata med receptionisten nu
          </a>
        ) : phoneHref ? (
          <a href={phoneHref} className="btn-accent w-full">
            Ring och testa receptionisten
          </a>
        ) : (
          <Link href="/boka-demo" className="btn-accent w-full">
            Boka demo så hör du den live
          </Link>
        )}
        <p className="mt-2 text-center text-xs text-faint">
          Detta är en illustration av ett samtal. {siteConfig.responsePromise}.
        </p>
      </div>
    </div>
  );
}

function Bubble({
  who,
  accent,
  children,
}: {
  who: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={accent ? "flex flex-col items-end" : "flex flex-col items-start"}>
      <span className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-faint">{who}</span>
      <span
        className={
          accent
            ? "max-w-[85%] rounded-2xl rounded-tr-sm bg-green-soft-bg px-4 py-2 text-green-soft-ink"
            : "max-w-[85%] rounded-2xl rounded-tl-sm bg-surface px-4 py-2 text-ink"
        }
      >
        {children}
      </span>
    </div>
  );
}

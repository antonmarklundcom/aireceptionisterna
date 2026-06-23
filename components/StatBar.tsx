import { siteConfig } from "@/lib/env";

/**
 * Stat bar. Only honest stats: 24/7 (real), "Svarar inom sekunder" (real
 * behaviour), and the cost comparison framed as "bråkdel av kostnaden" — no
 * invented percentage. The traditional-receptionist range is labelled
 * ungefärligt.
 */
export function StatBar() {
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="container-page grid gap-6 py-10 sm:grid-cols-3">
        <Stat value="24/7" label="Svarar dygnet runt, året om" />
        <Stat value="Sekunder" label="Svarar inom sekunder — ingen kö" />
        <Stat value="Bråkdel" label="av kostnaden för en bemannad reception" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl text-green-deep sm:text-5xl">{value}</div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}

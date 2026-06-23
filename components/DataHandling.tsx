/**
 * "Så hanterar vi din data" — mandatory data-transparency block for an AI
 * service. Facts only. Storage location, models/subprocessors, GDPR-roller
 * and "vad som INTE sparas" use [KOMPLETTERA] placeholders that render
 * verbatim until the real facts are filled in. We do NOT claim "data lagras i
 * Sverige" unless it is true.
 */
export function DataHandling() {
  const rows: { label: string; value: string }[] = [
    {
      label: "Var data lagras",
      value: "[KOMPLETTERA: ange faktisk lagringsplats/region för samtalsdata]",
    },
    {
      label: "Modeller & underleverantörer",
      value:
        "[KOMPLETTERA: lista AI-modeller och personuppgiftsbiträden/subprocessors]",
    },
    {
      label: "GDPR-roller",
      value:
        "[KOMPLETTERA: vem är personuppgiftsansvarig respektive personuppgiftsbiträde]",
    },
    {
      label: "Vad som INTE sparas",
      value: "[KOMPLETTERA: ange vilka uppgifter som inte lagras]",
    },
    {
      label: "Lagringstid",
      value: "[KOMPLETTERA: hur länge sparas samtal och uppgifter]",
    },
  ];

  return (
    <section id="data" className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">Trygghet</span>
          <h2>Så hanterar vi din data</h2>
          <p className="mt-4 text-muted">
            Vi är öppna med hur uppgifter behandlas. Nedan fylls i med exakta
            uppgifter innan lansering — inga påståenden görs som inte är sanna.
          </p>
        </div>

        <dl className="mt-10 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline-soft bg-card">
          {rows.map((row) => (
            <div key={row.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-4 sm:px-6">
              <dt className="text-sm font-semibold text-ink">{row.label}</dt>
              <dd className="text-sm text-muted">{row.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-center text-xs text-faint">
          Fullständig information finns i vår{" "}
          <a href="/integritetspolicy" className="underline">integritetspolicy</a>.
        </p>
      </div>
    </section>
  );
}

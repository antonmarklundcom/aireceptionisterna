import { features } from "@/content/features";
import { Icon } from "./icons";
import { SectionHeading } from "./Section";

export function FeatureGrid() {
  return (
    <section id="funktioner" className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="Funktioner"
        title="Allt en reception gör — utan väntetid"
        intro="Receptionisten svarar, bokar och dokumenterar varje samtal så att du och ditt team kan fokusera på jobbet."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="card fade-up p-6"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-soft-bg text-green-soft-ink">
              <Icon name={f.icon} />
            </div>
            <h3 className="mt-4 font-display text-xl">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

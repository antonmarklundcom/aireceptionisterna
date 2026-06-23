import type { FaqItem } from "@/content/schema";
import { JsonLd } from "./JsonLd";
import { faqLd } from "@/lib/jsonld";

/** Native <details> accordion. Also emits FAQPage JSON-LD. */
export function FaqAccordion({
  items,
  heading = "Vanliga frågor",
  id = "vanliga-fragor",
  withJsonLd = true,
}: {
  items: FaqItem[];
  heading?: string;
  id?: string;
  withJsonLd?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <section id={id} className="container-page py-16 sm:py-20">
      {withJsonLd && <JsonLd data={faqLd(items)} />}
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center">{heading}</h2>
        <div className="mt-8 divide-y divide-hairline rounded-2xl border border-hairline-soft bg-card">
          {items.map((item, i) => (
            <details key={i} className="group px-5 py-4 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                {item.q}
                <span className="text-green transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

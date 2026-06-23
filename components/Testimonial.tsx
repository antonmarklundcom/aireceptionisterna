/**
 * Testimonial slot. Renders ONLY when a real, consented review is supplied.
 * Default export of `testimonials` is empty — so nothing implying reviews
 * exist is shown (no stars, no fabricated quotes). When a consented review
 * arrives, add it to the array in one content edit and it appears.
 */

export type Review = {
  quote: string;
  author: string;
  role: string;
  consented: true; // type-level reminder: only add consented reviews
};

// Intentionally empty until a real, consented review exists.
export const testimonials: Review[] = [];

export function Testimonial() {
  if (testimonials.length === 0) return null;
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        {testimonials.map((t, i) => (
          <figure key={i} className="card p-8 text-center">
            <blockquote className="font-display text-2xl leading-snug">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted">
              <span className="font-semibold text-ink">{t.author}</span> · {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

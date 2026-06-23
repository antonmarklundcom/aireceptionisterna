import Link from "next/link";
import { steps } from "@/content/steps";
import { siteConfig } from "@/lib/env";

/**
 * "Så fungerar det" — the single dark section (deep green). Part of the trust
 * stack: each step shows leveranstid + vad som ingår (process transparency).
 */
export function HowItWorks() {
  return (
    <section id="sa-fungerar-det" className="bg-green-deep text-on-dark">
      <div className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-on-dark-muted">
            Så fungerar det
          </span>
          <h2 className="mt-4 text-on-dark">Från demo till live på ett par veckor</h2>
          <p className="mt-4 text-on-dark-muted">
            Transparent process med fast pris innan start. Du ser och godkänner
            allt innan receptionisten går live.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green font-display text-lg text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 font-display text-xl text-on-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{step.body}</p>
              <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-on-dark-faint">Leveranstid</dt>
                  <dd className="text-on-dark-muted">{step.leveranstid}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-on-dark-faint">Ingår</dt>
                  <dd className="text-on-dark-muted">{step.ingar}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link href="/boka-demo" className="btn-accent">
            Boka kostnadsfri demo
          </Link>
          <p className="mt-3 text-sm text-on-dark-muted">{siteConfig.responsePromise}.</p>
        </div>
      </div>
    </section>
  );
}

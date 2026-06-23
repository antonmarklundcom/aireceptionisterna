import Link from "next/link";
import { siteConfig, demoPhoneHref } from "@/lib/env";

/** Dark final-CTA card with a radial green glow (matches the design). */
export function FinalCta({
  title = "Låt ingen kund vänta i telefon",
  body = "Boka en kostnadsfri demo och hör din egen AI-receptionist svara på svenska — utan bindningstid.",
}: {
  title?: string;
  body?: string;
}) {
  const phoneHref = demoPhoneHref();
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[28px] bg-green-deep px-6 py-16 text-center sm:px-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 120% at 80% 0%, rgba(31,169,113,0.22), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-on-dark">{title}</h2>
          <p className="mx-auto mt-4 max-w-md text-on-dark-muted">{body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/boka-demo" className="btn-accent text-base">
              Boka kostnadsfri demo
            </Link>
            {phoneHref && (
              <a
                href={phoneHref}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-on-dark transition-colors hover:bg-white/15"
              >
                Ring {siteConfig.demoPhone}
              </a>
            )}
          </div>
          <p className="mt-4 text-sm text-on-dark-faint">{siteConfig.responsePromise}.</p>
        </div>
      </div>
    </section>
  );
}

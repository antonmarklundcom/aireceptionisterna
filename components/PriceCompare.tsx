import Link from "next/link";
import { siteConfig, formatSek } from "@/lib/env";
import { pricing } from "@/content/pricing";

/**
 * Transparent pricing. Always "kr/mån exkl. moms". When campaign active:
 * ordinarie struck-through + kampanj price + "Just nu"-badge. When false:
 * ordinarie only. Comparison column = illustrative market range (ungefärligt).
 */
export function PriceCompare() {
  const campaign = siteConfig.campaignActive;
  const shownPrice = campaign ? siteConfig.priceKampanj : siteConfig.priceOrdinarie;

  return (
    <section id="priser" className="container-page py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow mb-4">Priser</span>
        <h2>Ett fast pris — en bråkdel av kostnaden</h2>
        <p className="mt-4 text-muted">
          Inga dolda avgifter, ingen bindningstid. Alla priser anges exkl. moms
          (B2B).
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
        {/* AI receptionist card (highlighted) */}
        <div className="card relative overflow-hidden border-green/30 p-7 shadow-card">
          {campaign && (
            <span className="absolute right-5 top-5 rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
              Just nu
            </span>
          )}
          <h3 className="font-display text-2xl">AI Receptionisterna</h3>
          <div className="mt-4 flex items-end gap-2">
            {campaign && (
              <span className="text-xl text-faint line-through">
                {formatSek(siteConfig.priceOrdinarie)} kr
              </span>
            )}
            <span className="font-display text-5xl text-green-deep">
              {formatSek(shownPrice)} kr
            </span>
            <span className="pb-1 text-sm text-muted">/mån exkl. moms</span>
          </div>
          {campaign && (
            <p className="mt-1 text-sm font-medium text-green-soft-ink">
              Kampanjpris. Ordinarie {formatSek(siteConfig.priceOrdinarie)} kr/mån exkl. moms.
            </p>
          )}

          <ul className="mt-6 space-y-3 text-sm">
            {pricing.included.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-green" aria-hidden>✓</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>

          {siteConfig.guaranteeLine && (
            <p className="mt-5 rounded-lg bg-green-soft-bg px-4 py-3 text-sm text-green-soft-ink">
              {siteConfig.guaranteeLine}
            </p>
          )}

          <Link href="/boka-demo" className="btn-accent mt-6 w-full">
            Boka kostnadsfri demo
          </Link>
        </div>

        {/* Traditional comparison */}
        <div className="card border-hairline-soft bg-surface p-7">
          <h3 className="font-display text-2xl text-muted">Traditionell reception</h3>
          <div className="mt-4 flex items-end gap-2">
            <span className="font-display text-4xl text-muted-2">
              {formatSek(pricing.traditionalRangeLow)}–{formatSek(pricing.traditionalRangeHigh)} kr
            </span>
            <span className="pb-1 text-sm text-faint">/mån</span>
          </div>
          <p className="mt-1 text-sm text-faint">
            Ungefärlig marknadsnivå för en heltidsanställd reception (lön + sociala
            avgifter). Endast som jämförelse.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-muted-2">
            <li className="flex items-start gap-2"><span className="mt-0.5" aria-hidden>•</span> Svarar under kontorstid</li>
            <li className="flex items-start gap-2"><span className="mt-0.5" aria-hidden>•</span> Ledighet, sjukfrånvaro och raster</li>
            <li className="flex items-start gap-2"><span className="mt-0.5" aria-hidden>•</span> Ett samtal i taget</li>
            <li className="flex items-start gap-2"><span className="mt-0.5" aria-hidden>•</span> Rekrytering och upplärning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

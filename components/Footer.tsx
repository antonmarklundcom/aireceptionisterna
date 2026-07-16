import Link from "next/link";
import { branscher, getHubs } from "@/content/branscher";
import { siteConfig } from "@/lib/env";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-green" />
            AI Receptionisterna
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            AI-receptionist som svarar på svenska dygnet runt, bokar möten och
            sammanfattar samtal. För hela Sverige.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Tjänsten</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/tjanster/ai-receptionist" className="hover:text-green-deep">AI-receptionist</Link></li>
            <li><Link href="/priser" className="hover:text-green-deep">Priser</Link></li>
            <li><Link href="/boka-demo" className="hover:text-green-deep">Boka demo</Link></li>
            <li><Link href="/guider" className="hover:text-green-deep">Guider</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Branscher</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {getHubs().map((hub) => (
              <li key={hub.slug}>
                <Link href={`/bransch/${hub.slug}`} className="hover:text-green-deep">
                  {hub.namn}
                </Link>
              </li>
            ))}
            {branscher
              .filter((b) => b.kategori === "ovrigt")
              .map((b) => (
                <li key={b.slug}>
                  <Link href={`/bransch/${b.slug}`} className="hover:text-green-deep">
                    {b.namn}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Företaget</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/om-oss" className="hover:text-green-deep">Om oss</Link></li>
            <li><Link href="/kontakt" className="hover:text-green-deep">Kontakt</Link></li>
            <li><Link href="/integritetspolicy" className="hover:text-green-deep">Integritetspolicy</Link></li>
            <li><Link href="/cookiepolicy" className="hover:text-green-deep">Cookiepolicy</Link></li>
            <li><Link href="/allmanna-villkor" className="hover:text-green-deep">Allmänna villkor</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteConfig.orgName} · Org.nr {siteConfig.orgNr}
            {siteConfig.fskatt && " · Innehar F-skattsedel"}
          </p>
          <p>© {new Date().getFullYear()} {siteConfig.orgName}. Alla priser anges exkl. moms.</p>
        </div>
      </div>
    </footer>
  );
}

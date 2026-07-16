"use client";

import Link from "next/link";
import { useState } from "react";
import { getHubs, getChildren } from "@/content/branscher";
import { siteConfig } from "@/lib/env";

/** Site navigation. Branscher = mega-menu grouped by hub (Bygg & hantverk /
 *  Fordon / Kliniker & salonger), each listing its industry sub-pages.
 *  "Logga in" hidden when NEXT_PUBLIC_LOGIN_URL unset. ASCII slugs throughout. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [branschOpen, setBranschOpen] = useState(false);
  const [mobileBranschOpen, setMobileBranschOpen] = useState(false);
  const hubs = getHubs();

  const links = (
    <>
      <a href="/#funktioner" className="hover:text-green-deep">
        Funktioner
      </a>
      <a href="/#sa-fungerar-det" className="hover:text-green-deep">
        Så fungerar det
      </a>
      <div
        className="relative"
        onMouseEnter={() => setBranschOpen(true)}
        onMouseLeave={() => setBranschOpen(false)}
      >
        <button
          type="button"
          className="flex items-center gap-1 hover:text-green-deep"
          aria-expanded={branschOpen}
          onClick={() => setBranschOpen((v) => !v)}
        >
          Branscher
          <span aria-hidden>▾</span>
        </button>
        {branschOpen && (
          <div className="absolute left-0 top-full z-50 mt-2 grid w-[560px] grid-cols-3 gap-1 rounded-xl border border-hairline bg-card p-4 shadow-card-sm">
            {hubs.map((hub) => (
              <div key={hub.slug}>
                <Link
                  href={`/bransch/${hub.slug}`}
                  className="block rounded-lg px-2 py-1.5 text-sm font-semibold text-ink hover:text-green-deep"
                >
                  {hub.navLabel}
                </Link>
                <div className="mt-1 flex flex-col">
                  {getChildren(hub.kategori).map((child) => (
                    <Link
                      key={child.slug}
                      href={`/bransch/${child.slug}`}
                      className="rounded-lg px-2 py-1.5 text-sm text-muted hover:bg-surface hover:text-green-deep"
                    >
                      {child.navLabel}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Link href="/priser" className="hover:text-green-deep">
        Priser
      </Link>
      <a href="/#vanliga-fragor" className="hover:text-green-deep">
        Vanliga frågor
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg/85 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-[17px] font-bold tracking-display">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-green-deep">
            <span className="h-2.5 w-2.5 animate-pulseDot rounded-full bg-green" />
          </span>
          AI Receptionisterna
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
          {links}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {siteConfig.loginUrl && (
            <a
              href={siteConfig.loginUrl}
              className="text-sm font-medium text-muted hover:text-green-deep"
            >
              Logga in
            </a>
          )}
          <Link href="/boka-demo" className="btn-primary">
            Boka demo
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Öppna meny"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-bg lg:hidden">
          <div className="container-page flex flex-col gap-1 py-5 text-base font-medium text-muted">
            <a href="/#funktioner" className="py-2 hover:text-green-deep" onClick={() => setOpen(false)}>
              Funktioner
            </a>
            <a href="/#sa-fungerar-det" className="py-2 hover:text-green-deep" onClick={() => setOpen(false)}>
              Så fungerar det
            </a>

            <button
              type="button"
              className="flex items-center justify-between py-2 text-left hover:text-green-deep"
              aria-expanded={mobileBranschOpen}
              onClick={() => setMobileBranschOpen((v) => !v)}
            >
              Branscher
              <span aria-hidden>{mobileBranschOpen ? "▴" : "▾"}</span>
            </button>
            {mobileBranschOpen && (
              <div className="flex flex-col gap-4 border-l border-hairline pb-2 pl-4">
                {hubs.map((hub) => (
                  <div key={hub.slug}>
                    <Link
                      href={`/bransch/${hub.slug}`}
                      className="block py-1 text-sm font-semibold text-ink"
                      onClick={() => setOpen(false)}
                    >
                      {hub.navLabel}
                    </Link>
                    <div className="flex flex-col">
                      {getChildren(hub.kategori).map((child) => (
                        <Link
                          key={child.slug}
                          href={`/bransch/${child.slug}`}
                          className="py-1 text-sm text-muted"
                          onClick={() => setOpen(false)}
                        >
                          {child.navLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link href="/priser" className="py-2 hover:text-green-deep" onClick={() => setOpen(false)}>
              Priser
            </Link>
            <a href="/#vanliga-fragor" className="py-2 hover:text-green-deep" onClick={() => setOpen(false)}>
              Vanliga frågor
            </a>

            <div className="flex flex-col gap-3 pt-3">
              {siteConfig.loginUrl && (
                <a href={siteConfig.loginUrl} className="btn-ghost">
                  Logga in
                </a>
              )}
              <Link href="/boka-demo" className="btn-primary" onClick={() => setOpen(false)}>
                Boka demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

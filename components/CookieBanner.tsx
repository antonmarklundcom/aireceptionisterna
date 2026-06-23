"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Granular GDPR cookie banner: Nödvändiga (always on) / Statistik /
 * Marknadsföring. Non-essential categories are OFF until the user consents.
 * Choice + timestamp stored in localStorage. No non-essential scripts are
 * loaded here — this records consent that other scripts must check before
 * firing.
 */

type Consent = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
  timestamp: string;
};

const KEY = "air_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* storage blocked — show banner */
      setVisible(true);
    }
  }, []);

  function save(consent: Omit<Consent, "necessary" | "timestamp">) {
    const payload: Consent = {
      necessary: true,
      ...consent,
      timestamp: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(payload));
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 pb-safe sm:px-6">
      <div className="container-page card border-hairline p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-lg">Vi värnar om din integritet</h2>
            <p className="mt-1 text-sm text-muted">
              Vi använder nödvändiga cookies för att sidan ska fungera. Med ditt
              samtycke använder vi även cookies för statistik och marknadsföring.
              Läs mer i vår{" "}
              <Link href="/cookiepolicy" className="underline">cookiepolicy</Link>.
            </p>

            {details && (
              <div className="mt-4 space-y-2 text-sm">
                <label className="flex items-center justify-between gap-4 rounded-lg bg-surface px-3 py-2">
                  <span>Nödvändiga <span className="text-faint">(krävs)</span></span>
                  <input type="checkbox" checked disabled className="h-5 w-5 accent-green" />
                </label>
                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-lg bg-surface px-3 py-2">
                  <span>Statistik</span>
                  <input type="checkbox" checked={statistics} onChange={(e) => setStatistics(e.target.checked)} className="h-5 w-5 accent-green" />
                </label>
                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-lg bg-surface px-3 py-2">
                  <span>Marknadsföring</span>
                  <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="h-5 w-5 accent-green" />
                </label>
              </div>
            )}
          </div>

          <div className="flex shrink-0 flex-wrap gap-2">
            <button type="button" onClick={() => save({ statistics: false, marketing: false })} className="btn-ghost">
              Endast nödvändiga
            </button>
            {details ? (
              <button type="button" onClick={() => save({ statistics, marketing })} className="btn-primary">
                Spara val
              </button>
            ) : (
              <button type="button" onClick={() => setDetails(true)} className="btn-ghost">
                Anpassa
              </button>
            )}
            <button type="button" onClick={() => save({ statistics: true, marketing: true })} className="btn-accent">
              Godkänn alla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ConsentCheckbox } from "./ConsentCheckbox";
import { submitLead } from "@/lib/utm";
import { siteConfig } from "@/lib/env";

/**
 * "Be receptionisten ringa upp dig" — namn + telefonnummer + consent.
 * Posts source: demo_callback so a GHL workflow can place an outbound Voice
 * AI call. Gated behind NEXT_PUBLIC_CALLBACK_ENABLED by the caller.
 */
export function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "fallback">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setState("sending");
    const ok = await submitLead({
      source: "demo_callback",
      consent: true,
      name: name || undefined,
      phone: phone || undefined,
    });
    setState(ok ? "done" : "fallback");
  }

  if (state === "done") {
    return (
      <div className="rounded-xl bg-green-soft-bg p-5 text-center text-green-soft-ink">
        <p className="font-semibold">Tack! Receptionisten ringer upp dig.</p>
        <p className="mt-1 text-sm">{siteConfig.responsePromise}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          aria-label="Namn"
          placeholder="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-xl border border-hairline bg-card px-4 py-3 text-sm focus:border-green"
        />
        <input
          aria-label="Telefonnummer"
          placeholder="Telefonnummer"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full rounded-xl border border-hairline bg-card px-4 py-3 text-sm focus:border-green"
        />
      </div>
      <ConsentCheckbox checked={consent} onChange={setConsent} id="consent-callback" />
      <button type="submit" disabled={!consent || state === "sending"} className="btn-accent w-full disabled:opacity-50">
        {state === "sending" ? "Skickar…" : "Be receptionisten ringa upp"}
      </button>
      {state === "fallback" && (
        <p className="text-sm text-muted">
          Det gick inte just nu — ring oss eller mejla {siteConfig.contactEmail}.
        </p>
      )}
    </form>
  );
}

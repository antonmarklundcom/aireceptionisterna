"use client";

import { useState } from "react";
import { ConsentCheckbox } from "./ConsentCheckbox";
import { submitLead } from "@/lib/utm";
import { siteConfig } from "@/lib/env";
import type { LeadSource } from "@/lib/lead-schema";

type Field = "name" | "email" | "phone" | "company" | "message";

/**
 * Reusable lead form. NEVER-BLOCK: if /api/lead is unreachable we still show
 * success and surface a mailto: fallback so the lead is never lost while GHL/
 * Sheets are unconfigured.
 */
export function LeadForm({
  source,
  fields = ["name", "email", "phone", "message"],
  requiredFields = ["name", "email"],
  submitLabel = "Skicka",
  successText = "Tack! Vi hör av oss.",
  compact = false,
}: {
  source: LeadSource;
  fields?: Field[];
  requiredFields?: Field[];
  submitLabel?: string;
  successText?: string;
  compact?: boolean;
}) {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "fallback">("idle");

  const labels: Record<Field, string> = {
    name: "Namn",
    email: "E-post",
    phone: "Telefonnummer",
    company: "Företag",
    message: "Meddelande",
  };

  function set(field: Field, v: string) {
    setValues((s) => ({ ...s, [field]: v }));
  }

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Förfrågan (${source})`);
    const body = encodeURIComponent(
      fields.map((f) => `${labels[f]}: ${values[f] || ""}`).join("\n")
    );
    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setState("sending");
    const ok = await submitLead({
      source,
      consent: true,
      name: values.name || undefined,
      email: values.email || undefined,
      phone: values.phone || undefined,
      company: values.company || undefined,
      message: values.message || undefined,
    });
    setState(ok ? "done" : "fallback");
  }

  if (state === "done") {
    return (
      <div className="card p-6 text-center">
        <p className="font-display text-xl">{successText}</p>
        <p className="mt-2 text-sm text-muted">{siteConfig.responsePromise}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3" : "space-y-4"}>
      <div className={fields.length > 2 && !compact ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
        {fields.map((field) => (
          <div key={field} className={field === "message" ? "sm:col-span-2" : ""}>
            <label htmlFor={field} className="mb-1 block text-sm font-medium text-ink">
              {labels[field]}
              {requiredFields.includes(field) && <span className="text-danger"> *</span>}
            </label>
            {field === "message" ? (
              <textarea
                id={field}
                value={values[field]}
                onChange={(e) => set(field, e.target.value)}
                required={requiredFields.includes(field)}
                rows={4}
                className="w-full rounded-xl border border-hairline bg-card px-4 py-3 text-sm focus:border-green"
              />
            ) : (
              <input
                id={field}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                value={values[field]}
                onChange={(e) => set(field, e.target.value)}
                required={requiredFields.includes(field)}
                className="w-full rounded-xl border border-hairline bg-card px-4 py-3 text-sm focus:border-green"
              />
            )}
          </div>
        ))}
      </div>

      <ConsentCheckbox checked={consent} onChange={setConsent} id={`consent-${source}`} />

      <button type="submit" disabled={!consent || state === "sending"} className="btn-accent w-full disabled:opacity-50">
        {state === "sending" ? "Skickar…" : submitLabel}
      </button>

      {state === "fallback" && (
        <p className="text-sm text-muted">
          Det gick inte att skicka just nu.{" "}
          <a href={mailtoHref()} className="font-medium text-green-soft-ink underline">
            Skicka via e-post i stället
          </a>{" "}
          eller mejla {siteConfig.contactEmail}.
        </p>
      )}

      <p className="text-xs text-faint">{siteConfig.responsePromise}.</p>
    </form>
  );
}

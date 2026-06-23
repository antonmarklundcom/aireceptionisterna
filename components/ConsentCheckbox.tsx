"use client";

import Link from "next/link";

/** GDPR consent checkbox. Unticked by default, links to integritetspolicy.
 *  Required on every form. */
export function ConsentCheckbox({
  checked,
  onChange,
  id = "consent",
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  id?: string;
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm text-muted">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-5 w-5 shrink-0 rounded border-hairline accent-green"
        required
      />
      <span>
        Jag godkänner att mina uppgifter behandlas enligt{" "}
        <Link href="/integritetspolicy" className="font-medium text-green-soft-ink underline">
          integritetspolicyn
        </Link>
        .
      </span>
    </label>
  );
}

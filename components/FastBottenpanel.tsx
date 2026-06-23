"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, demoPhoneHref } from "@/lib/env";

/**
 * Mobile-only fixed bottom bar. Primary CTA (green accent) "Boka demo".
 * Secondary icon = tel: if a demo phone is set, else links to /kontakt.
 * Respects safe-area-inset-bottom. Hidden on /boka-demo to avoid duplication.
 */
export function FastBottenpanel() {
  const pathname = usePathname();
  const phoneHref = demoPhoneHref();

  if (pathname === "/boka-demo") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-hairline bg-bg/95 px-4 py-3 pb-safe backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <Link href="/boka-demo" className="btn-accent flex-1">
          Boka demo
        </Link>
        {phoneHref ? (
          <a href={phoneHref} aria-label="Ring oss" className="btn-ghost px-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
            </svg>
          </a>
        ) : (
          <Link href="/kontakt" aria-label="Kontakta oss" className="btn-ghost px-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
              <path d="m4 6 8 6 8-6" />
            </svg>
          </Link>
        )}
      </div>
      <p className="mt-1 text-center text-[11px] text-faint">{siteConfig.responsePromise}</p>
    </div>
  );
}

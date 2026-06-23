/**
 * UTM capture + leave-page-safe lead submission.
 *
 * On landing we read UTM params into sessionStorage so they survive
 * client-side navigation. Every lead payload then carries them as hidden
 * fields. Submission uses sendBeacon (survives navigation/unload) with a
 * fetch fallback for environments that lack it.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

const STORAGE_KEY = "air_utm";

export type UtmData = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Read UTM params from the current URL and persist them (first-touch wins). */
export function captureUtm(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const existing = readUtm();
    const next: UtmData = { ...existing };
    let changed = false;
    for (const key of UTM_KEYS) {
      const val = params.get(key);
      if (val && !next[key]) {
        next[key] = val;
        changed = true;
      }
    }
    if (changed) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  } catch {
    /* sessionStorage may be unavailable; never block. */
  }
}

export function readUtm(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmData) : {};
  } catch {
    return {};
  }
}

/**
 * Submit a lead payload in a leave-page-safe way. Returns true if the
 * request was handed off (beacon queued or fetch resolved ok). Callers
 * should treat the UI as success regardless and show the e-post fallback
 * only if this returns false.
 */
export async function submitLead(
  payload: Record<string, unknown>
): Promise<boolean> {
  const body = JSON.stringify({
    ...payload,
    ...readUtm(),
    page: typeof window !== "undefined" ? window.location.pathname : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
  });

  // Prefer sendBeacon so the request survives an immediate navigation.
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    try {
      const blob = new Blob([body], { type: "application/json" });
      const queued = navigator.sendBeacon("/api/lead", blob);
      if (queued) return true;
    } catch {
      /* fall through to fetch */
    }
  }

  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
    return res.ok;
  } catch {
    return false;
  }
}

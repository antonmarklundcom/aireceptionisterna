"use client";

import { useEffect } from "react";
import { captureUtm } from "@/lib/utm";

/** Captures UTM params on first load into sessionStorage. Renders nothing. */
export function UtmCapture() {
  useEffect(() => {
    captureUtm();
  }, []);
  return null;
}

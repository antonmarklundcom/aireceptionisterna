"use client";

import { siteConfig } from "@/lib/env";
import { LeadForm } from "./LeadForm";

/**
 * Booking embed. When NEXT_PUBLIC_CALENDAR_EMBED_URL is set we render the
 * calendar iframe (GHL/Calendly). When unset (current state) we never show a
 * blank slot — instead a styled "Boka via e-post" request-a-time form posting
 * source: booking_request, with the response promise underneath.
 */
export function BookingEmbed() {
  if (siteConfig.calendarEmbedUrl) {
    return (
      <div className="card overflow-hidden">
        <iframe
          src={siteConfig.calendarEmbedUrl}
          title="Boka demo"
          className="h-[720px] w-full border-0"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <h3 className="font-display text-2xl">Boka en tid för demo</h3>
      <p className="mt-2 text-sm text-muted">
        Skriv kort vad du vill och vilka tider som passar, så återkommer vi med
        ett förslag. {siteConfig.responsePromise}.
      </p>
      <div className="mt-5">
        <LeadForm
          source="booking_request"
          fields={["name", "email", "phone", "message"]}
          requiredFields={["name", "email"]}
          submitLabel="Skicka förfrågan"
          successText="Tack! Vi föreslår en tid."
        />
      </div>
    </div>
  );
}

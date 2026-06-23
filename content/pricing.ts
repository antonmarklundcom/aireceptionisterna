/** Pricing facts. Values come from env (siteConfig); this module holds the
 *  copy + the illustrative market comparison range. */

export const pricing = {
  // Illustrative market range for a traditional receptionist — labelled
  // ungefärligt, NOT a fabricated exact figure.
  traditionalRangeLow: 30000,
  traditionalRangeHigh: 40000,
  included: [
    "AI-receptionist som svarar dygnet runt",
    "Naturlig svenska, tonläge du godkänner",
    "Mötesbokning i din kalender",
    "Sammanfattning efter varje samtal",
    "SMS-bekräftelse till kunden",
    "Vidarekoppling enligt dina regler",
    "Uppsättning och löpande support",
    "Ingen bindningstid",
  ],
} as const;

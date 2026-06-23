import { z } from "zod";
import { faqItemSchema, type FaqItem } from "./schema";

/** Tjänstesidor. The primary one is content-complete. H1 = primary keyword
 *  framed as an outcome. */
const serviceSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  namn: z.string(),
  h1: z.string(),
  intro: z.string(),
  // outcome-led benefit blocks
  benefits: z.array(z.object({ title: z.string(), body: z.string() })),
  faq: z.array(faqItemSchema),
});

export type Service = z.infer<typeof serviceSchema>;

export const services: Service[] = z.array(serviceSchema).parse([
  {
    slug: "ai-receptionist",
    namn: "AI-receptionist",
    h1: "Missa aldrig ett kundsamtal igen",
    intro:
      "En AI-receptionist som svarar på naturlig svenska dygnet runt, bokar möten och sammanfattar varje samtal — för en bråkdel av kostnaden för en bemannad reception.",
    benefits: [
      {
        title: "Varje samtal besvaras",
        body: "Kvällar, helger, lunch och när linjen är upptagen. Inga missade samtal betyder inga missade affärer.",
      },
      {
        title: "Bokningar som sköter sig själva",
        body: "Receptionisten föreslår tider och bokar direkt i din kalender medan kunden är kvar på linjen.",
      },
      {
        title: "Du tappar aldrig tråden",
        body: "Efter varje samtal får du en sammanfattning med namn, ärende och nästa steg — plus SMS-bekräftelse till kunden.",
      },
      {
        title: "Skalar utan att anställa",
        body: "Hanterar flera samtal samtidigt utan kö. Du betalar ett fast månadspris utan bindningstid.",
      },
    ],
    faq: [
      {
        q: "Kan receptionisten anpassas efter min verksamhet?",
        a: "Ja. Vi konfigurerar röst, tonläge, svar, bokningsregler och vidarekoppling utifrån just din verksamhet, och du godkänner allt innan vi går live.",
      },
      {
        q: "Hur lång tid tar det att komma igång?",
        a: "Oftast ett par veckor från demo till live. Du får ett fast pris innan vi börjar bygga.",
      },
      {
        q: "Vad händer om receptionisten inte förstår kunden?",
        a: "Den ber kunden förtydliga, och kan annars ta ett meddelande eller koppla vidare enligt de regler du satt upp. Du får alltid en sammanfattning av samtalet.",
      },
      {
        q: "Fungerar det med mitt befintliga telefonnummer?",
        a: "Vi går igenom din nuvarande telefonilösning i demon och visar hur samtalen kopplas till receptionisten. [KOMPLETTERA: bekräfta exakta tekniska förutsättningar].",
      },
    ],
  },
]);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

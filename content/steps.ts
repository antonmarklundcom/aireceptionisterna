import { stepSchema, type Step } from "./schema";
import { z } from "zod";

/** "Så fungerar det" — process transparency is part of the trust stack
 *  (läge utan case). Each step states leveranstid + vad som ingår. */
export const steps: Step[] = z.array(stepSchema).parse([
  {
    title: "Kostnadsfri demo",
    body: "Vi går igenom hur dina samtal ser ut idag och vad receptionisten ska kunna hantera. Du hör den live innan du bestämmer något.",
    leveranstid: "Samma vecka",
    ingar: "Genomgång + live-demo. Inget bindande.",
  },
  {
    title: "Vi bygger din receptionist",
    body: "Vi konfigurerar röst, svar, bokningsregler och vidarekoppling utifrån din verksamhet. Du godkänner manus och tider innan vi går live.",
    leveranstid: "Ca 1–2 veckor",
    ingar: "Uppsättning, manus, kalenderkoppling. Fast pris innan start.",
  },
  {
    title: "Vi testar tillsammans",
    body: "Du ringer in och provkör receptionisten. Vi justerar tonläge och svar tills det låter som din verksamhet.",
    leveranstid: "Innan lansering",
    ingar: "Testsamtal + justeringar tills du är nöjd.",
  },
  {
    title: "Live — och vi följer upp",
    body: "Receptionisten börjar svara på riktigt. Du får sammanfattningar och vi stämmer av att allt fungerar i vardagen.",
    leveranstid: "Löpande",
    ingar: "Drift, sammanfattningar och support. Ingen bindningstid.",
  },
]);

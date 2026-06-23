import { featureSchema, type Feature } from "./schema";
import { z } from "zod";

/** Core capabilities of the AI receptionist. Facts only — no invented
 *  metrics. Each maps to a phone-niche motif icon. */
export const features: Feature[] = z.array(featureSchema).parse([
  {
    icon: "phone",
    title: "Svarar varje samtal",
    body: "Receptionisten tar samtalet på naturlig svenska dygnet runt — även kvällar, helger och när linjen är upptagen. Ingen kund möts av en upptagetton.",
  },
  {
    icon: "calendar",
    title: "Bokar möten direkt",
    body: "Den hör vad kunden vill, föreslår tider och lägger in bokningen i din kalender medan samtalet pågår.",
  },
  {
    icon: "summary",
    title: "Sammanfattar samtalet",
    body: "Efter varje samtal får du en kort sammanfattning med namn, ärende och vad som bestämdes — så inget faller mellan stolarna.",
  },
  {
    icon: "sms",
    title: "Skickar SMS-bekräftelse",
    body: "Kunden får en bekräftelse via SMS direkt efter samtalet. Färre missade möten och färre uppföljningssamtal för dig.",
  },
  {
    icon: "transfer",
    title: "Kopplar vidare när det behövs",
    body: "Brådskande eller känsliga ärenden kan kopplas vidare eller flaggas för uppringning enligt de regler du bestämmer.",
  },
  {
    icon: "clock",
    title: "Igång dygnet runt",
    body: "Ingen schemaläggning, ingen sjukfrånvaro. Receptionisten svarar på sekunder, varje dag, året om.",
  },
]);

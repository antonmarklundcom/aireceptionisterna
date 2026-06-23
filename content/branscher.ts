import { branschSchema, type Bransch } from "./schema";
import { z } from "zod";

/**
 * Branschsidor. ASCII slugs only. One is content-complete (kliniker), the
 * rest are real shells (status: "stub") wired into nav + sitemap; the breadth
 * spec fills their pains/faq. No fabricated cases — caseRef is null until a
 * real consented case exists.
 */
export const branscher: Bransch[] = z.array(branschSchema).parse([
  {
    slug: "kliniker",
    namn: "Kliniker & mottagningar",
    navLabel: "Kliniker",
    h1: "AI-receptionist för kliniker och mottagningar",
    intro:
      "Tandvård, fysioterapi, privatläkare och estetik — receptionisten svarar när telefonen går varm, bokar tider och låter personalen fokusera på patienten i rummet.",
    pains: [
      "Telefonen ringer mitt i en behandling och patienten i stolen får vänta.",
      "Missade samtal blir uteblivna bokningar — och intäkter som aldrig kommer in.",
      "Återbud och ombokningar äter upp receptionens dag.",
      "Patienter ringer utanför öppettider och möts av telefonsvarare.",
    ],
    faq: [
      {
        q: "Kan den boka och omboka tider i vårt system?",
        a: "Receptionisten bokar in tider i den kalender vi kopplar upp under uppsättningen. Vi går igenom era bokningsregler — behandlingslängd, resurser och buffertar — innan vi går live.",
      },
      {
        q: "Hur hanteras känsliga uppgifter och vårdfrågor?",
        a: "Receptionisten är byggd för att hantera bokning och allmänna frågor, inte att ge medicinska råd. Brådskande eller känsliga ärenden flaggas eller kopplas vidare enligt era regler. Se “Så hanterar vi din data” för detaljer.",
      },
      {
        q: "Vad händer med akuta ärenden?",
        a: "Ni bestämmer vad som räknas som akut och vad som ska hända då — koppla vidare till jour, ta meddelande eller hänvisa enligt era rutiner.",
      },
      {
        q: "Kan den påminna patienter om tider?",
        a: "Ja, patienten får en SMS-bekräftelse efter bokning, vilket minskar uteblivna besök.",
      },
    ],
    caseRef: null,
    status: "full",
  },
  {
    slug: "hantverkare",
    namn: "Hantverkare & service",
    navLabel: "Hantverkare",
    h1: "AI-receptionist för hantverkare",
    intro:
      "När du står på en stege eller kör mellan jobb kan du inte svara. Receptionisten tar samtalet, fångar förfrågan och bokar in tider åt dig.",
    pains: [
      "Du kan inte svara mitt i ett jobb — och kunden ringer nästa hantverkare.",
      "Offertförfrågningar fastnar i en telefonsvarare du aldrig hinner lyssna på.",
    ],
    faq: [],
    caseRef: null,
    status: "stub",
  },
  {
    slug: "bilhandlare",
    namn: "Bilhandlare & verkstad",
    navLabel: "Bilhandlare",
    h1: "AI-receptionist för bilhandlare och verkstäder",
    intro:
      "Receptionisten svarar på frågor om lagerbilar, bokar provkörningar och servicetider och ser till att inget kundsamtal går förlorat.",
    pains: [
      "Säljare i samtal eller på provkörning hinner inte svara på inkommande samtal.",
      "Servicebokningar tar tid från verkstadens dag.",
    ],
    faq: [],
    caseRef: null,
    status: "stub",
  },
  {
    slug: "e-handel",
    namn: "E-handel & kundtjänst",
    navLabel: "E-handel",
    h1: "AI-receptionist för e-handel",
    intro:
      "Receptionisten svarar på vanliga frågor om order, leverans och retur via telefon — så att kundtjänsten räcker till även när det är högt tryck.",
    pains: [
      "Samtalsvolymerna svänger kraftigt och bemanningen hinner inte med.",
      "Enkla order- och leveransfrågor binder upp kundtjänstens tid.",
    ],
    faq: [],
    caseRef: null,
    status: "stub",
  },
]);

export function getBransch(slug: string): Bransch | undefined {
  return branscher.find((b) => b.slug === slug);
}

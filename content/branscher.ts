import { branschSchema, type Bransch } from "./schema";
import { z } from "zod";

/**
 * Branschsidor v2 — category hubs + industry sub-pages (Rossy-style
 * structure, Swedish market, no fabricated stats/claims). ASCII slugs only.
 *
 * kind: "hub" pages render an icon-grid of their kategori's children.
 * kind: "page" (default) are single-industry pages like v1.
 *
 * "status: stub" only remains on /bransch/e-handel — everything in this
 * batch (bygg-hantverk, fordon, kliniker-salonger) ships content-complete.
 */
export const branscher: Bransch[] = z.array(branschSchema).parse([
  // ---------------------------------------------------------------------
  // HUB: Bygg & hantverk
  // ---------------------------------------------------------------------
  {
    slug: "hantverkare",
    namn: "Bygg & hantverk",
    navLabel: "Bygg & hantverk",
    h1: "AI-receptionist för bygg- och hantverksföretag",
    intro:
      "När du står på en stege eller kör mellan jobb kan du inte svara. Receptionisten tar samtalet, fångar förfrågan och bokar in besök — så inget jobb går till nästa firma på listan.",
    pains: [
      "Du kan inte svara mitt i ett jobb — och kunden ringer nästa hantverkare.",
      "Offertförfrågningar fastnar i en telefonsvarare du aldrig hinner lyssna på.",
      "Akuta ärenden (vattenläcka, strömavbrott) kräver snabbt svar, inte en kö.",
      "Administrationen tar tid som borde gå till fakturerbart arbete.",
    ],
    faq: [
      {
        q: "Kan receptionisten hantera akuta ärenden?",
        a: "Ja. Du bestämmer vad som räknas som akut och vad som ska hända då — direkt vidarekoppling, prioriterad uppringning eller ett meddelande som flaggas omedelbart.",
      },
      {
        q: "Fungerar det när jag är ute på jobb utan mottagning?",
        a: "Ja, receptionisten svarar oavsett var du befinner dig. Du får en sammanfattning så snart du har täckning igen.",
      },
      {
        q: "Kan den ge en ungefärlig prisuppgift?",
        a: "Den kan samla in vad kunden behöver hjälp med och boka in ett kostnadsförslag, men lämnar inte ut exakta priser om du inte vill det.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "hub",
    kategori: "bygg-hantverk",
    icon: "hammer",
    outcome: "Fler bokade jobb — även när du är ute på plats",
  },
  {
    slug: "vvs",
    namn: "VVS & rörmokare",
    navLabel: "VVS & rörmokare",
    h1: "AI-receptionist för VVS-firmor och rörmokare",
    intro:
      "Vattenläckor väntar inte på kontorstid. Receptionisten svarar direkt, fångar akuta ärenden och bokar in planerade jobb medan du är ute hos kund.",
    pains: [
      "Akuta läckor kräver svar på sekunder — en telefonsvarare räcker inte.",
      "Du står under diskbänken hos en kund när nästa kund ringer.",
      "Planerade installationer och akutärenden blandas ihop utan struktur.",
      "Missade samtal på kvällen blir förlorade jobb till morgonen efter.",
    ],
    faq: [
      {
        q: "Kan receptionisten skilja på akut och icke-akut?",
        a: "Ja, du sätter reglerna. Akuta ärenden som vattenläcka kan flaggas för omedelbar uppringning eller vidarekopplas direkt.",
      },
      {
        q: "Bokar den in besök i vår kalender?",
        a: "Ja, receptionisten föreslår lediga tider och bokar in dem åt kunden medan samtalet pågår.",
      },
      {
        q: "Vad händer utanför ordinarie arbetstid?",
        a: "Receptionisten svarar dygnet runt. Du väljer själv om kvälls- och helgsamtal ska hanteras annorlunda än dagtid.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "bygg-hantverk",
    icon: "wrench",
    outcome: "Svarar på akuta ärenden — dygnet runt",
  },
  {
    slug: "elektriker",
    namn: "Elektriker",
    navLabel: "Elektriker",
    h1: "AI-receptionist för elektriker",
    intro:
      "Strömavbrott och elfel är stressigt för kunden och tidskrävande att hantera i telefon mellan jobb. Receptionisten tar emot ärendet, bokar in besiktning eller åtgärd och ger dig en tydlig sammanfattning.",
    pains: [
      "Du kan inte lämna ett elarbete halvfärdigt för att svara i telefon.",
      "Elfel och strömavbrott upplevs som akuta av kunden och kräver snabbt bemötande.",
      "Förfrågningar om nyinstallation eller besiktning kräver bokning, inte bara ett meddelande.",
      "Administrativ tid för att ringa tillbaka missade samtal äter av dagen.",
    ],
    faq: [
      {
        q: "Kan receptionisten boka besiktningar och offertbesök?",
        a: "Ja, den föreslår lediga tider utifrån din kalender och bokar in besök direkt med kunden.",
      },
      {
        q: "Hanterar den behörighetsfrågor eller tekniska detaljer?",
        a: "Nej, den samlar in vad kunden behöver hjälp med och lämnar bedömningar av teknisk art till dig. Du bestämmer vilka frågor som ska flaggas för uppringning.",
      },
      {
        q: "Kan olika typer av ärenden hanteras olika?",
        a: "Ja — akuta strömavbrott kan till exempel vidarekopplas direkt medan planerade installationer bokas in som vanligt.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "bygg-hantverk",
    icon: "bolt",
    outcome: "Bokar besiktningar medan du är ute på jobb",
  },
  {
    slug: "byggfirmor",
    namn: "Bygg- & snickerifirmor",
    navLabel: "Bygg- & snickerifirmor",
    h1: "AI-receptionist för bygg- och snickerifirmor",
    intro:
      "Nya projekt börjar ofta med ett telefonsamtal. Receptionisten fångar upp förfrågan, samlar in vad kunden behöver och bokar in ett platsbesök — så du inte tappar affären till en konkurrent som svarade snabbare.",
    pains: [
      "Du är på bygget och kan inte svara på nya offertförfrågningar.",
      "Potentiella kunder ringer flera firmor samtidigt — den som svarar först vinner ofta jobbet.",
      "Platsbesök och uppföljningar kräver bokning som lätt glöms bort i stressen.",
      "Många samtal handlar om samma grundfrågor som tar tid att svara på varje gång.",
    ],
    faq: [
      {
        q: "Kan receptionisten samla in projektdetaljer innan platsbesök?",
        a: "Ja, den kan fråga om typ av projekt, omfattning och önskad tidsram, och skicka det vidare till dig som en sammanfattning.",
      },
      {
        q: "Bokar den in platsbesök direkt?",
        a: "Ja, om du kopplar upp en kalender föreslår receptionisten lediga tider och bokar besöket medan kunden är kvar i samtalet.",
      },
      {
        q: "Fungerar det för både privatkunder och företag?",
        a: "Ja, receptionisten anpassas efter vilka typer av kunder och projekt din firma tar emot.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "bygg-hantverk",
    icon: "hammer",
    outcome: "Fångar nya projektförfrågningar innan konkurrenten hinner",
  },
  {
    slug: "malare",
    namn: "Målerifirmor",
    navLabel: "Målerifirmor",
    h1: "AI-receptionist för målerifirmor",
    intro:
      "Säsongstoppar gör att telefonen ringer som mest när ni har minst tid att svara. Receptionisten tar emot förfrågningar om målningsjobb, bokar kostnadsförslag och håller koll på uppföljningar.",
    pains: [
      "Högsäsong innebär fler samtal samtidigt som ni är fullbokade på jobb.",
      "Förfrågningar om kostnadsförslag kräver bokning av ett besök, inte bara ett röstmeddelande.",
      "Uppföljning av gamla offerter glöms lätt bort när dagarna är fullbokade med måleriarbete.",
      "Kunder som inte får svar snabbt går vidare till en annan firma.",
    ],
    faq: [
      {
        q: "Kan receptionisten boka in besök för kostnadsförslag?",
        a: "Ja, den bokar in besök i din kalender utifrån de tider du har lediga.",
      },
      {
        q: "Kan den hantera hög samtalsvolym under högsäsong?",
        a: "Ja, receptionisten hanterar flera samtal samtidigt utan kö, vilket är särskilt värdefullt under säsongstoppar.",
      },
      {
        q: "Fångar den upp både privat- och företagskunder?",
        a: "Ja, du anpassar svar och frågor efter vilka kundtyper ni jobbar med.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "bygg-hantverk",
    icon: "paintroller",
    outcome: "Håller koll på förfrågningar under högsäsong",
  },
  {
    slug: "taklaggare",
    namn: "Takläggare",
    navLabel: "Takläggare",
    h1: "AI-receptionist för takläggare",
    intro:
      "Takskador uppstår ofta akut — i samband med storm eller kraftigt regn. Receptionisten svarar direkt, samlar in ärendet och bokar in en besiktning så att kunden inte behöver vänta.",
    pains: [
      "Akuta takskador efter oväder ger en kraftig samtalstopp på kort tid.",
      "Du är uppe på ett tak och kan inte svara i telefon.",
      "Besiktningar och offerter kräver bokning som är lätt att tappa bort i stressen.",
      "Missade samtal vid akuta skador riskerar att bli vattenskador som blir dyrare att åtgärda.",
    ],
    faq: [
      {
        q: "Kan receptionisten prioritera akuta takskador?",
        a: "Ja, du sätter reglerna för vad som räknas som akut och hur det ska hanteras — till exempel snabb vidarekoppling.",
      },
      {
        q: "Hanterar den samtalstoppar efter oväder?",
        a: "Ja, receptionisten kan ta emot många samtal samtidigt utan att någon möts av en upptagetton.",
      },
      {
        q: "Bokar den in besiktningstider?",
        a: "Ja, den föreslår lediga tider ur din kalender och bokar in besiktningen direkt med kunden.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "bygg-hantverk",
    icon: "roof",
    outcome: "Hanterar samtalstoppar efter storm och oväder",
  },
  {
    slug: "flyttfirmor",
    namn: "Flytt- & städfirmor",
    navLabel: "Flytt- & städfirmor",
    h1: "AI-receptionist för flytt- och städfirmor",
    intro:
      "Bokningar och offertförfrågningar kommer ofta in medan personalen är ute på uppdrag. Receptionisten svarar, samlar in adress och omfattning, och bokar in jobbet i din kalender.",
    pains: [
      "Personalen är ute hos kund och kan inte svara på nya bokningsförfrågningar.",
      "Offertförfrågningar kräver information om adress, omfattning och datum som tar tid att samla in manuellt.",
      "Avbokningar och ombokningar skapar mycket telefontrafik.",
      "Missade samtal under högsäsong (flyttsäsong) betyder förlorade bokningar.",
    ],
    faq: [
      {
        q: "Kan receptionisten samla in flyttadress och datum?",
        a: "Ja, den ställer de frågor du bestämmer — till exempel adresser, önskat datum och omfattning — och skickar en sammanfattning till dig.",
      },
      {
        q: "Bokar den in jobbet direkt i kalendern?",
        a: "Ja, om du kopplar upp en kalender kan receptionisten boka in uppdraget medan kunden är kvar i samtalet.",
      },
      {
        q: "Klarar den många samtal samtidigt under högsäsong?",
        a: "Ja, det är en av de största fördelarna jämfört med en enskild receptionist som bara kan hantera ett samtal i taget.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "bygg-hantverk",
    icon: "truck",
    outcome: "Bokar in jobb medan teamet är ute på uppdrag",
  },

  // ---------------------------------------------------------------------
  // HUB: Fordon
  // ---------------------------------------------------------------------
  {
    slug: "fordon",
    namn: "Fordon",
    navLabel: "Fordon",
    h1: "AI-receptionist för bilhandlare och verkstäder",
    intro:
      "Säljare i provkörning och tekniker under en bil kan inte alltid svara. Receptionisten tar samtalet, bokar provkörningar och servicetider, och ser till att inget kundsamtal går förlorat.",
    pains: [
      "Säljare i pågående kundmöte eller provkörning hinner inte svara på inkommande samtal.",
      "Verkstadens tekniker kan inte lämna ett pågående arbete för att svara i telefon.",
      "Servicebokningar och prisförfrågningar tar tid från både sälj och verkstad.",
      "Missade samtal om lagerbilar riskerar att kunden köper hos en konkurrent i stället.",
    ],
    faq: [
      {
        q: "Kan receptionisten boka provkörningar?",
        a: "Ja, den föreslår lediga tider och bokar in provkörningen i din kalender.",
      },
      {
        q: "Kan den svara på frågor om lagerbilar?",
        a: "Den kan svara på grundläggande frågor du förser den med, och boka in ett besök eller samtal med en säljare för detaljerade frågor.",
      },
      {
        q: "Hanterar den både sälj- och verkstadssamtal?",
        a: "Ja, du kan konfigurera olika flöden för nybilsförsäljning, begagnat och verkstadsbokningar.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "hub",
    kategori: "fordon",
    icon: "car",
    outcome: "Fångar varje samtal om bilar och service",
  },
  {
    slug: "bilhandlare",
    namn: "Bilhandlare",
    navLabel: "Bilhandlare",
    h1: "AI-receptionist för bilhandlare",
    intro:
      "Receptionisten svarar på frågor om lagerbilar, bokar provkörningar och kopplar seriösa köpare vidare till rätt säljare — så att inget kundsamtal går förlorat under en pågående affär.",
    pains: [
      "Säljare i kundmöte eller provkörning hinner inte svara på inkommande samtal.",
      "Frågor om specifika lagerbilar kräver snabbt svar innan kunden går vidare till en annan handlare.",
      "Bokning av provkörningar tar tid från säljarnas dag.",
      "Kvälls- och helgsamtal från intresserade köpare möts ofta av telefonsvarare.",
    ],
    faq: [
      {
        q: "Kan receptionisten boka provkörningar direkt i kalendern?",
        a: "Ja, receptionisten bokar in tider utifrån vilka luckor som finns tillgängliga hos era säljare.",
      },
      {
        q: "Kan den svara på detaljerade frågor om en specifik bil?",
        a: "Den kan svara på information du förser den med om lagret, och koppla vidare till rätt säljare för djupare frågor eller förhandling.",
      },
      {
        q: "Fungerar det för både nybilsförsäljning och begagnat?",
        a: "Ja, flödet konfigureras utifrån hur er försäljning är uppdelad.",
      },
      {
        q: "Vad händer med samtal utanför öppettider?",
        a: "Receptionisten svarar dygnet runt och kan boka in provkörningar eller återuppringningar för nästa dag.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "fordon",
    icon: "car",
    outcome: "Bokar provkörningar dygnet runt",
  },
  {
    slug: "bilverkstader",
    namn: "Bilverkstäder & däck",
    navLabel: "Bilverkstäder & däck",
    h1: "AI-receptionist för bilverkstäder och däckfirmor",
    intro:
      "Tekniker under en bil kan inte svara i telefon. Receptionisten bokar in servicetider och däckbyten, svarar på vanliga frågor och ser till att verkstaden är fullbokad utan att någon behöver sitta i receptionen.",
    pains: [
      "Tekniker mitt i ett arbete kan inte lämna verkstaden för att svara i telefon.",
      "Säsongsdäckbyte skapar kraftiga samtalstoppar två gånger om året.",
      "Bokningar, ombokningar och prisförfrågningar tar tid som borde gå till verkstadsarbete.",
      "Missade samtal om akuta bilproblem riskerar att kunden söker sig till en konkurrent.",
    ],
    faq: [
      {
        q: "Kan receptionisten hantera säsongstoppar vid däckbyte?",
        a: "Ja, den hanterar flera samtal samtidigt utan kö, vilket är särskilt värdefullt vid säsongsbyten.",
      },
      {
        q: "Bokar den in servicetider automatiskt?",
        a: "Ja, om ni kopplar upp en kalender föreslår receptionisten lediga tider och bokar in besöket.",
      },
      {
        q: "Kan den hantera akuta ärenden, som att en bil inte startar?",
        a: "Ja, du bestämmer hur akuta ärenden ska hanteras — till exempel snabbare uppringning eller vidarekoppling.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "fordon",
    icon: "tire",
    outcome: "Håller verkstaden fullbokad — utan reception",
  },

  // ---------------------------------------------------------------------
  // HUB: Kliniker & salonger
  // ---------------------------------------------------------------------
  {
    slug: "kliniker-salonger",
    namn: "Kliniker & salonger",
    navLabel: "Kliniker & salonger",
    h1: "AI-receptionist för kliniker och salonger",
    intro:
      "Tandvård, mottagningar, frisörer och skönhetssalonger — receptionisten svarar när telefonen går varm, bokar tider och låter personalen fokusera på kunden i stolen.",
    pains: [
      "Telefonen ringer mitt i en behandling och kunden i stolen får vänta.",
      "Missade samtal blir uteblivna bokningar — och intäkter som aldrig kommer in.",
      "Återbud och ombokningar äter upp receptionens dag.",
      "Kunder ringer utanför öppettider och möts av telefonsvarare.",
    ],
    faq: [
      {
        q: "Kan receptionisten boka och omboka tider i vårt system?",
        a: "Receptionisten bokar in tider i den kalender vi kopplar upp under uppsättningen, utifrån era bokningsregler.",
      },
      {
        q: "Hur hanteras känsliga uppgifter?",
        a: "Receptionisten är byggd för bokning och allmänna frågor, inte medicinska råd. Känsliga ärenden flaggas eller kopplas vidare enligt era regler.",
      },
      {
        q: "Kan den skicka påminnelser om tider?",
        a: "Ja, kunden får en SMS-bekräftelse efter bokning, vilket minskar uteblivna besök.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "hub",
    kategori: "kliniker-salonger",
    icon: "clinic",
    outcome: "Bokar tider medan personalen är hos kunden",
  },
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
    kind: "page",
    kategori: "kliniker-salonger",
    icon: "clinic",
    outcome: "Låter personalen fokusera på patienten i rummet",
  },
  {
    slug: "tandlakare",
    namn: "Tandläkare",
    navLabel: "Tandläkare",
    h1: "AI-receptionist för tandläkarmottagningar",
    intro:
      "Receptionen är ofta fullt upptagen med patienter på plats. Receptionisten svarar i telefon parallellt, bokar tider och hanterar akuta tandvärksärenden enligt era rutiner.",
    pains: [
      "Receptionen hanterar redan patienter i väntrummet när telefonen ringer.",
      "Akut tandvärk kräver snabbt svar och tydlig hantering.",
      "Återbud och ombokningar tar mycket tid från receptionens dag.",
      "Missade samtal utanför öppettider blir förlorade nybokningar.",
    ],
    faq: [
      {
        q: "Kan receptionisten prioritera akut tandvärk?",
        a: "Ja, ni bestämmer hur akuta ärenden ska hanteras — till exempel snabbare uppringning eller vidarekoppling till jour.",
      },
      {
        q: "Bokar den in och ombokar tider?",
        a: "Ja, receptionisten bokar utifrån de bokningsregler och behandlingstider ni ställer in.",
      },
      {
        q: "Skickar den påminnelser inför besök?",
        a: "Ja, patienten får en SMS-bekräftelse direkt efter bokning.",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "kliniker-salonger",
    icon: "tooth",
    outcome: "Avlastar receptionen medan patienter väntar",
  },
  {
    slug: "salonger",
    namn: "Frisörer & skönhetssalonger",
    navLabel: "Frisörer & skönhetssalonger",
    h1: "AI-receptionist för frisörer och skönhetssalonger",
    intro:
      "Mitt i en klippning eller behandling är telefonen det sista man hinner med. Receptionisten svarar, bokar tider och skickar bekräftelser — så stolarna hålls fullbokade utan avbrott.",
    pains: [
      "Personalen är upptagen med kund i stolen och kan inte svara i telefon.",
      "Bokningsförfrågningar och ombokningar avbryter arbetet flera gånger om dagen.",
      "Uteblivna besök utan påminnelse kostar salongen pengar.",
      "Samtal på kvällar och söndagar möts ofta av telefonsvarare.",
    ],
    faq: [
      {
        q: "Kan receptionisten boka olika typer av behandlingar?",
        a: "Ja, den bokar utifrån de tjänster, tider och personal ni ställer in i kalendern.",
      },
      {
        q: "Minskar det uteblivna besök?",
        a: "Ja, kunden får en SMS-bekräftelse direkt efter bokning, vilket är en av de vanligaste anledningarna till färre uteblivna besök.",
      },
      {
        q: "Kan den hantera väntelistor vid avbokning?",
        a: "Grundläggande hantering av ombokningar går att sätta upp. [KOMPLETTERA: bekräfta om automatisk väntelistehantering ingår i er konfiguration.]",
      },
    ],
    caseRef: null,
    status: "full",
    kind: "page",
    kategori: "kliniker-salonger",
    icon: "scissors",
    outcome: "Håller stolarna fullbokade utan avbrott",
  },

  // ---------------------------------------------------------------------
  // Standalone stub — untouched, batch 2 fills this
  // ---------------------------------------------------------------------
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
    kind: "page",
    kategori: "ovrigt",
    icon: "truck",
    outcome: "Avlastar kundtjänsten vid höga samtalsvolymer",
  },
]);

export function getBransch(slug: string): Bransch | undefined {
  return branscher.find((b) => b.slug === slug);
}

/** All hub pages, for the nav dropdown / footer grouping. */
export function getHubs(): Bransch[] {
  return branscher.filter((b) => b.kind === "hub");
}

/** Industry pages belonging to a given hub's kategori (hub itself excluded). */
export function getChildren(kategori: Bransch["kategori"]): Bransch[] {
  return branscher.filter((b) => b.kategori === kategori && b.kind === "page");
}

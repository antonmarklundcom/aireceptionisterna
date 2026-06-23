import { faqItemSchema, type FaqItem } from "./schema";
import { z } from "zod";

/** General/home + priser FAQ. Vertical FAQs live on each branschsida. */
export const generalFaq: FaqItem[] = z.array(faqItemSchema).parse([
  {
    q: "Låter den som en robot?",
    a: "Nej. Receptionisten pratar naturlig svenska med ett tonläge du själv godkänner. Många som ringer märker inte att de pratar med en AI. Du hör den live i demon innan du bestämmer dig.",
  },
  {
    q: "Vad händer om den inte kan svara på en fråga?",
    a: "Du bestämmer reglerna. Receptionisten kan ta ett meddelande, koppla vidare till en kollega eller flagga ärendet för uppringning. Du får alltid en sammanfattning.",
  },
  {
    q: "Hur kommer jag igång?",
    a: "Du börjar med en kostnadsfri demo. Därefter bygger vi din receptionist, testar tillsammans och går live — oftast inom ett par veckor. Du får ett fast pris innan vi sätter igång.",
  },
  {
    q: "Är jag bunden till något avtal?",
    a: "Nej, det finns ingen bindningstid. Du betalar per månad och kan avsluta när du vill.",
  },
  {
    q: "Vad kostar det?",
    a: "Ett fast månadspris, en bråkdel av vad en heltidsanställd reception kostar. Du ser hela prisbilden på vår prissida och får ett fast pris innan start.",
  },
  {
    q: "Hur hanteras kundernas uppgifter?",
    a: "Vi är öppna med hur data hanteras och vilka leverantörer som används. Detaljerna finns i blocket “Så hanterar vi din data” och i vår integritetspolicy.",
  },
]);

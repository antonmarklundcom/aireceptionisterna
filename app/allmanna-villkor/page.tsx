import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/env";

export const metadata: Metadata = {
  title: "Allmänna villkor",
  description:
    "Allmänna villkor för AI Receptionisternas tjänster — omfattning, priser, betalning, ansvar och uppsägning.",
  alternates: { canonical: "/allmanna-villkor" },
};

export default function AllmannaVillkorPage() {
  return (
    <LegalLayout title="Allmänna villkor" updated="[KOMPLETTERA: datum]">
      <p>
        Dessa allmänna villkor gäller mellan {siteConfig.orgName} (org.nr{" "}
        {siteConfig.orgNr}) och dig som kund. [KOMPLETTERA: låt jurist granska
        innan publicering.]
      </p>

      <h2>1. Tjänsten</h2>
      <p>
        {siteConfig.orgName} tillhandahåller en AI-baserad telefonreception som
        besvarar samtal, bokar möten, sammanfattar samtal och skickar
        SMS-bekräftelser enligt överenskommen konfiguration.
      </p>

      <h2>2. Priser och betalning</h2>
      <p>
        Priser anges per månad exkl. moms. Aktuellt pris framgår av offert och
        prissida. [KOMPLETTERA: betalningsvillkor, faktureringsintervall,
        dröjsmålsränta.]
      </p>

      <h2>3. Avtalstid och uppsägning</h2>
      <p>
        Tjänsten löper utan bindningstid och kan sägas upp enligt vad som
        anges i avtalet. [KOMPLETTERA: uppsägningstid.]
      </p>

      <h2>4. Kundens ansvar</h2>
      <p>
        Kunden ansvarar för att lämnade uppgifter är korrekta och för att
        nödvändiga samtycken inhämtats där så krävs. [KOMPLETTERA.]
      </p>

      <h2>5. Ansvarsbegränsning</h2>
      <p>[KOMPLETTERA: ansvarsbegränsning och force majeure.]</p>

      <h2>6. Personuppgifter</h2>
      <p>
        Behandling av personuppgifter regleras i vår{" "}
        <a href="/integritetspolicy">integritetspolicy</a> samt i
        personuppgiftsbiträdesavtal där sådant är tillämpligt.
      </p>

      <h2>7. Tillämplig lag och tvist</h2>
      <p>
        Svensk lag tillämpas. Tvist avgörs av svensk allmän domstol.
        [KOMPLETTERA: ange ev. behörig domstol/ort.]
      </p>
    </LegalLayout>
  );
}

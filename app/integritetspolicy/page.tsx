import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/env";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Så behandlar AI Receptionisterna personuppgifter enligt GDPR — personuppgiftsansvarig, ändamål, rättslig grund och dina rättigheter.",
  alternates: { canonical: "/integritetspolicy" },
};

export default function IntegritetspolicyPage() {
  return (
    <LegalLayout title="Integritetspolicy" updated="[KOMPLETTERA: datum]">
      <h2>Personuppgiftsansvarig</h2>
      <p>
        {siteConfig.orgName} (org.nr {siteConfig.orgNr}), {siteConfig.ort}, är
        personuppgiftsansvarig för behandlingen av de personuppgifter som
        beskrivs i denna policy. Kontakt:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>

      <h2>Vilka uppgifter vi behandlar</h2>
      <p>
        När du fyller i ett formulär eller bokar en demo behandlar vi de
        uppgifter du lämnar, till exempel namn, e-post, telefonnummer, företag
        och meddelande. Vi sparar även tidpunkt för ditt samtycke samt teknisk
        information som IP-adress och webbläsare i den mån det krävs.
      </p>
      <p>
        För kunder som använder tjänsten kan samtalsdata komma att behandlas.
        [KOMPLETTERA: beskriv exakt vilken samtalsdata som behandlas, var den
        lagras och vilka underleverantörer/personuppgiftsbiträden som anlitas.]
      </p>

      <h2>Ändamål och rättslig grund</h2>
      <ul>
        <li>För att besvara din förfrågan och kontakta dig — berättigat intresse / samtycke.</li>
        <li>För att leverera och förbättra tjänsten — fullgörande av avtal.</li>
        <li>För statistik och marknadsföring — endast efter ditt samtycke.</li>
      </ul>

      <h2>Lagringstid</h2>
      <p>
        Vi sparar dina uppgifter så länge det behövs för ändamålet eller så
        länge lag kräver. [KOMPLETTERA: ange konkreta lagringstider.]
      </p>

      <h2>Mottagare och personuppgiftsbiträden</h2>
      <p>
        Vi använder leverantörer för bland annat CRM, kommunikation och drift.
        [KOMPLETTERA: lista personuppgiftsbiträden och eventuell
        tredjelandsöverföring samt skyddsåtgärder.]
      </p>

      <h2>Dina rättigheter</h2>
      <p>
        Du har rätt till tillgång, rättelse, radering, begränsning, invändning
        och dataportabilitet. Du kan återkalla ditt samtycke när som helst.
        Kontakta oss på{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten
        (IMY).
      </p>

      <h2>Cookies</h2>
      <p>
        Information om cookies finns i vår <a href="/cookiepolicy">cookiepolicy</a>.
      </p>
    </LegalLayout>
  );
}

import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookiepolicy",
  description:
    "Så använder AI Receptionisterna cookies — nödvändiga, statistik och marknadsföring. Du styr själv ditt samtycke.",
  alternates: { canonical: "/cookiepolicy" },
};

export default function CookiepolicyPage() {
  return (
    <LegalLayout title="Cookiepolicy" updated="[KOMPLETTERA: datum]">
      <p>
        En cookie är en liten textfil som sparas i din webbläsare. Vi använder
        cookies för att webbplatsen ska fungera och, med ditt samtycke, för
        statistik och marknadsföring. Icke-nödvändiga cookies är avstängda tills
        du samtycker.
      </p>

      <h2>Kategorier</h2>
      <h3>Nödvändiga</h3>
      <p>
        Krävs för att webbplatsen ska fungera, till exempel för att komma ihåg
        dina cookieval. Dessa kan inte stängas av.
      </p>

      <h3>Statistik</h3>
      <p>
        Hjälper oss förstå hur webbplatsen används så att vi kan förbättra den.
        Aktiveras endast efter ditt samtycke. [KOMPLETTERA: namnge eventuella
        statistikverktyg, t.ex. analysleverantör.]
      </p>

      <h3>Marknadsföring</h3>
      <p>
        Används för att mäta och rikta marknadsföring. Aktiveras endast efter
        ditt samtycke. [KOMPLETTERA: namnge eventuella marknadsföringsverktyg.]
      </p>

      <h2>Hantera ditt samtycke</h2>
      <p>
        Du kan när som helst ändra eller återkalla ditt samtycke genom att
        rensa webbplatsens lagring i din webbläsare, varpå cookiebannern visas
        igen.
      </p>

      <h2>Mer information</h2>
      <p>
        Hur vi behandlar personuppgifter beskrivs i vår{" "}
        <a href="/integritetspolicy">integritetspolicy</a>.
      </p>
    </LegalLayout>
  );
}

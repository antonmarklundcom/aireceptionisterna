import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig, demoPhoneHref } from "@/lib/env";

export const metadata: Metadata = {
  title: "Kontakt — vi svarar gärna på dina frågor",
  description:
    "Kontakta AI Receptionisterna. Mejla oss eller skicka en förfrågan så återkommer vi.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  const phoneHref = demoPhoneHref();

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow mb-4">Kontakt</span>
          <h1>Hör av dig</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Har du en fråga eller vill veta hur receptionisten passar din
            verksamhet? Skriv några rader så återkommer vi. {siteConfig.responsePromise}.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-ink">E-post</dt>
              <dd>
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-green-soft-ink underline">
                  {siteConfig.contactEmail}
                </a>
              </dd>
            </div>
            {phoneHref && (
              <div>
                <dt className="font-semibold text-ink">Telefon</dt>
                <dd>
                  <a href={phoneHref} className="text-green-soft-ink underline">
                    {siteConfig.demoPhone}
                  </a>
                </dd>
              </div>
            )}
            <div>
              <dt className="font-semibold text-ink">Företag</dt>
              <dd className="text-muted">
                {siteConfig.orgName} · Org.nr {siteConfig.orgNr}
                {siteConfig.fskatt && " · Innehar F-skattsedel"}
              </dd>
            </div>
          </dl>
        </div>

        <div className="card p-6 sm:p-8">
          <LeadForm
            source="contact_form"
            fields={["name", "email", "phone", "company", "message"]}
            requiredFields={["name", "email", "message"]}
            submitLabel="Skicka meddelande"
            successText="Tack för ditt meddelande!"
          />
        </div>
      </div>
    </section>
  );
}

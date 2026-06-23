# AI Receptionisterna

Marknadssajt och leadmotor för AI Receptionisterna — en svensk AI-telefonreception
som svarar dygnet runt, bokar möten och sammanfattar samtal (B2B, hela Sverige).

Byggd med **Next.js (App Router) + TypeScript + Tailwind**, för **Hostinger managed
Node.js**. Standard `next build` / `next start`. **Aldrig `output: 'export'`** — sajten
har API-routes.

---

## Snabbstart (utvecklare)

```bash
npm install
cp .env.example .env.local   # fyll i minst MINIMUM VIABLE-blocket
npm run dev                  # http://localhost:3000
npm run build                # måste vara grön före deploy
```

Node: LTS 22.x.

---

## Driftguide (icke-teknisk)

### Så ändrar du innehåll och priser
Allt redaktionellt innehåll ligger som vanliga text-/datafiler i repot. Du kan
redigera dem direkt i GitHubs webbeditor; varje commit triggar en ny deploy.

| Vad | Fil |
|-----|-----|
| Funktioner | `content/features.ts` |
| Så fungerar det (steg) | `content/steps.ts` |
| Branscher (sidtexter) | `content/branscher.ts` |
| Vanliga frågor | `content/faq.ts` |
| Tjänstesida | `content/services.ts` |
| Prislista (jämförelse) | `content/pricing.ts` |
| Guider (artiklar) | `content/guider/*.mdx` |

**Priser** styrs via miljövariabler (se nedan), inte i koden:
`NEXT_PUBLIC_PRICE_ORDINARIE`, `NEXT_PUBLIC_PRICE_KAMPANJ`,
`NEXT_PUBLIC_CAMPAIGN_ACTIVE`. Alla priser visas alltid med **"exkl. moms"**.

### Var leads hamnar
Varje formulär postar till `/api/lead`, som fan-out:ar till
1. **GoHighLevel** (inbound webhook) — CRM/operations.
2. **Google Sheets** (backup-rad) — så inget lead är osynligt.

**NEVER-BLOCK:** misslyckas CRM/Sheets får användaren ändå bekräftelse, och
formulären erbjuder en **e-post-fallback** (`NEXT_PUBLIC_CONTACT_EMAIL`).
Tills GHL/Sheets är konfigurerade går alltså leads via e-post — se till att en
**namngiven person bevakar inkorgen och svarar inom `NEXT_PUBLIC_RESPONSE_PROMISE`
före lansering.**

---

## Miljövariabler

Se [`.env.example`](./.env.example) för full lista med kommentarer. Sätt dem i
**Hostinger hPanel → din app → Environment variables** (aldrig riktiga värden i
repot).

### Minsta uppsättning för lansering
`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_RESPONSE_PROMISE`,
`NEXT_PUBLIC_ORG_NAME`, `NEXT_PUBLIC_ORG_NR`, `NEXT_PUBLIC_FSKATT`,
`NEXT_PUBLIC_ORT`, prisvariablerna. Sajten fungerar fullt ut med bara dessa.

### Lägg till en i taget, redeploya efter varje
1. `GHL_INBOUND_WEBHOOK_URL` (+ `GHL_SANDBOX`) — leads till CRM.
2. `GOOGLE_SHEETS_ID` / `_CLIENT_EMAIL` / `_PRIVATE_KEY` — backup i Sheets.
3. `NEXT_PUBLIC_CALENDAR_EMBED_URL` — riktig kalender på /boka-demo (annars
   visas ett "boka via e-post"-formulär).
4. `NEXT_PUBLIC_DEMO_PHONE` — "Ring och testa"-knapp.
5. `NEXT_PUBLIC_VOICEAI_WIDGET_URL` (+ `NEXT_PUBLIC_CALLBACK_ENABLED`) — live
   Voice AI-demo i webbläsaren.
6. `NEXT_PUBLIC_LOGIN_URL` — visar "Logga in" i menyn (dolt annars).

Varje marknadsföringspåstående är en toggle: tom/false som standard. Sajten
degraderar elegant när något är osatt — inga döda knappar, inga tomma sektioner.

---

## Deploy (Hostinger Node.js)

hPanel → Websites → Add Website → **Node.js Apps** → Import Git Repository →
branch `main` → **Next.js**-preset → root `./` → default build → **Node 22.x** →
sätt env-variabler → Deploy → koppla domän.

CI (`.github/workflows/ci.yml`) kör `npm ci && npm run build` på varje push.

---

## Telefon-/lanseringschecklista
- [ ] `npm run build` grön.
- [ ] Testad mobilt på 360–390px (H1 klipps inte).
- [ ] Formulär skickar och visar bekräftelse (eller e-post-fallback).
- [ ] Cookie-banner: icke-nödvändiga av tills samtycke.
- [ ] Consent-checkbox + integritetspolicy-länk på varje formulär.
- [ ] En namngiven person svarar leads inom `RESPONSE_PROMISE`.
- [ ] (När satt) ring `DEMO_PHONE` och verifiera Voice AI-demon.

---

## Kvar att fylla i — `[KOMPLETTERA]`
Dessa strängar renderas ordagrant i UI tills de fylls i (med riktiga värden):

- **Org.nr** och **ort** (`.env`).
- **Grundarens foto + bio/löfte** (`components/TrustSection.tsx`, lägg foto i
  `public/images/`).
- **"Så hanterar vi din data"** — lagringsplats, modeller/underleverantörer,
  GDPR-roller, vad som INTE sparas, lagringstid (`components/DataHandling.tsx`).
- **Legal** — datum och juristgranskning i integritetspolicy, cookiepolicy,
  allmänna villkor.
- **Tekniska förutsättningar** för telefonikoppling (`content/services.ts`).
- **Riktig kund-testimonial** — läggs i `components/Testimonial.tsx` (`testimonials`)
  först när den är verifierad och samtyckt. Visas inte alls innan dess.

---

## Compliance (svensk bas — lanseringskritiskt)
- sv-SE, du-form genomgående.
- Priser alltid **"kr exkl. moms"**, mellanslag som tusentalsavgränsare.
- **Anti-hype:** inga påståenden som "marknadsledande" utan källa.
- **Anti-fabrikation:** inga påhittade siffror, recensioner, ansikten eller
  kundlogotyper. Samtalskortet är en tydligt märkt illustration ("Exempel").
- **GDPR:** oikryssad consent + policy-länk på varje formulär, sparat samtycke
  + tidsstämpel; granulär cookie-banner (Nödvändiga/Statistik/Marknadsföring).

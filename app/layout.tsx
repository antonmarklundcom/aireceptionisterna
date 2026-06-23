import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FastBottenpanel } from "@/components/FastBottenpanel";
import { CookieBanner } from "@/components/CookieBanner";
import { UtmCapture } from "@/components/UtmCapture";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd } from "@/lib/jsonld";
import { siteConfig } from "@/lib/env";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI Receptionisterna — AI-receptionist som svarar dygnet runt",
    template: "%s · AI Receptionisterna",
  },
  description:
    "En AI-receptionist som svarar på naturlig svenska dygnet runt, bokar möten och sammanfattar varje samtal. Kostnadsfri demo, fast pris, ingen bindningstid.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "AI Receptionisterna",
    url: siteConfig.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${newsreader.variable} ${hanken.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationLd()} />
        <UtmCapture />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
        >
          Hoppa till innehåll
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <FastBottenpanel />
        <CookieBanner />
      </body>
    </html>
  );
}

import { siteConfig } from "./env";
import type { FaqItem } from "@/content/schema";

/** JSON-LD builders. Rendered via the <JsonLd> component. */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.orgName,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    areaServed: "SE",
    // No logo/sameAs invented — add when real assets exist.
  };
}

export function serviceLd(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    areaServed: "SE",
    provider: {
      "@type": "Organization",
      name: siteConfig.orgName,
      url: siteConfig.url,
    },
  };
}

export function faqLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbLd(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

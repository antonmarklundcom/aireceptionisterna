import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/env";
import { branscher } from "@/content/branscher";
import { services } from "@/content/services";
import { getGuideSlugs } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/priser",
    "/boka-demo",
    "/om-oss",
    "/kontakt",
    "/guider",
    "/integritetspolicy",
    "/cookiepolicy",
    "/allmanna-villkor",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const s of services) {
    entries.push({
      url: `${base}/tjanster/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  for (const b of branscher) {
    entries.push({
      url: `${base}/bransch/${b.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const slug of getGuideSlugs()) {
    entries.push({
      url: `${base}/guider/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}

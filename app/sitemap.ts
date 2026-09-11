import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const BASE = siteConfig.url;
const SITE_UPDATED = new Date("2026-09-11");
const BLOG_PUBLISHED = new Date("2026-09-09");
const MATRIX_PUBLISHED = new Date("2026-09-11");

const blogSlugs = [
  "signs-you-need-emergency-locksmith-dubai",
  "lock-security-checklist-dubai-landlords",
  "lost-car-keys-dubai-what-to-do",
  "repair-vs-replace-lock-dubai",
  "home-security-guide-dubai-expats",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static core pages ────────────────────────────────────────────────────
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/locations`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: BLOG_PUBLISHED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/reviews`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/guides`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.7 },
  ];

  // ── Blog posts ───────────────────────────────────────────────────────────
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: BLOG_PUBLISHED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Service hub pages (20 total) ─────────────────────────────────────────
  const serviceHubRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE}/services/${service.slug}`,
    lastModified: MATRIX_PUBLISHED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Location hub pages (39 total) ────────────────────────────────────────
  const locationHubRoutes: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: MATRIX_PUBLISHED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Service × Location leaf pages (20 × 39 = 780 total) ─────────────────
  const leafRoutes: MetadataRoute.Sitemap = services.flatMap((service) =>
    locations.map((loc) => ({
      url: `${BASE}/services/${service.slug}/${loc.slug}`,
      lastModified: MATRIX_PUBLISHED,
      changeFrequency: "monthly" as const,
      priority: service.urgency === "high" ? 0.75 : service.urgency === "medium" ? 0.65 : 0.55,
    }))
  );

  return [
    ...coreRoutes,
    ...blogRoutes,
    ...serviceHubRoutes,
    ...locationHubRoutes,
    ...leafRoutes,
  ];
}

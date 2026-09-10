import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

const BASE = siteConfig.url;

// Update this date whenever significant content is changed site-wide
const SITE_UPDATED = new Date("2026-09-09");
// Update this date whenever a service page is edited
const SERVICE_UPDATED = new Date("2026-09-09");
const BLOG_PUBLISHED = new Date("2026-09-09");

const blogSlugs = [
  "signs-you-need-emergency-locksmith-dubai",
  "lock-security-checklist-dubai-landlords",
  "lost-car-keys-dubai-what-to-do",
  "repair-vs-replace-lock-dubai",
  "home-security-guide-dubai-expats",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/services`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/blog`,
      lastModified: BLOG_PUBLISHED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = siteConfig.services.map((service) => ({
    url: `${BASE}/services/${service.slug}`,
    lastModified: SERVICE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: BLOG_PUBLISHED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}

import { siteConfig } from "@/lib/config/site";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description:
      "24-hour locksmith and key cutting service in Dubai, UAE. Emergency lockouts, car key programming, lock repair, and key duplication.",
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
    inLanguage: "en-AE",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import { siteConfig } from "@/lib/config/site";

interface ServiceSchemaProps {
  name: string;
  description: string;
  slug: string;
  areaServed?: string[];
}

export function ServiceSchema({
  name,
  description,
  slug,
  areaServed = ["Dubai", "Al Murar", "Deira", "Bur Dubai"],
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}/services/${slug}`,
    provider: {
      "@type": "Locksmith",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Arabic"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          opens: "00:00",
          closes: "23:59",
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

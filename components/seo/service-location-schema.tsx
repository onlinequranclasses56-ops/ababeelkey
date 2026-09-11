import { siteConfig } from "@/lib/config/site";
import type { ServiceData } from "@/data/services";
import type { LocationData } from "@/data/locations";

interface LocalFAQ {
  q: string;
  a: string;
}

interface Props {
  service: ServiceData;
  location: LocationData;
  localFAQs: LocalFAQ[];
}

export function ServiceLocationSchema({ service, location, localFAQs }: Props) {
  const pageUrl = `${siteConfig.url}/services/${service.slug}/${location.slug}`;
  const allFAQs = [...localFAQs, ...service.faqs.slice(0, 2)];

  const locksmith: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: location.name,
      availableLanguage: ["English", "Arabic"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: `tel:${siteConfig.phoneRaw}`,
      name: `Call for ${service.name} in ${location.name}`,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      bestRating: 5,
      worstRating: 1,
      reviewCount: siteConfig.rating.count ?? 10,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} in ${location.name}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${service.name} in ${location.name}, Dubai`,
            description: service.shortDescription,
            url: pageUrl,
            provider: { "@type": "Locksmith", "@id": `${siteConfig.url}/#business` },
            areaServed: { "@type": "City", name: location.name },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: service.priceRangeAED.min,
            maxPrice: service.priceRangeAED.max,
            priceCurrency: "AED",
          },
        },
      ],
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${siteConfig.url}/services/${service.slug}` },
      { "@type": "ListItem", position: 4, name: location.name, item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locksmith) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

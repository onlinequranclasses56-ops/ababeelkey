import { siteConfig } from "@/lib/config/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.displayName,
    description:
      "Ababeel Key Trading LLC is a 24-hour locksmith and key cutting service based in Al Murar, Dubai, UAE. We offer emergency locksmith, car key programming, lock repair, and key duplication services across Dubai.",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      bestRating: 5,
      worstRating: 1,
      // TODO: replace reviewCount with real number from Google Business Profile
      reviewCount: siteConfig.rating.count ?? 10,
    },
    hasMap: siteConfig.plusCodeUrl,
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.googleMapsShort,
    ],
    areaServed: siteConfig.areasServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Credit Card",
    image: `${siteConfig.url}/images/ababeel-key-trading-dubai.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

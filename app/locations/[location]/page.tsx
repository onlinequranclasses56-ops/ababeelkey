import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { locations, getLocation } from "@/data/locations";
import { services } from "@/data/services";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { CtaBand } from "@/components/sections/cta-band";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

export function generateStaticParams() {
  return locations.map((loc) => ({ location: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocation(locationSlug);
  if (!location) return {};
  return {
    title: `Locksmith in ${location.name}, Dubai — All Services | Ababeel Key Trading`,
    description: `Professional locksmith services in ${location.name}, Dubai. Emergency lockouts, car key programming, lock repair, and more. Available 24/7. Call ${siteConfig.phone}.`,
    alternates: { canonical: `${siteConfig.url}/locations/${locationSlug}` },
    openGraph: {
      title: `Locksmith in ${location.name}, Dubai`,
      description: `24/7 locksmith services in ${location.name}. Emergency lockouts, car keys, lock repair and replacement. ${location.travelTimeFromBase} response time.`,
      url: `${siteConfig.url}/locations/${locationSlug}`,
      type: "website",
    },
  };
}

export default async function LocationHubPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = getLocation(locationSlug);
  if (!location) return null;

  const locationSchema = {
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
    areaServed: {
      "@type": "City",
      name: location.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
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
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Locations", href: "/locations" },
        { name: `${location.name} Locksmith`, href: `/locations/${locationSlug}` },
      ]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <BreadcrumbNav items={[
            { name: "Locations", href: "/locations" },
            { name: location.name, href: `/locations/${locationSlug}` },
          ]} />

          <div className="mt-6 mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              {location.zone}
            </p>
            <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
              Locksmith in {location.name}, Dubai
            </h1>
            <p className="text-[var(--color-brand-body)] text-lg leading-relaxed max-w-3xl mb-6">
              Ababeel Key Trading LLC provides 24/7 locksmith services in {location.name} across{" "}
              {location.propertyTypes.join(", ")}. From our Al Murar base in Deira, we reach{" "}
              {location.name} in{" "}
              <strong className="text-[var(--color-brand-white)]">{location.travelTimeFromBase}</strong>.
            </p>

            {/* Local context card */}
            <div className="card-surface rounded-2xl p-6 border-l-4 border-[var(--color-brand-gold)] mb-8">
              <h2 className="font-bold text-[var(--color-brand-white)] mb-2">
                About Locksmith Needs in {location.name}
              </h2>
              <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">
                {location.buildingNotes}
              </p>
              {location.nearbyLandmarks.length > 0 && (
                <p className="text-xs text-[var(--color-brand-muted)] mt-3">
                  <span className="font-medium">Landmarks we cover:</span>{" "}
                  {location.nearbyLandmarks.join(", ")}.
                </p>
              )}
            </div>
          </div>

          {/* All services grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
              All Locksmith Services in {location.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const urgencyBg = service.urgency === "high"
                  ? "border-red-400/20"
                  : service.urgency === "medium"
                  ? "border-amber-400/20"
                  : "border-[var(--color-brand-border)]";
                return (
                  <a
                    key={service.slug}
                    href={`/services/${service.slug}/${locationSlug}`}
                    className={`card-surface rounded-xl p-5 border ${urgencyBg} hover:border-[var(--color-brand-gold)]/60 transition-all group`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-[var(--color-brand-white)] text-sm group-hover:text-[var(--color-brand-gold)] transition-colors">
                        {service.name}
                      </h3>
                      {service.urgency === "high" && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-400/10 text-red-400 shrink-0 ml-2">24/7</span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--color-brand-muted)] leading-relaxed mb-3">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--color-brand-muted)]">
                        AED {service.priceRangeAED.min}–{service.priceRangeAED.max}
                      </span>
                      <span className="text-[var(--color-brand-gold)] group-hover:underline">
                        View →
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Map embed */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-4">
              Our Coverage in {location.name}
            </h2>
            <div className="rounded-2xl overflow-hidden border border-[var(--color-brand-border)]" style={{ height: 320 }}>
              <iframe
                title={`Map of ${location.name}, Dubai`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=14&output=embed`}
                aria-label={`Google Map centred on ${location.name}, Dubai`}
              />
            </div>
          </div>

        </div>
      </div>

      <CtaBand
        heading={`Need a locksmith in ${location.name} right now?`}
        subheading={`We reach ${location.name} in ${location.travelTimeFromBase}. Call or WhatsApp for a free quote — 24 hours, 7 days.`}
        pageName={`location-hub-${locationSlug}`}
        variant="urgency"
      />
    </>
  );
}

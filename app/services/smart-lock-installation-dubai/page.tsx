import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { getService } from "@/data/services";
import { locations, zones, getLocationsByZone } from "@/data/locations";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { CtaBand } from "@/components/sections/cta-band";

const SERVICE_SLUG = "smart-lock-installation-dubai";

export function generateMetadata(): Metadata {
  const service = getService(SERVICE_SLUG);
  if (!service) return {};
  return {
    title: `${service.name} Dubai — All Areas | Ababeel Key Trading`,
    description: `Professional ${service.name.toLowerCase()} across all Dubai areas. ${service.shortDescription} Available 24/7 with price quoted before dispatch.`,
    alternates: { canonical: `${siteConfig.url}/services/${SERVICE_SLUG}` },
  };
}

export default function ServiceHubPage() {
  const service = getService(SERVICE_SLUG);
  if (!service) return null;

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: service.name, href: `/services/${SERVICE_SLUG}` }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <BreadcrumbNav items={[{ name: "Services", href: "/services" }, { name: service.name, href: `/services/${SERVICE_SLUG}` }]} />

          <div className="mt-6 mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">Service</p>
            <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
              {service.name} in Dubai
            </h1>
            <p className="text-[var(--color-brand-body)] text-lg leading-relaxed max-w-3xl">
              {service.shortDescription} We cover all Dubai areas — select your location below for
              local availability, response times, and pricing.
            </p>
          </div>

          <div className="space-y-10">
            {zones.map((zone) => {
              const zoneLocations = getLocationsByZone(zone);
              if (!zoneLocations.length) return null;
              return (
                <div key={zone}>
                  <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
                    {zone}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {zoneLocations.map((loc) => (
                      <a
                        key={loc.slug}
                        href={`/services/${SERVICE_SLUG}/${loc.slug}`}
                        className="card-surface rounded-xl p-4 hover:border-[var(--color-brand-gold)] border border-[var(--color-brand-border)] transition-all group"
                      >
                        <p className="font-semibold text-sm text-[var(--color-brand-white)] group-hover:text-[var(--color-brand-gold)] transition-colors">
                          {loc.name}
                        </p>
                        <p className="text-xs text-[var(--color-brand-muted)] mt-1">{loc.travelTimeFromBase}</p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CtaBand
        heading={`Need ${service.name} in Dubai?`}
        subheading="Select your area above or call now — we cover all Dubai locations 24/7."
        pageName={`service-hub-${SERVICE_SLUG}`}
        variant="trust"
      />
    </>
  );
}

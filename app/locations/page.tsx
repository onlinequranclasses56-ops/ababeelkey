import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { zones, getLocationsByZone } from "@/data/locations";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

export const metadata: Metadata = {
  title: "Locksmith Services Across Dubai — All 42 Areas | Call +971 52 642 6161",
  description:
    "Ababeel Key Trading LLC covers all 42 Dubai areas — Downtown, Marina, Jumeirah, Deira, Al Barsha, Mirdif, and more. Emergency locksmith, car key programming & lock repair available 24/7. Call +971 52 642 6161.",
  alternates: { canonical: `${siteConfig.url}/locations` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Locksmith Service Areas in Dubai",
  description: "All Dubai locations served by Ababeel Key Trading LLC locksmith services",
  numberOfItems: 42,
  url: `${siteConfig.url}/locations`,
};

export default function LocationsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Locations", href: "/locations" }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <BreadcrumbNav items={[{ name: "Locations", href: "/locations" }]} />

          <div className="mt-6 mb-12 max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              Service Areas
            </p>
            <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-5 text-balance">
              Locksmith in Dubai — All Areas
            </h1>
            <p className="text-lg text-[var(--color-brand-body)] leading-relaxed">
              Ababeel Key Trading LLC provides locksmith services across all 42 major Dubai areas.
              Select your location below for local response times, service availability, and pricing.
            </p>
          </div>

          {/* Quick call strip */}
          <div className="card-surface rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-center gap-4 justify-between border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-sm text-[var(--color-brand-body)]">
              Not sure which area? <strong className="text-[var(--color-brand-white)]">Just call</strong> — we&apos;ll confirm coverage and ETA on the spot.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-sm shadow-[0_4px_16px_rgba(201,161,90,0.4)] hover:brightness-110 transition-all shrink-0"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>

          {/* Zones + locations */}
          <div className="space-y-12">
            {zones.map((zone) => {
              const locs = getLocationsByZone(zone);
              if (!locs.length) return null;
              return (
                <div key={zone}>
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4 border-b border-[var(--color-brand-border)] pb-2">
                    {zone}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {locs.map((loc) => (
                      <a
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="card-surface rounded-xl p-4 hover:border-[var(--color-brand-gold)] border border-[var(--color-brand-border)] transition-all group"
                      >
                        <p className="font-semibold text-sm text-[var(--color-brand-white)] group-hover:text-[var(--color-brand-gold)] transition-colors mb-1">
                          {loc.name}
                        </p>
                        <p className="text-xs text-[var(--color-brand-muted)]">{loc.travelTimeFromBase}</p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service links */}
          <div className="mt-14 card-surface rounded-2xl p-6">
            <h2 className="font-bold text-[var(--color-brand-white)] mb-4">Popular Services Across Dubai</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { href: "/services/emergency-locksmith-dubai", label: "Emergency Locksmith" },
                { href: "/services/car-key-programming-dubai", label: "Car Key Programming" },
                { href: "/services/key-cutting-dubai", label: "Key Cutting" },
                { href: "/services/home-lockout-service-dubai", label: "Home Lockout" },
                { href: "/services/lock-repair-replacement-dubai", label: "Lock Repair" },
                { href: "/services/smart-lock-installation-dubai", label: "Smart Lock Installation" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-4 py-3 rounded-xl border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors text-center"
                >
                  {label}
                </a>
              ))}
            </div>
            <a href="/services" className="mt-4 inline-block text-xs text-[var(--color-brand-gold)] hover:underline">
              All 20 locksmith services →
            </a>
          </div>
        </div>
      </div>

      <CtaBand
        heading="Need a locksmith anywhere in Dubai?"
        subheading={`Call ${siteConfig.phone} — we cover all 42 Dubai areas, 24 hours a day.`}
        pageName="locations-hub"
        variant="urgency"
      />
    </>
  );
}

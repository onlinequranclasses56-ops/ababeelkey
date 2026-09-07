import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function LocationCoverage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-brand-surface)] border-y border-[var(--color-brand-border)]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
            Where We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-brand-white)] text-balance mb-6">
            Locksmith Services Across Dubai
          </h2>
          <p className="text-[var(--color-brand-body)] mb-8 leading-relaxed">
            Based in <strong className="text-[var(--color-brand-white)]">Al Murar, Deira</strong>,
            we cover all of Dubai with fast response times. Emergency calls in Deira and Bur
            Dubai typically see arrival within 20–30 minutes.
          </p>
          <ul className="grid grid-cols-2 gap-2 mb-8">
            {siteConfig.areasServed.slice(0, 12).map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm text-[var(--color-brand-body)]">
                <MapPin className="h-3.5 w-3.5 text-[var(--color-brand-gold)] shrink-0" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {siteConfig.locations.map((loc) => (
              <a
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-4 py-2 rounded-lg border border-[var(--color-brand-border)] text-sm text-[var(--color-brand-body)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                {loc.name} Locksmith
              </a>
            ))}
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="rounded-2xl overflow-hidden border border-[var(--color-brand-border)] aspect-video lg:aspect-square">
          <iframe
            src={siteConfig.social.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Ababeel Key Trading LLC location map — Al Murar, Dubai"
          />
        </div>
      </div>
    </section>
  );
}

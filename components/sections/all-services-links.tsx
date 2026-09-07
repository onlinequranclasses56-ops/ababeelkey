import { siteConfig } from "@/lib/config/site";

interface AllServicesLinksProps {
  currentSlug?: string;
  guides?: { href: string; label: string }[];
}

export function AllServicesLinks({ currentSlug, guides }: AllServicesLinksProps) {
  return (
    <div className="space-y-4">
      {/* All services grid */}
      <div className="card-surface rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-[var(--color-brand-white)] text-sm">
            All Services
          </h3>
          <a
            href="/services"
            className="text-xs text-[var(--color-brand-gold)] hover:underline"
          >
            Services hub →
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {siteConfig.services.map((service) => {
            const isCurrent = service.slug === currentSlug;
            return isCurrent ? (
              <span
                key={service.slug}
                aria-current="page"
                className="text-xs px-3 py-2 rounded-lg border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] font-semibold cursor-default"
              >
                {service.name}
              </span>
            ) : (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-xs px-3 py-2 rounded-lg border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                {service.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* Optional related guides */}
      {guides && guides.length > 0 && (
        <div className="card-surface rounded-2xl p-6">
          <h3 className="font-bold text-[var(--color-brand-white)] text-sm mb-4">
            Related Guides
          </h3>
          <div className="flex flex-wrap gap-2">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="text-xs px-3 py-2 rounded-lg border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                {guide.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

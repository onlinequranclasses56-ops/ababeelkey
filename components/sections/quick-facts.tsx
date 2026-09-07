import { siteConfig } from "@/lib/config/site";

export function QuickFacts() {
  return (
    <aside
      className="card-surface rounded-2xl p-6 sm:p-8"
      aria-label="Quick Facts about Ababeel Key Trading LLC"
    >
      <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-5">
        Quick Facts
      </h2>
      <dl className="space-y-3 text-sm">
        {[
          { label: "Business", value: siteConfig.name },
          { label: "Location", value: siteConfig.address.full },
          { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
          { label: "Hours", value: siteConfig.hours },
          { label: "Google Rating", value: `${siteConfig.rating.value} / 5`, href: siteConfig.social.googleMapsShort },
          {
            label: "Services",
            value: siteConfig.services.map((s) => s.name).join(", "),
          },
          {
            label: "Areas Served",
            value: siteConfig.areasServed.slice(0, 8).join(", ") + " and more",
          },
        ].map(({ label, value, href }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:gap-3">
            <dt className="font-semibold text-[var(--color-brand-white)] sm:w-28 shrink-0">
              {label}
            </dt>
            <dd className="text-[var(--color-brand-body)]">
              {href ? (
                <a
                  href={href}
                  className="hover:text-[var(--color-brand-gold)] transition-colors underline decoration-[var(--color-brand-border)] underline-offset-2"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

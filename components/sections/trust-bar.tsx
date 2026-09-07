import { Star, Clock, Shield, Award } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

const items = [
  {
    icon: Star,
    label: `${siteConfig.rating.value}★ Google Rating`,
    href: siteConfig.social.googleMapsShort,
  },
  {
    icon: Clock,
    label: "Open 24 Hours / 7 Days",
  },
  {
    icon: Shield,
    label: "Licensed Dubai Locksmith",
  },
  {
    icon: Award,
    label: "Fast Emergency Response",
  },
];

export function TrustBar() {
  return (
    <div className="border-b border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-3">
          {items.map(({ icon: Icon, label, href }) => {
            const inner = (
              <span className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-gold)] transition-colors">
                <Icon className="h-4 w-4 text-[var(--color-brand-gold)]" aria-hidden="true" />
                {label}
              </span>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} — view on Google`}
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

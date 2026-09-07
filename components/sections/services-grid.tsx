import {
  KeyRound,
  Car,
  Lock,
  Home,
  Building2,
  Shield,
  Copy,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

const iconMap: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  "emergency-locksmith-dubai": Zap,
  "key-cutting-dubai": KeyRound,
  "car-key-programming-dubai": Car,
  "lock-repair-replacement-dubai": Lock,
  "home-lockout-service-dubai": Home,
  "office-commercial-locksmith-dubai": Building2,
  "safe-opening-safe-locksmith-dubai": Shield,
  "duplicate-key-services-dubai": Copy,
};

export function ServicesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
            Complete Locksmith &amp; Key Services in Dubai
          </h2>
          <p className="mt-4 text-[var(--color-brand-body)] max-w-2xl mx-auto">
            From emergency lockouts to precision key cutting and car key programming — all
            services available 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.slug];
            return (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group card-surface rounded-xl p-6 flex flex-col gap-4 hover:border-[var(--color-brand-gold)]/50 hover:bg-[rgba(201,161,90,0.04)] transition-all duration-200"
              >
                <div className="h-11 w-11 rounded-lg bg-[rgba(201,161,90,0.12)] flex items-center justify-center group-hover:bg-[rgba(201,161,90,0.2)] transition-colors">
                  {Icon && (
                    <Icon
                      className="h-5 w-5 text-[var(--color-brand-gold)]"
                      aria-hidden={true}
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-brand-white)] text-sm mb-1.5 group-hover:text-[var(--color-brand-gold)] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[var(--color-brand-muted)] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
                <span className="mt-auto text-xs font-semibold text-[var(--color-brand-gold)] flex items-center gap-1">
                  Learn more
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

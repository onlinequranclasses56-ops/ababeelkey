import type { Metadata } from "next";
import {
  KeyRound, Car, Lock, Home, Building2, Shield, Copy, Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Locksmith Services Dubai – Key Cutting, Emergency & Car Key Programming",
  description:
    "Full-service locksmith in Dubai: emergency lockouts, key cutting, car key programming, lock repair, safe opening & more. Available 24/7 in Al Murar and across Dubai.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "emergency-locksmith-dubai": Zap,
  "key-cutting-dubai": KeyRound,
  "car-key-programming-dubai": Car,
  "lock-repair-replacement-dubai": Lock,
  "home-lockout-service-dubai": Home,
  "office-commercial-locksmith-dubai": Building2,
  "safe-opening-safe-locksmith-dubai": Shield,
  "duplicate-key-services-dubai": Copy,
};

export default function ServicesHubPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <BreadcrumbNav items={[{ name: "Services", href: "/services" }]} />
          </div>

          <header className="mb-14 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-brand-white)] text-balance mb-5">
              Locksmith &amp; Key Services in Dubai
            </h1>
            <p className="text-lg text-[var(--color-brand-body)] leading-relaxed">
              Ababeel Key Trading LLC offers a full range of locksmith services in Dubai — from
              emergency lockouts and key cutting to car key programming and safe opening. Every
              service is available 24 hours a day, 7 days a week at our Al Murar base and across
              all Dubai areas.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {siteConfig.services.map((service) => {
              const Icon = iconMap[service.slug];
              return (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group card-surface rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--color-brand-gold)]/50 hover:bg-[rgba(201,161,90,0.04)] transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center group-hover:bg-[rgba(201,161,90,0.2)] transition-colors">
                    {Icon && <Icon className="h-6 w-6 text-[var(--color-brand-gold)]" />}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-[var(--color-brand-white)] text-base mb-2 group-hover:text-[var(--color-brand-gold)] transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-brand-gold)] flex items-center gap-1">
                    Learn more
                    <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <CtaBand variant="urgency" pageName="services-hub" />
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { LocationCoverage } from "@/components/sections/location-coverage";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { QuickFacts } from "@/components/sections/quick-facts";
import { siteConfig } from "@/lib/config/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "24/7 Locksmith & Key Cutting Dubai",
  description:
    "24-hour locksmith in Dubai — emergency lockouts, car key programming, lock repair & key cutting. Based in Al Murar, Deira. Call +971 52 642 6161 now — we answer instantly.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero — LCP element, dual CTA above the fold */}
      <Hero />

      {/* Trust bar — visible immediately below hero */}
      <TrustBar />

      {/* Quick Facts — ideal for AI/LLM extraction of entity+location+action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <QuickFacts />
        </div>
      </section>

      {/* Services grid */}
      <ServicesGrid />

      {/* Mid-page CTA (urgency variant) */}
      <CtaBand variant="urgency" pageName="mid-page-1" />

      {/* Location coverage + map */}
      <LocationCoverage />

      {/* Reviews */}
      <ReviewsSection />

      {/* Mid-page CTA (trust variant) */}
      <CtaBand variant="trust" pageName="mid-page-2" />

      {/* FAQ */}
      <FaqSection />

      {/* End-of-page CTA (price variant) */}
      <CtaBand variant="price" pageName="end-page" />

      {/* ── TOPICAL MAP — internal linking hub ──────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-brand-border)]" aria-label="Site navigation — all services and locations">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-2">
            All Locksmith Services in Dubai
          </h2>
          <p className="text-[var(--color-brand-muted)] mb-8 text-sm">
            Find the exact service and location page you need — every service, every Dubai area.
          </p>

          {/* All 20 services */}
          <div className="mb-12">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Services — All 20
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-xs px-3 py-2.5 rounded-lg border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)]/60 hover:text-[var(--color-brand-gold)] transition-colors leading-snug"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Key location quick links */}
          <div className="mb-10">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Popular Locations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {[
                { slug: "downtown-dubai", name: "Downtown Dubai" },
                { slug: "business-bay", name: "Business Bay" },
                { slug: "dubai-marina", name: "Dubai Marina" },
                { slug: "deira", name: "Deira" },
                { slug: "bur-dubai", name: "Bur Dubai" },
                { slug: "jumeirah-1", name: "Jumeirah" },
                { slug: "al-barsha", name: "Al Barsha" },
                { slug: "palm-jumeirah", name: "Palm Jumeirah" },
                { slug: "mirdif", name: "Mirdif" },
                { slug: "al-karama", name: "Al Karama" },
                { slug: "jlt", name: "JLT" },
                { slug: "jbr", name: "JBR" },
              ].map(({ slug, name }) => (
                <a
                  key={slug}
                  href={`/locations/${slug}`}
                  className="text-xs px-3 py-2.5 rounded-lg border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)]/60 hover:text-[var(--color-brand-gold)] transition-colors text-center"
                >
                  {name}
                </a>
              ))}
            </div>
            <a href="/locations" className="mt-3 inline-block text-xs text-[var(--color-brand-gold)] hover:underline">
              View all 42 Dubai locations →
            </a>
          </div>

          {/* Resources row */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Resources
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/guides", label: "Guides & Resources" },
                { href: "/blog", label: "Blog" },
                { href: "/reviews", label: "Customer Reviews" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs px-4 py-2 rounded-full border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

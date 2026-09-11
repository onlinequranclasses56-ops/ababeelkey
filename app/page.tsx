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

export const metadata: Metadata = {
  title: "24/7 Locksmith & Key Cutting Dubai | Call +971 52 642 6161 | Ababeel",
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
    </>
  );
}

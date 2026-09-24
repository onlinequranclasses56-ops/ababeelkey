import type { Metadata } from "next";
import { Phone, MapPin, Clock, Shield, Star, CheckCircle, Award } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

export const metadata: Metadata = {
  title: "About Ababeel Key Trading — Dubai's 24/7 Locksmith",
  description:
    "Ababeel Key Trading LLC is a licensed 24-hour locksmith and key cutting service based in Al Murar, Deira, Dubai. Transparent pricing, fast response, and professional technicians across all Dubai areas. Call +971 52 642 6161.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const pillars = [
  {
    icon: Clock,
    title: "Open 24 Hours, Every Day",
    body: "Emergencies don't follow business hours. Our technicians are available around the clock — including weekends, public holidays, and UAE National Day. Call any time and we answer.",
  },
  {
    icon: Phone,
    title: "Transparent Pricing",
    body: "We quote the price over the phone before dispatching anyone. The number we give you is the number you pay — no surprise fees, no call-out charges added on arrival.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    body: "All work is carried out by licensed technicians with full public liability insurance. We use non-destructive entry methods wherever possible to protect your property.",
  },
  {
    icon: Award,
    title: "Local Dubai Expertise",
    body: "Based in Al Murar, Deira — the heart of Dubai's key-cutting trade — we know every lock brand, building type, and neighbourhood across all 42 Dubai areas we serve.",
  },
];

const coverageZones = [
  { zone: "Downtown & Business Bay", areas: "Downtown Dubai, Business Bay, DIFC, Burj Khalifa Area" },
  { zone: "Marina & JBR", areas: "Dubai Marina, JBR, JLT, Palm Jumeirah" },
  { zone: "Jumeirah & Al Wasl", areas: "Jumeirah 1–3, Al Wasl, City Walk" },
  { zone: "Deira & Bur Dubai", areas: "Deira, Bur Dubai, Al Murar, Al Karama, Port Saeed, Naif" },
  { zone: "Al Barsha & Al Quoz", areas: "Al Barsha, Al Quoz, Al Mankhool, Al Safa" },
  { zone: "Outer East", areas: "Mirdif, Al Twar, Al Qusais, Muhaisnah, Silicon Oasis" },
  { zone: "Outer South & West", areas: "Al Furjan, Discovery Gardens, International City, Jebel Ali" },
  { zone: "Gated Communities", areas: "Arabian Ranches, The Meadows, The Springs, Emirates Hills" },
];

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "About", href: "/about" }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <BreadcrumbNav items={[{ name: "About Us", href: "/about" }]} />

          {/* Header */}
          <div className="mt-6 mb-12 max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-brand-white)] mb-6 text-balance">
              Dubai&apos;s Trusted 24-Hour Locksmith
            </h1>
            <p className="text-lg text-[var(--color-brand-body)] leading-relaxed mb-4">
              Ababeel Key Trading LLC is a licensed locksmith and key cutting service based in{" "}
              <strong className="text-[var(--color-brand-white)]">Al Murar, Deira, Dubai</strong>.
              We provide 24-hour emergency locksmith, car key programming, lock repair, and key
              cutting services across all Dubai areas.
            </p>
            <p className="text-[var(--color-brand-body)] leading-relaxed">
              Our technicians are based in the heart of Deira — the traditional trade district where
              Dubai&apos;s key cutting industry has operated for decades. From here, we reach most Dubai
              areas within 20–40 minutes, day or night.
            </p>
          </div>

          {/* Quick contact strip */}
          <div className="card-surface rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 border-l-4 border-[var(--color-brand-gold)]">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2.5 text-sm text-[var(--color-brand-body)]">
                <Phone className="h-4 w-4 text-[var(--color-brand-gold)] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="font-bold text-[var(--color-brand-white)] hover:text-[var(--color-brand-gold)] transition-colors">
                  {siteConfig.phone}
                </a>
                <span className="text-[var(--color-brand-muted)]">— we answer 24/7</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[var(--color-brand-body)]">
                <MapPin className="h-4 w-4 text-[var(--color-brand-gold)] mt-0.5 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[var(--color-brand-body)]">
                <Star className="h-4 w-4 text-[var(--color-brand-gold)] shrink-0" />
                <a href={siteConfig.social.googleMapsShort} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-gold)] transition-colors">
                  {siteConfig.rating.value}★ on Google Maps
                </a>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-sm shadow-[0_4px_20px_rgba(201,161,90,0.4)] hover:brightness-110 transition-all shrink-0"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* Why choose us */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
              Why Customers in Dubai Choose Ababeel Key Trading LLC
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div key={title} className="card-surface rounded-2xl p-6">
                  <Icon className="h-6 w-6 text-[var(--color-brand-gold)] mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-[var(--color-brand-white)] mb-2">{title}</h3>
                  <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services overview */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
              Our Services
            </h2>
            <p className="text-[var(--color-brand-body)] mb-6 leading-relaxed">
              We cover the full range of locksmith needs for Dubai residents, businesses, and vehicle owners:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
              {[
                "Emergency lockout service — home, car, office",
                "Car key programming — all makes and models",
                "Key cutting — standard, high-security, dimple keys",
                "Lock repair and replacement",
                "Smart lock installation and setup",
                "Master key systems for buildings",
                "Safe opening and combination reset",
                "Duplicate key cutting while you wait",
                "Rekeying — change locks without replacing",
                "Biometric access control installation",
                "Gate and garage lock services",
                "Padlock services — supply and fitting",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-brand-body)]">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <a href="/services" className="text-sm text-[var(--color-brand-gold)] hover:underline font-medium">
              View all 20 locksmith services →
            </a>
          </div>

          {/* Coverage */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
              Areas We Cover in Dubai
            </h2>
            <p className="text-[var(--color-brand-body)] mb-6 leading-relaxed">
              From our Al Murar base in Deira, we cover all 42 main areas across Dubai including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {coverageZones.map(({ zone, areas }) => (
                <div key={zone} className="card-surface rounded-xl p-4">
                  <p className="text-xs font-semibold tracking-wider uppercase text-[var(--color-brand-gold)] mb-1">{zone}</p>
                  <p className="text-sm text-[var(--color-brand-muted)]">{areas}</p>
                </div>
              ))}
            </div>
            <a href="/locations" className="text-sm text-[var(--color-brand-gold)] hover:underline font-medium">
              View all Dubai locations →
            </a>
          </div>

          {/* Internal links */}
          <div className="card-surface rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[var(--color-brand-white)] mb-4">Explore More</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/services", label: "All Services" },
                { href: "/locations", label: "All Locations" },
                { href: "/services/emergency-locksmith-dubai", label: "Emergency Locksmith" },
                { href: "/faq", label: "FAQ" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact Us" },
                { href: "/blog", label: "Blog & Guides" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-4 py-2 rounded-full border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaBand
        heading="Need a locksmith in Dubai?"
        subheading={`Call ${siteConfig.phone} — we answer 24 hours, 7 days. Free quote before any work begins.`}
        pageName="about"
        variant="trust"
      />
    </>
  );
}

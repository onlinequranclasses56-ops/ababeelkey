import { Phone, MapPin, Clock, Star, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { services } from "@/data/services";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

const topLocations = [
  { slug: "downtown-dubai", name: "Downtown Dubai" },
  { slug: "business-bay", name: "Business Bay" },
  { slug: "dubai-marina", name: "Dubai Marina" },
  { slug: "palm-jumeirah", name: "Palm Jumeirah" },
  { slug: "jumeirah-1", name: "Jumeirah" },
  { slug: "deira", name: "Deira" },
  { slug: "bur-dubai", name: "Bur Dubai" },
  { slug: "al-karama", name: "Al Karama" },
  { slug: "al-barsha", name: "Al Barsha" },
  { slug: "mirdif", name: "Mirdif" },
  { slug: "al-qusais", name: "Al Qusais" },
  { slug: "jbr", name: "JBR" },
  { slug: "jlt", name: "JLT" },
  { slug: "al-furjan", name: "Al Furjan" },
  { slug: "silicon-oasis", name: "Silicon Oasis" },
  { slug: "discovery-gardens", name: "Discovery Gardens" },
];

const blogLinks = [
  { href: "/blog/signs-you-need-emergency-locksmith-dubai", label: "10 Signs You Need an Emergency Locksmith" },
  { href: "/blog/lock-security-checklist-dubai-landlords", label: "Lock Security Checklist for Landlords" },
  { href: "/blog/lost-car-keys-dubai-what-to-do", label: "Lost Your Car Keys in Dubai?" },
  { href: "/blog/repair-vs-replace-lock-dubai", label: "When to Repair vs. Replace a Lock" },
  { href: "/blog/home-security-guide-dubai-expats", label: "Home Security Guide for Expats" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Customer Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/guides", label: "Guides & Resources" },
  { href: "/contact", label: "Contact Us" },
  { href: "/locations", label: "All Locations" },
  { href: "/services", label: "All Services" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] mt-auto">
      <LocalBusinessSchema />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Column 1–2 span: Brand + NAP */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-bold text-[var(--color-brand-white)] text-lg block">
                Ababeel Key Trading LLC
              </span>
              <span className="text-[var(--color-brand-gold)] text-xs font-medium tracking-widest uppercase">
                24/7 Locksmith · Dubai
              </span>
            </a>
            <p className="text-sm text-[var(--color-brand-muted)] mb-6 leading-relaxed">
              Licensed 24-hour locksmith and key cutting service in Dubai. Emergency lockouts, car key programming,
              lock repair — all areas, all hours.
            </p>

            {/* NAP */}
            <address className="not-italic space-y-3 text-sm mb-6">
              <div className="flex items-start gap-2.5 text-[var(--color-brand-body)]">
                <MapPin className="h-4 w-4 text-[var(--color-brand-gold)] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <span>{siteConfig.address.full}</span>
                  <a
                    href={siteConfig.plusCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-[var(--color-brand-muted)] hover:text-[var(--color-brand-gold)] transition-colors mt-0.5"
                  >
                    {siteConfig.plusCode} (Plus Code)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[var(--color-brand-gold)] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-[var(--color-brand-white)] font-bold hover:text-[var(--color-brand-gold)] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[var(--color-brand-gold)] shrink-0" aria-hidden="true" />
                <span className="text-[var(--color-brand-body)]">{siteConfig.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="h-4 w-4 text-[var(--color-brand-gold)] shrink-0" aria-hidden="true" />
                <a
                  href={siteConfig.social.googleMapsShort}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brand-body)] hover:text-[var(--color-brand-gold)] transition-colors"
                >
                  {siteConfig.rating.value}★ on Google
                </a>
              </div>
            </address>

            {/* Call CTA */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 h-12 w-full rounded-lg gradient-gold text-[#0A0A0B] font-bold text-sm shadow-[0_2px_12px_rgba(201,161,90,0.4)] hover:brightness-110 transition-all mb-4"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>
                Call Now — 24/7
                <span className="block text-xs font-bold">{siteConfig.phone}</span>
              </span>
            </a>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ababeel Key Trading on Facebook"
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label={`Call ${siteConfig.phone}`}
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Services — all 20 */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Services
            </h3>
            <ul className="space-y-1.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="text-xs text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors leading-snug block"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Locations
            </h3>
            <ul className="space-y-1.5">
              {topLocations.map((loc) => (
                <li key={loc.slug}>
                  <a
                    href={`/locations/${loc.slug}`}
                    className="text-xs text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors"
                  >
                    {loc.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/locations" className="text-xs text-[var(--color-brand-gold)] hover:underline mt-1 inline-block">
                  All 42 areas →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Company
            </h3>
            <ul className="space-y-1.5 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Blog */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Latest Articles
            </h3>
            <ul className="space-y-2">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors leading-snug block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/blog" className="text-xs text-[var(--color-brand-gold)] hover:underline mt-1 inline-block">
                  All articles →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Do-follow backlink strip */}
      <div className="border-t border-[var(--color-brand-border)] bg-[rgba(201,161,90,0.03)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
            Locksmith Service in Dubai, UAE
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href="https://locksmith-dubai.com/"
              title="Locksmith Dubai — Professional Lock Repair Service"
              className="text-[var(--color-brand-body)] hover:text-[var(--color-brand-gold)] transition-colors font-medium"
            >
              Locksmith Dubai – locksmith-dubai.com
            </a>
            <span className="text-[var(--color-brand-border)]" aria-hidden="true">|</span>
            <a
              href="https://share.google/ZOekFcEBOUNayzJTt"
              title="Ababeel Locksmith Dubai — Google Business Profile"
              target="_blank"
              rel="noopener"
              className="text-[var(--color-brand-body)] hover:text-[var(--color-brand-gold)] transition-colors"
            >
              ⭐ 4.7★ Google Reviews — Lock Repair Service Dubai
            </a>
            <span className="text-[var(--color-brand-border)]" aria-hidden="true">|</span>
            <a
              href="https://locksmith-dubai.com/services"
              title="Locksmith Services Dubai"
              className="text-[var(--color-brand-body)] hover:text-[var(--color-brand-gold)] transition-colors"
            >
              Lock Repair &amp; Replacement Dubai
            </a>
            <span className="text-[var(--color-brand-border)]" aria-hidden="true">|</span>
            <a
              href="https://locksmith-dubai.com/emergency"
              title="Emergency Locksmith Dubai — 24/7 Response"
              className="text-[var(--color-brand-body)] hover:text-[var(--color-brand-gold)] transition-colors"
            >
              Emergency Locksmith Dubai 24/7
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-brand-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-brand-muted)]">
          <p>© {year} Ababeel Key Trading LLC. All rights reserved.</p>
          <p>Licensed locksmith service — Dubai, UAE · {siteConfig.phone}</p>
        </div>
      </div>
    </footer>
  );
}

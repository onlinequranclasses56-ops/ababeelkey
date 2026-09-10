import { Phone, MessageCircle, MapPin, Clock, Star, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

const serviceLinks = siteConfig.services.map((s) => ({
  href: `/services/${s.slug}`,
  label: s.name,
}));

const locationLinks = siteConfig.locations.map((l) => ({
  href: `/locations/${l.slug}`,
  label: `${l.name} Locksmith`,
}));

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const blogLinks = [
  { href: "/blog/signs-you-need-emergency-locksmith-dubai", label: "10 Signs You Need an Emergency Locksmith" },
  { href: "/blog/lock-security-checklist-dubai-landlords", label: "Lock Security Checklist for Dubai Landlords" },
  { href: "/blog/lost-car-keys-dubai-what-to-do", label: "Lost Your Car Keys in Dubai?" },
  { href: "/blog/repair-vs-replace-lock-dubai", label: "When to Repair vs. Replace a Lock" },
  { href: "/blog/home-security-guide-dubai-expats", label: "Home Security Guide for Dubai Expats" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] mt-auto">
      <LocalBusinessSchema />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand + NAP */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span className="font-bold text-[var(--color-brand-white)] text-lg block">
                Ababeel Key Trading LLC
              </span>
              <span className="text-[var(--color-brand-gold)] text-xs font-medium tracking-widest uppercase">
                Key Cutting Service
              </span>
            </a>
            <p className="text-sm text-[var(--color-brand-muted)] mb-6 leading-relaxed">
              {siteConfig.tagline}. Your trusted 24-hour locksmith and key cutting service in Dubai, UAE.
            </p>

            {/* NAP — canonical, byte-for-byte consistent with schema */}
            <address className="not-italic space-y-3 text-sm">
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
                  className="text-[var(--color-brand-white)] font-semibold hover:text-[var(--color-brand-gold)] transition-colors"
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

            <div className="flex items-center gap-3 mt-5">
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
                href={`${siteConfig.whatsappUrl}?text=Hi%2C%20I%20need%20a%20locksmith.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-green-500 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Locations
            </h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Blog */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Latest Articles
            </h3>
            <ul className="space-y-2">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors leading-snug block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/blog"
                  className="text-xs text-[var(--color-brand-gold)] hover:underline mt-1 inline-block"
                >
                  All articles →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Company + CTA */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-4">
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl border border-[var(--color-brand-gold)]/30 bg-[rgba(201,161,90,0.06)] space-y-3">
              <p className="text-xs text-[var(--color-brand-body)] font-medium">
                Emergency? Call now — we answer 24/7.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 h-10 w-full rounded-lg gradient-gold text-[#0A0A0B] font-bold text-sm"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-brand-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-brand-muted)]">
          <p>
            © {year} Ababeel Key Trading LLC. All rights reserved.
          </p>
          <p>
            Licensed locksmith service in Dubai, UAE.
          </p>
        </div>
      </div>
    </footer>
  );
}

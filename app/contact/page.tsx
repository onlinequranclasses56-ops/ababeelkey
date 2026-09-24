import type { Metadata } from "next";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

export const metadata: Metadata = {
  title: "Contact Ababeel Key Trading Dubai | Call +971 52 642 6161",
  description:
    "Contact Ababeel Key Trading LLC for locksmith services in Dubai. Call +971 52 642 6161 — available 24 hours, 7 days. Based in Al Murar, Deira. Free quote before any work.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const quickServices = [
  { href: "/services/emergency-locksmith-dubai", label: "Emergency Lockout" },
  { href: "/services/car-key-programming-dubai", label: "Car Key Programming" },
  { href: "/services/key-cutting-dubai", label: "Key Cutting" },
  { href: "/services/lock-repair-replacement-dubai", label: "Lock Repair" },
  { href: "/services/home-lockout-service-dubai", label: "Home Lockout" },
  { href: "/services/safe-opening-safe-locksmith-dubai", label: "Safe Opening" },
];

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <BreadcrumbNav items={[{ name: "Contact", href: "/contact" }]} />

          <div className="mt-6 mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
              Call Us — We Answer 24/7
            </h1>
            <p className="text-lg text-[var(--color-brand-body)] leading-relaxed max-w-2xl">
              The fastest way to reach us is always a phone call. We answer immediately, give you
              a quote on the call, and dispatch within minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Primary call CTA */}
            <div className="card-surface rounded-2xl p-8 border border-[var(--color-brand-gold)]/30 flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">
                  Call or WhatsApp
                </p>
                <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-1">
                  {siteConfig.phone}
                </h2>
                <p className="text-sm text-[var(--color-brand-muted)]">
                  Available 24 hours · 7 days · 365 days a year
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-3 h-16 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-lg shadow-[0_4px_24px_rgba(201,161,90,0.5)] hover:brightness-110 transition-all"
                aria-label={`Call ${siteConfig.phone}`}
              >
                <Phone className="h-6 w-6" aria-hidden="true" />
                <span>
                  Call Now — 24/7
                  <span className="block text-sm font-semibold opacity-80">{siteConfig.phone}</span>
                </span>
              </a>
              <div className="text-sm text-[var(--color-brand-muted)] space-y-1.5">
                <p>✓ Free quote given over the phone</p>
                <p>✓ Price confirmed before dispatch</p>
                <p>✓ No hidden call-out fees</p>
                <p>✓ ID verification to protect you</p>
              </div>
            </div>

            {/* NAP + Location */}
            <div className="space-y-4">
              <div className="card-surface rounded-2xl p-6">
                <h2 className="font-bold text-[var(--color-brand-white)] mb-4">Our Details</h2>
                <address className="not-italic space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-[var(--color-brand-body)]">
                    <MapPin className="h-4 w-4 text-[var(--color-brand-gold)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--color-brand-white)]">Address</p>
                      <p>{siteConfig.address.full}</p>
                      <a
                        href={siteConfig.plusCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--color-brand-gold)] hover:underline mt-0.5 inline-block"
                      >
                        {siteConfig.plusCode} (Plus Code) →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--color-brand-body)]">
                    <Phone className="h-4 w-4 text-[var(--color-brand-gold)] shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--color-brand-white)]">Phone</p>
                      <a href={`tel:${siteConfig.phone}`} className="hover:text-[var(--color-brand-gold)] transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--color-brand-body)]">
                    <Clock className="h-4 w-4 text-[var(--color-brand-gold)] shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--color-brand-white)]">Hours</p>
                      <p>{siteConfig.hours} — 365 days a year</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--color-brand-body)]">
                    <Star className="h-4 w-4 text-[var(--color-brand-gold)] shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--color-brand-white)]">Google Rating</p>
                      <a
                        href={siteConfig.social.googleMapsShort}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-brand-gold)] transition-colors"
                      >
                        {siteConfig.rating.value}★ — View on Google Maps
                      </a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-4">Find Us</h2>
            <div className="rounded-2xl overflow-hidden border border-[var(--color-brand-border)]" style={{ height: 340 }}>
              <iframe
                title="Ababeel Key Trading LLC — Al Murar, Deira, Dubai"
                src={siteConfig.social.googleMapsEmbed}
                width="100%"
                height="340"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map showing Ababeel Key Trading LLC in Al Murar, Deira, Dubai"
              />
            </div>
          </div>

          {/* Quick service links */}
          <div className="card-surface rounded-2xl p-6">
            <h2 className="font-bold text-[var(--color-brand-white)] mb-4">What Do You Need?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {quickServices.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-4 py-3 rounded-xl border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors text-center"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/services" className="text-xs text-[var(--color-brand-gold)] hover:underline">All services →</a>
              <a href="/faq" className="text-xs text-[var(--color-brand-muted)] hover:text-[var(--color-brand-gold)] transition-colors">Common questions →</a>
              <a href="/locations" className="text-xs text-[var(--color-brand-muted)] hover:text-[var(--color-brand-gold)] transition-colors">Areas we cover →</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

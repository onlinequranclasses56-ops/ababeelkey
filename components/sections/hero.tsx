import { Phone, Star, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CallClickLink } from "@/components/layout/call-click-link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden grain"
      aria-label="Hero — Emergency Locksmith Dubai"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,161,90,0.12) 0%, transparent 60%), #0A0A0B",
      }}
    >
      {/* Background key pattern (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A15A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          {/* Above-fold badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="pulse-live text-xs font-semibold text-green-400">
              Available Now
            </span>
            <span className="text-[var(--color-brand-muted)] text-xs">·</span>
            <span className="flex items-center gap-1 text-xs text-[var(--color-brand-muted)]">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              Al Murar, Dubai
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--color-brand-white)] text-balance mb-6">
            Dubai&apos;s{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #C9A15A 0%, #E8C07A 50%, #C9A15A 100%)",
              }}
            >
              24-Hour Locksmith
            </span>{" "}
            &amp; Key Cutting Service
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-[var(--color-brand-body)] mb-8 max-w-xl leading-relaxed">
            Locked out? Need a key cut or car key programmed? Ababeel Key Trading LLC
            serves all of Dubai — emergency response, day or night, 365 days a year.
          </p>

          {/* Primary CTA — above the fold, call-only */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <CallClickLink
              href={`tel:${siteConfig.phone}`}
              pageName="hero"
              eventType="call_click"
              className="flex items-center justify-center gap-3 h-16 px-10 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-base sm:text-xl shadow-[0_4px_32px_rgba(201,161,90,0.6)] hover:shadow-[0_8px_40px_rgba(201,161,90,0.75)] hover:brightness-110 transition-all active:scale-[0.98]"
              aria-label={`Call Ababeel Key Trading: ${siteConfig.phone}`}
            >
              <Phone className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span>
                Call Now — 24/7
                <span className="block text-sm font-semibold opacity-80">
                  {siteConfig.phone}
                </span>
              </span>
            </CallClickLink>
          </div>

          {/* Social proof beneath CTAs */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--color-brand-muted)]">
            <a
              href={siteConfig.social.googleMapsShort}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-brand-gold)] transition-colors"
              aria-label="View our Google reviews"
            >
              <span className="flex">
                {[1, 2, 3].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]"
                    aria-hidden="true"
                  />
                ))}
                <Star
                  className="h-4 w-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)] opacity-80"
                  aria-hidden="true"
                />
                <Star
                  className="h-4 w-4 fill-transparent text-[var(--color-brand-gold)] opacity-40"
                  aria-hidden="true"
                />
              </span>
              <span className="font-semibold text-[var(--color-brand-white)]">
                {siteConfig.rating.value}
              </span>
              <span>on Google</span>
            </a>
            <span aria-hidden="true" className="hidden sm:block">·</span>
            <span>Emergency response across Dubai</span>
            <span aria-hidden="true" className="hidden sm:block">·</span>
            <span>Key cutting while you wait</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { MobileNav } from "./mobile-nav";
import { CallClickLink } from "./call-click-link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-[var(--color-brand-border)] bg-[rgba(10,10,11,0.92)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / brand */}
          <a
            href="/"
            className="flex flex-col leading-tight"
            aria-label="Ababeel Key Trading LLC – Home"
          >
            <span className="font-bold text-[var(--color-brand-white)] text-sm sm:text-base tracking-tight">
              Ababeel Key Trading
            </span>
            <span className="text-[var(--color-brand-gold)] text-xs font-medium tracking-widest uppercase">
              Key Cutting · Dubai
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="pulse-live text-xs font-semibold text-green-400">
              24/7 Open Now
            </div>
            <CallClickLink
              href={`tel:${siteConfig.phone}`}
              pageName="header"
              className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-gold text-[#0A0A0B] font-bold text-sm hover:brightness-110 transition-all"
              aria-label={`Call us now: ${siteConfig.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </CallClickLink>
          </div>

          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

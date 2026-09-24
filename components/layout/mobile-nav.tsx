"use client";

import * as React from "react";
import { X, Menu, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { services } from "@/data/services";
import { zones, getLocationsByZone } from "@/data/locations";

const flatLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<"services" | "locations" | null>(null);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() {
    setOpen(false);
    setExpanded(null);
  }

  function toggleSection(section: "services" | "locations") {
    setExpanded((prev) => (prev === section ? null : section));
  }

  return (
    <>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)] transition-colors"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Side panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-[var(--color-brand-surface)] border-l border-[var(--color-brand-border)] flex flex-col">

            {/* Panel header */}
            <div className="flex items-center justify-between p-5 border-b border-[var(--color-brand-border)] shrink-0">
              <span className="font-bold text-[var(--color-brand-white)] text-sm">
                Ababeel Key Trading
              </span>
              <button
                onClick={close}
                className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-[var(--color-brand-steel)] text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable nav */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="flex flex-col gap-1">

                {/* ── Services accordion ── */}
                <li>
                  <button
                    onClick={() => toggleSection("services")}
                    aria-expanded={expanded === "services"}
                    className="flex items-center justify-between w-full h-12 px-4 rounded-lg text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)] font-medium transition-colors text-sm"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${expanded === "services" ? "rotate-180 text-[var(--color-brand-gold)]" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {expanded === "services" && (
                    <div className="px-2 pb-2 pt-1">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <a
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={close}
                            className={`px-3 py-2 rounded-lg text-[11px] leading-snug transition-colors block ${
                              s.urgency === "high"
                                ? "text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-steel)]"
                                : "text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)]"
                            }`}
                          >
                            {s.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="/services"
                        onClick={close}
                        className="mt-2 block text-center text-xs text-[var(--color-brand-gold)] hover:underline px-4 py-2"
                      >
                        All 20 services →
                      </a>
                    </div>
                  )}
                </li>

                {/* ── Locations accordion ── */}
                <li>
                  <button
                    onClick={() => toggleSection("locations")}
                    aria-expanded={expanded === "locations"}
                    className="flex items-center justify-between w-full h-12 px-4 rounded-lg text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)] font-medium transition-colors text-sm"
                  >
                    <span>Locations</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${expanded === "locations" ? "rotate-180 text-[var(--color-brand-gold)]" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {expanded === "locations" && (
                    <div className="px-2 pb-2 pt-1 max-h-72 overflow-y-auto">
                      {zones.map((zone) => {
                        const zoneLocs = getLocationsByZone(zone);
                        return (
                          <div key={zone} className="mb-3">
                            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-brand-gold)] px-3 py-1">
                              {zone}
                            </p>
                            <div className="grid grid-cols-2 gap-0.5">
                              {zoneLocs.map((loc) => (
                                <a
                                  key={loc.slug}
                                  href={`/locations/${loc.slug}`}
                                  onClick={close}
                                  className="px-3 py-1.5 rounded text-[11px] text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)] transition-colors"
                                >
                                  {loc.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                      <a
                        href="/locations"
                        onClick={close}
                        className="block text-center text-xs text-[var(--color-brand-gold)] hover:underline px-4 py-2"
                      >
                        All 42 Dubai areas →
                      </a>
                    </div>
                  )}
                </li>

                {/* ── Flat links ── */}
                {flatLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={close}
                      className="flex items-center h-12 px-4 rounded-lg text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)] font-medium transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Call CTA */}
            <div className="p-5 border-t border-[var(--color-brand-border)] shrink-0">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 h-12 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-sm"
                onClick={close}
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

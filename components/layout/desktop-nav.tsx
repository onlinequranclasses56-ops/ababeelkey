"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { zones, getLocationsByZone } from "@/data/locations";

const otherLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function DesktopNav() {
  const [active, setActive] = React.useState<"services" | "locations" | null>(null);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu(menu: "services" | "locations") {
    if (timer.current) clearTimeout(timer.current);
    setActive(menu);
  }
  function scheduleClose() {
    timer.current = setTimeout(() => setActive(null), 180);
  }
  function cancelClose() {
    if (timer.current) clearTimeout(timer.current);
  }

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">

      {/* ── Services mega dropdown ──────────────────────────────────────── */}
      <div
        className="relative"
        onMouseEnter={() => openMenu("services")}
        onMouseLeave={scheduleClose}
      >
        <button
          aria-haspopup="true"
          aria-expanded={active === "services"}
          onClick={() => setActive(active === "services" ? null : "services")}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            active === "services"
              ? "text-[var(--color-brand-white)] bg-[var(--color-brand-steel)]"
              : "text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)]"
          }`}
        >
          Services
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${active === "services" ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {active === "services" && (
          <div
            role="region"
            aria-label="All services"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute top-full left-0 mt-2 w-[700px] rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] shadow-2xl shadow-black/60 z-50"
          >
            <div className="p-5">
              {/* Header row */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-brand-gold)]">
                  All 20 Locksmith Services — Dubai
                </span>
                <a
                  href="/services"
                  className="text-[10px] text-[var(--color-brand-gold)] hover:underline font-medium"
                >
                  View all →
                </a>
              </div>

              {/* 4-column service grid */}
              <div className="grid grid-cols-4 gap-1">
                {services.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-2 px-2.5 py-2 rounded-lg transition-colors hover:bg-[var(--color-brand-steel)]"
                  >
                    {s.urgency === "high" ? (
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-brand-gold)] shrink-0" aria-hidden="true" />
                    ) : (
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-brand-border)] shrink-0" aria-hidden="true" />
                    )}
                    <span className="text-[11px] leading-snug text-[var(--color-brand-muted)] group-hover:text-[var(--color-brand-white)] transition-colors">
                      {s.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* CTA footer */}
              <div className="mt-4 pt-4 border-t border-[var(--color-brand-border)] grid grid-cols-2 gap-2">
                <a
                  href="/services/emergency-locksmith-dubai"
                  className="text-center px-4 py-2.5 rounded-lg gradient-gold text-[#0A0A0B] text-xs font-bold hover:brightness-110 transition-all"
                >
                  Emergency Lockout — Open Now
                </a>
                <a
                  href="/services"
                  className="text-center px-4 py-2.5 rounded-lg border border-[var(--color-brand-border)] text-xs text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
                >
                  Browse All 20 Services
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Locations mega dropdown ─────────────────────────────────────── */}
      <div
        className="relative"
        onMouseEnter={() => openMenu("locations")}
        onMouseLeave={scheduleClose}
      >
        <button
          aria-haspopup="true"
          aria-expanded={active === "locations"}
          onClick={() => setActive(active === "locations" ? null : "locations")}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            active === "locations"
              ? "text-[var(--color-brand-white)] bg-[var(--color-brand-steel)]"
              : "text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)]"
          }`}
        >
          Locations
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${active === "locations" ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {active === "locations" && (
          <div
            role="region"
            aria-label="All Dubai locations"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute top-full left-0 mt-2 w-[780px] rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] shadow-2xl shadow-black/60 z-50"
          >
            <div className="p-5">
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-brand-gold)]">
                  All 42 Dubai Areas — Grouped by Zone
                </span>
                <a
                  href="/locations"
                  className="text-[10px] text-[var(--color-brand-gold)] hover:underline font-medium"
                >
                  View all 42 areas →
                </a>
              </div>

              {/* 4-column zone grid */}
              <div className="grid grid-cols-4 gap-x-6 gap-y-5">
                {zones.map((zone) => {
                  const zoneLocs = getLocationsByZone(zone);
                  return (
                    <div key={zone}>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-brand-white)] mb-2 pb-1 border-b border-[var(--color-brand-border)]">
                        {zone}
                      </p>
                      <ul className="space-y-1.5">
                        {zoneLocs.map((loc) => (
                          <li key={loc.slug}>
                            <a
                              href={`/locations/${loc.slug}`}
                              className="text-[11px] text-[var(--color-brand-muted)] hover:text-[var(--color-brand-gold)] transition-colors block leading-snug"
                            >
                              {loc.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Footer link */}
              <div className="mt-4 pt-3 border-t border-[var(--color-brand-border)]">
                <a
                  href="/locations"
                  className="text-xs text-[var(--color-brand-muted)] hover:text-[var(--color-brand-gold)] transition-colors"
                >
                  → Full coverage map — all 42 Dubai areas with travel times
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Flat nav links ──────────────────────────────────────────────── */}
      {otherLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)] transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

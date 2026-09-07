"use client";

import * as React from "react";
import { X, Menu } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-72 bg-[var(--color-brand-surface)] border-l border-[var(--color-brand-border)] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[var(--color-brand-border)]">
              <span className="font-bold text-[var(--color-brand-white)] text-sm">
                Ababeel Key Trading
              </span>
              <button
                onClick={() => setOpen(false)}
                className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-[var(--color-brand-steel)] text-[var(--color-brand-muted)] hover:text-[var(--color-brand-white)] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-5">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center h-12 px-4 rounded-lg text-[var(--color-brand-body)] hover:text-[var(--color-brand-white)] hover:bg-[var(--color-brand-steel)] font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-5 border-t border-[var(--color-brand-border)] flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 h-12 rounded-xl gradient-gold text-[#0A0A0B] font-bold"
                onClick={() => setOpen(false)}
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

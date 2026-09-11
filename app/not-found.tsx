import type { Metadata } from "next";
import { Phone, Home, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Page Not Found – Ababeel Key Trading LLC",
  description: "The page you're looking for doesn't exist. Return to the Ababeel Key Trading LLC homepage or call us on +971 52 642 6161.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-24 text-center">
      <div className="h-16 w-16 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center mb-6">
        <Wrench className="h-8 w-8 text-[var(--color-brand-gold)]" />
      </div>

      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
        404 – Not Found
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
        This page doesn&apos;t exist
      </h1>
      <p className="text-[var(--color-brand-body)] max-w-md mb-10 leading-relaxed">
        The link may be broken or the page may have moved. If you need a locksmith in Dubai
        right now, call us directly — we answer 24/7.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[var(--color-brand-steel)] border border-[var(--color-brand-border)] text-[var(--color-brand-white)] font-semibold text-sm hover:border-[var(--color-brand-gold)] transition-colors"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-sm"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {siteConfig.phone}
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg w-full">
        {[
          { href: "/services/emergency-locksmith-dubai", label: "Emergency Locksmith" },
          { href: "/services/key-cutting-dubai", label: "Key Cutting Dubai" },
          { href: "/services/car-key-programming-dubai", label: "Car Key Programming" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm px-4 py-2.5 rounded-lg border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

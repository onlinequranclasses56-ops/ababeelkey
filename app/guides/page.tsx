import type { Metadata } from "next";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Dubai Locksmith Guides & Resources",
  description:
    "Free guides for Dubai residents — what to do in a lockout, when to replace vs repair locks, home security tips, car key advice, and locksmith cost guides. Call +971 52 642 6161 for immediate help.",
  alternates: { canonical: `${siteConfig.url}/guides` },
};

const blogGuides = [
  {
    href: "/blog/signs-you-need-emergency-locksmith-dubai",
    title: "10 Signs You Need an Emergency Locksmith in Dubai",
    excerpt: "From jammed locks to suspicious key copies, know when to call a professional rather than DIY.",
    readTime: "5 min read",
    category: "Emergency",
  },
  {
    href: "/blog/lock-security-checklist-dubai-landlords",
    title: "Lock Security Checklist for Dubai Landlords",
    excerpt: "A practical checklist for landlords to secure their properties before and between tenancies.",
    readTime: "6 min read",
    category: "Security",
  },
  {
    href: "/blog/lost-car-keys-dubai-what-to-do",
    title: "Lost Your Car Keys in Dubai? Here's What to Do",
    excerpt: "Step-by-step guide for handling a lost car key in Dubai — from locksmith vs dealer to what to expect.",
    readTime: "4 min read",
    category: "Car Keys",
  },
  {
    href: "/blog/repair-vs-replace-lock-dubai",
    title: "When to Repair vs. Replace a Lock in Dubai",
    excerpt: "How to decide whether your lock needs repair or full replacement — and what it costs either way.",
    readTime: "4 min read",
    category: "Locks",
  },
  {
    href: "/blog/home-security-guide-dubai-expats",
    title: "Home Security Guide for Dubai Expats",
    excerpt: "Practical home security advice tailored to Dubai apartment and villa living for expat residents.",
    readTime: "7 min read",
    category: "Security",
  },
];

const quickGuides = [
  {
    title: "Locksmith Cost Guide: Dubai Pricing",
    items: [
      { service: "Emergency home lockout", price: "AED 150–300" },
      { service: "Car key programming", price: "AED 200–1,000+" },
      { service: "Standard key cutting", price: "AED 15–30" },
      { service: "Lock replacement", price: "AED 80–250" },
      { service: "Smart lock installation", price: "AED 300–1,500" },
      { service: "Safe opening", price: "AED 200–800" },
      { service: "Rekeying", price: "AED 100–350" },
    ],
    cta: { href: "/faq#pricing", label: "Pricing FAQ →" },
  },
];

const serviceLinks = [
  { href: "/services/emergency-locksmith-dubai", label: "Emergency Locksmith Dubai" },
  { href: "/services/car-key-programming-dubai", label: "Car Key Programming" },
  { href: "/services/key-cutting-dubai", label: "Key Cutting Dubai" },
  { href: "/services/lock-repair-replacement-dubai", label: "Lock Repair & Replacement" },
  { href: "/services/home-lockout-service-dubai", label: "Home Lockout Service" },
  { href: "/services/smart-lock-installation-dubai", label: "Smart Lock Installation" },
  { href: "/services/safe-opening-safe-locksmith-dubai", label: "Safe Opening" },
  { href: "/services/rekeying-services-dubai", label: "Lock Rekeying" },
];

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Guides", href: "/guides" }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <BreadcrumbNav items={[{ name: "Guides", href: "/guides" }]} />

          <div className="mt-6 mb-12 max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              Guides & Resources
            </p>
            <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
              Dubai Locksmith Guides
            </h1>
            <p className="text-lg text-[var(--color-brand-body)] leading-relaxed">
              Practical guides for Dubai residents — lockouts, lock security, car keys, pricing, and more.
              Need immediate help? Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold hover:underline">
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>

          {/* Blog guides */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
              <BookOpen className="inline h-5 w-5 mr-2 text-[var(--color-brand-gold)]" aria-hidden="true" />
              Locksmith Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogGuides.map(({ href, title, excerpt, readTime, category }) => (
                <a
                  key={href}
                  href={href}
                  className="card-surface rounded-2xl p-6 hover:border-[var(--color-brand-gold)]/60 border border-[var(--color-brand-border)] transition-all group flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(201,161,90,0.12)] text-[var(--color-brand-gold)]">
                      {category}
                    </span>
                    <span className="text-xs text-[var(--color-brand-muted)] flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-[var(--color-brand-white)] text-sm group-hover:text-[var(--color-brand-gold)] transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs text-[var(--color-brand-muted)] leading-relaxed flex-1">{excerpt}</p>
                  <span className="text-xs text-[var(--color-brand-gold)] flex items-center gap-1 group-hover:underline">
                    Read guide <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Pricing quick guide */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
              Locksmith Costs in Dubai — Quick Reference
            </h2>
            <div className="card-surface rounded-2xl p-6">
              <div className="space-y-2 mb-5">
                {quickGuides[0].items.map(({ service, price }) => (
                  <div key={service} className="flex items-center justify-between py-2 border-b border-[var(--color-brand-border)] last:border-0">
                    <span className="text-sm text-[var(--color-brand-body)]">{service}</span>
                    <span className="text-sm font-bold text-[var(--color-brand-gold)]">{price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-brand-muted)] mb-3">
                All prices quoted before attending. No call-out fees. Call{" "}
                <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] hover:underline">{siteConfig.phone}</a>
                {" "}for a free quote.
              </p>
              <a href="/faq#pricing" className="text-xs text-[var(--color-brand-gold)] hover:underline">
                Pricing FAQ →
              </a>
            </div>
          </section>

          {/* Emergency quick guide */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
              What to Do in a Lockout — Quick Guide
            </h2>
            <div className="card-surface rounded-2xl p-6 border-l-4 border-[var(--color-brand-gold)]">
              <ol className="space-y-3">
                {[
                  `Call ${siteConfig.phone} — we answer immediately, 24 hours a day`,
                  "Tell us your exact address and what you're locked out of",
                  "We quote the price on the phone and confirm our ETA",
                  "Stay in a safe, well-lit area — do NOT try to force the door",
                  "Have your UAE ID or tenancy contract ready for identity verification",
                  "Our technician arrives, verifies your ID, and opens the lock non-destructively",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--color-brand-body)]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(201,161,90,0.15)] text-[var(--color-brand-gold)] font-bold text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: step }} />
                  </li>
                ))}
              </ol>
              <div className="mt-5">
                <a
                  href="/services/emergency-locksmith-dubai"
                  className="text-xs text-[var(--color-brand-gold)] hover:underline"
                >
                  Emergency locksmith service details →
                </a>
              </div>
            </div>
          </section>

          {/* Service links */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-4">All Locksmith Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {serviceLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-4 py-3 rounded-xl border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors text-center"
                >
                  {label}
                </a>
              ))}
            </div>
            <a href="/services" className="mt-3 inline-block text-xs text-[var(--color-brand-gold)] hover:underline">
              View all 20 services →
            </a>
          </section>
        </div>
      </div>

      <CtaBand
        heading="Need a locksmith right now?"
        subheading={`Skip the reading — call ${siteConfig.phone} and we'll have someone with you fast.`}
        pageName="guides"
        variant="urgency"
      />
    </>
  );
}

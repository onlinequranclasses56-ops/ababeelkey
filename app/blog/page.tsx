import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Locksmith Tips & Security Guides | Ababeel Key Trading",
  description:
    "Expert locksmith advice for Dubai residents. Tips on lock security, emergency lockouts, car key replacement, and home security from Ababeel Key Trading LLC.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Locksmith Tips & Security Guides | Ababeel Key Trading Dubai",
    description:
      "Expert locksmith advice for Dubai residents. Lock security, emergency lockouts, car key replacement, and home security tips.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

const posts = [
  {
    slug: "signs-you-need-emergency-locksmith-dubai",
    title: "10 Signs You Need an Emergency Locksmith in Dubai Right Now",
    excerpt:
      "Broken key in the lock? Tampering marks? Aging cylinder? Learn the 10 warning signs that mean you need to call a Dubai locksmith immediately — before a small problem becomes a serious security risk.",
    date: "2026-09-09",
    readTime: "6 min read",
    category: "Emergency",
  },
  {
    slug: "lock-security-checklist-dubai-landlords",
    title: "Lock Security Checklist Every Dubai Landlord and Tenant Must Read",
    excerpt:
      "Renting or managing property in Dubai? This professional checklist covers lock changes between tenancies, lock grades, master key risks, and everything you need to protect your investment.",
    date: "2026-09-09",
    readTime: "7 min read",
    category: "Property Security",
  },
  {
    slug: "lost-car-keys-dubai-what-to-do",
    title: "Lost Your Car Keys in Dubai? Here's Exactly What To Do",
    excerpt:
      "Don't call the dealership first. A certified automotive locksmith in Dubai can cut and programme your replacement key on-site for less — here's the step-by-step guide.",
    date: "2026-09-09",
    readTime: "5 min read",
    category: "Car Keys",
  },
  {
    slug: "repair-vs-replace-lock-dubai",
    title: "When to Repair vs. Replace a Lock in Dubai — A Homeowner's Guide",
    excerpt:
      "Not every lock problem needs a full replacement. This guide explains exactly which issues can be repaired, which require a new lock, and when to call a professional for an honest assessment.",
    date: "2026-09-09",
    readTime: "6 min read",
    category: "Lock Repair",
  },
  {
    slug: "home-security-guide-dubai-expats",
    title: "The Complete Guide to Home Security for Dubai Expats",
    excerpt:
      "Moving to Dubai? Understand lock grades, your rights as a tenant, what to do in a lockout, and how to build a simple security toolkit — from residents who know the local landscape.",
    date: "2026-09-09",
    readTime: "8 min read",
    category: "Home Security",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[{ name: "Blog", href: "/blog" }]} />
          </div>

          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              Locksmith Advice
            </p>
            <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
              Security Guides &amp; Locksmith Tips
            </h1>
            <p className="text-[var(--color-brand-body)] text-lg leading-relaxed max-w-2xl">
              Practical advice on lock security, emergency lockouts, car key replacement, and home
              security — written by Dubai&apos;s professional locksmith team.
            </p>
          </div>

          <div className="grid gap-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block card-surface rounded-2xl p-6 border border-[var(--color-brand-border)] hover:border-[var(--color-brand-gold)]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(201,161,90,0.12)] text-[var(--color-brand-gold)]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--color-brand-muted)]">{post.readTime}</span>
                  <span className="text-xs text-[var(--color-brand-muted)] ml-auto">
                    {new Date(post.date).toLocaleDateString("en-AE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-2 group-hover:text-[var(--color-brand-gold)] transition-colors text-balance">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-xs font-semibold text-[var(--color-brand-gold)] group-hover:underline">
                  Read article →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        heading="Need a locksmith in Dubai right now?"
        subheading="Ababeel Key Trading LLC is open 24 hours. Call or WhatsApp for immediate assistance across all Dubai areas."
        pageName="blog-index"
        variant="trust"
      />
    </>
  );
}

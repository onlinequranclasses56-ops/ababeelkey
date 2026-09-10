import type { Metadata } from "next";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ArticleSchema } from "@/components/seo/article-schema";
import { CtaBand } from "@/components/sections/cta-band";
import { AllServicesLinks } from "@/components/sections/all-services-links";

const SLUG = "home-security-guide-dubai-expats";
const DATE = "2026-09-09";

export const metadata: Metadata = {
  title: "Complete Home Security Guide for Dubai Expats | Ababeel Key Trading",
  description:
    "Moving to Dubai? Understand lock grades, tenant rights, what to do in a lockout, and how to build a practical security setup — from Dubai's professional locksmith team.",
  alternates: { canonical: `${siteConfig.url}/blog/${SLUG}` },
  openGraph: {
    title: "Complete Home Security Guide for Dubai Expats",
    description:
      "Moving to Dubai? Lock grades, tenant rights, lockout procedures, and a practical security checklist from Dubai's professional locksmith team.",
    url: `${siteConfig.url}/blog/${SLUG}`,
    type: "article",
  },
};

const toolkit = [
  { priority: "Immediate", action: "Change locks on move-in", cost: "AED 150–350" },
  { priority: "Week 1", action: "Get spare keys cut", cost: "AED 20–80" },
  { priority: "Month 1", action: "Install secondary deadbolt", cost: "AED 200–500" },
  { priority: "Ongoing", action: "Annual lock inspection", cost: "AED 100–200" },
];

export default function ExpatSecurityGuidePage() {
  return (
    <>
      <ArticleSchema
        title="The Complete Guide to Home Security for Dubai Expats"
        description="Moving to Dubai? Understand lock grades, tenant rights, lockout procedures, and how to build a practical home security setup."
        slug={SLUG}
        datePublished={DATE}
        dateModified={DATE}
      />
      <BreadcrumbSchema items={[
        { name: "Blog", href: "/blog" },
        { name: "Home Security Guide for Dubai Expats", href: `/blog/${SLUG}` },
      ]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Blog", href: "/blog" },
              { name: "Expat Security Guide", href: `/blog/${SLUG}` },
            ]} />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(201,161,90,0.12)] text-[var(--color-brand-gold)]">
              Home Security
            </span>
            <span className="text-xs text-[var(--color-brand-muted)]">8 min read</span>
            <time dateTime={DATE} className="text-xs text-[var(--color-brand-muted)] ml-auto">
              9 September 2026
            </time>
          </div>

          <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-6 text-balance">
            The Complete Guide to Home Security for Dubai Expats
          </h1>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Dubai is one of the safest cities in the world by global crime statistics. But
              &ldquo;safe city&rdquo; doesn&apos;t mean &ldquo;security optional.&rdquo; Thousands
              of expats arrive each year without understanding Dubai&apos;s lock standards, tenant
              rights, or what to do when things go wrong. This guide is for you.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
            Understanding Dubai&apos;s Lock Market
          </h2>
          <p className="text-[var(--color-brand-body)] leading-relaxed mb-6">
            Many apartments and villas in Dubai come with developer-installed locks that meet
            minimum code — not maximum security. Developers prioritise cost over security grade,
            which means the locks on your new home may be basic pin tumbler cylinders with no
            anti-pick or anti-snap protection.
          </p>
          <div className="card-surface rounded-2xl p-6 mb-10">
            <h3 className="font-bold text-[var(--color-brand-white)] mb-4">Before you move in:</h3>
            <ul className="space-y-3">
              {[
                "Ask the agent or developer what lock grade is installed — if they can't tell you, that's your answer",
                "Get the locks changed before you move your belongings in",
                "Ask about master key systems — some buildings retain master key access for maintenance staff; know your rights under UAE tenancy law",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-[var(--color-brand-body)]">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
            Door Security Beyond the Lock
          </h2>
          <p className="text-[var(--color-brand-body)] leading-relaxed mb-4">
            The lock is only as strong as the door and frame around it. In Dubai, many internal
            apartment doors use hollow-core construction that can be kicked in regardless of lock
            quality. For high-value properties, consider:
          </p>
          <ul className="space-y-2 mb-10">
            {[
              "Reinforced strike plates with long screws into the structural frame",
              "Door frame reinforcement kits — available from professional locksmiths",
              "Security door chains or bars for overnight use and when you're home",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-[var(--color-brand-body)]">
                <Shield className="h-4 w-4 text-[var(--color-brand-gold)] mt-0.5 shrink-0" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
            What to Do If You&apos;re Locked Out in Dubai
          </h2>
          <div className="card-surface rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm font-semibold text-[var(--color-brand-white)]">
                Don&apos;t try to break in yourself. Forced entry — even to your own property —
                creates security vulnerabilities that are often worse than the lockout itself.
              </p>
            </div>
            <ol className="space-y-3">
              {[
                "Call your building's security desk first — some 24/7 concierge services can provide access",
                "If unavailable, call a licensed 24/7 emergency locksmith in Dubai",
                "Always have your Emirates ID or tenancy contract available to verify occupancy",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-brand-body)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(201,161,90,0.15)] text-[var(--color-brand-gold)] text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm text-[var(--color-brand-muted)] mt-4">
              A professional mobile locksmith in Dubai can typically reach you within 20–45 minutes
              anywhere in the city and open your door without damage.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Expat-Specific Security Scenarios
          </h2>
          <div className="space-y-4 mb-12">
            {[
              {
                title: "You're Going Home for the Holidays",
                body: "Before leaving Dubai for an extended period: double-lock all external doors, ask a trusted neighbour to check periodically, and consider a temporary door alarm for added peace of mind.",
              },
              {
                title: "You've Had a Flatmate Move Out",
                body: "If a flatmate has left and you're not 100% certain they've returned every copy of every key, get the locks changed. This is standard practice and costs very little relative to the security it provides.",
              },
              {
                title: "Your Landlord Claims the Right to Enter Anytime",
                body: "Under Dubai tenancy law, landlords must give adequate notice before entering except in genuine emergencies. If you feel your privacy is at risk, you have the right to add a secondary lock that only you control.",
              },
            ].map((scenario) => (
              <div key={scenario.title} className="card-surface rounded-2xl p-6">
                <h3 className="font-bold text-[var(--color-brand-white)] mb-2">{scenario.title}</h3>
                <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">{scenario.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
            Your Dubai Security Toolkit
          </h2>
          <div className="card-surface rounded-2xl overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-brand-border)]">
                  <th className="text-left px-5 py-3 text-[var(--color-brand-gold)] font-semibold">Priority</th>
                  <th className="text-left px-5 py-3 text-[var(--color-brand-gold)] font-semibold">Action</th>
                  <th className="text-left px-5 py-3 text-[var(--color-brand-gold)] font-semibold">Est. Cost</th>
                </tr>
              </thead>
              <tbody>
                {toolkit.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--color-brand-border)] last:border-0">
                    <td className="px-5 py-3 text-[var(--color-brand-white)] font-semibold">{row.priority}</td>
                    <td className="px-5 py-3 text-[var(--color-brand-body)]">{row.action}</td>
                    <td className="px-5 py-3 text-[var(--color-brand-muted)]">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <AllServicesLinks
            guides={[
              { href: "/blog/lock-security-checklist-dubai-landlords", label: "Landlord Lock Security Checklist" },
              { href: "/blog/repair-vs-replace-lock-dubai", label: "Repair vs Replace a Lock" },
              { href: "/blog/signs-you-need-emergency-locksmith-dubai", label: "10 Signs You Need a Locksmith" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="New to Dubai? Let us secure your home properly."
        subheading="Lock change on move-in, spare keys cut, deadbolt installation — Ababeel Key Trading LLC handles it all. Call today."
        pageName="blog-expat-security"
        variant="trust"
      />
    </>
  );
}

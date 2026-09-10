import type { Metadata } from "next";
import { Wrench, ShieldAlert, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ArticleSchema } from "@/components/seo/article-schema";
import { CtaBand } from "@/components/sections/cta-band";
import { AllServicesLinks } from "@/components/sections/all-services-links";

const SLUG = "repair-vs-replace-lock-dubai";
const DATE = "2026-09-09";

export const metadata: Metadata = {
  title: "Repair vs Replace a Lock in Dubai — Homeowner's Guide | Ababeel Key Trading",
  description:
    "Should you repair or replace your door lock? Dubai homeowners can save money and improve security with this honest guide on when to fix, when to replace, and when to call a pro.",
  alternates: { canonical: `${siteConfig.url}/blog/${SLUG}` },
  openGraph: {
    title: "Repair vs Replace a Lock in Dubai — Homeowner's Guide",
    description:
      "When to repair vs replace your door lock in Dubai. Honest advice on which issues can be fixed and which require a new cylinder.",
    url: `${siteConfig.url}/blog/${SLUG}`,
    type: "article",
  },
};

const repairCases = [
  {
    title: "Stiff or Sticking Lock",
    body: "Dubai's mix of desert dust and coastal humidity is brutal on lock mechanisms. A stiff lock that's otherwise intact can often be serviced with a professional graphite lubricant application and internal cleaning. Do not use oil-based lubricants like WD-40 — they attract dust and accelerate internal wear.",
  },
  {
    title: "Misaligned Latch or Bolt",
    body: "If your latch doesn't line up with the strike plate, the door or frame may have shifted slightly — common in older Dubai buildings that settle over time. A locksmith can adjust the strike plate or file the opening to restore alignment without replacing the lock itself.",
  },
  {
    title: "Loose Door Handle or Escutcheon",
    body: "A wobbly handle is almost always a matter of tightening screws on the rose plate or internal mechanism. This is one of the few lock issues a confident DIYer can fix safely — but call us if the screws won't tighten or the mechanism feels loose after adjustment.",
  },
  {
    title: "Lock Won't Turn From Inside",
    body: "If the lock operates from the outside with a key but not from the inside with the thumb turn, the internal cam or thumb turn component has likely failed. This is a part-level repair, not a full lock replacement. A locksmith can swap just the internal component.",
  },
];

const replaceCases = [
  {
    title: "Visible Damage to Lock Body or Cylinder",
    body: "If the cylinder shows drill marks, the casing is cracked, or the lock has been forced in any way, repair is not appropriate. The structural integrity of the lock is compromised and it must be replaced entirely.",
  },
  {
    title: "Lock More Than 7 Years Old",
    body: "Locks degrade. Springs weaken, pins wear, and tolerances that once prevented picking become sloppy over time. A lock that's served its lifespan should be replaced proactively — not reactively after a security incident.",
  },
  {
    title: "Post-Burglary or Attempted Break-In",
    body: "Even if the lock 'still works,' a lock that's been attacked has absorbed structural stress. It will fail faster under future attack. Always replace locks after any security incident, even if no entry was achieved.",
  },
  {
    title: "Lost or Stolen Keys",
    body: "If your keys are lost in public — especially with any identifying information such as an address tag — your lock must be replaced. While rekeying is cheaper, if the lock is old, a full replacement offers far better security value.",
  },
  {
    title: "Upgrading Security Grade",
    body: "If you're moving from a basic pin tumbler lock to a high-security model with anti-snap, anti-bump, and anti-drill ratings, this is a replacement scenario by definition. Existing low-grade locks cannot be upgraded — they must be swapped out.",
  },
];

export default function RepairVsReplacePage() {
  return (
    <>
      <ArticleSchema
        title="When to Repair vs. Replace a Lock in Dubai — A Homeowner's Guide"
        description="Honest guide on when to repair vs replace your door lock in Dubai. Which issues can be fixed and which need a new cylinder."
        slug={SLUG}
        datePublished={DATE}
        dateModified={DATE}
      />
      <BreadcrumbSchema items={[
        { name: "Blog", href: "/blog" },
        { name: "Repair vs Replace a Lock Dubai", href: `/blog/${SLUG}` },
      ]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Blog", href: "/blog" },
              { name: "Repair vs Replace Lock", href: `/blog/${SLUG}` },
            ]} />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(201,161,90,0.12)] text-[var(--color-brand-gold)]">
              Lock Repair
            </span>
            <span className="text-xs text-[var(--color-brand-muted)]">6 min read</span>
            <time dateTime={DATE} className="text-xs text-[var(--color-brand-muted)] ml-auto">
              9 September 2026
            </time>
          </div>

          <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-6 text-balance">
            When to Repair vs. Replace a Lock in Dubai — A Homeowner&apos;s Guide
          </h1>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Not every lock problem requires a full replacement. But not every problem can be fixed
              with a can of WD-40 either. Knowing the difference saves you money and, more
              importantly, keeps your home secure. Here&apos;s the honest breakdown.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6 flex items-center gap-3">
            <Wrench className="h-6 w-6 text-[var(--color-brand-gold)]" aria-hidden="true" />
            Lock Problems You Can Repair
          </h2>
          <div className="space-y-4 mb-12">
            {repairCases.map((item, i) => (
              <div key={i} className="card-surface rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-[var(--color-brand-white)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6 flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-amber-400" aria-hidden="true" />
            Lock Problems That Require Full Replacement
          </h2>
          <div className="space-y-4 mb-12">
            {replaceCases.map((item, i) => (
              <div key={i} className="card-surface rounded-2xl p-6 border border-amber-400/10">
                <h3 className="font-bold text-[var(--color-brand-white)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="card-surface rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-3">
              The Professional Assessment Option
            </h2>
            <p className="text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Not sure which category you&apos;re in? A professional locksmith can inspect your lock
              in under 10 minutes and give you an honest, itemised recommendation. Most reputable
              Dubai locksmiths offer this assessment as part of any callout fee — meaning you only
              pay for work that&apos;s genuinely needed.
            </p>
            <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">
              Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              and we&apos;ll assess your lock honestly — repair if we can, replace only if we must.
            </p>
          </div>

          <AllServicesLinks
            currentSlug="lock-repair-replacement-dubai"
            guides={[
              { href: "/blog/signs-you-need-emergency-locksmith-dubai", label: "10 Signs You Need a Locksmith" },
              { href: "/blog/lock-security-checklist-dubai-landlords", label: "Landlord Lock Security Checklist" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Not sure whether to repair or replace? Call for an honest assessment."
        subheading="Ababeel Key Trading LLC gives you a straight answer — repair if possible, replace only when necessary. No upselling."
        pageName="blog-repair-vs-replace"
        variant="trust"
      />
    </>
  );
}

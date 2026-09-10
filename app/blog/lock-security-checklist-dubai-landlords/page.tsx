import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ArticleSchema } from "@/components/seo/article-schema";
import { CtaBand } from "@/components/sections/cta-band";
import { AllServicesLinks } from "@/components/sections/all-services-links";

const SLUG = "lock-security-checklist-dubai-landlords";
const DATE = "2026-09-09";

export const metadata: Metadata = {
  title: "Lock Security Checklist for Dubai Landlords & Tenants | Ababeel Key Trading",
  description:
    "Renting or managing property in Dubai? This professional lock security checklist covers lock changes between tenancies, grade selection, master key risks, and smart lock options.",
  alternates: { canonical: `${siteConfig.url}/blog/${SLUG}` },
  openGraph: {
    title: "Lock Security Checklist for Dubai Landlords & Tenants",
    description:
      "Renting or managing property in Dubai? Professional lock security checklist for landlords and tenants.",
    url: `${siteConfig.url}/blog/${SLUG}`,
    type: "article",
  },
};

const checklist = [
  {
    item: "Change All Locks Between Tenancies",
    detail:
      "This is non-negotiable. Even if the outgoing tenant returns all keys, copies may exist. A full lock replacement costs a fraction of what a single break-in claim or legal dispute will cost you.",
  },
  {
    item: "Upgrade to Grade-A Anti-Snap Locks",
    detail:
      "Standard locks sold at hardware stores in Dubai offer minimal resistance to modern attack techniques. Grade-A locks with anti-snap, anti-pick, and anti-drill features are the baseline for any premium property.",
  },
  {
    item: "Install Secondary Deadbolts on External Doors",
    detail:
      "A single lock on a main door is insufficient. A secondary deadbolt or multi-point locking system significantly increases forced entry resistance.",
  },
  {
    item: "Inspect Window Locks Quarterly",
    detail:
      "Window locks fail silently. A lock that appears engaged but isn't secure is worse than no lock at all — it creates false confidence. Professional inspection every quarter is recommended for ground and first-floor units.",
  },
  {
    item: "Consider Master Key Systems for Multi-Unit Buildings",
    detail:
      "For building managers, a professionally installed master key system gives access to all units with one key while tenants maintain exclusive control of their individual units — eliminating the security risk of holding dozens of unit keys.",
  },
  {
    item: "Document All Key Copies at Handover",
    detail:
      "Create a formal key register at each tenancy changeover. Log every copy issued, who received it, and when. If a key goes missing during tenancy, require the tenant to fund a lock change.",
  },
  {
    item: "Assess Electronic Lock Suitability",
    detail:
      "Smart locks eliminate key duplication risk entirely, as access codes can be reset between tenancies. They require professional installation and maintenance by a locksmith experienced with digital systems.",
  },
];

export default function LandlordChecklistPage() {
  return (
    <>
      <ArticleSchema
        title="Lock Security Checklist Every Dubai Landlord and Tenant Must Read"
        description="Professional lock security checklist for Dubai landlords and tenants — lock changes, grade selection, master key risks, and more."
        slug={SLUG}
        datePublished={DATE}
        dateModified={DATE}
      />
      <BreadcrumbSchema items={[
        { name: "Blog", href: "/blog" },
        { name: "Lock Security Checklist for Dubai Landlords", href: `/blog/${SLUG}` },
      ]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Blog", href: "/blog" },
              { name: "Landlord Lock Checklist", href: `/blog/${SLUG}` },
            ]} />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(201,161,90,0.12)] text-[var(--color-brand-gold)]">
              Property Security
            </span>
            <span className="text-xs text-[var(--color-brand-muted)]">7 min read</span>
            <time dateTime={DATE} className="text-xs text-[var(--color-brand-muted)] ml-auto">
              9 September 2026
            </time>
          </div>

          <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-6 text-balance">
            Lock Security Checklist Every Dubai Landlord and Tenant Must Read
          </h1>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Dubai&apos;s real estate market moves fast. Tenants come and go, keys get duplicated,
              and locks age. Whether you manage a single apartment in Al Murar or a portfolio of
              villas across the city, your lock security strategy directly impacts your liability,
              tenant safety, and property value.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Why Dubai Landlords Must Take Lock Security Seriously
          </h2>
          <p className="text-[var(--color-brand-body)] leading-relaxed mb-10">
            Under UAE tenancy law, landlords are responsible for ensuring the property is in a
            habitable and secure condition at handover. If a tenant is burgled due to a faulty or
            compromised lock, the landlord may face legal and financial consequences. Here&apos;s the
            checklist every property owner in Dubai needs.
          </p>

          <div className="space-y-4 mb-12">
            {checklist.map((item, i) => (
              <div key={i} className="card-surface rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <h2 className="font-bold text-[var(--color-brand-white)] mb-2">{item.item}</h2>
                    <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-surface rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-3">
              Professional Lock Audit Services in Dubai
            </h2>
            <p className="text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Not sure about the condition of your property&apos;s locks? A professional locksmith
              can conduct a full security audit, test every lock on the property, and provide a
              written report with recommendations. This is especially valuable for landlords who&apos;ve
              purchased older buildings or inherited properties with unknown lock histories.
            </p>
            <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">
              Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              to arrange a lock assessment across your Dubai property portfolio.
            </p>
          </div>

          <AllServicesLinks
            currentSlug="lock-repair-replacement-dubai"
            guides={[
              { href: "/blog/repair-vs-replace-lock-dubai", label: "Repair vs Replace a Lock" },
              { href: "/blog/signs-you-need-emergency-locksmith-dubai", label: "10 Signs You Need a Locksmith" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Need locks changed between tenancies?"
        subheading="Ababeel Key Trading LLC handles full lock replacement and security audits across all Dubai properties. Call for a quote."
        pageName="blog-landlord-checklist"
        variant="price"
      />
    </>
  );
}

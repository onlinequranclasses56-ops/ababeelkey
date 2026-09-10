import type { Metadata } from "next";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ArticleSchema } from "@/components/seo/article-schema";
import { CtaBand } from "@/components/sections/cta-band";
import { AllServicesLinks } from "@/components/sections/all-services-links";

const SLUG = "lost-car-keys-dubai-what-to-do";
const DATE = "2026-09-09";

export const metadata: Metadata = {
  title: "Lost Car Keys in Dubai? Here's Exactly What To Do | Ababeel Key Trading",
  description:
    "Don't call the dealership first. A certified automotive locksmith in Dubai can cut and programme your replacement car key on-site for less. Step-by-step guide.",
  alternates: { canonical: `${siteConfig.url}/blog/${SLUG}` },
  openGraph: {
    title: "Lost Car Keys in Dubai? Here's Exactly What To Do",
    description:
      "Don't call the dealership first. Get your replacement car key cut and programmed on-site in Dubai for less.",
    url: `${siteConfig.url}/blog/${SLUG}`,
    type: "article",
  },
};

const keyTypes = [
  { type: "Basic Mechanical Key", description: "No chip, no remote", complexity: "Low" },
  { type: "Transponder Key", description: "Embedded chip that must be programmed", complexity: "Medium" },
  { type: "Remote Key Fob", description: "Wireless locking and unlocking", complexity: "Medium" },
  { type: "Proximity / Smart Key", description: "Push-start, no insertion needed", complexity: "High" },
  { type: "Switchblade Key", description: "Folds into the fob housing", complexity: "Medium" },
];

const mistakes = [
  "Calling a random number from a roadside flyer — these are often unlicensed and may damage your lock or charge for fake services",
  "Attempting to pick your own car lock — modern vehicle locks are significantly more tamper-resistant than residential locks",
  "Waiting until business hours — in Dubai summer heat, waiting near a locked car is genuinely dangerous; use a 24/7 mobile service",
  "Going straight to the dealership — they charge premium rates and often require towing the vehicle, adding hundreds of dirhams to your bill",
];

export default function LostCarKeysPage() {
  return (
    <>
      <ArticleSchema
        title="Lost Your Car Keys in Dubai? Here's Exactly What To Do"
        description="Don't call the dealership first. A certified automotive locksmith can cut and programme your replacement car key on-site for less."
        slug={SLUG}
        datePublished={DATE}
        dateModified={DATE}
      />
      <BreadcrumbSchema items={[
        { name: "Blog", href: "/blog" },
        { name: "Lost Car Keys Dubai", href: `/blog/${SLUG}` },
      ]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Blog", href: "/blog" },
              { name: "Lost Car Keys Dubai", href: `/blog/${SLUG}` },
            ]} />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(201,161,90,0.12)] text-[var(--color-brand-gold)]">
              Car Keys
            </span>
            <span className="text-xs text-[var(--color-brand-muted)]">5 min read</span>
            <time dateTime={DATE} className="text-xs text-[var(--color-brand-muted)] ml-auto">
              9 September 2026
            </time>
          </div>

          <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-6 text-balance">
            Lost Your Car Keys in Dubai? Here&apos;s Exactly What To Do
          </h1>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Losing your car keys in Dubai is more common than you&apos;d think — and more expensive
              than most people expect, especially if you go straight to the dealer. The good news is
              there&apos;s a faster, cheaper alternative. Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              and we&apos;ll come to your location anywhere in Dubai.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Step-by-Step: What to Do When You Lose Car Keys in Dubai
          </h2>

          <div className="space-y-4 mb-12">
            {[
              {
                step: "Don't Call the Dealership First",
                detail:
                  "Most car dealerships in Dubai charge premium rates for key replacement and may require you to tow the vehicle to their service centre, adding hundreds of dirhams to your bill. A certified automotive locksmith can often cut and programme a replacement key on-site, at your location, for significantly less.",
              },
              {
                step: "Locate Your Vehicle Identification Number (VIN)",
                detail:
                  "Your VIN is typically found on the dashboard (visible through the windscreen from outside), inside the driver's door frame, or on your vehicle registration card (Mulkiya). A professional locksmith needs this to cut the correct key blank for your vehicle.",
              },
              {
                step: "Verify the Locksmith's Credentials",
                detail:
                  "A reputable automotive locksmith will arrive in a clearly marked vehicle, ask for proof of vehicle ownership before cutting any key, provide a written receipt, and carry professional key-cutting and programming equipment. Never hand over your VIN to an unverified locksmith.",
              },
              {
                step: "Understand What Type of Key You Have",
                detail:
                  "Modern vehicles use one of several key types, each with different replacement costs and processes. See the table below for a guide.",
              },
              {
                step: "Get a Spare Cut Immediately",
                detail:
                  "Once you have your replacement key, get a spare cut the same day. The cost of a spare key is negligible compared to the cost and stress of being locked out again. Store it with a trusted family member — not in the vehicle.",
              },
            ].map((item, i) => (
              <div key={i} className="card-surface rounded-2xl p-6 flex gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(201,161,90,0.15)] text-[var(--color-brand-gold)] font-extrabold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-bold text-[var(--color-brand-white)] mb-2">{item.step}</h2>
                  <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
            Car Key Types and Replacement Complexity
          </h2>
          <div className="card-surface rounded-2xl overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-brand-border)]">
                  <th className="text-left px-5 py-3 text-[var(--color-brand-gold)] font-semibold">Key Type</th>
                  <th className="text-left px-5 py-3 text-[var(--color-brand-gold)] font-semibold hidden sm:table-cell">Description</th>
                  <th className="text-left px-5 py-3 text-[var(--color-brand-gold)] font-semibold">Complexity</th>
                </tr>
              </thead>
              <tbody>
                {keyTypes.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--color-brand-border)] last:border-0">
                    <td className="px-5 py-3 text-[var(--color-brand-white)] font-medium">{row.type}</td>
                    <td className="px-5 py-3 text-[var(--color-brand-muted)] hidden sm:table-cell">{row.description}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        row.complexity === "Low"
                          ? "bg-green-400/10 text-green-400"
                          : row.complexity === "High"
                          ? "bg-red-400/10 text-red-400"
                          : "bg-amber-400/10 text-amber-400"
                      }`}>
                        {row.complexity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
            Common Mistakes Dubai Residents Make When Losing Car Keys
          </h2>
          <div className="card-surface rounded-2xl p-6 mb-12">
            <ul className="space-y-3">
              {mistakes.map((mistake) => (
                <li key={mistake} className="flex items-start gap-2 text-sm text-[var(--color-brand-body)]">
                  <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-3">
              What Ababeel Key Trading LLC Covers
            </h2>
            <ul className="space-y-2">
              {[
                "All car makes and models — including Japanese, European, and American vehicles",
                "Transponder chip programming and smart key coding",
                "Remote key fob pairing and replacement",
                "Mobile service — we come to your location across Dubai",
                "Spare key cutting while we're there — same visit, no extra callout fee",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-[var(--color-brand-body)]">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <AllServicesLinks
            currentSlug="car-key-programming-dubai"
            guides={[
              { href: "/blog/signs-you-need-emergency-locksmith-dubai", label: "10 Signs You Need a Locksmith" },
              { href: "/blog/home-security-guide-dubai-expats", label: "Dubai Expat Security Guide" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Lost your car keys in Dubai? Call now."
        subheading="Mobile car key cutting and programming across all Dubai areas. We come to you — 24 hours, 7 days a week."
        pageName="blog-lost-car-keys"
        variant="urgency"
      />
    </>
  );
}

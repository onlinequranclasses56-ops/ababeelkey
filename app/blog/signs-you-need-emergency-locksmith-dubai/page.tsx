import type { Metadata } from "next";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ArticleSchema } from "@/components/seo/article-schema";
import { CtaBand } from "@/components/sections/cta-band";
import { AllServicesLinks } from "@/components/sections/all-services-links";

const SLUG = "signs-you-need-emergency-locksmith-dubai";
const DATE = "2026-09-09";

export const metadata: Metadata = {
  title: "10 Signs You Need an Emergency Locksmith in Dubai Right Now",
  description:
    "Broken key, tampering marks, seized lock, or lost keys? Learn the 10 signs you need to call an emergency locksmith in Dubai immediately — before small problems become serious security risks.",
  alternates: { canonical: `${siteConfig.url}/blog/${SLUG}` },
  openGraph: {
    title: "10 Signs You Need an Emergency Locksmith in Dubai Right Now",
    description:
      "Broken key, tampering marks, seized lock, or lost keys? Learn when to call a Dubai locksmith immediately.",
    url: `${siteConfig.url}/blog/${SLUG}`,
    type: "article",
  },
};

const signs = [
  {
    title: "Your Key Broke Inside the Lock",
    body: "A broken key inside a cylinder is one of the most common locksmith emergencies. Attempting to extract it with a pin or knife pushes the fragment deeper. A trained locksmith has specialist extraction tools that remove the broken key without damaging the cylinder.",
  },
  {
    title: "Your Lock Is Jammed and Won't Turn",
    body: "Dubai's humidity and desert dust cause lock mechanisms to seize over time. If your key won't turn even when fully inserted, the internal pins may have corroded or a foreign object has entered the cylinder. Forcing it will snap your key — call before you try anything else.",
  },
  {
    title: "You've Just Moved Into a New Property",
    body: "Whether moving into a villa in Jumeirah or an apartment in Deira, you never truly know how many key copies are in circulation from previous tenants. A professional lock replacement ensures only you control access.",
  },
  {
    title: "Your Door Lock Shows Signs of Tampering",
    body: "Scratches around the keyhole, a slightly bent door frame, or a lock that suddenly feels loose are red flags of an attempted break-in. A locksmith can assess the damage and recommend whether repair or replacement is needed.",
  },
  {
    title: "You've Been Burgled",
    body: "After a break-in, your existing locks are compromised — physically and structurally. Upgrading to high-security locks with anti-pick, anti-drill, and anti-bump features should be your first call before anything else.",
  },
  {
    title: "Your Smart Lock Is Malfunctioning",
    body: "Smart locks can fail due to dead batteries, firmware issues, or motor failures. If your digital lock won't respond to your fingerprint, PIN, or app, you need a locksmith who specialises in electronic lock repair — not just traditional cylinders.",
  },
  {
    title: "You're Locked Out of Your Car",
    body: "Vehicle lockouts are among the most stressful situations in Dubai. In summer heat, waiting outside or near a locked car is genuinely dangerous. A mobile locksmith who covers car lockouts can reach you quickly and get you in without damaging your vehicle.",
  },
  {
    title: "Your Padlock Has Seized",
    body: "External padlocks on storage units, gates, or shutters are especially vulnerable to UAE salt air and sand. If your padlock won't open with the correct key, a locksmith can pick it open and advise on a weather-resistant replacement.",
  },
  {
    title: "You've Lost Your Only Key",
    body: "Losing your only key set means you're completely locked out with no backup option. A professional locksmith can create new keys by decoding your lock without the original — a process called key cutting from lock.",
  },
  {
    title: "Your Lock Is More Than 5 Years Old",
    body: "Locks degrade. Older cylinders lack modern security features and are vulnerable to bump keys and basic pick tools. If your lock is aging, proactive replacement costs far less than dealing with the aftermath of a break-in.",
  },
];

export default function SignsYouNeedLocksmithPage() {
  return (
    <>
      <ArticleSchema
        title="10 Signs You Need an Emergency Locksmith in Dubai Right Now"
        description="Broken key, tampering marks, seized lock, or lost keys? Learn the 10 signs you need to call an emergency locksmith in Dubai immediately."
        slug={SLUG}
        datePublished={DATE}
        dateModified={DATE}
      />
      <BreadcrumbSchema items={[
        { name: "Blog", href: "/blog" },
        { name: "10 Signs You Need an Emergency Locksmith", href: `/blog/${SLUG}` },
      ]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Blog", href: "/blog" },
              { name: "Emergency Locksmith Signs", href: `/blog/${SLUG}` },
            ]} />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(201,161,90,0.12)] text-[var(--color-brand-gold)]">
              Emergency
            </span>
            <span className="text-xs text-[var(--color-brand-muted)]">6 min read</span>
            <time
              dateTime={DATE}
              className="text-xs text-[var(--color-brand-muted)] ml-auto"
            >
              9 September 2026
            </time>
          </div>

          <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-6 text-balance">
            10 Signs You Need an Emergency Locksmith in Dubai Right Now
          </h1>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Getting locked out never happens at a convenient time. Knowing when to call a
              professional locksmith can save you hours of frustration — and prevent costly property
              damage from a forced entry attempt. Here are the 10 signs you should call{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-[var(--color-brand-gold)] font-bold"
              >
                {siteConfig.phone}
              </a>{" "}
              immediately.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {signs.map((sign, i) => (
              <div key={i} className="card-surface rounded-2xl p-6 flex gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(201,161,90,0.15)] text-[var(--color-brand-gold)] font-extrabold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h2 className="font-bold text-[var(--color-brand-white)] mb-2">{sign.title}</h2>
                  <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">{sign.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-surface rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <h2 className="text-xl font-bold text-[var(--color-brand-white)]">
                Don&apos;t Wait for an Emergency — Act Now
              </h2>
            </div>
            <p className="text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              The best time to find a reliable locksmith is before you need one urgently. Save our
              number now so you&apos;re not searching in a panic at midnight.
            </p>
            <ul className="space-y-2">
              {[
                "Available 24 hours a day, 7 days a week across all Dubai areas",
                "Transparent pricing quoted before dispatch — no surprise fees",
                "Non-destructive entry techniques that preserve your lock wherever possible",
                "Based in Al Murar with fast response to Deira, Bur Dubai, and beyond",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-[var(--color-brand-body)]">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <AllServicesLinks
            guides={[
              { href: "/blog/repair-vs-replace-lock-dubai", label: "Repair vs Replace a Lock" },
              { href: "/blog/home-security-guide-dubai-expats", label: "Dubai Expat Home Security Guide" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Any of these signs apply to you? Call now."
        subheading="Ababeel Key Trading LLC — 24/7 emergency locksmith across all Dubai. Fast, professional, no surprise fees."
        pageName="blog-emergency-signs"
        variant="urgency"
      />
    </>
  );
}

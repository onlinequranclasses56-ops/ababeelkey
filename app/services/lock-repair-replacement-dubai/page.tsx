import type { Metadata } from "next";
import { Lock, CheckCircle, Shield, Settings, Home } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AllServicesLinks } from "@/components/sections/all-services-links";

export const metadata: Metadata = {
  title: "Lock Repair & Replacement Dubai – Residential & Commercial",
  description:
    "Lock repair and replacement in Dubai for homes, apartments, offices, and commercial premises. Upgrade to high-security locks or repair faulty locks. Call +971 52 642 6161.",
  alternates: { canonical: `${siteConfig.url}/services/lock-repair-replacement-dubai` },
};

const faqs = [
  {
    question: "How do I know if my lock needs repairing or replacing?",
    answer:
      "Signs your lock needs attention include: the key turns but the lock doesn't fully engage, the key is stiff or won't turn smoothly, the door doesn't latch properly, or the lock has been forced or damaged. Minor issues are often repairable; damaged or worn-out locks are safer to replace. Call us and we can advise after inspection.",
  },
  {
    question: "How much does lock replacement cost in Dubai?",
    answer:
      "Lock replacement in Dubai starts from approximately AED 80–150 for a standard deadbolt or door lock, including labour. High-security locks and premium brands cost more. Call +971 52 642 6161 for a quote specific to your lock type and door.",
  },
  {
    question: "Can you match a new lock to my existing keys?",
    answer:
      "Yes, in many cases we can rekey a new lock to work with your existing key so you don't need to get new keys cut. Ask us about rekeying when you call.",
  },
  {
    question: "Do you supply and fit locks or do I need to buy my own?",
    answer:
      "We supply and fit locks. We carry a range of standard and high-security locks. If you have a specific brand in mind, let us know when you call and we can advise on availability.",
  },
  {
    question: "How long does lock replacement take?",
    answer:
      "A standard lock swap takes 30–60 minutes. Installing a new deadbolt or mortice lock in a door that didn't previously have one takes longer. We'll give you a time estimate when we assess the job.",
  },
];

const scenarios = [
  { icon: Home, label: "Residential Locks", desc: "Apartments, villas, and studio doors — deadbolts, knob locks, lever handles." },
  { icon: Settings, label: "Damaged Locks", desc: "Locks broken after a forced entry attempt or general wear." },
  { icon: Shield, label: "Security Upgrades", desc: "Upgrade to high-security, anti-snap, or anti-pick cylinders." },
  { icon: Lock, label: "Commercial Locks", desc: "Office doors, storage rooms, server rooms, and access-controlled doors." },
];

export default function LockRepairReplacementPage() {
  return (
    <>
      <ServiceSchema
        name="Lock Repair & Replacement Dubai"
        description="Professional lock repair and replacement service in Dubai for residential and commercial properties. High-security lock upgrades, damaged lock repair, and full lock replacement."
        slug="lock-repair-replacement-dubai"
      />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: "Lock Repair & Replacement Dubai", href: "/services/lock-repair-replacement-dubai" },
      ]} />
      <FAQSchema items={faqs} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Services", href: "/services" },
              { name: "Lock Repair & Replacement", href: "/services/lock-repair-replacement-dubai" },
            ]} />
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
              <Lock className="h-7 w-7 text-[var(--color-brand-gold)]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">
                Service
              </p>
              <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
                Lock Repair &amp; Replacement in Dubai
              </h1>
            </div>
          </div>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Ababeel Key Trading LLC repairs and replaces locks for homes, apartments, offices, and
              commercial premises across Dubai. Whether your lock is damaged, worn, or needs upgrading
              for better security, call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              and we&apos;ll assess the job and give you a quote before starting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {scenarios.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="card-surface rounded-xl p-5 flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-[var(--color-brand-gold)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-brand-white)] text-sm mb-1">{label}</h3>
                  <p className="text-xs text-[var(--color-brand-muted)] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-[var(--color-brand-body)] leading-relaxed mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Lock Repair &amp; Replacement — What We Cover
            </h2>
            <ul className="space-y-2">
              {[
                "Deadbolt repair and replacement",
                "Knob and lever handle lock replacement",
                "Mortice lock repair and replacement",
                "Cylinder (euro profile) replacement",
                "Anti-snap and high-security cylinder upgrades",
                "Padlock replacement",
                "Lock rekeying (same door, new key)",
                "Post-burglary or forced-entry lock repair",
                "Commercial and office door lock replacement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Should You Repair or Replace Your Lock?
            </h2>
            <p>
              Repair is the right choice for minor issues: a stiff lock mechanism, a loose handle, or
              a cylinder that needs lubrication. Replacement is the better option when the lock is
              visibly damaged, has been compromised in a break-in, is a cheap lock in a high-risk
              area, or is worn beyond safe use.
            </p>
            <p>
              Our technicians will inspect your lock and give you an honest recommendation. We don&apos;t
              replace locks that can be repaired, and we don&apos;t repair locks that present a security
              risk.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Lock Replacement Prices in Dubai
            </h2>
            <p>
              Standard deadbolt or knob lock replacement starts from{" "}
              <strong className="text-[var(--color-brand-white)]">AED 80–150</strong> including the
              lock and fitting. High-security cylinders and premium brands cost more. Rekeying an
              existing lock typically costs less than full replacement. Call us for an accurate quote.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Lock Repair &amp; Replacement Dubai — FAQs
          </h2>
          <div className="card-surface rounded-2xl px-6 sm:px-8 mb-12">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <AllServicesLinks
            currentSlug="lock-repair-replacement-dubai"
            guides={[
              { href: "/guides/choose-licensed-locksmith-dubai", label: "How to Choose a Licensed Locksmith" },
              { href: "/guides/locksmith-cost-dubai", label: "Locksmith Cost in Dubai" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Lock damaged or need an upgrade?"
        subheading="We repair and replace locks across Dubai — supply and fit, honest pricing, quality locks."
        pageName="lock-repair-page"
        variant="trust"
      />
    </>
  );
}

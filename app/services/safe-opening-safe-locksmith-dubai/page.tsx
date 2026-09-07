import type { Metadata } from "next";
import { Shield, CheckCircle, Lock, RotateCcw, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AllServicesLinks } from "@/components/sections/all-services-links";

export const metadata: Metadata = {
  title: "Safe Opening Dubai – Safe Locksmith & Combination Reset | Ababeel Key Trading",
  description:
    "Professional safe opening service in Dubai. Locked out of your safe? Forgotten the combination? We open safes without damage wherever possible. Call +971 50 476 2783.",
  alternates: { canonical: `${siteConfig.url}/services/safe-opening-safe-locksmith-dubai` },
};

const faqs = [
  {
    question: "Can you open a safe without the combination or key?",
    answer:
      "Yes. We use specialist safe-opening techniques including manipulation, bypass methods, and — as a last resort — drilling. We always try non-destructive methods first to preserve the safe. Call us with the safe make and model and we'll advise on the likely approach.",
  },
  {
    question: "How much does safe opening cost in Dubai?",
    answer:
      "Safe opening prices in Dubai depend on the safe type, lock mechanism, and method required. Prices typically start from AED 200–400 for standard electronic or combination safes. Larger, high-security safes cost more. Call +971 50 476 2783 for a quote based on your specific safe.",
  },
  {
    question: "Will you damage my safe when opening it?",
    answer:
      "We always attempt non-destructive opening first. Many safes can be opened without damage through manipulation or electronic bypass. If drilling is required, we'll tell you before proceeding and the safe body will usually survive — though the lock mechanism may need replacing.",
  },
  {
    question: "Can you reset the combination on my safe after opening it?",
    answer:
      "Yes — after opening we can reset the combination or replace the lock mechanism so you have a new, working code. We'll walk you through setting your new combination before we leave.",
  },
  {
    question: "What types of safes do you open in Dubai?",
    answer:
      "We open most common safe types: electronic digital safes, combination dial safes, key lock safes, biometric (fingerprint) safes, fire-resistant safes, and hotel room safes. Call with your make and model for confirmation.",
  },
];

const safeTypes = [
  { icon: Lock, label: "Electronic / Digital Safes", desc: "Keypad safes with forgotten or malfunctioning codes." },
  { icon: RotateCcw, label: "Combination Dial Safes", desc: "Old-style dial combination safes — manipulation and reset." },
  { icon: Shield, label: "Fire-Resistant Safes", desc: "Heavy-duty fire safes for home and office." },
  { icon: AlertTriangle, label: "Damaged or Jammed Safes", desc: "Safes that won't open due to mechanical failure or damage." },
];

export default function SafeOpeningPage() {
  return (
    <>
      <ServiceSchema
        name="Safe Opening Dubai"
        description="Professional safe opening and safe locksmith service in Dubai. Locked out of your safe? We open electronic, combination, key lock, and biometric safes without damage wherever possible."
        slug="safe-opening-safe-locksmith-dubai"
      />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: "Safe Opening Dubai", href: "/services/safe-opening-safe-locksmith-dubai" },
      ]} />
      <FAQSchema items={faqs} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Services", href: "/services" },
              { name: "Safe Opening", href: "/services/safe-opening-safe-locksmith-dubai" },
            ]} />
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
              <Shield className="h-7 w-7 text-[var(--color-brand-gold)]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">
                Service
              </p>
              <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
                Safe Opening Service in Dubai
              </h1>
            </div>
          </div>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Locked out of your safe? Forgotten the combination? Ababeel Key Trading LLC opens
              safes in Dubai using specialist techniques — non-destructive wherever possible. Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              with the make and model of your safe and we&apos;ll advise on cost and approach before
              sending anyone out.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Safe Types We Open
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {safeTypes.map(({ icon: Icon, label, desc }) => (
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
              Safe Opening Service — What We Cover
            </h2>
            <ul className="space-y-2">
              {[
                "Electronic / digital keypad safes — forgotten code",
                "Combination dial safes — lost combination",
                "Key lock safes — lost key",
                "Biometric (fingerprint) safes — failed sensor",
                "Hotel room safe opening",
                "Fire-resistant and high-security safes",
                "Safe combination reset after opening",
                "Safe lock mechanism replacement",
                "Damaged or jammed safe mechanism",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              How We Open Your Safe
            </h2>
            <p>
              Our first approach is always non-destructive. For electronic safes, this may involve
              electronic override or manipulation techniques. For combination dials, we attempt
              manipulation to find the combination. For key locks, we use picking or impressioning
              techniques.
            </p>
            <p>
              If non-destructive methods are not possible — for example, with heavily reinforced
              high-security safes — controlled drilling may be necessary. We will always explain
              what&apos;s required and get your approval before proceeding. After drilling, we can
              replace the lock so the safe is fully operational again.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Safe Opening Prices in Dubai
            </h2>
            <p>
              Prices start from{" "}
              <strong className="text-[var(--color-brand-white)]">AED 200–400</strong> for standard
              electronic and combination safes. High-security and larger safes vary in price. Call
              us with the safe brand, model, and your situation — we&apos;ll give you a fair quote before
              any work begins.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Safe Opening Dubai — FAQs
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
            currentSlug="safe-opening-safe-locksmith-dubai"
            guides={[
              { href: "/guides/choose-licensed-locksmith-dubai", label: "How to Choose a Licensed Locksmith" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Locked out of your safe in Dubai?"
        subheading="Tell us the make and model — we'll quote you upfront and use non-destructive methods wherever possible."
        pageName="safe-opening-page"
        variant="urgency"
      />
    </>
  );
}

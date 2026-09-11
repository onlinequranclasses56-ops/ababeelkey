import type { Metadata } from "next";
import { Zap, Clock, Phone, Shield, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CallClickLink } from "@/components/layout/call-click-link";
import { AllServicesLinks } from "@/components/sections/all-services-links";

export const metadata: Metadata = {
  title: "Emergency Locksmith Dubai – 24/7 Response",
  description:
    "Emergency locksmith service in Dubai available 24 hours. Locked out of home, office, or car? Ababeel Key Trading LLC responds fast across Dubai. Call +971 52 642 6161.",
  alternates: { canonical: `${siteConfig.url}/services/emergency-locksmith-dubai` },
};

const faqs = [
  {
    question: "How fast can an emergency locksmith reach me in Dubai?",
    answer:
      "Ababeel Key Trading LLC is based in Al Murar, Deira. Response times vary by location: typically 15–30 minutes in Deira and Bur Dubai, and 30–60 minutes in further areas like Jumeirah or Al Barsha. Call us for the most accurate ETA for your location.",
  },
  {
    question: "Do you charge extra for emergency locksmith calls at night?",
    answer:
      "We operate 24/7 at consistent pricing. Call us on +971 52 642 6161 and we will give you a quote before dispatching — no surprise fees on arrival.",
  },
  {
    question: "What identification do I need to prove I'm locked out of my own property?",
    answer:
      "For home lockouts, a UAE ID or tenancy contract showing the address is usually sufficient. For car lockouts, your vehicle registration card (Mulkiya) and driving licence. For offices, employee ID or business documentation. We ask for ID to protect our customers from unauthorized entry.",
  },
  {
    question: "Will you damage my door or lock during an emergency entry?",
    answer:
      "Our technicians use non-destructive lock-picking techniques wherever possible to preserve the lock. Damage is only required in rare cases where locks have been tampered with or are of a type that cannot be picked safely. We always tell you in advance if destructive entry is the only option.",
  },
];

export default function EmergencyLocksmithPage() {
  return (
    <>
      <ServiceSchema
        name="Emergency Locksmith Dubai"
        description="24/7 emergency locksmith service in Dubai. Fast response for home, office, and car lockouts across all Dubai areas including Al Murar, Deira, and Bur Dubai."
        slug="emergency-locksmith-dubai"
      />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: "Emergency Locksmith Dubai", href: "/services/emergency-locksmith-dubai" },
      ]} />
      <FAQSchema items={faqs} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Services", href: "/services" },
              { name: "Emergency Locksmith", href: "/services/emergency-locksmith-dubai" },
            ]} />
          </div>

          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
              <Zap className="h-7 w-7 text-[var(--color-brand-gold)]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">
                Service
              </p>
              <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
                Emergency Locksmith Dubai
              </h1>
            </div>
          </div>

          {/* Direct answer — AEO/AI Overview extractable */}
          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Ababeel Key Trading LLC provides 24-hour emergency locksmith service across Dubai.
              Whether you&apos;re locked out of your home, car, or office, call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              for fast, professional response — day or night, weekends, and public holidays.
            </p>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Clock, label: "24/7 Availability", desc: "Around the clock, 365 days a year including all UAE holidays." },
              { icon: Shield, label: "Non-Destructive Entry", desc: "Lock picking techniques that preserve your lock wherever possible." },
              { icon: Phone, label: "Call Before Dispatch", desc: "We quote over the phone before sending anyone out — no surprises." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="card-surface rounded-xl p-5">
                <Icon className="h-5 w-5 text-[var(--color-brand-gold)] mb-3" />
                <h3 className="font-bold text-[var(--color-brand-white)] text-sm mb-1">{label}</h3>
                <p className="text-xs text-[var(--color-brand-muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="prose prose-invert prose-sm max-w-none mb-12 space-y-6 text-[var(--color-brand-body)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              What Is Covered in Our Emergency Locksmith Service?
            </h2>
            <ul className="space-y-2">
              {[
                "Home lockout — apartment, villa, studio",
                "Car lockout — all makes and models",
                "Office and commercial premises lockout",
                "Broken key extraction from locks",
                "Damaged or jammed lock emergency repair",
                "Safe lockout and emergency opening",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              How to Use Our Emergency Locksmith Service in Dubai
            </h2>
            <ol className="space-y-3 list-none pl-0">
              {[
                "Call +971 52 642 6161 with your location — we answer immediately, 24/7.",
                "Tell us what you're locked out of (home, car, office) and where you are.",
                "We confirm availability and give you a price estimate on the call.",
                "Our technician is dispatched immediately — stay at your location.",
                "The locksmith arrives, verifies your identity, and opens the lock.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(201,161,90,0.15)] text-[var(--color-brand-gold)] text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Areas Covered for Emergency Locksmith in Dubai
            </h2>
            <p>
              We operate across all of Dubai from our Al Murar base: Deira, Bur Dubai, Al Karama,
              Jumeirah, Al Barsha, Mirdif, Al Qusais, and surrounding areas. Call us and we&apos;ll
              confirm response time for your exact location.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Emergency Locksmith Dubai — FAQs
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
            currentSlug="emergency-locksmith-dubai"
            guides={[
              { href: "/guides/emergency-lockout-what-to-do", label: "Emergency Lockout Guide" },
              { href: "/guides/locked-out-car-dubai", label: "Locked Out of Car Dubai" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Locked out right now? Call us immediately."
        subheading="Our emergency locksmith team in Dubai is on call 24/7. We'll get you back in fast."
        pageName="emergency-service-page"
        variant="urgency"
      />
    </>
  );
}

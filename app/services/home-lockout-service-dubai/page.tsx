import type { Metadata } from "next";
import { Home, Clock, Shield, Phone, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AllServicesLinks } from "@/components/sections/all-services-links";

export const metadata: Metadata = {
  title: "Home Lockout Service Dubai – Locked Out? Fast Entry 24/7 | Ababeel Key Trading",
  description:
    "Locked out of your home in Dubai? Ababeel Key Trading LLC provides 24/7 home lockout service — fast, damage-free entry for apartments, villas, and studios. Call +971 50 476 2783.",
  alternates: { canonical: `${siteConfig.url}/services/home-lockout-service-dubai` },
};

const faqs = [
  {
    question: "What should I do if I'm locked out of my home in Dubai?",
    answer:
      "Call Ababeel Key Trading LLC on +971 50 476 2783. Stay at your location, keep your UAE ID or tenancy contract ready to verify you're the resident, and we'll dispatch a technician to you. Do not try to force the door — this risks damaging the lock and your door frame.",
  },
  {
    question: "How quickly can you get to me if I'm locked out at home in Dubai?",
    answer:
      "We're based in Al Murar, Deira. Typical response times are 15–30 minutes for Deira and Bur Dubai, and 30–60 minutes for areas further away such as Jumeirah, Al Barsha, or Mirdif. Call us and we'll give you an ETA for your specific location.",
  },
  {
    question: "Do you open doors without damaging the lock?",
    answer:
      "Our first approach is always non-destructive lock picking. In most cases we can open the door while leaving the lock fully intact. Destructive entry is a last resort and we'll always tell you before proceeding. You'll be quoted either way.",
  },
  {
    question: "What ID do I need to show to prove I live there?",
    answer:
      "A UAE Emirates ID or passport with your Ejari (tenancy contract) showing the address is usually sufficient. For owner-occupied properties, title deed documentation helps. We ask for ID to protect residents from unauthorised entry.",
  },
  {
    question: "Is home lockout service available at night and on weekends in Dubai?",
    answer:
      "Yes — we operate 24 hours a day, 7 days a week, including weekends and UAE public holidays. The same number (+971 50 476 2783) works at all hours.",
  },
];

export default function HomeLockoutServicePage() {
  return (
    <>
      <ServiceSchema
        name="Home Lockout Service Dubai"
        description="24/7 home lockout service in Dubai for apartments, villas, and studios. Fast, damage-free entry for residents locked out of their homes across all Dubai areas."
        slug="home-lockout-service-dubai"
      />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: "Home Lockout Service Dubai", href: "/services/home-lockout-service-dubai" },
      ]} />
      <FAQSchema items={faqs} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Services", href: "/services" },
              { name: "Home Lockout Service", href: "/services/home-lockout-service-dubai" },
            ]} />
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
              <Home className="h-7 w-7 text-[var(--color-brand-gold)]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">
                Service
              </p>
              <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
                Home Lockout Service in Dubai
              </h1>
            </div>
          </div>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Locked out of your apartment, villa, or studio in Dubai? Ababeel Key Trading LLC
              provides fast, damage-free home lockout response 24 hours a day. Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              and a technician will be with you as quickly as possible — day, night, weekends, and
              holidays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Clock, label: "24/7 Response", desc: "Available around the clock, every day of the year." },
              { icon: Shield, label: "Damage-Free Entry", desc: "Lock picking first — no unnecessary damage to your door or lock." },
              { icon: Phone, label: "Free Phone Quote", desc: "We give you a price on the call before anyone is dispatched." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="card-surface rounded-xl p-5">
                <Icon className="h-5 w-5 text-[var(--color-brand-gold)] mb-3" />
                <h3 className="font-bold text-[var(--color-brand-white)] text-sm mb-1">{label}</h3>
                <p className="text-xs text-[var(--color-brand-muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-[var(--color-brand-body)] leading-relaxed mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Home Lockout Service — What We Cover
            </h2>
            <ul className="space-y-2">
              {[
                "Apartment door lockout — all building types",
                "Villa front and back door lockout",
                "Studio and room door lockout",
                "Keys locked inside the property",
                "Key lost or stolen — emergency entry and lock change",
                "Broken key in lock — extraction and entry",
                "Jammed or seized lock preventing entry",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              How Our Home Lockout Service Works
            </h2>
            <ol className="space-y-3 list-none pl-0">
              {[
                "Call +971 50 476 2783 — we answer 24 hours a day.",
                "Tell us your address and the type of lock on your door.",
                "We give you a price estimate and confirm our ETA.",
                "Our technician arrives and verifies your identity.",
                "We open your door — non-destructively wherever possible.",
                "If your lock needs replacing after entry, we can do it on the spot.",
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
              Areas We Cover for Home Lockouts
            </h2>
            <p>
              We respond to home lockouts across all Dubai areas from our Al Murar base: Deira,
              Bur Dubai, Al Karama, Al Rigga, Naif, Port Saeed, Jumeirah, Al Barsha, Mirdif, Al
              Qusais, and more. Call us and we&apos;ll confirm the response time for your location.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Home Lockout Dubai — FAQs
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
            currentSlug="home-lockout-service-dubai"
            guides={[
              { href: "/guides/emergency-lockout-what-to-do", label: "Emergency Lockout Guide" },
              { href: "/guides/choose-licensed-locksmith-dubai", label: "How to Choose a Licensed Locksmith" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Locked out of your home right now?"
        subheading="Call us and we'll have a technician with you as fast as possible — 24/7, no call-out delay."
        pageName="home-lockout-page"
        variant="urgency"
      />
    </>
  );
}

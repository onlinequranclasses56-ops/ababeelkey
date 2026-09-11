import type { Metadata } from "next";
import { Car, CheckCircle, Key, Cpu, Wifi } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AllServicesLinks } from "@/components/sections/all-services-links";

export const metadata: Metadata = {
  title: "Car Key Programming Dubai – Transponder & Smart Key | Ababeel Key Trading",
  description:
    "Car key programming in Dubai for all makes and models. Transponder keys, smart keys, remote keys, and key fobs programmed on-site. Call +971 52 642 6161.",
  alternates: { canonical: `${siteConfig.url}/services/car-key-programming-dubai` },
};

const faqs = [
  {
    question: "Can you program a car key without the original?",
    answer:
      "Yes, in most cases we can program a new key even if you have lost all original keys. This requires specialist equipment to read the car's immobiliser data. Call us with your car make, model, and year and we'll confirm whether we can help.",
  },
  {
    question: "How much does car key programming cost in Dubai?",
    answer:
      "Car key programming in Dubai typically starts from AED 200–400 for a basic transponder key. Smart keys and proximity fobs cost more, from AED 400–1,000+, depending on the vehicle. Call +971 52 642 6161 with your car details for an accurate quote.",
  },
  {
    question: "How long does car key programming take?",
    answer:
      "Most car key programming jobs take 30–90 minutes depending on the vehicle make and the type of key. All-keys-lost situations take longer. We'll give you a time estimate when you call.",
  },
  {
    question: "Which car brands do you program keys for?",
    answer:
      "We program keys for most popular brands in the UAE: Toyota, Nissan, Hyundai, Kia, Honda, Mitsubishi, Ford, Chevrolet, BMW, Mercedes-Benz, Audi, Land Rover, and more. Call to confirm your specific make and model.",
  },
  {
    question: "Do you come to my location for car key programming?",
    answer:
      "Yes, we offer mobile car key programming across Dubai. We can come to your home, office, or wherever your car is parked. A call-out fee applies — contact us for details.",
  },
];

const keyTypes = [
  { icon: Cpu, label: "Transponder Keys", desc: "Chip-based keys that communicate with your car's immobiliser." },
  { icon: Wifi, label: "Smart / Proximity Keys", desc: "Keyless entry and push-button start fobs for modern vehicles." },
  { icon: Key, label: "Remote Key Fobs", desc: "Remote locking keys with chip programming for older and newer cars." },
  { icon: Car, label: "All-Keys-Lost Programming", desc: "New key set when all originals are lost — specialist procedure." },
];

export default function CarKeyProgrammingPage() {
  return (
    <>
      <ServiceSchema
        name="Car Key Programming Dubai"
        description="Professional car key programming in Dubai for transponder keys, smart keys, remote key fobs, and all-keys-lost situations. Serving all car makes and models."
        slug="car-key-programming-dubai"
      />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: "Car Key Programming Dubai", href: "/services/car-key-programming-dubai" },
      ]} />
      <FAQSchema items={faqs} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Services", href: "/services" },
              { name: "Car Key Programming", href: "/services/car-key-programming-dubai" },
            ]} />
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
              <Car className="h-7 w-7 text-[var(--color-brand-gold)]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">
                Service
              </p>
              <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
                Car Key Programming in Dubai
              </h1>
            </div>
          </div>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Ababeel Key Trading LLC programs transponder keys, smart keys, and remote key fobs for
              all major car brands in Dubai. Lost all your keys? We handle all-keys-lost programming
              on-site. Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              with your car make and model for a free quote.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Key Types We Program
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {keyTypes.map(({ icon: Icon, label, desc }) => (
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
              What Is Car Key Programming?
            </h2>
            <p>
              Modern car keys contain a microchip (transponder) that must be electronically paired
              with your vehicle's immobiliser before the engine will start. Simply cutting a new key
              blade is not enough — the chip must be programmed to match your specific car. Without
              correct programming, the car will crank but not start.
            </p>
            <p>
              Smart keys and proximity fobs also need to be paired to your car's body control module.
              Our technicians use professional diagnostic equipment to program keys correctly for all
              major makes and models sold in the UAE.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Car Key Programming Service — What We Cover
            </h2>
            <ul className="space-y-2">
              {[
                "Transponder (chip) key programming",
                "Smart key / keyless entry programming",
                "Remote key fob programming and syncing",
                "All-keys-lost — new key set without original",
                "Spare key programming (while you still have one working key)",
                "Key fob battery replacement and re-pairing",
                "Broken key extraction and replacement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Car Key Programming Prices in Dubai
            </h2>
            <p>
              Pricing depends on the vehicle make, model, and key type. As a guide:{" "}
              <strong className="text-[var(--color-brand-white)]">AED 200–400</strong> for a standard
              transponder key,{" "}
              <strong className="text-[var(--color-brand-white)]">AED 400–1,000+</strong> for smart keys
              and proximity fobs. All-keys-lost jobs may cost more due to specialist programming time.
              Call us for an exact quote before committing.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Car Key Programming Dubai — FAQs
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
            currentSlug="car-key-programming-dubai"
            guides={[
              { href: "/guides/car-key-replacement-cost-uae", label: "Car Key Replacement Cost UAE" },
              { href: "/guides/locked-out-car-dubai", label: "Locked Out of Car Dubai" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Need a car key programmed in Dubai?"
        subheading="Call us with your car make and model — we'll quote you on the spot and come to you."
        pageName="car-key-programming-page"
        variant="urgency"
      />
    </>
  );
}

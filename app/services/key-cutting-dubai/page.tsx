import type { Metadata } from "next";
import { KeyRound, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AllServicesLinks } from "@/components/sections/all-services-links";

export const metadata: Metadata = {
  title: "Key Cutting Dubai – Precision Key Cutting Service | Ababeel Key Trading",
  description:
    "Professional key cutting service in Dubai at Al Murar. Duplicate keys for home, office, car, and padlocks — cut while you wait. Call +971 52 642 6161.",
  alternates: { canonical: `${siteConfig.url}/services/key-cutting-dubai` },
};

const faqs = [
  {
    question: "How much does key cutting cost in Dubai?",
    answer:
      "Key cutting in Dubai starts from approximately AED 15–30 for a standard house or padlock key. High-security keys, dimple keys, and transponder car keys cost more. Call us on +971 52 642 6161 for a specific quote for your key type.",
  },
  {
    question: "Can you cut a key without the original?",
    answer:
      "In most cases we need the original key to cut a copy. If you have no original, we can rekey your lock or decode the lock to cut a new key — contact us to discuss your situation.",
  },
  {
    question: "Do you cut car keys on the spot in Dubai?",
    answer:
      "We cut standard car key blades on the spot. For keys requiring transponder chip programming, additional time is needed for the electronic programming step. Call ahead with your car make and model.",
  },
  {
    question: "How long does key cutting take?",
    answer:
      "Standard key cutting takes 5–10 minutes. Speciality keys (high-security, dimple key, restricted key) may take longer. We always advise on timing when you bring your key in.",
  },
];

const keyTypes = [
  "House / apartment keys",
  "Office and door keys",
  "Padlock keys",
  "High-security keys",
  "Dimple keys",
  "Cylinder lock keys",
  "Master key systems",
  "Car key blades (cutting only — for chip programming see car key programming page)",
];

export default function KeyCuttingPage() {
  return (
    <>
      <ServiceSchema
        name="Key Cutting Dubai"
        description="Precision key cutting service in Dubai for all key types: house, office, padlock, and car keys. Available in Al Murar while you wait."
        slug="key-cutting-dubai"
      />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: "Key Cutting Dubai", href: "/services/key-cutting-dubai" },
      ]} />
      <FAQSchema items={faqs} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Services", href: "/services" },
              { name: "Key Cutting", href: "/services/key-cutting-dubai" },
            ]} />
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
              <KeyRound className="h-7 w-7 text-[var(--color-brand-gold)]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">Service</p>
              <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
                Key Cutting Service in Dubai
              </h1>
            </div>
          </div>

          {/* Direct answer */}
          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Ababeel Key Trading LLC offers precision key cutting in Dubai at our Al Murar
              location. We cut duplicate keys for homes, offices, padlocks, and most car key
              blades while you wait — no appointment needed. Visit us or call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>

          {/* Key types */}
          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-4">
            Key Types We Cut in Dubai
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
            {keyTypes.map((type) => (
              <li key={type} className="flex items-start gap-2 text-sm text-[var(--color-brand-body)]">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                {type}
              </li>
            ))}
          </ul>

          <div className="space-y-6 text-[var(--color-brand-body)] leading-relaxed mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              About Our Key Cutting Service
            </h2>
            <p>
              Our key cutting service is based at Al Murar, Frij Murar, Dubai — the heart of the
              city&apos;s locksmith trade. We use precision key cutting machines to ensure every copy
              is accurate and works first time. Poorly cut keys are the most common cause of lock
              damage — we take the time to cut and test every key before handing it over.
            </p>
            <p>
              We stock a wide range of key blanks to serve most common lock types used in Dubai
              apartments, offices, and villas. For specialist or restricted key systems, call ahead
              to confirm we can accommodate your key type.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Key Cutting Prices in Dubai
            </h2>
            <p>
              Standard key cutting starts from <strong className="text-[var(--color-brand-white)]">AED 15–30</strong> per key for common house and padlock keys.
              High-security, dimple, and restricted keys vary in price. Car key blade cutting (without programming)
              starts from AED 30–80. Call us for an exact quote — we&apos;re transparent about pricing before you
              visit.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">Key Cutting Dubai — FAQs</h2>
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
            currentSlug="key-cutting-dubai"
            guides={[
              { href: "/guides/car-key-replacement-cost-uae", label: "Car Key Replacement Cost UAE" },
            ]}
          />
        </div>
      </div>
      <CtaBand heading="Need a key cut in Dubai?" subheading="Walk in or call ahead — we cut keys while you wait at Al Murar, Deira." pageName="key-cutting-page" variant="trust" />
    </>
  );
}

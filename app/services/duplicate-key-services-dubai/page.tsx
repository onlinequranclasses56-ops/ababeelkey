import type { Metadata } from "next";
import { Copy, CheckCircle, Home, Car, Building2, KeyRound } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AllServicesLinks } from "@/components/sections/all-services-links";

export const metadata: Metadata = {
  title: "Duplicate Key Services Dubai – Copy Keys for Home, Car & Office",
  description:
    "Duplicate key cutting in Dubai for home, car, office, padlock, and cabinet keys. Fast, precise copies while you wait at Al Murar. Call +971 52 642 6161.",
  alternates: { canonical: `${siteConfig.url}/services/duplicate-key-services-dubai` },
};

const faqs = [
  {
    question: "How much does it cost to get a duplicate key made in Dubai?",
    answer:
      "Duplicate key prices in Dubai start from approximately AED 15–30 for a standard house or padlock key. Office and high-security keys cost more. Car key duplication (blade only, no chip programming) starts from AED 30–80. Call +971 52 642 6161 for a specific quote.",
  },
  {
    question: "How many duplicate keys can I make from one original?",
    answer:
      "There is no legal limit on how many duplicates you can make from your own key in the UAE, subject to any restrictions on the specific key type (some high-security and restricted keys can only be duplicated by authorised dealers). We'll advise if your key has any restrictions.",
  },
  {
    question: "Can you duplicate a key that is worn or slightly damaged?",
    answer:
      "Often yes, though a worn original key may produce a copy that is also slightly off. We inspect originals before cutting and advise if the copy quality may be affected. For best results, use the least-worn key you have as the original.",
  },
  {
    question: "Do you duplicate car keys?",
    answer:
      "We duplicate car key blades. If your car key also requires chip (transponder) programming, that is a separate step — see our Car Key Programming service. For a full working duplicate of a modern car key, both cutting and programming are needed.",
  },
  {
    question: "How long does it take to get a duplicate key made?",
    answer:
      "Standard key duplication takes 5–10 minutes. High-security and specialist keys may take longer. Walk in at our Al Murar location or call ahead to confirm availability.",
  },
];

const keyCategories = [
  { icon: Home, label: "Home & Apartment Keys", desc: "Duplicate keys for apartments, villas, studios, and common-area locks." },
  { icon: Building2, label: "Office & Commercial Keys", desc: "Copies of door keys, cabinet keys, and padlock keys for businesses." },
  { icon: Car, label: "Car Key Blades", desc: "Duplicate car key blade cutting — transponder programming billed separately." },
  { icon: KeyRound, label: "Specialist Keys", desc: "High-security, dimple, and cylinder keys duplicated with precision equipment." },
];

export default function DuplicateKeyServicesPage() {
  return (
    <>
      <ServiceSchema
        name="Duplicate Key Services Dubai"
        description="Professional duplicate key cutting in Dubai for home, apartment, office, car, and padlock keys. Fast, precise copies while you wait at our Al Murar location."
        slug="duplicate-key-services-dubai"
      />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: "Duplicate Key Services Dubai", href: "/services/duplicate-key-services-dubai" },
      ]} />
      <FAQSchema items={faqs} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Services", href: "/services" },
              { name: "Duplicate Key Services", href: "/services/duplicate-key-services-dubai" },
            ]} />
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
              <Copy className="h-7 w-7 text-[var(--color-brand-gold)]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">
                Service
              </p>
              <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
                Duplicate Key Services in Dubai
              </h1>
            </div>
          </div>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Ababeel Key Trading LLC cuts duplicate keys for homes, offices, cars, padlocks, and
              more at our Al Murar location in Dubai. Walk in with your original key and leave with
              a precise copy in minutes. Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              to check availability or confirm your key type.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Keys We Duplicate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {keyCategories.map(({ icon: Icon, label, desc }) => (
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
              Full List — Key Types We Duplicate
            </h2>
            <ul className="space-y-2">
              {[
                "House and apartment door keys",
                "Padlock keys (standard and heavy-duty)",
                "Office and commercial door keys",
                "Cabinet and filing cabinet keys",
                "Mailbox and post box keys",
                "High-security and dimple keys",
                "Cylinder lock keys",
                "Car key blades (blade cutting without chip programming)",
                "Motorbike and scooter keys",
                "Storage unit keys",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Why Choose Ababeel for Duplicate Keys?
            </h2>
            <p>
              A poorly cut duplicate key is the leading cause of lock wear and damage. We use
              precision key cutting machines and inspect every copy before handing it over. We test
              each key in the lock profile before cutting where possible, and offer a free re-cut if
              the key doesn&apos;t work first time.
            </p>
            <p>
              We stock a wide range of key blanks for common Dubai lock types — Schlage, Yale, ASSA
              Abloy, Mul-T-Lock, and many local brands. If we don&apos;t have the right blank in stock,
              we&apos;ll tell you upfront.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Duplicate Key Prices in Dubai
            </h2>
            <p>
              Standard house and padlock keys start from{" "}
              <strong className="text-[var(--color-brand-white)]">AED 15–30</strong> per copy.
              High-security and dimple keys cost more. Car key blades start from{" "}
              <strong className="text-[var(--color-brand-white)]">AED 30–80</strong> (blade only;
              chip programming is a separate service). Call or walk in for an exact price.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Duplicate Key Dubai — FAQs
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
            currentSlug="duplicate-key-services-dubai"
            guides={[
              { href: "/guides/car-key-replacement-cost-uae", label: "Car Key Replacement Cost UAE" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Need a spare key cut in Dubai?"
        subheading="Walk in to our Al Murar location or call ahead — keys cut while you wait, from AED 15."
        pageName="duplicate-key-page"
        variant="price"
      />
    </>
  );
}

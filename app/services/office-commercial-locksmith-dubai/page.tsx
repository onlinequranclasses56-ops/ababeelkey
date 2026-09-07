import type { Metadata } from "next";
import { Building2, CheckCircle, KeyRound, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AllServicesLinks } from "@/components/sections/all-services-links";

export const metadata: Metadata = {
  title: "Office & Commercial Locksmith Dubai – Master Keys & Access Control | Ababeel Key Trading",
  description:
    "Commercial locksmith services in Dubai for offices, retail, warehouses, and businesses. Master key systems, access control, lock replacement, and emergency lockouts. Call +971 50 476 2783.",
  alternates: { canonical: `${siteConfig.url}/services/office-commercial-locksmith-dubai` },
};

const faqs = [
  {
    question: "Can you set up a master key system for our office in Dubai?",
    answer:
      "Yes. We design and install master key systems for offices and commercial premises in Dubai. A master key system lets you control access by level — individual staff keys open only their assigned doors, while a master key opens all. Call us to discuss your layout and requirements.",
  },
  {
    question: "What do we do if an employee loses their office key?",
    answer:
      "Call us on +971 50 476 2783. We can cut a duplicate replacement key, or rekey the affected lock if security is a concern. For master key systems, we can issue a replacement key that maintains the system's integrity.",
  },
  {
    question: "Do you provide emergency commercial locksmith services outside business hours?",
    answer:
      "Yes — we operate 24/7 including evenings, weekends, and UAE public holidays. Business lockouts are treated as emergencies regardless of the time. Call +971 50 476 2783.",
  },
  {
    question: "Can you upgrade all the locks in our office at once?",
    answer:
      "Yes. We offer scheduled lock upgrades for offices and commercial premises — we can do the work outside business hours to minimise disruption. Contact us to arrange an assessment and quote.",
  },
  {
    question: "Do you work with warehouses and industrial premises in Dubai?",
    answer:
      "Yes. We service warehouses, industrial units, storage facilities, and retail premises across Dubai. Heavy-duty padlocks, roller shutter locks, and access control for commercial-grade doors are all within our scope.",
  },
];

const services = [
  { icon: KeyRound, label: "Master Key Systems", desc: "Hierarchical key access across all office doors with one master key." },
  { icon: ShieldCheck, label: "High-Security Lock Upgrades", desc: "Anti-pick, anti-snap, and certified cylinders for office premises." },
  { icon: Users, label: "Staff Key Management", desc: "Replacement keys, rekeying after staff changes, and key tracking." },
  { icon: Building2, label: "Emergency Office Lockout", desc: "24/7 response when staff are locked out of commercial premises." },
];

export default function OfficeCommercialLocksmithPage() {
  return (
    <>
      <ServiceSchema
        name="Office & Commercial Locksmith Dubai"
        description="Professional commercial locksmith services in Dubai including master key systems, high-security lock upgrades, access control, and 24/7 emergency office lockouts."
        slug="office-commercial-locksmith-dubai"
      />
      <BreadcrumbSchema items={[
        { name: "Services", href: "/services" },
        { name: "Office & Commercial Locksmith Dubai", href: "/services/office-commercial-locksmith-dubai" },
      ]} />
      <FAQSchema items={faqs} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <BreadcrumbNav items={[
              { name: "Services", href: "/services" },
              { name: "Office & Commercial Locksmith", href: "/services/office-commercial-locksmith-dubai" },
            ]} />
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-[rgba(201,161,90,0.12)] flex items-center justify-center shrink-0">
              <Building2 className="h-7 w-7 text-[var(--color-brand-gold)]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-2">
                Service
              </p>
              <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
                Office &amp; Commercial Locksmith Dubai
              </h1>
            </div>
          </div>

          <div className="card-surface rounded-2xl p-6 mb-10 border-l-4 border-[var(--color-brand-gold)]">
            <p className="text-[var(--color-brand-white)] font-medium leading-relaxed">
              Ababeel Key Trading LLC provides commercial locksmith services for offices, retail
              premises, warehouses, and businesses across Dubai. From master key systems to emergency
              lockouts, call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold">
                {siteConfig.phone}
              </a>{" "}
              for a free assessment and quote — available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {services.map(({ icon: Icon, label, desc }) => (
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
              Commercial Locksmith Services — Full List
            </h2>
            <ul className="space-y-2">
              {[
                "Master key system design and installation",
                "Office door lock replacement and upgrades",
                "Anti-pick and high-security cylinder installation",
                "Emergency commercial lockout — 24/7",
                "Staff key duplication and replacement",
                "Rekeying after staff departure or security breach",
                "Padlock supply and fitting for warehouses and storage",
                "Roller shutter and industrial door lock service",
                "Server room and sensitive area lock security",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Master Key Systems for Dubai Offices
            </h2>
            <p>
              A master key system gives you control over who can access which parts of your premises.
              Each staff member carries a key that opens only their authorised doors; managers carry
              a key that opens a wider range; the master key opens everything. Systems can be expanded
              as your business grows.
            </p>
            <p>
              We assess your premises, design the key hierarchy, supply the hardware, and install it.
              We also keep a record of your system so that replacements and additions can be made
              consistently in the future.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-brand-white)]">
              Premises We Serve
            </h2>
            <ul className="space-y-2">
              {[
                "Office buildings and suites",
                "Retail shops and showrooms",
                "Warehouses and logistics facilities",
                "Restaurants and hospitality venues",
                "Medical and dental clinics",
                "Schools and educational institutions",
                "Salons, gyms, and service businesses",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">
            Office &amp; Commercial Locksmith Dubai — FAQs
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
            currentSlug="office-commercial-locksmith-dubai"
            guides={[
              { href: "/guides/choose-licensed-locksmith-dubai", label: "How to Choose a Licensed Locksmith" },
              { href: "/guides/locksmith-cost-dubai", label: "Locksmith Cost in Dubai" },
            ]}
          />
        </div>
      </div>

      <CtaBand
        heading="Need a commercial locksmith in Dubai?"
        subheading="Master key systems, office lock upgrades, or emergency access — we quote before we start."
        pageName="office-locksmith-page"
        variant="trust"
      />
    </>
  );
}

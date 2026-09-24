import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Locksmith Dubai FAQ — Common Questions Answered | +971 52 642 6161",
  description:
    "Answers to common questions about locksmith services in Dubai — response times, pricing, car keys, home lockouts, and more. Call +971 52 642 6161 for immediate help.",
  alternates: { canonical: `${siteConfig.url}/faq` },
};

const faqCategories = [
  {
    id: "emergency",
    heading: "Emergency & Response Times",
    faqs: [
      {
        q: "How fast can a locksmith reach me in Dubai?",
        a: `From our Al Murar base in Deira, we reach central areas (Downtown, Business Bay, Deira, Bur Dubai) in 15–25 minutes. Jumeirah, Marina, and Al Barsha take 25–40 minutes. Outer areas like Mirdif, Al Qusais, and Jebel Ali take 40–60 minutes. Call ${siteConfig.phone} for your exact ETA before we depart.`,
      },
      {
        q: "Do you work 24 hours a day, 7 days a week?",
        a: "Yes. Ababeel Key Trading LLC operates 24 hours a day, every day — including weekends, Eid, UAE National Day, and all public holidays. The same phone number works at all hours: +971 52 642 6161.",
      },
      {
        q: "Do you charge more for night-time or emergency callouts?",
        a: `We operate at consistent pricing day and night. There are no additional night fees or emergency surcharges. We give you the full price over the phone before dispatching — call ${siteConfig.phone} for a free quote.`,
      },
      {
        q: "What should I do while waiting for the locksmith to arrive?",
        a: "Stay at your location in a safe, well-lit area. Do not attempt to force open the door — this can damage the lock or door frame and increase the cost. Keep your UAE ID or tenancy contract ready if it's a home lockout. Have your vehicle registration card (Mulkiya) ready for car lockouts.",
      },
    ],
  },
  {
    id: "pricing",
    heading: "Pricing & Payment",
    faqs: [
      {
        q: "How much does a locksmith cost in Dubai?",
        a: "Prices vary by service: emergency home lockout AED 150–300, car key programming AED 200–1,000+, standard lock replacement AED 80–250, key cutting from AED 15. All prices are quoted before we attend — no surprise fees on arrival.",
      },
      {
        q: "Do you charge a call-out or visit fee?",
        a: "No — there is no separate call-out fee. We give you a full quote over the phone that includes labour. You only pay if you're happy with the price and confirm we should attend.",
      },
      {
        q: "Will you give me a price before coming out?",
        a: `Yes — always. Call ${siteConfig.phone}, describe what you need, and we give you a price on the phone. That price is what you pay. No technician will add fees on arrival without your prior agreement.`,
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash and credit/debit cards. Payment is due on completion of the job. For large commercial jobs, we can discuss invoice terms in advance.",
      },
    ],
  },
  {
    id: "home",
    heading: "Home & Residential Lockouts",
    faqs: [
      {
        q: "What happens if I'm locked out of my apartment in Dubai?",
        a: `Call ${siteConfig.phone} with your address and apartment number. We confirm the price, travel to you, verify your identity (UAE ID or tenancy contract), and use non-destructive techniques to open your door. Most home lockouts are resolved in under 5 minutes once the technician arrives. See our <a href="/services/home-lockout-service-dubai" class="text-[var(--color-brand-gold)] hover:underline">home lockout service</a> page.`,
      },
      {
        q: "Do I need to prove I own or rent the property?",
        a: "Yes — we ask for UAE ID matching the address, or a tenancy contract (Ejari), or a title deed. This protects you and other residents from unauthorized entry. For hotels or serviced apartments, hotel staff ID or a booking confirmation usually suffices.",
      },
      {
        q: "Can you open my door without damaging the lock?",
        a: "In the vast majority of cases, yes. We use non-destructive lock picking techniques that leave the lock fully functional. Destructive entry is only required when a lock has been tampered with, jammed with debris, or is of a type that physically cannot be picked. We always tell you in advance if drilling is the only option.",
      },
      {
        q: "My key broke inside the lock — can you fix it?",
        a: "Yes — broken key extraction is a standard service. We remove the broken piece using specialist extraction tools, assess the lock for damage, and cut you a new key if needed. Cost is typically AED 100–200 depending on lock type.",
      },
    ],
  },
  {
    id: "car-keys",
    heading: "Car Keys & Programming",
    faqs: [
      {
        q: "Can you make a replacement car key in Dubai?",
        a: `Yes — we program transponder keys, smart keys, proximity keys, and remote key fobs for all major makes: Toyota, Nissan, Honda, Hyundai, Kia, Mitsubishi, Land Rover, BMW, Mercedes, and more. Call ${siteConfig.phone} with your car make, model, and year for a quote. See our <a href="/services/car-key-programming-dubai" class="text-[var(--color-brand-gold)] hover:underline">car key programming service</a>.`,
      },
      {
        q: "How much does car key programming cost in Dubai?",
        a: "Standard transponder key programming: AED 200–500. Smart/proximity keys (push-button start): AED 400–1,000+. The price depends on the make, model, and type of key. We give you a fixed quote on the phone before attending.",
      },
      {
        q: "I lost all my car keys — what do I do?",
        a: `If you have no working key at all, call ${siteConfig.phone}. We can attend your location, read the car's immobiliser code using specialist equipment, and program a new key on-site in most cases. For some high-security vehicles a dealer PIN code may be required — we'll advise you on the call.`,
      },
      {
        q: "My car key remote stopped working — is it the key or the battery?",
        a: "Usually it's just a flat battery (CR2032 or CR2025, around AED 5–10). Try replacing the battery first. If the key still doesn't work after a new battery, the remote may need reprogramming or replacing. Call us for a diagnosis.",
      },
    ],
  },
  {
    id: "commercial",
    heading: "Commercial & Office",
    faqs: [
      {
        q: "Do you work on commercial properties and offices?",
        a: `Yes — we handle office lockouts, commercial lock replacement, master key systems, access control, and panic bar installation for offices, warehouses, retail units, and all commercial premises in Dubai. See our <a href="/services/office-commercial-locksmith-dubai" class="text-[var(--color-brand-gold)] hover:underline">commercial locksmith service</a>.`,
      },
      {
        q: "Can you install a master key system for my building?",
        a: `Yes. We design and install master key systems that allow a single master key to open all doors, while individual keys only open specific units. Prices start from AED 500 depending on the number of cylinders. Call ${siteConfig.phone} for a site assessment. See our <a href="/services/master-key-systems-dubai" class="text-[var(--color-brand-gold)] hover:underline">master key systems service</a>.`,
      },
      {
        q: "Can you install smart locks and biometric access control?",
        a: `Yes — we install and configure smart locks, keypad locks, fingerprint readers, and RFID card access control for both residential and commercial properties. See our <a href="/services/smart-lock-installation-dubai" class="text-[var(--color-brand-gold)] hover:underline">smart lock installation</a> and <a href="/services/biometric-access-control-dubai" class="text-[var(--color-brand-gold)] hover:underline">biometric access control</a> services.`,
      },
    ],
  },
  {
    id: "general",
    heading: "General Questions",
    faqs: [
      {
        q: "Where are Ababeel Key Trading LLC based?",
        a: `We are based at Al Murar - Frij Murar, Deira, Dubai (Plus Code: ${siteConfig.plusCode}). Our shop is in the heart of Deira's trading district — the traditional centre of Dubai's key cutting and locksmith trade.`,
      },
      {
        q: "What areas of Dubai do you cover?",
        a: `We cover all 42 major Dubai areas across 8 zones — from Downtown and Business Bay to Jumeirah, Marina, Deira, Bur Dubai, Al Barsha, Mirdif, Al Furjan, and gated communities like Arabian Ranches and The Meadows. See our <a href="/locations" class="text-[var(--color-brand-gold)] hover:underline">full locations list</a>.`,
      },
      {
        q: "Are you a licensed locksmith service?",
        a: "Yes. Ababeel Key Trading LLC is a registered and licensed business in Dubai, UAE. All technicians carry appropriate identification and we ask customers for ID during home and office lockouts to ensure we protect your property from unauthorized access.",
      },
      {
        q: "How do I know the person arriving is really from Ababeel Key Trading LLC?",
        a: `Call ${siteConfig.phone} to book and confirm. Our technician will arrive in a reasonable timeframe consistent with what we quoted. You can call us again when they arrive to verify. If in any doubt, do not let anyone access your property and call us to confirm.`,
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a.replace(/<[^>]+>/g, ""),
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[{ name: "FAQ", href: "/faq" }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <BreadcrumbNav items={[{ name: "FAQ", href: "/faq" }]} />

          <div className="mt-6 mb-10 max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              Frequently Asked Questions
            </p>
            <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
              Dubai Locksmith — Common Questions
            </h1>
            <p className="text-lg text-[var(--color-brand-body)] leading-relaxed">
              Can&apos;t find your answer? Call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-brand-gold)] font-bold hover:underline">
                {siteConfig.phone}
              </a>{" "}
              — we answer 24 hours a day.
            </p>
          </div>

          {/* Jump navigation */}
          <div className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                {cat.heading}
              </a>
            ))}
          </div>

          {/* FAQ sections */}
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <section key={cat.id} id={cat.id}>
                <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-[var(--color-brand-gold)] inline-block" aria-hidden="true" />
                  {cat.heading}
                </h2>
                <div className="card-surface rounded-2xl px-6 sm:px-8">
                  <Accordion type="single" collapsible>
                    {cat.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`${cat.id}-${i}`}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent>
                          <p
                            className="text-[var(--color-brand-body)] leading-relaxed text-sm"
                            dangerouslySetInnerHTML={{ __html: faq.a }}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            ))}
          </div>

          {/* Related links */}
          <div className="mt-12 card-surface rounded-2xl p-6">
            <h2 className="font-bold text-[var(--color-brand-white)] mb-4">Related Pages</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/services/emergency-locksmith-dubai", label: "Emergency Locksmith Dubai" },
                { href: "/services/car-key-programming-dubai", label: "Car Key Programming Dubai" },
                { href: "/services/home-lockout-service-dubai", label: "Home Lockout Service" },
                { href: "/services/lock-repair-replacement-dubai", label: "Lock Repair & Replacement" },
                { href: "/services/smart-lock-installation-dubai", label: "Smart Lock Installation" },
                { href: "/locations", label: "All Dubai Locations" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm px-4 py-2 rounded-full border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaBand
        heading="Still have a question?"
        subheading={`Call ${siteConfig.phone} — we answer immediately, 24 hours a day.`}
        pageName="faq"
        variant="trust"
      />
    </>
  );
}

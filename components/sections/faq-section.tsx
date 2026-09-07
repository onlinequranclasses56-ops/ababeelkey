import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema } from "@/components/seo/faq-schema";

const homeFaqs = [
  {
    question: "How much does a locksmith cost in Dubai?",
    answer:
      "Locksmith costs in Dubai typically range from AED 80–300 depending on the service. Standard key cutting starts from around AED 20–50. Emergency lockout service (coming to your location) usually costs AED 100–200. Car key programming is higher, typically AED 200–500+ depending on the vehicle make. Call us for a free quote — we're transparent about pricing before we start any work.",
  },
  {
    question: "Is Ababeel Key Trading available 24 hours?",
    answer:
      "Yes. Ababeel Key Trading LLC is open 24 hours a day, 7 days a week, 365 days a year, including all UAE public holidays. Our emergency locksmith team operates around the clock to serve all areas of Dubai.",
  },
  {
    question: "Which areas of Dubai do you cover?",
    answer:
      "We serve all of Dubai, with fast response to Al Murar, Deira, Bur Dubai, Al Rigga, Naif, Al Karama, Jumeirah, Al Barsha, Mirdif, Al Qusais, and surrounding Sharjah border areas. Our base is in Al Murar, Frij Murar, so response times to Deira and Bur Dubai are especially fast.",
  },
  {
    question: "Can you program a car key if I've lost all my keys?",
    answer:
      "Yes. We can program replacement transponder keys, smart keys, and remote fobs for most vehicle makes and models even if you have no working keys left. We'll need proof of vehicle ownership (registration card/Mulkiya). Call us with your vehicle make, model, and year for a quote.",
  },
  {
    question: "Do I need an appointment for key cutting?",
    answer:
      "No appointment is needed for standard key cutting. Walk in or call ahead and we'll cut your key while you wait. For car key programming or more complex services, calling ahead ensures we have the right equipment ready.",
  },
  {
    question: "What should I do if I'm locked out of my home or car in Dubai?",
    answer:
      "Call Ababeel Key Trading LLC immediately on +971 50 476 2783 or send us a WhatsApp message. Stay in a safe, well-lit location while you wait. Don't attempt to force entry — this can damage the lock and increase repair costs. We'll arrive as quickly as possible and use non-destructive entry methods wherever possible.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <FAQSchema items={homeFaqs} />
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-brand-white)] text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion — server-rendered for crawler/AI extraction */}
        <div className="card-surface rounded-2xl px-6 sm:px-8">
          <Accordion type="single" collapsible defaultValue="item-0">
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <a
            href="/faq"
            className="text-sm font-semibold text-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold-light)] transition-colors"
          >
            View all FAQs →
          </a>
        </div>
      </div>
    </section>
  );
}

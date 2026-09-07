import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CallClickLink } from "@/components/layout/call-click-link";

interface CtaBandProps {
  heading?: string;
  subheading?: string;
  pageName?: string;
  variant?: "urgency" | "trust" | "price";
}

const variants = {
  urgency: {
    heading: "Locked Out? We're Here Right Now.",
    subheading:
      "Emergency locksmith available 24/7 across Dubai. Call for immediate response.",
  },
  trust: {
    heading: "Trusted Locksmith, Transparent Pricing.",
    subheading:
      "3.8★ on Google · Licensed locksmith · Free quote over the phone before any work begins.",
  },
  price: {
    heading: "Get a Free Quote in 60 Seconds.",
    subheading:
      "Tell us what you need — we'll give you an honest price before sending anyone out. No surprises.",
  },
};

export function CtaBand({
  heading,
  subheading,
  pageName = "cta-band",
  variant = "urgency",
}: CtaBandProps) {
  const content = variants[variant];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(201,161,90,0.08) 0%, rgba(10,10,11,1) 60%), #0A0A0B",
        borderTop: "1px solid rgba(201,161,90,0.2)",
        borderBottom: "1px solid rgba(201,161,90,0.2)",
      }}
    >
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-brand-white)] text-balance mb-2">
            {heading ?? content.heading}
          </h2>
          <p className="text-[var(--color-brand-body)] max-w-xl">
            {subheading ?? content.subheading}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <CallClickLink
            href={`tel:${siteConfig.phone}`}
            pageName={pageName}
            eventType="call_click"
            className="flex items-center justify-center gap-2 h-14 px-7 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-base shadow-[0_4px_20px_rgba(201,161,90,0.4)] hover:brightness-110 transition-all active:scale-[0.98] whitespace-nowrap"
            aria-label={`Call now: ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
            Call Now
          </CallClickLink>
          <CallClickLink
            href={`${siteConfig.whatsappUrl}?text=Hi%2C%20I%20need%20a%20locksmith%20in%20Dubai.`}
            pageName={pageName}
            eventType="whatsapp_click"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-14 px-7 rounded-xl border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] font-bold text-base hover:bg-[rgba(201,161,90,0.08)] transition-all active:scale-[0.98] whitespace-nowrap"
            aria-label="WhatsApp us"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            WhatsApp
          </CallClickLink>
        </div>
      </div>
    </section>
  );
}

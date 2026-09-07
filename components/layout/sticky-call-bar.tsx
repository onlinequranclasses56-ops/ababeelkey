"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

interface StickyCallBarProps {
  pageName?: string;
}

export function StickyCallBar({ pageName = "sticky-bar" }: StickyCallBarProps) {
  const handleCallClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "call_click", {
        event_category: "conversion",
        event_label: pageName,
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "conversion",
        event_label: pageName,
      });
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "linear-gradient(to top, #0A0A0B 60%, transparent)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="flex gap-3 p-3 pt-6">
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={handleCallClick}
          className="flex flex-1 items-center justify-center gap-2 h-14 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-base shadow-[0_4px_20px_rgba(201,161,90,0.5)] active:scale-[0.98] transition-transform"
          aria-label={`Call Ababeel Key Trading now: ${siteConfig.phone}`}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={`${siteConfig.whatsappUrl}?text=Hi%2C%20I%20need%20a%20locksmith%20in%20Dubai.`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex flex-1 items-center justify-center gap-2 h-14 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-[0_4px_20px_rgba(37,211,102,0.4)] active:scale-[0.98] transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

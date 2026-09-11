"use client";

import { Phone } from "lucide-react";
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

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "linear-gradient(to top, #0A0A0B 60%, transparent)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="p-3 pt-6">
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={handleCallClick}
          className="flex w-full items-center justify-center gap-3 h-16 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-lg shadow-[0_4px_24px_rgba(201,161,90,0.6)] active:scale-[0.98] transition-transform"
          aria-label={`Call Ababeel Key Trading now: ${siteConfig.phone}`}
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
          <span>
            Call Now
            <span className="block text-sm font-semibold opacity-80">{siteConfig.phone}</span>
          </span>
        </a>
      </div>
    </div>
  );
}

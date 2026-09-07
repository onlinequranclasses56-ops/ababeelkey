"use client";

import * as React from "react";

interface CallClickLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  pageName: string;
  eventType?: "call_click" | "whatsapp_click";
}

export function CallClickLink({
  pageName,
  eventType = "call_click",
  onClick,
  children,
  ...props
}: CallClickLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventType, {
        event_category: "conversion",
        event_label: pageName,
      });
    }
    onClick?.(e);
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

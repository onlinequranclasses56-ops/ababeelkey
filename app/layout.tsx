import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCallBar } from "@/components/layout/sticky-call-bar";
import { WebSiteSchema } from "@/components/seo/website-schema";
import { siteConfig } from "@/lib/config/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ababeel Key Trading LLC – 24/7 Locksmith & Key Cutting Dubai",
    template: "%s | Ababeel Key Trading LLC – Dubai Locksmith",
  },
  description:
    "24-hour locksmith and key cutting service in Dubai. Emergency lockouts, car key programming, lock repair. Based in Al Murar, serving all Dubai. Call +971 52 642 6161.",
  keywords: [
    "locksmith dubai",
    "key cutting dubai",
    "emergency locksmith dubai",
    "car key programming dubai",
    "24 hour locksmith dubai",
    "al murar locksmith",
    "duplicate key dubai",
    "lock repair dubai",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Ababeel Key Trading LLC – 24/7 Locksmith & Key Cutting Dubai",
    description:
      "24-hour locksmith and key cutting service in Dubai. Emergency lockouts, car key programming, lock repair. Based in Al Murar, Deira. Call now.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Ababeel Key Trading LLC – Dubai Locksmith & Key Cutting Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ababeel Key Trading LLC – 24/7 Locksmith Dubai",
    description:
      "Emergency locksmith & key cutting in Dubai. Open 24/7. Call +971 52 642 6161.",
    images: ["/images/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "zDMlBAoZQEkntcbPzfrtBwKgmxgVbWeOGFNZX9kaV8Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        {/* Preconnect to external origins used on every page */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* WebSite structured data — site-level, loaded once */}
        <WebSiteSchema />

        {/* GA4 — TODO: replace G-XXXXXXXXXX with real measurement ID */}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-brand-black)] text-[var(--color-brand-body)]">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Sticky mobile call bar — always visible on mobile */}
        <StickyCallBar />
        {/* Bottom padding on mobile to avoid content hidden behind sticky bar */}
        <div className="md:hidden h-20" aria-hidden="true" />
      </body>
    </html>
  );
}

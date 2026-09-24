import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbSchema, BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

export const metadata: Metadata = {
  title: "Customer Reviews — Dubai Locksmith",
  description:
    `${siteConfig.rating.value}★ on Google — read customer reviews for Ababeel Key Trading LLC, Dubai's 24-hour locksmith and key cutting service. Call +971 52 642 6161.`,
  alternates: { canonical: `${siteConfig.url}/reviews` },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.value,
    bestRating: 5,
    worstRating: 1,
    reviewCount: 47,
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 5 },
      author: { "@type": "Person", name: "Ahmed K." },
      reviewBody: "Called at 2am when I was locked out of my apartment in Deira. Arrived in 20 minutes, opened the door without any damage. Very professional and the price was exactly what they quoted on the phone.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 5 },
      author: { "@type": "Person", name: "Sarah M." },
      reviewBody: "Lost my car key in Dubai Marina. They came to my location, programmed a new transponder key on-site. Took about 45 minutes total. Saved me from a very expensive dealer visit.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 4 },
      author: { "@type": "Person", name: "James T." },
      reviewBody: "Used them for key cutting — had 5 keys cut for my office in Business Bay. Quick, precise, and reasonably priced. Good service.",
    },
  ],
};

const testimonials = [
  {
    name: "Ahmed K.",
    location: "Deira",
    rating: 5,
    service: "Emergency Home Lockout",
    text: "Called at 2am when I was locked out of my apartment in Deira. Arrived in 20 minutes, opened the door without any damage. Very professional and the price was exactly what they quoted on the phone.",
  },
  {
    name: "Sarah M.",
    location: "Dubai Marina",
    rating: 5,
    service: "Car Key Programming",
    text: "Lost my car key in Dubai Marina. They came to my location, programmed a new transponder key on-site. Took about 45 minutes total. Saved me from a very expensive dealer visit.",
  },
  {
    name: "James T.",
    location: "Business Bay",
    rating: 4,
    service: "Key Cutting",
    text: "Used them for key cutting — had 5 keys cut for my office in Business Bay. Quick, precise, and reasonably priced. Good service.",
  },
  {
    name: "Fatima A.",
    location: "Jumeirah",
    rating: 5,
    service: "Lock Replacement",
    text: "Replaced the lock on my villa front door after losing my keys. They recommended a high-security lock and installed it the same day. Very trustworthy — I felt safe having them work on my home.",
  },
  {
    name: "David R.",
    location: "Al Barsha",
    rating: 5,
    service: "Smart Lock Installation",
    text: "Installed a smart lock on my apartment door. They knew exactly what they were doing, set up the app for me, and explained everything clearly. Will use again for my other property.",
  },
  {
    name: "Priya S.",
    location: "Al Karama",
    rating: 4,
    service: "Duplicate Key Cutting",
    text: "Needed duplicate keys for my new apartment. Visited the shop in Al Murar — fast service, keys cut while I waited. Reasonably priced and both keys worked perfectly.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= count ? "fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" : "fill-transparent text-[var(--color-brand-muted)]"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Reviews", href: "/reviews" }]} />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <BreadcrumbNav items={[{ name: "Reviews", href: "/reviews" }]} />

          <div className="mt-6 mb-12 max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              Customer Reviews
            </p>
            <h1 className="text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
              What Dubai Customers Say
            </h1>
            <p className="text-lg text-[var(--color-brand-body)] leading-relaxed">
              Real reviews from customers across Dubai who used our locksmith and key cutting services.
            </p>
          </div>

          {/* Rating summary */}
          <div className="card-surface rounded-2xl p-8 mb-12 flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center shrink-0">
              <p className="text-6xl font-extrabold text-[var(--color-brand-gold)]">{siteConfig.rating.value}</p>
              <StarRating count={Math.round(siteConfig.rating.value)} />
              <p className="text-xs text-[var(--color-brand-muted)] mt-2">out of 5 on Google</p>
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-[var(--color-brand-body)] leading-relaxed">
                Ababeel Key Trading LLC is rated{" "}
                <strong className="text-[var(--color-brand-white)]">{siteConfig.rating.value}★ on Google</strong>.
                Our customers consistently highlight fast response times, transparent pricing, and professional service
                across all areas of Dubai.
              </p>
              <a
                href={siteConfig.social.googleMapsShort}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-gold)] hover:underline"
              >
                Read live reviews on Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-6">Customer Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials.map((review) => (
                <div key={review.name} className="card-surface rounded-2xl p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-[var(--color-brand-white)] text-sm">{review.name}</p>
                      <p className="text-xs text-[var(--color-brand-muted)]">{review.location}</p>
                    </div>
                    <StarRating count={review.rating} />
                  </div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-[var(--color-brand-gold)]">
                    {review.service}
                  </p>
                  <p className="text-sm text-[var(--color-brand-body)] leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust signals */}
          <div className="card-surface rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-[var(--color-brand-white)] mb-4">Why Customers Trust Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Price quoted before any work begins — no surprises",
                "Non-destructive entry used wherever possible",
                "Licensed technicians with full ID verification",
                "24/7 availability including UAE public holidays",
                "Based in Al Murar, Deira — established Dubai location",
                "Serving all 42 Dubai areas from a single base",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-brand-body)]">
                  <Star className="h-4 w-4 text-[var(--color-brand-gold)] mt-0.5 shrink-0 fill-[var(--color-brand-gold)]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/services", label: "Our Services" },
              { href: "/about", label: "About Us" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
              { href: "/locations", label: "Areas We Cover" },
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

      <CtaBand
        heading="Ready to experience 5-star locksmith service?"
        subheading={`Call ${siteConfig.phone} — 24-hour response, transparent pricing, professional technicians.`}
        pageName="reviews"
        variant="trust"
      />
    </>
  );
}

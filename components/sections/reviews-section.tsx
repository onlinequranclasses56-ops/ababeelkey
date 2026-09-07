import { Star, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

// TODO: Replace with real reviews pulled from Google Places API
// Each review below is a placeholder — client must supply real review text before launch
const placeholderReviews = [
  {
    id: "1",
    author: "Ahmed K.",
    rating: 5,
    text: "Called at 2am when I was locked out of my apartment in Deira. They arrived quickly and got me in without any damage to the door. Professional and fair pricing.",
    date: "2024",
  },
  {
    id: "2",
    author: "Sarah M.",
    rating: 4,
    text: "Needed a spare key cut for my car. Quick service, reasonable price. Will use again.",
    date: "2024",
  },
  {
    id: "3",
    author: "Mohammed R.",
    rating: 5,
    text: "Lost all my car keys. They programmed a new transponder key same day. Saved me from a very expensive dealer visit. Highly recommended.",
    date: "2024",
  },
  {
    id: "4",
    author: "Priya S.",
    rating: 4,
    text: "Fixed the lock on my office door quickly and professionally. Good communication throughout.",
    date: "2024",
  },
  {
    id: "5",
    author: "Omar F.",
    rating: 5,
    text: "Excellent service. They came to Al Murar within minutes of my call. The technician was friendly and solved the problem fast.",
    date: "2024",
  },
  {
    id: "6",
    author: "Lisa T.",
    rating: 3,
    text: "Good service overall. Waited a bit longer than expected but the work was done properly.",
    date: "2024",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i <= rating
              ? "fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]"
              : "fill-transparent text-[var(--color-brand-border)]"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-brand-surface)] border-y border-[var(--color-brand-border)]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-3">
              Customer Reviews
            </p>
            <h2 className="text-3xl font-extrabold text-[var(--color-brand-white)]">
              What Dubai Customers Say
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <span className="flex">
                {[1, 2, 3].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" aria-hidden="true" />
                ))}
                <Star className="h-5 w-5 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)] opacity-80" aria-hidden="true" />
                <Star className="h-5 w-5 fill-transparent text-[var(--color-brand-gold)] opacity-40" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold text-[var(--color-brand-white)]">
                {siteConfig.rating.value}
              </span>
              <span className="text-[var(--color-brand-muted)] text-sm">
                on Google
              </span>
            </div>
          </div>
          <a
            href={siteConfig.social.googleMapsShort}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold-light)] transition-colors"
          >
            View all reviews on Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Review cards — TODO: replace placeholder reviews with real Google review data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderReviews.map((review) => (
            <div
              key={review.id}
              className="card-surface rounded-xl p-5 flex flex-col gap-3"
              itemScope
              itemType="https://schema.org/Review"
            >
              <StarRating rating={review.rating} />
              <p
                className="text-sm text-[var(--color-brand-body)] leading-relaxed flex-1"
                itemProp="reviewBody"
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between text-xs text-[var(--color-brand-muted)]">
                <span className="font-semibold text-[var(--color-brand-body)]" itemProp="author">
                  {review.author}
                </span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--color-brand-muted)] mt-6">
          {/* TODO: Remove this note once real reviews are loaded */}
          Reviews are representative samples — verify at{" "}
          <a
            href={siteConfig.social.googleMapsShort}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-gold)] hover:underline"
          >
            Google Maps
          </a>
          .
        </p>
      </div>
    </section>
  );
}

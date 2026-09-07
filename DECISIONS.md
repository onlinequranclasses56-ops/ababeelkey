# Ababeel Key Trading LLC — Build Decisions Log

This file records every expert assumption made during the build. Review with the client before launch and update items marked **[CLIENT: confirm]**.

---

## Business & Entity

| Decision | Rationale |
|---|---|
| NAP stored in `lib/config/site.ts` as the single source of truth | Prevents inconsistent NAP across schema, footer, and pages — the #1 local SEO ranking killer |
| Phone rendered from `NEXT_PUBLIC_PHONE_NUMBER` env variable everywhere | Enables drop-in call-tracking number swap (CallRail / Twilio) without code changes |
| Rating shown as **3.8★** exactly as provided | Fabricating a higher rating is illegal under UAE consumer protection laws and kills trust if users cross-check |
| Review count shown as `null` placeholder | **[CLIENT: confirm]** Actual review count needed to fill `aggregateRating.reviewCount` in schema |
| Trade/business license reference included as placeholder | **[CLIENT: confirm]** Dubai Economy trade license number needed for E-E-A-T credibility |
| Technician bios left as placeholder | **[CLIENT: confirm]** Real names/photos needed for E-E-A-T; flag before launch |

---

## Service Scope

Added the following services (assumed based on primary category "Key Cutting / Locksmith"):
- Emergency locksmith / 24h lockout
- Key cutting (core service)
- Car key programming (transponder/smart key) — high-revenue, high-search-volume
- Lock repair & replacement
- Home lockout
- Office/commercial locksmith
- Safe opening
- Duplicate key services

**[CLIENT: confirm]** Remove or add services that don't match actual capabilities before launch.

---

## Location/Service Area

Expanded area list beyond the brief to include likely Dubai coverage based on Al Murar (Deira) location:
`Al Murar, Frij Murar, Deira, Bur Dubai, Al Rigga, Naif, Al Ras, Port Saeed, Al Karama, Jumeirah, Al Barsha, Muhaisnah, Al Twar, Mirdif, Al Qusais, Sharjah border areas`

**[CLIENT: confirm]** Verify actual coverage radius and remove areas the business cannot serve within a reasonable response time.

---

## Technical

| Decision | Rationale |
|---|---|
| Tailwind CSS v4 (`@theme` in globals.css) | Already scaffolded by create-next-app; v4 is the current stable release |
| Geist font (Next.js default) for all text | Geometric, high-contrast, free, variable weight — fits "black premium" direction |
| No `next-seo` package | Native `generateMetadata()` API in Next.js 15+ covers all needs |
| Server-rendered FAQ accordion text | Answers must be in SSR HTML for Google AI Overviews extraction (client-only reveal blocks are invisible to crawlers) |
| `schema-dts` not installed — typed inline JSON-LD objects | Avoids a runtime dependency; types checked via TypeScript interfaces in the schema components |

---

## AI Crawling (GEO/AIO)

**Decision**: Allow `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended` in robots.txt.

**Rationale**: Maximum AI citation visibility is the right default for a local service business. Being cited in Perplexity/ChatGPT local answers drives brand recognition and potentially phone calls. No proprietary data at risk.

**[CLIENT: confirm]** If the business ever wants to opt out of AI training data use, add the `OAI-SearchBot` disallow rule — but note this only blocks training crawls, not search/answer indexing.

---

## Conversion

| Decision | Rationale |
|---|---|
| Primary CTA is `tel:` link, not a form | Emergency locksmith conversions are call-driven. Forms add friction and delay at the worst possible moment |
| WhatsApp as secondary CTA | UAE users heavily use WhatsApp; a wa.me link is zero-friction |
| "No hidden call-out fee" / "Free quote" copy left as `[TODO: confirm with client]` | These are powerful risk-reversers but only if true. Never add unless client confirms |
| Sticky mobile bottom bar always visible | 80%+ of "locked out" traffic is mobile; the call button must never scroll out of sight |

---

## Phase-2 Enhancements (not built now — log for future sprints)

- Arabic (`/ar/`) language version — `hreflang` structure already prepared in root layout
- Google Ads / pay-per-call campaign variant pages with DNI (Dynamic Number Insertion) per `?utm_source`
- Live Google Places API review feed (currently static placeholder reviews)
- Missed-call safety net: "Text us if we miss your call" WhatsApp message template wired to business WhatsApp API
- Google Business Profile weekly post automation

---

*Last updated: auto-generated during Phase 1 scaffold*

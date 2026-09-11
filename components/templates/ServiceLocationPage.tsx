import { Phone, Clock, MapPin, CheckCircle, Star, Shield, ChevronRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { getService, type ServiceData } from "@/data/services";
import { getLocation, getNearbyLocations, type LocationData } from "@/data/locations";
import { CtaBand } from "@/components/sections/cta-band";
import { BreadcrumbNav } from "@/components/seo/breadcrumb-schema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceLocationSchema } from "@/components/seo/service-location-schema";

interface Props {
  serviceSlug: string;
  locationSlug: string;
}

function buildLocalFAQs(service: ServiceData, location: LocationData) {
  return [
    {
      q: `How fast can you reach ${location.name} for ${service.name.toLowerCase()}?`,
      a: `From our Al Murar base in Deira, we typically reach ${location.name} in ${location.travelTimeFromBase}. We operate 24 hours a day — call ${siteConfig.phone} and we confirm your exact ETA before dispatch.`,
    },
    {
      q: `What are the most common ${service.name.toLowerCase()} calls in ${location.name}?`,
      a: `In ${location.name}, the most frequent ${service.name.toLowerCase()} calls involve residents and businesses in ${location.propertyTypes.slice(0, 2).join(" and ")}. ${service.commonScenarios[0].charAt(0).toUpperCase() + service.commonScenarios[0].slice(1)} is the most common issue we handle there.`,
    },
    {
      q: `How much does ${service.name.toLowerCase()} cost in ${location.name}?`,
      a: `${service.name} in ${location.name} typically costs between AED ${service.priceRangeAED.min} and AED ${service.priceRangeAED.max} depending on lock type and complexity. We give you a firm price over the phone before attending — no surprises on arrival.`,
    },
    {
      q: `Do you cover all buildings in ${location.name}?`,
      a: `Yes — we cover all streets and buildings in ${location.name}, including ${location.propertyTypes.join(", ")}. Landmarks we commonly visit include ${location.nearbyLandmarks.slice(0, 2).join(" and ")}.`,
    },
  ];
}

export function ServiceLocationPage({ serviceSlug, locationSlug }: Props) {
  const service = getService(serviceSlug);
  const location = getLocation(locationSlug);

  if (!service || !location) return null;

  const localFAQs = buildLocalFAQs(service, location);
  const nearby = getNearbyLocations(locationSlug, 6);
  const urgencyColor = service.urgency === "high" ? "text-red-400" : service.urgency === "medium" ? "text-amber-400" : "text-green-400";
  const urgencyBg = service.urgency === "high" ? "bg-red-400/10" : service.urgency === "medium" ? "bg-amber-400/10" : "bg-green-400/10";

  return (
    <>
      <ServiceLocationSchema
        service={service}
        location={location}
        localFAQs={localFAQs}
      />
      <BreadcrumbNav items={[
        { name: "Services", href: "/services" },
        { name: service.name, href: `/services/${serviceSlug}` },
        { name: location.name, href: `/services/${serviceSlug}/${locationSlug}` },
      ]} />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {/* ── 1. HERO ──────────────────────────────────────────────────── */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${urgencyBg} ${urgencyColor}`}>
                {service.urgency === "high" ? "Emergency Service" : service.urgency === "medium" ? "Same-Day Service" : "Scheduled Service"}
              </span>
              <span className="text-xs text-[var(--color-brand-muted)] flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Avg. response: {service.avgResponseTime}
              </span>
              <span className="text-xs text-[var(--color-brand-muted)] flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {location.name} — {location.travelTimeFromBase} from base
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-brand-white)] mb-4 text-balance">
              {service.name} in {location.name}, Dubai
            </h1>

            <p className="text-[var(--color-brand-body)] text-lg leading-relaxed mb-6 max-w-3xl">
              {service.shortDescription} Serving all {location.propertyTypes[0]} and{" "}
              {location.propertyTypes[1] ?? "residential properties"} in {location.name}{" "}
              — available 24/7 with transparent pricing quoted before we attend.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Star, text: `${siteConfig.rating.value}★ Google Reviews` },
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "Open 24/7" },
                { icon: Phone, text: "Price quoted before dispatch" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs text-[var(--color-brand-body)] bg-[var(--color-brand-steel)] px-3 py-1.5 rounded-full">
                  <Icon className="h-3.5 w-3.5 text-[var(--color-brand-gold)]" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>

            {/* Primary CTA — call only */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-3 h-16 px-8 rounded-xl gradient-gold text-[#0A0A0B] font-bold text-lg shadow-[0_4px_28px_rgba(201,161,90,0.55)] hover:shadow-[0_8px_40px_rgba(201,161,90,0.7)] hover:brightness-110 transition-all active:scale-[0.98]"
                aria-label={`Call for ${service.name} in ${location.name}: ${siteConfig.phone}`}
              >
                <Phone className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span>
                  Call Now — 24/7
                  <span className="block text-sm font-semibold opacity-80">{siteConfig.phone}</span>
                </span>
              </a>
            </div>
          </div>

          {/* ── 2. LOCAL CONTEXT ─────────────────────────────────────────── */}
          <div className="card-surface rounded-2xl p-6 mb-6 border-l-4 border-[var(--color-brand-gold)]">
            <h2 className="text-lg font-bold text-[var(--color-brand-white)] mb-3">
              {service.name} in {location.name} — What to Expect
            </h2>
            <p className="text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              {location.buildingNotes}
            </p>
            <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">
              We cover all streets and buildings near {location.nearbyLandmarks.slice(0, 3).join(", ")}{" "}
              and throughout {location.name}. Our technician is typically at your door in{" "}
              <strong className="text-[var(--color-brand-white)]">{location.travelTimeFromBase}</strong> from our Al Murar base.
            </p>
          </div>

          {/* ── 2b. AEO QUICK-FACTS PANEL ────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: "Response Time", value: location.travelTimeFromBase },
              { label: "Price Range", value: `AED ${service.priceRangeAED.min}–${service.priceRangeAED.max}` },
              { label: "Availability", value: "24/7 · 365 Days" },
              { label: "Service Area", value: location.zone },
            ].map(({ label, value }) => (
              <div key={label} className="card-surface rounded-xl p-4 text-center border border-[var(--color-brand-border)]">
                <p className="text-xs text-[var(--color-brand-muted)] mb-1">{label}</p>
                <p className="text-sm font-bold text-[var(--color-brand-gold)]">{value}</p>
              </div>
            ))}
          </div>

          {/* ── 3. WHAT'S INCLUDED ───────────────────────────────────────── */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-5">
              What Our {service.name} Service Covers
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.whatWeOffer.map((item) => (
                <div key={item} className="card-surface rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[var(--color-brand-body)]">{item}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="mt-5 card-surface rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-gold)] mb-1">
                  Typical Price Range
                </p>
                <p className="text-2xl font-extrabold text-[var(--color-brand-white)]">
                  AED {service.priceRangeAED.min} – {service.priceRangeAED.max}
                </p>
                <p className="text-xs text-[var(--color-brand-muted)] mt-1">
                  Exact price confirmed before we attend. No call-out fee on quote.
                </p>
              </div>
              <div className="text-sm text-[var(--color-brand-body)] space-y-1">
                <p>Common scenarios we handle in {location.name}:</p>
                <ul className="space-y-0.5 mt-2">
                  {service.commonScenarios.slice(0, 3).map((s) => (
                    <li key={s} className="flex items-start gap-1.5 text-[var(--color-brand-muted)]">
                      <ChevronRight className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[var(--color-brand-gold)]" aria-hidden="true" />
                      <span className="text-xs">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── 4. PROCESS STEPS ─────────────────────────────────────────── */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-5">
              How Our {service.name} Process Works
            </h2>
            <div className="space-y-3">
              {service.processSteps.map((step, i) => (
                <div key={i} className="card-surface rounded-xl p-5 flex gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(201,161,90,0.15)] text-[var(--color-brand-gold)] font-extrabold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 5. LOCAL FAQS ────────────────────────────────────────────── */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-brand-white)] mb-5">
              {service.name} in {location.name} — FAQs
            </h2>
            <div className="card-surface rounded-2xl px-6 sm:px-8">
              <Accordion type="single" collapsible>
                {localFAQs.map((faq, i) => (
                  <AccordionItem key={i} value={`local-faq-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
                {service.faqs.slice(0, 2).map((faq, i) => (
                  <AccordionItem key={`svc-${i}`} value={`svc-faq-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* ── 6. TRUST SIGNALS ─────────────────────────────────────────── */}
          <div className="card-surface rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-[var(--color-brand-white)] mb-4">
              Why {location.name} Residents Trust Ababeel Key Trading LLC
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Serving Dubai Since Day One", body: "Our team has operated across all Dubai neighbourhoods including " + location.name + " for years, building local knowledge of building types and lock hardware in your area." },
                { title: `${siteConfig.rating.value}★ Google Rating`, body: "Verified reviews from real customers across Dubai — including residents from " + location.name + " and surrounding areas." },
                { title: "Licensed & Insured", body: "All work is carried out by licensed technicians. We carry full public liability insurance — your property is protected throughout every job." },
                { title: "No Hidden Charges", body: "The price we quote over the phone is the price you pay. We never add fees on arrival without your agreement." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-[rgba(201,161,90,0.04)] border border-[var(--color-brand-border)]">
                  <h3 className="font-bold text-[var(--color-brand-white)] text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--color-brand-muted)] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 7. NEARBY LOCATIONS ──────────────────────────────────────── */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[var(--color-brand-white)]">
                {service.name} Near {location.name}
              </h2>
              <a
                href={`/services/${serviceSlug}`}
                className="text-xs text-[var(--color-brand-gold)] hover:underline flex items-center gap-1"
              >
                All areas <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {nearby.map((loc) => (
                <a
                  key={loc.slug}
                  href={`/services/${serviceSlug}/${loc.slug}`}
                  className="text-sm px-4 py-3 rounded-xl border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors text-center"
                >
                  {loc.name}
                </a>
              ))}
            </div>
          </div>

          {/* ── 8. RELATED SERVICES + HUB LINKS ──────────────────────────── */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[var(--color-brand-white)]">
                Other Locksmith Services in {location.name}
              </h2>
              <a
                href={`/locations/${locationSlug}`}
                className="text-xs text-[var(--color-brand-gold)] hover:underline flex items-center gap-1"
              >
                All services <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {service.relatedServices.map((slug) => {
                const rel = getService(slug);
                if (!rel) return null;
                return (
                  <a
                    key={slug}
                    href={`/services/${slug}/${locationSlug}`}
                    className="text-sm px-4 py-3 rounded-xl border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors text-center"
                  >
                    {rel.name}
                  </a>
                );
              })}
            </div>

            {/* Hub navigation breadcrumb links */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`/services/${serviceSlug}`}
                className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-[var(--color-brand-gold)]/50 text-[var(--color-brand-gold)] hover:bg-[rgba(201,161,90,0.08)] transition-colors"
              >
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
                {service.name} — All Dubai Areas
              </a>
              <a
                href={`/locations/${locationSlug}`}
                className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-[var(--color-brand-gold)]/50 text-[var(--color-brand-gold)] hover:bg-[rgba(201,161,90,0.08)] transition-colors"
              >
                <MapPin className="h-3 w-3" aria-hidden="true" />
                All Services in {location.name}
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)]/50 hover:text-[var(--color-brand-gold)] transition-colors"
              >
                All Locksmith Services →
              </a>
              <a
                href="/locations"
                className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-gold)]/50 hover:text-[var(--color-brand-gold)] transition-colors"
              >
                All Dubai Locations →
              </a>
            </div>
          </div>

        </div>
      </div>

      <CtaBand
        heading={`Need ${service.name} in ${location.name}?`}
        subheading={`We reach ${location.name} in ${location.travelTimeFromBase}. Call now for a free quote — available 24 hours.`}
        pageName={`service-location-${serviceSlug}-${locationSlug}`}
        variant={service.urgency === "high" ? "urgency" : "trust"}
      />
    </>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { getService } from "@/data/services";
import { locations, getLocation } from "@/data/locations";
import { ServiceLocationPage } from "@/components/templates/ServiceLocationPage";

const SERVICE_SLUG = "key-cutting-dubai";

export function generateStaticParams() {
  return locations.map((loc) => ({ location: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const service = getService(SERVICE_SLUG);
  const location = getLocation(locationSlug);
  if (!service || !location) return {};
  return {
    title: `${service.name} in ${location.name}, Dubai | Call ${siteConfig.phone}`,
    description: `Professional ${service.name.toLowerCase()} in ${location.name}. ${service.shortDescription} Available 24/7. Call ${siteConfig.phone}.`,
    alternates: {
      canonical: `${siteConfig.url}/services/${SERVICE_SLUG}/${locationSlug}`,
    },
    openGraph: {
      title: `${service.name} in ${location.name}, Dubai`,
      description: `${service.shortDescription} Covering ${location.propertyTypes.slice(0, 2).join(" and ")} in ${location.name}.`,
      url: `${siteConfig.url}/services/${SERVICE_SLUG}/${locationSlug}`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  return <ServiceLocationPage serviceSlug={SERVICE_SLUG} locationSlug={location} />;
}

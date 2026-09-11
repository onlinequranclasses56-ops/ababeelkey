import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const base = "C:\\Users\\Asif Computers\\Desktop\\ababeel locksmith\\ababeel-locksmith\\app\\services";

const services = [
  "emergency-locksmith-dubai",
  "key-cutting-dubai",
  "car-key-programming-dubai",
  "lock-repair-replacement-dubai",
  "home-lockout-service-dubai",
  "office-commercial-locksmith-dubai",
  "safe-opening-safe-locksmith-dubai",
  "duplicate-key-services-dubai",
  "smart-lock-installation-dubai",
  "master-key-systems-dubai",
  "high-security-locks-dubai",
  "new-lock-installation-dubai",
  "gate-garage-lock-dubai",
  "padlock-services-dubai",
  "biometric-access-control-dubai",
  "motorcycle-key-replacement-dubai",
  "rekeying-services-dubai",
  "mailbox-cabinet-lock-dubai",
  "sliding-door-window-lock-dubai",
  "panic-bar-exit-device-dubai",
];

function locationPageContent(slug) {
  return `import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { getService } from "@/data/services";
import { locations, getLocation } from "@/data/locations";
import { ServiceLocationPage } from "@/components/templates/ServiceLocationPage";

const SERVICE_SLUG = "${slug}";

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
    title: \`\${service.name} in \${location.name}, Dubai | Ababeel Key Trading\`,
    description: \`Professional \${service.name.toLowerCase()} in \${location.name}. \${service.shortDescription} Available 24/7. Call \${siteConfig.phone}.\`,
    alternates: {
      canonical: \`\${siteConfig.url}/services/\${SERVICE_SLUG}/\${locationSlug}\`,
    },
    openGraph: {
      title: \`\${service.name} in \${location.name}, Dubai\`,
      description: \`\${service.shortDescription} Covering \${location.propertyTypes.slice(0, 2).join(" and ")} in \${location.name}.\`,
      url: \`\${siteConfig.url}/services/\${SERVICE_SLUG}/\${locationSlug}\`,
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
`;
}

let created = 0;
for (const slug of services) {
  const dir = join(base, slug, "[location]");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "page.tsx"), locationPageContent(slug), "utf8");
  created++;
  console.log(`✓ ${slug}/[location]/page.tsx`);
}

console.log(`\nDone — ${created} files created.`);

import { siteConfig } from "@/lib/config/site";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${siteConfig.url}${item.href}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-brand-muted)]">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <a href="/" className="hover:text-[var(--color-brand-gold)] transition-colors">
            Home
          </a>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            <a
              href={item.href}
              className="hover:text-[var(--color-brand-gold)] transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

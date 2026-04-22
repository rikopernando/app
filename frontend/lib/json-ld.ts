import { SITE } from "./site";
import type { NewsArticle, Pengumuman } from "./types";

/**
 * JSON-LD generators for rich results in Google search.
 * Output as stringified JSON for embedding in <script type="application/ld+json">.
 */

const url = SITE.url.replace(/\/$/, "");

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${url}/#organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: url,
  logo: {
    "@type": "ImageObject",
    url: `${url}/og-image.jpg`,
  },
  description: SITE.description,
  foundingDate: "1985",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Banda Mulya No. 72 Sukapura",
    addressLocality: "Sumber Jaya",
    addressRegion: "Lampung Barat, Lampung",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian"],
  },
  sameAs: [],
  identifier: [
    { "@type": "PropertyValue", propertyID: "NPSN", value: SITE.meta.npsn },
    { "@type": "PropertyValue", propertyID: "Akreditasi", value: SITE.meta.akreditasi },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${url}/#website`,
  url: url,
  name: SITE.shortName,
  description: SITE.description,
  inLanguage: "id-ID",
  publisher: { "@id": `${url}/#organization` },
};

export function newsArticleSchema(article: NewsArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: article.author ?? SITE.name,
    },
    publisher: { "@id": `${url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}/berita/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: "id-ID",
  };
}

export function announcementSchema(p: Pengumuman) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.summary,
    datePublished: p.date,
    dateModified: p.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@id": `${url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}/pengumuman/${p.slug}`,
    },
    inLanguage: "id-ID",
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Renders JSON-LD as safe JSON string for embedding in <script> */
export function ldJson(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

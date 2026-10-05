import { logo, services, site, siteUrl } from "./site";

const organizationId = `${siteUrl}/#organization`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  // schema.org no tiene un tipo para operadores 3PL; LocalBusiness aporta las
  // señales locales (dirección, teléfono) y additionalType precisa el giro.
  "@type": "LocalBusiness",
  additionalType: "https://en.wikipedia.org/wiki/Third-party_logistics",
  "@id": organizationId,
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}${logo.src}`,
  description: `Operador logístico 3PL en ${site.address.city} con ${site.years} años de experiencia en almacenaje, transporte, maquila y administración de centros de distribución.`,
  telephone: site.phone.intl,
  email: site.email,
  areaServed: { "@type": "Country", name: "México" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.zone,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: site.address.country,
  },
  knowsAbout: site.keywords,
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.nav,
      description: service.summary,
      url: `${siteUrl}/servicios/${service.slug}`,
    },
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.name,
  inLanguage: "es-MX",
  publisher: { "@id": organizationId },
};

export function serviceJsonLd(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.nav,
    description: service.description,
    url: `${siteUrl}/servicios/${service.slug}`,
    serviceType: service.nav,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "México" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.sectionTitle,
      itemListElement: service.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.title, description: item.body },
      })),
    },
  };
}

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${siteUrl}/nosotros`,
  name: `Sobre ${site.name}`,
  inLanguage: "es-MX",
  mainEntity: { "@id": organizationId },
};

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path}`,
    })),
  };
}

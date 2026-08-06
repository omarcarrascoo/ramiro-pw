import { notFound } from "next/navigation";

import { ogContentType, ogSize, renderOgImage } from "../../components/og-image";
import { getService, services, site } from "@/lib/site";

export const alt = `Servicios de logística 3PL de ${site.name} en ${site.address.city}`;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// En Next 16 params es una promesa también en las funciones generadoras de imagen.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return renderOgImage({ eyebrow: "Servicios 3PL", title: service.nav });
}

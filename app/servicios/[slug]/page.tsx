import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaSection } from "../../components/cta-section";
import { JsonLd } from "../../components/json-ld";
import { getService, services, site } from "@/lib/site";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Servicio no encontrado" };
  }

  return {
    // El título de la página ya trae la marca, así que evitamos el template del layout.
    title: { absolute: service.seoTitle },
    description: service.description,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      url: `/servicios/${service.slug}`,
      title: service.seoTitle,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-14 lg:pt-16">
        <nav
          aria-label="Ruta de navegación"
          className="text-[13px] text-black/60 dark:text-white/60"
        >
          <Link href="/" className="transition-colors hover:text-black dark:hover:text-white">
            Inicio
          </Link>
          <span className="mx-2.5">/</span>
          <Link
            href="/servicios"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Servicios
          </Link>
          <span className="mx-2.5">/</span>
          <span className="text-black/70 dark:text-white/70">{service.nav}</span>
        </nav>

        <h1 className="mt-12 max-w-4xl text-4xl leading-[1.1] font-light tracking-tight text-balance text-black sm:text-5xl lg:text-6xl dark:text-white">
          {service.title}
        </h1>
      </section>

      <div className="relative aspect-16/9 w-full overflow-hidden bg-black/5 sm:aspect-21/9 dark:bg-white/5">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="max-w-2xl text-lg leading-relaxed font-light text-black/70 dark:text-white/70">
              {service.lead}
            </p>

            <h2 className="mt-20 text-2xl font-light tracking-tight text-balance text-black sm:text-3xl dark:text-white">
              {service.sectionTitle}
            </h2>
            <ul className="mt-12">
              {service.items.map((item, i) => (
                <li
                  key={item.title}
                  className="grid gap-2 border-t border-black/10 py-7 sm:grid-cols-[40px_1fr] dark:border-white/10"
                >
                  <span className="font-mono text-[11px] text-black/60 sm:pt-1 dark:text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-normal tracking-tight text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/55 dark:text-white/55">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-t border-black/10 pt-6 dark:border-white/10">
              <p className="text-[11px] tracking-[0.2em] text-black/60 uppercase dark:text-white/60">
                Hablemos de su operación
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black/55 dark:text-white/55">
                Nuestro equipo evalúa su volumen, sus tiempos y sus requisitos de manejo
                para proponerle un esquema a la medida.
              </p>
              <a
                href={`mailto:${site.email}?subject=Cotizaci%C3%B3n%20${encodeURIComponent(service.nav)}`}
                className="mt-6 inline-flex w-full items-center justify-center bg-black px-5 py-3.5 text-[13px] text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
              >
                Solicitar cotización
              </a>
              <a
                href={site.phone.href}
                className="mt-3 inline-flex w-full items-center justify-center border border-black/45 px-5 py-3.5 text-[13px] text-black transition-colors hover:border-black dark:border-white/45 dark:text-white dark:hover:border-white"
              >
                {site.phone.display}
              </a>
            </div>

            <div className="mt-14 border-t border-black/10 pt-6 dark:border-white/10">
              <p className="text-[11px] tracking-[0.2em] text-black/60 uppercase dark:text-white/60">
                Otros servicios
              </p>
              <ul className="mt-5 space-y-4 text-sm">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/servicios/${item.slug}`}
                      className="text-black/65 transition-colors hover:text-black dark:text-white/65 dark:hover:text-white"
                    >
                      {item.nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />

      <JsonLd data={serviceJsonLd(service.slug)!} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
          { name: service.nav, path: `/servicios/${service.slug}` },
        ])}
      />
    </>
  );
}

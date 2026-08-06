import type { Metadata } from "next";
import Image from "next/image";

import { CtaSection } from "../components/cta-section";
import { JsonLd } from "../components/json-ld";
import { clients, images, mission, site, vision } from "@/lib/site";
import { aboutJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: `Operador Logístico 3PL con ${site.years} años de experiencia | Clientes en Querétaro`,
  },
  description: `${site.name}: ${site.years} años como operador logístico 3PL en el Bajío. Socio de confianza de Nestlé, Grammer, Massey Ferguson, Kurita América y Procter & Gamble.`,
  alternates: { canonical: "/nosotros" },
  openGraph: {
    url: "/nosotros",
    title: `Operador Logístico 3PL con ${site.years} años de experiencia`,
    description:
      "El socio logístico que impulsa a las marcas líderes desde la Zona Industrial Benito Juárez, Querétaro.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28">
        <p className="text-[11px] tracking-[0.25em] text-black/60 uppercase dark:text-white/60">
          Confianza y experiencia
        </p>
        <h1 className="mt-8 max-w-3xl text-4xl leading-[1.1] font-light tracking-tight text-balance text-black sm:text-5xl lg:text-6xl dark:text-white">
          El socio logístico que impulsa a las marcas líderes.
        </h1>
      </section>

      <div className="relative aspect-16/9 w-full overflow-hidden bg-black/5 sm:aspect-21/9 dark:bg-white/5">
        <Image
          src={images.about.src}
          alt={images.about.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <p className="max-w-3xl text-lg leading-relaxed font-light text-black/70 dark:text-white/70">
          Con {site.years} años de trayectoria en el Bajío, en{" "}
          <span className="text-black dark:text-white">{site.name}</span> entendemos los
          desafíos de la logística moderna. No somos un simple almacén: somos una
          extensión de su empresa. Nuestro compromiso con la mejora continua nos ha
          permitido ser el socio de confianza de corporativos de clase mundial que exigen
          los más altos estándares de calidad.
        </p>

        <h2 className="mt-20 text-2xl font-light tracking-tight text-balance text-black sm:text-3xl dark:text-white">
          Clientes
        </h2>
        <ul className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <li
              key={client.name}
              className="border-t border-black/10 py-6 dark:border-white/10"
            >
              <p className="text-base text-black dark:text-white">{client.name}</p>
              <p className="mt-1.5 text-[13px] text-black/60 dark:text-white/60">
                {client.sector}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
            <h2 className="text-2xl font-light tracking-tight text-balance text-black sm:text-3xl dark:text-white">
              Nuestra filosofía
            </h2>
            <div className="grid gap-12 sm:grid-cols-2">
              <div className="border-t border-black/10 pt-6 dark:border-white/10">
                <h3 className="text-[11px] tracking-[0.2em] text-black/60 uppercase dark:text-white/60">
                  Misión
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-black/65 dark:text-white/65">
                  {mission}
                </p>
              </div>
              <div className="border-t border-black/10 pt-6 dark:border-white/10">
                <h3 className="text-[11px] tracking-[0.2em] text-black/60 uppercase dark:text-white/60">
                  Visión
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-black/65 dark:text-white/65">
                  {vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <JsonLd data={aboutJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Nosotros", path: "/nosotros" },
        ])}
      />
    </>
  );
}

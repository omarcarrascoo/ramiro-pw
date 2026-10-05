import Image from "next/image";
import Link from "next/link";

import { CtaSection } from "./components/cta-section";
import { DuotoneOverlay } from "./components/duotone-overlay";
import { ServiceCard } from "./components/service-card";
import {
  clients,
  differentiators,
  images,
  metrics,
  services,
  site,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Portada */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-32">
        <p className="text-[11px] tracking-[0.25em] text-cobalto uppercase dark:text-celeste">
          {site.tagline}
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl leading-[1.08] font-light tracking-tight text-balance text-marino sm:text-6xl lg:text-7xl dark:text-white">
          Más de {site.years} años optimizando la cadena de suministro de las mejores
          empresas.
        </h1>

        <div className="mt-14 grid gap-10 border-t border-marino/10 pt-10 lg:grid-cols-[1.3fr_1fr] dark:border-white/10">
          <p className="max-w-2xl text-base leading-relaxed text-marino/70 dark:text-white/60">
            Somos {site.name}, un operador logístico 3PL con sede en la{" "}
            <span className="text-marino dark:text-white">
              {site.address.zone}, {site.address.city}
            </span>
            . Con más de dos décadas y media de experiencia, nos posicionamos como un
            aliado estratégico para marcas globales. No solo almacenamos su mercancía:
            diseñamos soluciones a la medida para reducir costos, agilizar su distribución
            y garantizar la integridad de su producto.
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row lg:justify-end">
            <a
              href={`mailto:${site.email}?subject=Solicitud%20de%20cotizaci%C3%B3n%20log%C3%ADstica`}
              className="inline-flex items-center justify-center bg-cobalto px-7 py-3.5 text-[13px] text-white transition-colors hover:bg-marino dark:bg-celeste dark:text-marino dark:hover:bg-celeste-claro"
            >
              Cotizar mi operación
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center border border-marino/55 px-7 py-3.5 text-[13px] text-marino transition-colors hover:border-marino dark:border-white/45 dark:text-white dark:hover:border-white"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Imagen de portada a todo lo ancho */}
      <div className="relative isolate aspect-16/9 w-full overflow-hidden bg-neutral-100 sm:aspect-21/9 dark:bg-neutral-950">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
        <DuotoneOverlay />
      </div>

      {/* Métricas */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-t border-marino/10 pt-6 dark:border-white/10">
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="block text-3xl font-light tracking-tight text-marino sm:text-4xl dark:text-white">
                  {metric.value}
                </span>
                <span className="mt-2 block text-[13px] leading-snug text-marino/70 dark:text-white/60">
                  {metric.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Diferenciadores */}
      <section className="border-t border-marino/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
            <h2 className="text-2xl font-light tracking-tight text-balance text-marino sm:text-3xl dark:text-white">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid gap-10 sm:grid-cols-3">
              {differentiators.map((item, i) => (
                <div key={item.title}>
                  <span className="font-mono text-[11px] text-cobalto dark:text-celeste">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-normal tracking-tight text-marino dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-marino/65 dark:text-white/55">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="border-t border-marino/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.25em] text-cobalto uppercase dark:text-celeste">
              Servicios
            </p>
            <h2 className="mt-6 text-2xl font-light tracking-tight text-balance text-marino sm:text-3xl dark:text-white">
              Soluciones logísticas integrales
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-marino/65 dark:text-white/55">
              Almacenaje, distribución, maquila y administración logística bajo un solo
              contrato y un solo responsable.
            </p>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="border-t border-marino/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
            <h2 className="text-2xl font-light tracking-tight text-balance text-marino sm:text-3xl dark:text-white">
              Marcas que confían su operación en nosotros
            </h2>
            <ul className="grid grid-cols-1 gap-px sm:grid-cols-2">
              {clients.map((client) => (
                <li
                  key={client.name}
                  className="flex items-baseline justify-between gap-4 border-t border-marino/10 py-5 dark:border-white/10"
                >
                  <span className="text-base text-marino dark:text-white">
                    {client.name}
                  </span>
                  <span className="text-[13px] text-marino/70 dark:text-white/60">
                    {client.sector}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

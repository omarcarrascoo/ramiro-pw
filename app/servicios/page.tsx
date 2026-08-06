import type { Metadata } from "next";

import { CtaSection } from "../components/cta-section";
import { JsonLd } from "../components/json-ld";
import { ServiceCard } from "../components/service-card";
import { infrastructure, services, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Servicios de Logística 3PL en Querétaro",
  description:
    "Almacenaje industrial, transporte y distribución nacional, maquila de valor agregado y administración de centros de distribución 3PL en el corredor industrial del Bajío.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    url: "/servicios",
    title: `Servicios de Logística 3PL en Querétaro | ${site.name}`,
    description:
      "Cuatro líneas de servicio 3PL: almacenaje, transporte y distribución, maquila y administración logística.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 lg:pt-28">
        <p className="text-[11px] tracking-[0.25em] text-black/60 uppercase dark:text-white/60">
          Servicios
        </p>
        <h1 className="mt-8 max-w-3xl text-4xl leading-[1.1] font-light tracking-tight text-balance text-black sm:text-5xl lg:text-6xl dark:text-white">
          Logística integral, de la recepción al punto de venta.
        </h1>
        <p className="mt-10 max-w-2xl border-t border-black/10 pt-10 text-base leading-relaxed text-black/60 dark:border-white/10 dark:text-white/60">
          Diseñamos la operación completa: recibimos, custodiamos, preparamos y
          distribuimos su producto desde {site.address.city}, con la información y los
          indicadores que su equipo necesita para decidir.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
        <h2 className="sr-only">Nuestras cuatro líneas de servicio</h2>
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
            <h2 className="text-2xl font-light tracking-tight text-balance text-black sm:text-3xl dark:text-white">
              Infraestructura que respalda cada servicio
            </h2>
            <ul className="grid gap-px sm:grid-cols-2">
              {infrastructure.map((item) => (
                <li
                  key={item}
                  className="border-t border-black/10 py-5 text-sm text-black/65 dark:border-white/10 dark:text-white/65"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ])}
      />
    </>
  );
}

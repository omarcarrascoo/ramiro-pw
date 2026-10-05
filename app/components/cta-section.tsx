import { cta, site } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-marino text-white dark:border-t dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-[11px] tracking-[0.25em] text-celeste uppercase">
              Contacto
            </p>
            <h2 className="mt-6 max-w-xl text-3xl font-light tracking-tight text-balance sm:text-4xl">
              {cta.heading}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/55">
              {cta.body}
            </p>
          </div>

          <div className="flex flex-col gap-px border-t border-white/15">
            <a
              href={`mailto:${site.email}?subject=Solicitud%20de%20cotizaci%C3%B3n%20log%C3%ADstica`}
              className="group flex items-baseline justify-between gap-4 border-b border-white/15 py-5 transition-colors hover:bg-white/5"
            >
              <span className="text-[11px] tracking-[0.2em] text-white/60 uppercase">
                Correo
              </span>
              <span className="text-sm text-white group-hover:underline">
                {site.email}
              </span>
            </a>
            <a
              href={site.phone.href}
              className="group flex items-baseline justify-between gap-4 border-b border-white/15 py-5 transition-colors hover:bg-white/5"
            >
              <span className="text-[11px] tracking-[0.2em] text-white/60 uppercase">
                Teléfono
              </span>
              <span className="text-sm text-white group-hover:underline">
                {site.phone.display}
              </span>
            </a>
            <div className="flex items-baseline justify-between gap-4 py-5">
              <span className="text-[11px] tracking-[0.2em] text-white/60 uppercase">
                Ubicación
              </span>
              <span className="text-right text-sm text-white/70">
                {site.address.zone}
                <br />
                {site.address.city}, México
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

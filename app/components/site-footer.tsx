import Link from "next/link";

import { LogoMark } from "./logo-mark";
import { navLinks, services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-marino/10 bg-white dark:border-white/10 dark:bg-marino">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size={48} />
              <p className="text-[13px] font-medium tracking-[0.18em] text-marino uppercase dark:text-white">
                Warehouse
                <span className="block text-[10px] tracking-[0.3em] text-marino/70 dark:text-white/60">
                  &amp; Storage Systems
                </span>
              </p>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-marino/65 dark:text-white/55">
              Operador logístico 3PL con {site.years} años de experiencia en el corredor
              industrial del Bajío.
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] text-marino/70 uppercase dark:text-white/60">
              Servicios
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-marino/75 transition-colors hover:text-cobalto dark:text-white/65 dark:hover:text-celeste-claro"
                  >
                    {service.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] text-marino/70 uppercase dark:text-white/60">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={site.phone.href}
                  className="text-marino/75 transition-colors hover:text-cobalto dark:text-white/65 dark:hover:text-celeste-claro"
                >
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-marino/75 transition-colors hover:text-cobalto dark:text-white/65 dark:hover:text-celeste-claro"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-marino/70 dark:text-white/60">{site.address.full}</li>
            </ul>

            <ul className="mt-8 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-marino/75 transition-colors hover:text-cobalto dark:text-white/65 dark:hover:text-celeste-claro"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-20 border-t border-marino/10 pt-8 text-xs text-marino/70 dark:border-white/10 dark:text-white/60">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";

import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="group flex items-center gap-3">
          <span className="text-[13px] leading-none font-medium tracking-[0.18em] text-black uppercase dark:text-white">
            Warehouse
            <span className="block text-[10px] tracking-[0.3em] text-black/60 dark:text-white/60">
              &amp; Storage Systems
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="flex items-center gap-6 sm:gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden text-[13px] text-black/60 transition-colors hover:text-black sm:block dark:text-white/60 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.phone.href}
            className="text-[13px] font-medium text-black underline decoration-black/45 decoration-1 underline-offset-4 transition-colors hover:decoration-black dark:text-white dark:decoration-white/45 dark:hover:decoration-white"
          >
            {site.phone.display}
          </a>
        </nav>
      </div>

      {/* En móvil los enlaces no caben junto al logotipo, así que van en una segunda
          fila: evita un menú desplegable (y su JavaScript) manteniendo el sitio estático. */}
      <nav
        aria-label="Navegación principal (móvil)"
        className="border-t border-black/10 sm:hidden dark:border-white/10"
      >
        <ul className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6 py-3.5">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="text-[13px] whitespace-nowrap text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

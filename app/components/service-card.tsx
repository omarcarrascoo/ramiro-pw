import Image from "next/image";
import Link from "next/link";

import { DuotoneOverlay } from "./duotone-overlay";
import type { Service } from "@/lib/site";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group block border-t border-marino/10 pt-8 dark:border-white/10"
    >
      <div className="relative isolate aspect-16/10 overflow-hidden bg-neutral-100 dark:bg-neutral-950">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover grayscale transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        {/* Al pasar el cursor se retira el duotono y la foto recupera su color. */}
        <DuotoneOverlay className="transition-opacity duration-700 group-hover:opacity-0" />
      </div>

      <div className="mt-6 flex items-baseline gap-4">
        <span className="font-mono text-[11px] text-cobalto dark:text-celeste">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-normal tracking-tight text-marino dark:text-white">
          {service.nav}
        </h3>
      </div>
      <p className="mt-3 pl-8 text-sm leading-relaxed text-marino/65 dark:text-white/55">
        {service.summary}
      </p>
      <span className="mt-5 ml-8 inline-block border-b border-celeste pb-0.5 text-[13px] text-marino transition-colors group-hover:border-cobalto dark:border-celeste/60 dark:text-white dark:group-hover:border-celeste">
        Ver servicio
      </span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";

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
      className="group block border-t border-black/10 pt-8 dark:border-white/10"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-black/5 dark:bg-white/5">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover grayscale transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>

      <div className="mt-6 flex items-baseline gap-4">
        <span className="font-mono text-[11px] text-black/60 dark:text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-normal tracking-tight text-black dark:text-white">
          {service.nav}
        </h3>
      </div>
      <p className="mt-3 pl-8 text-sm leading-relaxed text-black/55 dark:text-white/55">
        {service.summary}
      </p>
      <span className="mt-5 ml-8 inline-block border-b border-black/45 pb-0.5 text-[13px] text-black transition-colors group-hover:border-black dark:border-white/45 dark:text-white dark:group-hover:border-white">
        Ver servicio
      </span>
    </Link>
  );
}

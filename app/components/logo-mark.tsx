import Image from "next/image";

import { logo } from "@/lib/site";

// Las flechas del logo son azul noche y desaparecen sobre el fondo marino del modo
// oscuro, así que se alterna con la versión para fondo oscuro. Sin preload ni
// loading="eager": con la carga diferida, el navegador solo descarga la visible.
// `size` fija el tamaño intrínseco (y las variantes que se descargan); `className`
// puede reducirlo en pantallas angostas.
export function LogoMark({ size, className = "" }: { size: number; className?: string }) {
  return (
    <>
      <Image
        src={logo.src}
        alt=""
        width={size}
        height={size}
        className={`shrink-0 dark:hidden ${className}`}
      />
      <Image
        src={logo.srcDark}
        alt=""
        width={size}
        height={size}
        className={`hidden shrink-0 dark:block ${className}`}
      />
    </>
  );
}

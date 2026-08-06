import { ogContentType, ogSize, renderOgImage } from "./components/og-image";
import { site } from "@/lib/site";

export const alt = `${site.name} — Logística integral 3PL en Querétaro`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: site.tagline,
    title: `${site.years} años optimizando la cadena de suministro`,
  });
}

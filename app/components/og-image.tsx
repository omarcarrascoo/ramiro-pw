import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { logo, site } from "@/lib/site";

// ImageResponse solo admite flexbox y un subconjunto de CSS (sin grid), y no ve las
// variables de Tailwind: los colores repiten la paleta de app/globals.css.
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const marino = "#0a2558";
const celeste = "#6ba4e8";

// Sobre el fondo marino va la versión del logo para fondo oscuro. Se lee una sola vez,
// al cargar el módulo: no depende de la petición.
const logoSrc = `data:image/png;base64,${await readFile(
  join(process.cwd(), "public", logo.srcDark),
  "base64",
)}`;

export function renderOgImage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: marino,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "48px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "36px", flex: 1 }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 24,
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: celeste,
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 68,
                lineHeight: 1.12,
                fontWeight: 300,
                letterSpacing: "-2px",
                color: "#ffffff",
              }}
            >
              {title}
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse no admite next/image */}
          <img src={logoSrc} alt="" width={132} height={132} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "32px",
            fontSize: 26,
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex" }}>{site.name}</div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.6)" }}>
            {site.address.city} · {site.phone.display}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}

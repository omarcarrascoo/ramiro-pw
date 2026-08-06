import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

// ImageResponse solo admite flexbox y un subconjunto de CSS (sin grid).
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

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
          background: "#000000",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
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
          <div style={{ display: "flex", color: "rgba(255,255,255,0.5)" }}>
            {site.address.city} · {site.phone.display}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { JsonLd } from "./components/json-ld";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { site, siteUrl } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Almacén y Logística 3PL en Querétaro | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Descubre el mejor servicio de logística 3PL en Querétaro. 12,000 m² de almacenaje, maquila, transporte y distribución para marcas como Nestlé y P&G. ¡Cotiza ahora!",
  keywords: site.keywords,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: site.name,
    url: "/",
    title: `Almacén y Logística 3PL en Querétaro | ${site.name}`,
    description:
      "Operador logístico 3PL en el corredor industrial del Bajío: 12,000 m² de almacenaje, transporte, maquila y administración de centros de distribución.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Logística 3PL en Querétaro | ${site.name}`,
    description: `${site.years} años optimizando cadenas de suministro desde la Zona Industrial Benito Juárez, Querétaro.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      // Con scroll-behavior: smooth en el CSS global, este atributo le pide a
      // Next 16 restaurar el salto instantáneo al navegar entre rutas.
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-marino selection:bg-celeste-claro selection:text-marino dark:bg-marino dark:text-white dark:selection:bg-celeste dark:selection:text-marino">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </body>
    </html>
  );
}

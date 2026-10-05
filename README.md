# Warehouse and Storage Systems

Sitio web del operador logístico 3PL **Warehouse and Storage Systems** (Zona Industrial
Benito Juárez, Querétaro). Construido con Next.js 16 (App Router) y Tailwind CSS v4.

Diseño minimalista con la paleta de marca, tomada del logotipo y definida como colores de
Tailwind en `app/globals.css` (cada azul trae los dos extremos de su degradado):

| Color                       | Hex                   | Uso                                                                                             |
| --------------------------- | --------------------- | ----------------------------------------------------------------------------------------------- |
| `marino` / `marino-claro`   | `#0A2558` / `#10346B` | Tinta del texto, sección de contacto y fondo del modo oscuro                                    |
| `cobalto` / `cobalto-claro` | `#0055A5` / `#1D70B8` | Único acento sobre blanco: antetítulos, numeración, botón principal, enlaces al pasar el cursor |
| `celeste` / `celeste-claro` | `#6BA4E8` / `#A4C8F0` | El mismo papel de acento sobre fondo marino; subrayados y selección de texto                    |

El texto secundario es marino con opacidad (`text-marino/65` a `/80`). El marino es más
claro que el negro, así que esas opacidades van 10 puntos por encima de las del diseño
original en blanco y negro: así conservan la misma luminosidad y el contraste AA. Las
fotografías se muestran en duotono azul marino (escala de grises más la capa de
`app/components/duotone-overlay.tsx`). `app/components/og-image.tsx` repite los colores
en hexadecimal porque `ImageResponse` no lee las variables de Tailwind: si cambia la
paleta, hay que actualizarlo también.

## Desarrollo

```bash
npm run dev     # servidor de desarrollo en http://localhost:3000
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # eslint
```

## Estructura

| Ruta                | Archivo                         |
| ------------------- | ------------------------------- |
| `/`                 | `app/page.tsx`                  |
| `/servicios`        | `app/servicios/page.tsx`        |
| `/servicios/[slug]` | `app/servicios/[slug]/page.tsx` |
| `/nosotros`         | `app/nosotros/page.tsx`         |
| `/sitemap.xml`      | `app/sitemap.ts`                |
| `/robots.txt`       | `app/robots.ts`                 |

Las cuatro páginas de servicio se generan desde el arreglo `services` de `lib/site.ts`
con `generateStaticParams`. Todo el sitio se prerenderiza como HTML estático.

## Editar el contenido

**`lib/site.ts` es la fuente única de verdad**: datos de contacto, copy de las páginas de
servicio, clientes, misión y visión. La navegación, el sitemap y los datos estructurados
se derivan de ahí, así que agregar un servicio a `services` crea su página, su entrada en
el menú, su imagen Open Graph y su URL en el sitemap.

`lib/structured-data.ts` contiene el JSON-LD (`LocalBusiness`, `WebSite`, `Service`,
`AboutPage`, `BreadcrumbList`). Se puede validar con el
[Rich Results Test](https://search.google.com/test/rich-results).

## Logotipo

| Archivo                                 | Uso                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| `public/images/logo.png`                | Encabezado y pie en modo claro; logo de los datos estructurados                       |
| `public/images/logo-fondo-oscuro.png`   | Modo oscuro e imágenes Open Graph (flechas aclaradas para fondo marino)               |
| `app/favicon.ico`, `app/apple-icon.png` | Pestaña del navegador e ícono de iOS (este sobre blanco: iOS no admite transparencia) |

Salen de `logo-sin-fondo.jpeg`, que en realidad trae la cuadrícula de transparencia
«pegada» en la imagen (JPEG no admite transparencia): se separó el fondo y se guardó como
PNG transparente de 512 px. En la versión para fondo oscuro, las flechas azul noche se
aclaran porque desaparecen sobre el marino. `app/components/logo-mark.tsx` alterna las dos
versiones según el modo de color. Si el diseñador entrega el logo en vector (SVG) o en PNG
con transparencia real, conviene reemplazar estos archivos conservando los nombres.

## Imágenes

`public/images/` contiene **seis fotografías de stock provisionales** (Unsplash, licencia
libre para uso comercial) referenciadas desde `images` y desde el campo `image` de cada
servicio en `lib/site.ts`. `public/images/CREDITOS.md` documenta el origen de cada archivo.

Están pensadas para reemplazarse por fotos reales del almacén: basta sobrescribir los
archivos con el mismo nombre (formato horizontal, ~1600 px de ancho) y actualizar el texto
`alt` en `lib/site.ts`. Como el sitio las renderiza en duotono azul marino, no hace falta
retocar el color de las fotos nuevas.

## Antes de publicar

1. **Definir el dominio.** `siteUrl` en `lib/site.ts` usa el valor de
   `NEXT_PUBLIC_SITE_URL` y, si no existe, `https://warehouseandstoragesystems.com`. De
   esta URL dependen los canonical, el sitemap, el robots.txt y las imágenes Open Graph,
   así que hay que apuntarla al dominio real:

   ```bash
   NEXT_PUBLIC_SITE_URL=https://midominio.com
   ```

2. **Sustituir las fotos de stock** de `public/images/` por fotografía real del almacén
   (ver la sección _Imágenes_).

3. **Revisar las menciones de clientes** (Nestlé, P&G, Grammer, Massey Ferguson, Kurita
   América) en `lib/site.ts`. Nombrar clientes por escrito suele requerir su
   autorización; conviene confirmarlo antes de publicar.

4. **Considerar un formulario de contacto.** Hoy los CTA usan `tel:` y `mailto:`. Un
   formulario con Server Action requeriría además un servicio de correo.
# ramiro-pw

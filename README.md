# Warehouse and Storage Systems

Sitio web del operador logístico 3PL **Warehouse and Storage Systems** (Zona Industrial
Benito Juárez, Querétaro). Construido con Next.js 16 (App Router) y Tailwind CSS v4.

Diseño minimalista en blanco y negro: la paleta es solo `black`/`white` con escalas de
opacidad, y las fotografías se muestran en escala de grises (`grayscale`) para mantener la
coherencia visual. No hay colores de acento — si se agrega uno, conviene revisarlo también
en `app/components/og-image.tsx`.

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

## Imágenes

`public/images/` contiene **seis fotografías de stock provisionales** (Unsplash, licencia
libre para uso comercial) referenciadas desde `images` y desde el campo `image` de cada
servicio en `lib/site.ts`. `public/images/CREDITOS.md` documenta el origen de cada archivo.

Están pensadas para reemplazarse por fotos reales del almacén: basta sobrescribir los
archivos con el mismo nombre (formato horizontal, ~1600 px de ancho) y actualizar el texto
`alt` en `lib/site.ts`. Como el sitio las renderiza en escala de grises, no hace falta
retocar el color de las fotos nuevas.

## Antes de publicar

1. **Definir el dominio.** `siteUrl` en `lib/site.ts` usa el valor de
   `NEXT_PUBLIC_SITE_URL` y, si no existe, `https://warehouseandstoragesystems.com`. De
   esta URL dependen los canonical, el sitemap, el robots.txt y las imágenes Open Graph,
   así que hay que apuntarla al dominio real:

   ```bash
   NEXT_PUBLIC_SITE_URL=https://midominio.com
   ```

2. **Reemplazar el favicon** (`app/favicon.ico`), que sigue siendo el de la plantilla.

3. **Sustituir las fotos de stock** de `public/images/` por fotografía real del almacén
   (ver la sección _Imágenes_).

4. **Revisar las menciones de clientes** (Nestlé, P&G, Grammer, Massey Ferguson, Kurita
   América) en `lib/site.ts`. Nombrar clientes por escrito suele requerir su
   autorización; conviene confirmarlo antes de publicar.

5. **Considerar un formulario de contacto.** Hoy los CTA usan `tel:` y `mailto:`. Un
   formulario con Server Action requeriría además un servicio de correo.
# ramiro-pw

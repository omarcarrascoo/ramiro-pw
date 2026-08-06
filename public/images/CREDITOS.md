# Imágenes de stock (temporales)

Fotografías de [Unsplash](https://unsplash.com), bajo la
[Licencia Unsplash](https://unsplash.com/license): uso comercial permitido, sin
necesidad de atribución (aunque se agradece). **Son marcadores de posición**: conviene
sustituirlas por fotografía real del almacén de Querétaro, que además comunica mejor la
operación propia.

El sitio las muestra en escala de grises (`grayscale` de Tailwind) para mantener la
identidad monocroma, así que cualquier reemplazo funcionará sin retoque de color.

| Archivo               | Uso                        | Origen                                                |
| --------------------- | -------------------------- | ----------------------------------------------------- |
| `hero-almacen.jpg`    | Portada del inicio         | `unsplash.com/photos/photo-1587293852726-70cdb56c2866` |
| `almacenaje.jpg`      | Servicio: almacenaje       | `unsplash.com/photos/photo-1553413077-190dd305871c`    |
| `transporte.jpg`      | Servicio: transporte       | `unsplash.com/photos/photo-1519003722824-194d4455a60c` |
| `maquila.jpg`         | Servicio: maquila          | `unsplash.com/photos/photo-1567789884554-0b844b597180` |
| `administracion.jpg`  | Servicio: administración   | `unsplash.com/photos/photo-1494412574643-ff11b0a5c1c3` |
| `nosotros.jpg`        | Página Nosotros            | `unsplash.com/photos/photo-1541888946425-d81bb19240f5` |

## Al reemplazarlas

Las rutas viven en `lib/site.ts` (objeto `images` y el campo `image` de cada servicio),
junto con su texto alternativo. Mantén proporción horizontal (3:2 aprox.) y actualiza el
`alt` para describir la foto nueva.

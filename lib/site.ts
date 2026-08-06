// Fuente única de verdad para el copy y los datos de la empresa. Alimenta la
// navegación, las páginas de servicio, el sitemap y los datos estructurados.

// Reemplazar por el dominio real (o definir NEXT_PUBLIC_SITE_URL) antes de publicar:
// de esta URL dependen el canonical, el sitemap y las imágenes Open Graph.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://warehouseandstoragesystems.com";

export const site = {
  name: "Warehouse and Storage Systems",
  shortName: "WSS",
  url: siteUrl,
  tagline: "Logística Integral 3PL en el Bajío",
  years: 26,
  area: "12,000 m²",
  phone: {
    display: "442 120 4433",
    href: "tel:+524421204433",
    intl: "+52 442 120 4433",
  },
  email: "warehouserdg@hotmail.com",
  address: {
    zone: "Zona Industrial Benito Juárez",
    city: "Querétaro",
    state: "Querétaro",
    country: "MX",
    full: "Zona Industrial Benito Juárez, Querétaro, México",
  },
  keywords: [
    "almacén Querétaro",
    "3PL Bajío",
    "logística integral",
    "centro de distribución",
    "operador logístico Querétaro",
    "maquila industrial",
    "transporte de carga Querétaro",
    "gestión de inventarios",
    "almacenaje de productos químicos",
    "cross-docking México",
  ],
};

export const cta = {
  heading: "¡Llevemos su logística al siguiente nivel!",
  body: `Contáctenos al ${site.phone.display} o envíe un correo a ${site.email} para una cotización personalizada.`,
};

export const mission =
  "Facilitar el crecimiento de nuestros clientes combinando almacenaje, gestión de inventarios y distribución con talento especializado y rentabilidad.";

export const vision =
  "Transformar la gestión de cadenas de suministro en México con soluciones 3PL innovadoras, siendo el socio logístico preferido en la región.";

export const clients = [
  { name: "Nestlé", sector: "Alimentos" },
  { name: "Procter & Gamble", sector: "Cuidado personal" },
  { name: "Grammer", sector: "Autopartes" },
  { name: "Massey Ferguson", sector: "Maquinaria agrícola" },
  { name: "Kurita América", sector: "Tratamiento de agua" },
];

export const differentiators = [
  {
    title: "Ubicación estratégica",
    body: "En el corazón del corredor industrial del Bajío, punto clave para la distribución nacional.",
  },
  {
    title: `Infraestructura de ${site.area}`,
    body: "Equipada con tecnología anti-explosión, red contra incendio y seguridad 24/7.",
  },
  {
    title: "Certificación y confianza",
    body: "Operamos para clientes como Nestlé, P&G, Grammer y Massey Ferguson.",
  },
];

// Cifras de la operación, para la tira de métricas del inicio.
export const metrics = [
  { value: String(site.years), label: "años de experiencia" },
  { value: site.area, label: "de superficie de almacenaje" },
  { value: "24/7", label: "vigilancia y monitoreo" },
  { value: "4", label: "líneas de servicio integradas" },
];

export const infrastructure = [
  `${site.area} de superficie`,
  "Iluminación y equipos anti-explosión",
  "CCTV y alarma perimetral 24/7",
  "4 rampas niveladoras hidráulicas",
  "Control de plagas certificado",
  "Túneles de calor y selladoras",
];

export type ServiceItem = {
  title: string;
  body: string;
};

export type Service = {
  slug: string;
  nav: string;
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  lead: string;
  sectionTitle: string;
  items: ServiceItem[];
  image: { src: string; alt: string };
};

// Fotografías temporales de Unsplash (licencia libre, uso comercial permitido),
// tratadas en escala de grises por CSS. Reemplazar por fotos reales del almacén:
// ver public/images/CREDITOS.md para el detalle de cada archivo.
export const images = {
  hero: {
    src: "/images/hero-almacen.jpg",
    alt: "Interior de un almacén industrial con estanterías de gran altura y mercancía paletizada",
  },
  about: {
    src: "/images/nosotros.jpg",
    alt: "Equipo de trabajadores industriales con equipo de protección reunidos en una nave",
  },
} as const;

export const services: Service[] = [
  {
    slug: "almacenaje-y-gestion-de-inventarios",
    nav: "Almacenaje e inventarios",
    title: "Almacenaje de precisión con control de trazabilidad en tiempo real.",
    seoTitle:
      "Almacenaje Industrial Seguro en Querétaro | Gestión y Custodia de Mercancía",
    description:
      "12,000 m² de almacenaje industrial en Querétaro con equipos anti-explosión, CCTV 24/7, control de plagas certificado y trazabilidad de inventarios en tiempo real.",
    summary:
      "Custodia de materias primas y producto terminado con control de trazabilidad, seguridad industrial y monitoreo permanente.",
    lead: `Nuestro centro logístico cuenta con ${site.area} de superficie, diseñados para manejar volúmenes masivos de carga, desde materias primas hasta producto terminado. La gestión de inventarios va más allá del simple conteo: implementamos sistemas de control de trazabilidad que le permiten monitorear la ubicación exacta, rotación y estado de cada pallet desde cualquier lugar.`,
    sectionTitle: "Infraestructura de alto rendimiento",
    items: [
      {
        title: "Iluminación y equipos anti-explosión",
        body: "Ideales para el manejo de productos químicos o inflamables.",
      },
      {
        title: "Red de hidrantes, extintores y detectores de movimiento",
        body: "Cumplimos con los más altos estándares de seguridad industrial.",
      },
      {
        title: "Control de plagas y roedores certificado",
        body: "Aseguramos la higiene en la custodia de productos alimenticios o de cuidado personal.",
      },
      {
        title: "Circuito cerrado (CCTV) y alarma perimetral",
        body: "Vigilancia absoluta 24/7 sobre cada movimiento dentro del almacén.",
      },
    ],
    image: {
      src: "/images/almacenaje.jpg",
      alt: "Pasillo de almacén con estanterías metálicas de varios niveles cargadas de producto",
    },
  },
  {
    slug: "transporte-y-distribucion",
    nav: "Transporte y distribución",
    title: "Conectamos su inventario con sus clientes, de manera ágil y rentable.",
    seoTitle:
      "Transporte de Carga y Distribución Nacional | Última Milla y Cruce de Andén",
    description:
      "Transporte de carga y distribución nacional desde Querétaro: última milla, cruce de andén (cross-docking) y 4 rampas niveladoras hidráulicas para maniobras seguras.",
    summary:
      "Rutas inteligentes desde el Bajío hacia todo el país, con última milla y cruce de andén para reducir tiempos de tránsito.",
    lead: "Aprovechamos nuestra posición geográfica privilegiada en Querétaro para ofrecer un servicio de transporte y distribución que minimiza los tiempos de tránsito. Como operador 3PL, no solo llevamos su producto a destinos en todo el país: diseñamos rutas inteligentes que optimizan el consumo de combustible y reducen la huella de carbono.",
    sectionTitle: "Nuestras modalidades de distribución",
    items: [
      {
        title: "Última milla",
        body: "Entregas directas a puntos de venta o clientes finales con puntualidad y cuidado en la manipulación.",
      },
      {
        title: "Cruce de andén (cross-docking)",
        body: "Consolidación y transbordo ágil sin almacenamiento prolongado, reduciendo tiempos de espera y costos de manejo.",
      },
      {
        title: "Rampa vehicular y 4 rampas niveladoras de fosa",
        body: "Rampas hidráulicas que garantizan carga y descarga eficiente para tráileres de cualquier tamaño, minimizando riesgos de daño en la transferencia.",
      },
    ],
    image: {
      src: "/images/transporte.jpg",
      alt: "Tráiler de carga circulando por una carretera entre montañas",
    },
  },
  {
    slug: "maquila-y-valor-agregado",
    nav: "Maquila y valor agregado",
    title: "Transformamos su producto final con servicios de valor agregado.",
    seoTitle:
      "Servicios de Maquila Industrial en Querétaro | Etiquetado, Sellado y Reempacado",
    description:
      "Servicios de valor agregado en Querétaro: etiquetado, sellado, reempacado y túneles de calor. Preparamos su producto para la venta con maquinaria industrial de alta precisión.",
    summary:
      "Etiquetado, sellado, reempacado y kitting con maquinaria industrial, para que su producto salga del almacén listo para venta.",
    lead: "Nos especializamos en preparar su mercancía para que salga del almacén lista para su venta final. Nuestra línea de maquila y valor agregado convierte el almacenamiento en una etapa productiva, ahorrándole el costo de tener una planta de empaque dedicada.",
    sectionTitle: "Capacidades de maquila",
    items: [
      {
        title: "Equipo especializado",
        body: "Bandas transportadoras, selladoras de alta precisión y túneles de calor para trabajar volúmenes industriales a alta velocidad.",
      },
      {
        title: "Etiquetado y codificación",
        body: "Aplicamos etiquetas, códigos de barras y sellos de seguridad, asegurando que su producto cumpla con las normativas del retailer.",
      },
      {
        title: "Reempacado y kitting",
        body: "Reagrupamos productos para promociones, kits especiales o cambios de presentación, según la necesidad de su cadena de suministro.",
      },
      {
        title: "Montacargas de clam",
        body: "Manejo de rollos, bobinas y cargas no paletizadas que requieren una manipulación especial sin dañar el producto.",
      },
    ],
    image: {
      src: "/images/maquila.jpg",
      alt: "Línea de producción industrial con brazos robóticos ensamblando producto",
    },
  },
  {
    slug: "administracion-3pl-y-centro-de-distribucion",
    nav: "Administración 3PL y CEDIS",
    title:
      "Toma de decisiones basada en datos con nuestra administración logística avanzada.",
    seoTitle:
      "Administración Logística y Centro de Distribución 3PL | Indicadores y Reportes",
    description:
      "Administración logística 3PL en Querétaro: indicadores (KPIs), reportes gerenciales, consolidación de pedidos en CEDIS y gestión de logística inversa con soporte continuo.",
    summary:
      "Reportes gerenciales, KPIs y consolidación en CEDIS para gestionar el flujo de información de su operación, no solo la carga.",
    lead: "Nuestro modelo de operador logístico 3PL no solo mueve la carga: gestiona su flujo de información. Le entregamos el control total de su operación a través de reportes gerenciales, indicadores clave de rendimiento (KPIs) y sistemas de soporte en la nube.",
    sectionTitle: "Servicios administrativos",
    items: [
      {
        title: "Dashboard de desempeño",
        body: "Rentabilidad por SKU, niveles de stock críticos, exactitud de inventario y tiempos de ciclo de pedido.",
      },
      {
        title: "Centro de Distribución (CEDIS)",
        body: "Consolidamos pedidos de múltiples proveedores para expedir una sola carga a su cliente, reduciendo la complejidad de recepción en el destino.",
      },
      {
        title: "Gestión de devoluciones",
        body: "Administramos su logística inversa, clasificando y reingresando productos aptos para la venta.",
      },
      {
        title: "Soporte continuo",
        body: "Nuestro equipo de analistas identifica cuellos de botella y propone mejoras continuas en su cadena de suministro.",
      },
    ],
    image: {
      src: "/images/administracion.jpg",
      alt: "Vista aérea de una terminal portuaria con contenedores organizados en patio",
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

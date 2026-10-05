// Duotono de marca para las fotos en escala de grises: en modo "screen", la capa marino
// lleva las sombras al azul noche y deja las luces en blanco. Va dentro del contenedor
// de la imagen, que necesita `relative isolate` (la mezcla no sale de él) y un fondo
// opaco: mientras carga la foto, la capa tiñe ese fondo. bg-neutral-100 queda casi
// blanco y bg-neutral-950 apenas más claro que el marino; un fondo transparente se vería
// como un bloque marino sólido.
export function DuotoneOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-marino mix-blend-screen ${className}`}
    />
  );
}

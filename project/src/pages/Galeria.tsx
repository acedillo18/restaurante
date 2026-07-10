import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { IMAGES } from '../lib/constants';

const PHOTOS = [
  { src: IMAGES.dishes.steakWine, label: 'Filete Wagyu con salsa de hongos' },
  { src: IMAGES.dishes.ceviche, label: 'Ceviche de Atún Azul' },
  { src: IMAGES.dishes.ravioli, label: 'Ravioli de hongos silvestres' },
  { src: IMAGES.dishes.dessertChocolate, label: 'Volcán de chocolate' },
  { src: IMAGES.dishes.tartare, label: 'Tartar de res' },
  { src: IMAGES.dishes.steak, label: 'Filete con vegetales' },
  { src: IMAGES.dishes.pasta, label: 'Pasta fresca de la casa' },
  { src: IMAGES.dishes.dessertBerries, label: 'Postre de la casa' },
  { src: IMAGES.restaurantInterior, label: 'Salón principal' },
  { src: IMAGES.dishes.cocktail, label: 'Coctelería de autor' },
  { src: IMAGES.chefPlating, label: 'El chef en acción' },
  { src: IMAGES.dishes.cocktails, label: 'Bar & mixología' },
];

// Layout pattern for masonry-like grid (which items are tall)
const TALL = new Set([0, 3, 7, 10]);

export default function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((v) => (v === null ? null : (v - 1 + PHOTOS.length) % PHOTOS.length)), []);
  const next = useCallback(() => setLightbox((v) => (v === null ? null : (v + 1) % PHOTOS.length)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  return (
    <div id="top">
      <PageHeader
        eyebrow="Galería"
        title="Nuestra mesa en imágenes"
        description="Una mirada a los platillos, el ambiente y los momentos que se viven en Don Arcángel."
        bgImage={IMAGES.dishes.tartare}
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {PHOTOS.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-xl ${
                  TALL.has(i) ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img src={photo.src} alt={photo.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="p-4 text-sm font-medium text-white">{photo.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4" onClick={close}>
          <button onClick={close} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10" aria-label="Cerrar">
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 sm:left-8"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 sm:right-8"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={PHOTOS[lightbox].src} alt={PHOTOS[lightbox].label}
              className="max-h-[78vh] w-full rounded-xl object-contain" />
            <figcaption className="mt-4 text-center text-sm font-medium text-ink-300">
              {PHOTOS[lightbox].label} — {lightbox + 1} / {PHOTOS.length}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import Marquee from '../components/Marquee';
import CTASection from '../components/CTASection';
import { IMAGES, RESTAURANT } from '../lib/constants';

const MARQUEE_ITEMS = [
  'Cocina de autor', 'Ingredientes locales', 'Técnica francesa',
  'Sabores de México', 'Reservas disponibles', 'Roma Norte · CDMX',
];

const HIGHLIGHTS = [
  { icon: Clock, label: 'Cena: Mar – Dom' },
  { icon: MapPin, label: RESTAURANT.neighborhood },
  { icon: Star, label: 'Cocina de autor' },
];

const FEATURED = [
  {
    name: 'Filete Wagyu',
    desc: 'Salsa de hongos porcini, puré trufado',
    price: '$520',
    image: IMAGES.dishes.steakWine,
    tag: 'Estrella de la casa',
  },
  {
    name: 'Ceviche de Atún Azul',
    desc: 'Leche de tigre de mezcal, aguacate',
    price: '$220',
    image: IMAGES.dishes.ceviche,
    tag: 'Del chef',
  },
  {
    name: 'Ravioli de Hongos',
    desc: 'Trufa negra, parmesano envejecido',
    price: '$280',
    image: IMAGES.dishes.ravioli,
  },
];

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={IMAGES.heroBg} alt="Ambiente del restaurante" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/30" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-32 sm:px-8">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-400">
              {RESTAURANT.neighborhood}
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Don Arcángel
            </h1>
            <p className="mt-3 font-display text-2xl font-medium text-gold-300 sm:text-3xl">
              Cocina de Autor
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-200">
              {RESTAURANT.cuisine}. Ingredientes de temporada, técnica impecable y
              una atmósfera que invita a quedarse. Una experiencia gastronómica que
              celebra el alma de México en cada plato.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/reservaciones"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3.5 text-base font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:scale-[1.03]">
                Reservar mesa <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10">
                Explorar el menú
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="flex items-center gap-2 text-sm font-medium text-ink-300">
                  <h.icon className="h-4 w-4 text-gold-400" />
                  {h.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
            <div className="h-2 w-1 animate-float rounded-full bg-gold-400" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee className="border-y border-white/10 bg-ink-950 text-ink-300" speed="normal">
        {MARQUEE_ITEMS.map((item) => (
          <span key={item} className="flex items-center gap-10 font-display text-lg font-medium tracking-wide">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          </span>
        ))}
      </Marquee>

      {/* Intro */}
      <section className="bg-ink-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-gold-400">Bienvenidos</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                Una experiencia<br />que trasciende el paladar
              </h2>
              <p className="mt-6 leading-relaxed text-ink-300">
                En Don Arcángel, cada plato es una historia. Fusionamos la riqueza de la
                cocina mexicana con la precisión de la técnica francesa para crear una carta
                que cambia con las estaciones y respeta el origen de cada ingrediente.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                Nuestro comedor íntimo en Roma Norte es el escenario perfecto para una velada
                memorable, ya sea una celebración especial o una escapada culinaria entre amigos.
              </p>
              <Link to="/nosotros"
                className="mt-6 inline-flex items-center gap-2 text-base font-medium text-gold-400 underline decoration-gold-400/40 underline-offset-4 transition-colors hover:decoration-gold-400">
                Conoce nuestra historia <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img src={IMAGES.restaurantInterior} alt="Interior del restaurante Don Arcángel"
                className="aspect-[4/5] w-full rounded-2xl object-cover" />
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-gold-400/20 bg-ink-900 px-6 py-5 shadow-2xl sm:block">
                <p className="font-display text-4xl font-bold text-gold-400">12</p>
                <p className="text-sm text-ink-400">meses de menú<br />de temporada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="bg-ink-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-gold-400">Platillos destacados</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              De la cocina a la mesa
            </h2>
          </div>
          <div className="reveal mt-14 grid gap-8 md:grid-cols-3">
            {FEATURED.map((dish) => (
              <div key={dish.name} className="group overflow-hidden rounded-2xl border border-white/5 bg-ink-950">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={dish.image} alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {dish.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-ink-950">
                      {dish.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-medium text-white">{dish.name}</h3>
                    <span className="font-display text-xl font-semibold text-gold-400">{dish.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link to="/menu"
              className="inline-flex items-center gap-2 rounded-lg border border-gold-400/30 px-8 py-3.5 text-base font-semibold text-gold-400 transition-all hover:bg-gold-400 hover:text-ink-950">
              Ver menú completo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="bg-ink-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-gold-400">Galería</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Un vistazo a nuestra mesa
            </h2>
          </div>
          <div className="reveal mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {IMAGES.gallery.slice(0, 8).map((src, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-xl ${i === 0 || i === 3 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}>
                <img src={src} alt={`Platillo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-ink-950/0 transition-colors group-hover:bg-ink-950/20" />
              </div>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link to="/galeria"
              className="inline-flex items-center gap-2 text-base font-medium text-gold-400 underline decoration-gold-400/40 underline-offset-4 transition-colors hover:decoration-gold-400">
              Ver galería completa <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-ink-900 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="reveal">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="mt-6 font-display text-2xl font-medium italic leading-relaxed text-white sm:text-3xl">
              «Una de las mejores experiencias gastronómicas de la ciudad.
              El ceviche de atún es absolutamente perfecto y el servicio impecable.»
            </p>
            <p className="mt-5 text-sm uppercase tracking-widest text-ink-400">
              — Revista Gourmet México
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

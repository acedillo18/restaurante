import { useState } from 'react';
import { WHATSAPP_URL } from '../lib/constants';
import { MENU, IMAGES, type MenuCategory } from '../lib/constants';

export default function MenuPage() {
  const categories = MENU.map((c) => c.category);
  const [active, setActive] = useState(categories[0]);

  const current: MenuCategory = MENU.find((c) => c.category === active) ?? MENU[0];

  return (
    <div id="top">
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-20 text-white sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <img src={IMAGES.dishes.steak} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/80" />
        </div>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="reveal text-xs font-medium uppercase tracking-[0.35em] text-gold-400">
            Nuestra propuesta
          </span>
          <h1 className="reveal mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            El Menú
          </h1>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Una carta que cambia con las estaciones. Cada plato se prepara al momento
            con ingredientes frescos de proveedores locales.
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <div className="sticky top-[68px] z-30 glass-dark border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-gold-400 text-ink-950'
                    : 'text-ink-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu items */}
      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div key={active} className="space-y-8">
            {current.items.map((item, i) => (
              <div
                key={item.name}
                className="reveal group grid gap-6 border-b border-white/5 pb-8 last:border-0 sm:grid-cols-[200px_1fr]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {item.image && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img src={item.image} alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {item.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-gold-400 px-2.5 py-1 text-xs font-semibold text-ink-950">
                        {item.tag}
                      </span>
                    )}
                  </div>
                )}
                <div className={item.image ? '' : 'sm:col-span-2'}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className={`font-display ${item.image ? 'text-2xl' : 'text-3xl'} font-medium text-white`}>
                      {item.name}
                    </h3>
                    <span className="font-display text-2xl font-semibold text-gold-400">{item.price}</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-400">{item.description}</p>
                  {!item.image && item.tag && (
                    <span className="mt-3 inline-block rounded-full bg-gold-400/10 px-3 py-1 text-xs font-semibold text-gold-400 ring-1 ring-gold-400/20">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergen note + CTA */}
      <section className="bg-ink-900 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="reveal">
            <p className="text-sm leading-relaxed text-ink-400">
              Algunos platillos pueden contener alérgenos. Si tiene restricciones
              alimentarias, por favor indíquelo al momento de reservar y con gusto
              adaptaremos su experiencia.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-8 py-3.5 text-base font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:scale-[1.03]">
              Reservar mesa
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

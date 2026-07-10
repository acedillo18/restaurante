import { Leaf, Flame, HandHeart, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { IMAGES } from '../lib/constants';

const VALUES = [
  { icon: Leaf, title: 'Ingredientes de origen', text: 'Trabajamos con productores locales y de temporada. Cada ingrediente tiene una historia y un origen que respetamos.' },
  { icon: Flame, title: 'Técnica y fuego', text: 'La precisión de la técnica francesa al servicio de los sabores mexicanos. Cocinar es un acto de intención.' },
  { icon: HandHeart, title: 'Hospitalidad', text: 'Cada comensal es un invitado en nuestra casa. La atención al detalle define la experiencia completa.' },
  { icon: Award, title: 'Mejora continua', text: 'El menú evoluciona constantemente. Nos reinventamos cada temporada para sorprender a quienes regresan.' },
];

const TIMELINE = [
  { year: '2019', title: 'El comienzo', text: 'Don Arcángel abre sus puertas en un local ínttimo de la Roma Norte con apenas seis mesas.' },
  { year: '2021', title: 'Reconocimiento', text: 'Incluido en la lista de los mejores restaurantes de cocina de autor en la CDMX por la crítica local.' },
  { year: '2023', title: 'Evolución', text: 'Ampliamos el comedor y estrenamos una carta de coctelería de autor con destilados mexicanos.' },
  { year: '2025', title: 'Hoy', text: 'Un equipo apasionado, un menú de temporada y una comunidad fiel que nos visita cada semana.' },
];

export default function Nosotros() {
  return (
    <div id="top">
      <PageHeader
        eyebrow="Nuestra historia"
        title="Nosotros"
        description="Un restaurante que nació de la convicción de que la cocina mexicana merece el mismo refinamiento que cualquier gran cocina del mundo."
        bgImage={IMAGES.chefPortrait}
      />

      {/* Story */}
      <section className="bg-ink-950 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="reveal space-y-5 text-lg leading-relaxed text-ink-300">
            <p>
              Don Arcángel nació en 2019, en un local íntimo de la Roma Norte. La idea era
              simple pero ambiciosa: crear un espacio donde la cocina mexicana contemporánea
              se expresara con la misma elegancia y precisión que las grandes cocinas del mundo.
            </p>
            <p>
              Nuestro chef fundador, Alejandro Mares, regresó a México tras una década de
              formación en cocinas de París y Barcelona. Trajo consigo la disciplina de la
              técnica francesa, pero también la certeza de que los sabores de México son
              suficientemente profundos para sostener una cocina de autor propia.
            </p>
            <p>
              Hoy, Don Arcángel es un comedor de dieciocho mesas donde cada plato se prepara
              al momento, la carta cambia cada estación y cada visita es una nueva sorpresa.
            </p>
          </div>
        </div>
      </section>

      {/* Chef feature */}
      <section className="bg-ink-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img src={IMAGES.chefPortrait} alt="Chef Alejandro Mares"
                className="aspect-[4/5] w-full rounded-2xl object-cover" />
              <div className="absolute -right-4 -top-4 rounded-xl border border-gold-400/20 bg-ink-950 px-6 py-4 shadow-2xl">
                <p className="font-display text-3xl font-bold text-gold-400">10+</p>
                <p className="text-xs text-ink-400">años de<br />experiencia</p>
              </div>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-gold-400">El chef</span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
                Alejandro Mares
              </h2>
              <p className="mt-3 font-display text-xl font-medium text-gold-300">
                Chef ejecutivo y fundador
              </p>
              <p className="mt-6 leading-relaxed text-ink-300">
                Formado en el Instituto Culinario de México y con paso por cocinas como
                Le Chateaubriand en París y Disfrutar en Barcelona, Alejandro regresó a
                la CDMX con una misión: demostrar que la cocina mexicana puede ser refinada
                sin perder su alma.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                «No quiero que mi cocina se parezca a la de París o Barcelona. Quiero que
                sepa a México, pero con la técnica que aprendí allá. El ingrediente local
                siempre manda.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / values */}
      <section className="bg-ink-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-gold-400">Filosofía</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Lo que nos mueve
            </h2>
          </div>
          <div className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/5 bg-ink-900 p-7 transition-all hover:border-gold-400/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink-900 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="reveal text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-gold-400">Trayectoria</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">Nuestra historia</h2>
          </div>
          <div className="reveal mt-14 space-y-0">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Line */}
                {i < TIMELINE.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-px bg-white/10" />
                )}
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gold-400 bg-ink-900">
                  <div className="h-2 w-2 rounded-full bg-gold-400" />
                </div>
                <div className="pt-1">
                  <span className="font-display text-2xl font-bold text-gold-400">{t.year}</span>
                  <h3 className="mt-1 text-lg font-semibold text-white">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

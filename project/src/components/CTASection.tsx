import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../lib/constants';

export default function CTASection() {
  return (
    <section className="bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div className="reveal relative overflow-hidden rounded-2xl border border-gold-400/20 bg-ink-900 px-8 py-16 sm:px-16 sm:py-20">
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Experiencia única</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Reserve su mesa hoy
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-300">
            Una velada que sus sentidos jamás olvidarán. Disponibilidad limitada.
            Le recomendamos reservar con anticipación.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-400 px-7 py-3.5 text-base font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:scale-[1.03]">
              Reservar por WhatsApp
            </a>
            <Link to="/menu"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3.5 text-base font-medium text-ink-200 transition-all hover:border-white/30 hover:text-white">
              Ver el menú
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

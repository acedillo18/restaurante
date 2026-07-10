import { MapPin, Clock, Phone, Mail, ExternalLink, Navigation, Instagram, Facebook } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { MAPS_EMBED_URL, MAPS_LINK_URL, WHATSAPP_URL, RESTAURANT, IMAGES } from '../lib/constants';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.52c.3 0 .6.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.12z"/>
  </svg>
);

export default function Ubicacion() {
  return (
    <div id="top">
      <PageHeader
        eyebrow="Ubicación y contacto"
        title="Encuéntrenos"
        description={`En el corazón de ${RESTAURANT.neighborhood}. A pasos del Metrobús y con fácil acceso desde toda la ciudad.`}
        bgImage={IMAGES.dishes.steak}
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal grid gap-6 lg:grid-cols-3">
            {/* Map */}
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-2">
              <div className="relative h-[340px] w-full overflow-hidden rounded-xl bg-ink-800 sm:h-[480px]">
                <iframe
                  title="Ubicación de Don Arcángel en Google Maps"
                  src={MAPS_EMBED_URL}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div className="text-sm">
                    <p className="font-semibold text-white">{RESTAURANT.addressLine}</p>
                    <p className="text-ink-400">{RESTAURANT.addressLine2}</p>
                  </div>
                </div>
                <a href={MAPS_LINK_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-gold-400/30 px-4 py-2.5 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-400 hover:text-ink-950">
                  <Navigation className="h-4 w-4" />
                  Cómo llegar
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Side: hours + contact + social */}
            <div className="flex flex-col gap-6">
              {/* Hours */}
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold-400" />
                  <h3 className="font-display text-xl font-medium text-white">Horarios</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {RESTAURANT.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between border-b border-white/5 pb-2.5 text-sm last:border-0 last:pb-0">
                      <span className="text-ink-300">{h.day}</span>
                      <span className={`font-medium ${h.time === 'Cerrado' ? 'text-ink-600' : 'text-white'}`}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="rounded-2xl border border-gold-400/20 bg-gold-400/5 p-6">
                <h3 className="font-display text-xl font-medium text-gold-400">Contacto</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg bg-whatsapp px-4 py-3 font-semibold text-white transition-colors hover:bg-whatsapp-dark">
                      <Phone className="h-4 w-4" />
                      {RESTAURANT.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${RESTAURANT.email}`}
                      className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3 font-medium text-ink-300 transition-colors hover:border-gold-400/30 hover:text-white">
                      <Mail className="h-4 w-4 text-gold-400" />
                      {RESTAURANT.email}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
                <h3 className="font-display text-xl font-medium text-white">Síguenos</h3>
                <p className="mt-2 text-sm text-ink-400">Mantente al tanto de eventos y novedades.</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={RESTAURANT.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-gold-400 hover:text-gold-400"
                    aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={RESTAURANT.social.tiktok} target="_blank" rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-gold-400 hover:text-gold-400"
                    aria-label="TikTok">
                    <TikTokIcon className="h-4 w-4" />
                  </a>
                  <a href={RESTAURANT.social.facebook} target="_blank" rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-gold-400 hover:text-gold-400"
                    aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

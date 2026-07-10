import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, Instagram, Facebook, Clock } from 'lucide-react';
import { WHATSAPP_URL, MAPS_LINK_URL, RESTAURANT } from '../lib/constants';

const NAV = [
  { label: 'Menú', to: '/menu' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Reservaciones', to: '/reservaciones' },
  { label: 'Ubicación', to: '/ubicacion' },
];

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.52c.3 0 .6.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.12z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-400">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-bold text-white">Don Arcángel</span>
              <span className="text-xs uppercase tracking-[0.3em] text-gold-400 mt-1">Cocina de Autor</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-400">
              {RESTAURANT.cuisine} en el corazón de {RESTAURANT.neighborhood}. Una experiencia
              gastronómica que celebra los sabores de México con técnica y pasión.
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a href={RESTAURANT.social.instagram} target="_blank" rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-gold-400 hover:text-gold-400"
                aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={RESTAURANT.social.tiktok} target="_blank" rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-gold-400 hover:text-gold-400"
                aria-label="TikTok">
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a href={RESTAURANT.social.facebook} target="_blank" rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-gold-400 hover:text-gold-400"
                aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Navegación</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-ink-400 transition-colors hover:text-gold-400">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={MAPS_LINK_URL} target="_blank" rel="noopener noreferrer" className="text-ink-400 transition-colors hover:text-gold-400">
                  {RESTAURANT.addressLine}, {RESTAURANT.addressLine2}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-ink-400 transition-colors hover:text-gold-400">
                  {RESTAURANT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${RESTAURANT.email}`} className="text-ink-400 transition-colors hover:text-gold-400">
                  {RESTAURANT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-ink-400">Mar–Dom · Ver horarios completos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">© {new Date().getFullYear()} Don Arcángel. Todos los derechos reservados.</p>
          <a href="#top" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-ink-300 transition-colors hover:border-gold-400 hover:text-gold-400">
            Volver arriba <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

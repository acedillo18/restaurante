import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';
import { WHATSAPP_URL } from '../lib/constants';

const LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Menú', to: '/menu' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Reservaciones', to: '/reservaciones' },
  { label: 'Ubicación', to: '/ubicacion' },
];

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const onHome = location.pathname === '/';
  const solid = scrolled || !onHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'glass-dark border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex flex-col items-center leading-none" onClick={() => setOpen(false)}>
          <span className={`font-display text-2xl font-bold tracking-wide transition-colors ${solid ? 'text-white' : 'text-white'}`}>
            Don Arcángel
          </span>
          <span className={`text-[10px] uppercase tracking-[0.3em] transition-colors ${solid ? 'text-gold-400' : 'text-gold-300'}`}>
            Cocina de Autor
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-ink-300 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gold-400/40 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-400 hover:text-ink-950"
          >
            Reservar
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Menú"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden glass-dark transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[32rem] opacity-100 border-t border-white/10' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive ? 'text-gold-400' : 'text-ink-200 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-lg border border-gold-400/40 px-4 py-3 text-center text-base font-semibold text-gold-400"
            >
              Reservar por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

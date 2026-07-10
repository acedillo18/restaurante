import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setShowTip(true), 1200);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}>
      {showTip && (
        <div className="relative mb-1 hidden max-w-[16rem] rounded-2xl rounded-br-sm border border-white/10 bg-ink-900 px-4 py-3 shadow-2xl sm:block">
          <button
            onClick={() => setShowTip(false)}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-700 text-white hover:bg-ink-600"
            aria-label="Cerrar"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm font-medium text-white">¿Mesa para esta noche?</p>
          <p className="mt-0.5 text-xs text-ink-400">Reserva directamente por WhatsApp</p>
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-all hover:scale-110 hover:bg-whatsapp-dark"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30 group-hover:opacity-0" />
        <MessageCircle className="relative h-7 w-7" strokeWidth={2} />
      </a>
    </div>
  );
}

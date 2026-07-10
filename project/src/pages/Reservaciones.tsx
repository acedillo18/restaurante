import { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { WHATSAPP_URL, RESTAURANT, IMAGES } from '../lib/constants';

const TIMES = [
  '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Reservaciones() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', party: 2, notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof typeof form, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="top">
      <PageHeader
        eyebrow="Reservaciones"
        title="Reserve su mesa"
        description="Disponibilidad limitada. Le recomendamos reservar con anticipación para asegurar su lugar."
        bgImage={IMAGES.restaurantInterior}
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="reveal grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* Form */}
            <div className="rounded-2xl border border-white/10 bg-ink-900 p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/10 ring-1 ring-gold-400/30">
                    <Check className="h-8 w-8 text-gold-400" />
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-bold text-white">¡Reserva lista!</h3>
                  <p className="mt-3 max-w-sm text-ink-400">
                    Para confirmar su reserva, envíenos los detalles por WhatsApp.
                    Su mesa quedará asegurada al recibir su confirmación.
                  </p>
                  <a
                    href={`https://wa.link/c3lp02`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-whatsapp-dark"
                  >
                    Confirmar por WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-ink-500 underline underline-offset-4 hover:text-ink-300"
                  >
                    Hacer otra reserva
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl font-bold text-white">Datos de la reserva</h2>
                  <p className="mt-2 text-sm text-ink-400">Complete el formulario y confirme por WhatsApp.</p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Nombre" icon={User}>
                        <input required type="text" value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          className="input-field" placeholder="Su nombre" />
                      </Field>
                      <Field label="Teléfono" icon={Phone}>
                        <input required type="tel" value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          className="input-field" placeholder="+52 55 0000 0000" />
                      </Field>
                    </div>
                    <Field label="Correo" icon={Mail}>
                      <input required type="email" value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="input-field" placeholder="su@correo.com" />
                    </Field>
                    <div className="grid gap-5 sm:grid-cols-3">
                      <Field label="Fecha" icon={Calendar}>
                        <input required type="date" value={form.date}
                          onChange={(e) => update('date', e.target.value)}
                          className="input-field" />
                      </Field>
                      <Field label="Hora" icon={Clock}>
                        <select required value={form.time}
                          onChange={(e) => update('time', e.target.value)}
                          className="input-field">
                          <option value="">Seleccionar</option>
                          {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </Field>
                      <Field label="Personas" icon={Users}>
                        <select value={form.party}
                          onChange={(e) => update('party', Number(e.target.value))}
                          className="input-field">
                          {PARTY_SIZES.map((n) => <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>)}
                        </select>
                      </Field>
                    </div>
                    <Field label="Notas (opcional)" icon={MessageSquare}>
                      <textarea value={form.notes}
                        onChange={(e) => update('notes', e.target.value)}
                        rows={3}
                        className="input-field resize-none"
                        placeholder="Ocasión especial, alergias, preferencias…" />
                    </Field>
                    <button type="submit"
                      className="w-full rounded-lg bg-gold-400 py-3.5 text-base font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:scale-[1.01]">
                      Confirmar reserva
                    </button>
                    <p className="text-center text-xs text-ink-500">
                      Para grupos mayores a 8 personas, contáctenos directamente por WhatsApp.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Side panel: hours */}
            <div className="space-y-6">
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

              <div className="rounded-2xl border border-gold-400/20 bg-gold-400/5 p-6">
                <h3 className="font-display text-xl font-medium text-gold-400">Reservas rápidas</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  Prefiere reservar directamente? Escríbanos y le respondemos al instante.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-whatsapp-dark">
                  WhatsApp directo
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
                <h3 className="font-display text-xl font-medium text-white">Políticas</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-400">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> Mesa reservada por 15 min</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> Cancelación 4 hrs antes</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> Grupos +8: solo por WhatsApp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium text-ink-300">
        <Icon className="h-4 w-4 text-gold-400" />
        {label}
      </span>
      {children}
    </label>
  );
}

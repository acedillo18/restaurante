import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  bgImage?: string;
}

export default function PageHeader({ eyebrow, title, description, bgImage }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 text-white sm:pt-44 sm:pb-24">
      {bgImage ? (
        <div className="absolute inset-0 -z-10">
          <img src={bgImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/75" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-ink-950">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
          />
        </div>
      )}
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        {eyebrow && (
          <span className="reveal inline-block text-xs font-medium uppercase tracking-[0.35em] text-gold-400 mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="reveal font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

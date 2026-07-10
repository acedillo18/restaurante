import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: 'normal' | 'fast';
  className?: string;
}

export default function Marquee({ children, speed = 'normal', className = '' }: MarqueeProps) {
  const anim = speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee';
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${anim} will-change-transform`}>
        <span className="inline-flex shrink-0 items-center gap-10 px-6 py-4">{children}</span>
        <span className="inline-flex shrink-0 items-center gap-10 px-6 py-4" aria-hidden="true">{children}</span>
      </div>
    </div>
  );
}

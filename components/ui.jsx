import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import Photo from './Photo';

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="container-x relative">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 ${className}`}>
      <span className="h-px w-8 bg-brand-600" />
      {children}
    </span>
  );
}

export function SectionTitle({ eyebrow, title, sub, center = true, className = '' }) {
  return (
    <Reveal className={`mb-14 max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{sub}</p>}
    </Reveal>
  );
}

export function ButtonLink({ href, children, variant = 'primary', className = '' }) {
  const external = href.startsWith('http');
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200';
  const styles = {
    primary: 'bg-navy-900 text-white hover:bg-brand-600',
    ghost: 'border border-line/20 text-fg hover:border-fg hover:bg-line/[0.04]',
    light: 'bg-white text-navy-900 hover:bg-brand-50',
  };
  const Icon = external ? ArrowUpRight : ArrowRight;
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
      <span className="relative">{children}</span>
      <Icon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-slate-50 to-white" />
    </div>
  );
}

export function PageHero({ eyebrow, title, sub, children, image, imageAlt = '', badge }) {
  if (image) {
    return (
      <section className="relative pb-16 pt-32 md:pb-24 md:pt-40">
        <Backdrop />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl">
                {title}
              </h1>
            </Reveal>
            {sub && (
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{sub}</p>
              </Reveal>
            )}
            {children && <Reveal delay={0.2}>{children}</Reveal>}
          </div>
          <Reveal delay={0.15} className="relative">
                        <Photo src={image} alt={imageAlt} aspect="aspect-[5/4]" className="relative" parallax={6} />
            {badge}
          </Reveal>
        </div>
      </section>
    );
  }
  return (
    <section className="relative pb-16 pt-36 md:pb-24 md:pt-44">
      <Backdrop />
      <div className="container-x relative text-center">
        <Reveal>
          {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{sub}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.2}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function CTABand({ title, sub, children, image }) {
  return (
    <Section>
      <Reveal>
        <div className="on-dark relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-16 md:px-16 md:py-20">
          {image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="" aria-hidden className="absolute inset-y-0 right-0 hidden h-full w-[45%] object-cover opacity-40 md:block" />
          )}
          {image && <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[45%] bg-gradient-to-r from-navy-900 to-transparent md:block" />}
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">{title}</h2>
            {sub && <p className="mt-5 text-fg2 md:text-lg">{sub}</p>}
            <div className="mt-9 flex flex-wrap items-center gap-4">{children}</div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/** Original-site icon (PNG) inside a soft chip */
export function OrigIcon({ src, className = 'h-12 w-12' }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-2 shadow-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-contain" />
    </span>
  );
}

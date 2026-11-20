import { Mail, MapPin, CalendarClock, ArrowUpRight } from 'lucide-react';
import { Backdrop, Eyebrow } from '@/components/ui';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { BOOKING_URL, EMAIL, SOCIAL } from '@/lib/site';

export const metadata = { title: 'Contact Us | GTM Technology Solutions' };

export default function Contact() {
  const info = [
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: 'Location', value: 'Amstelveen, Netherlands' },
    { icon: CalendarClock, label: 'Prefer to talk?', value: 'Book a strategy call', href: BOOKING_URL, external: true },
  ];

  return (
    <section className="relative pb-24 pt-36 md:pt-44">
      <Backdrop />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Eyebrow className="mb-6">Get in touch</Eyebrow>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-fg md:text-6xl">
            Contact <span className="text-gradient">us</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted">
            Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.
          </p>
          <div className="mt-10 space-y-3">
            {info.map((i) => {
              const inner = (
                <>
                  <div className="icon-chip shrink-0">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500">{i.label}</div>
                    <div className="text-fg">{i.value}</div>
                  </div>
                  {i.href && <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-fg" />}
                </>
              );
              const cls = 'group flex items-center gap-4 rounded-2xl border border-line/10 bg-line/[0.03] p-4 transition hover:border-line/20';
              return i.href ? (
                <a key={i.label} href={i.href} className={cls} {...(i.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {inner}
                </a>
              ) : (
                <div key={i.label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex gap-2">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line/10 px-4 py-2 text-sm text-fg2 transition hover:border-line/30 hover:text-fg">
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

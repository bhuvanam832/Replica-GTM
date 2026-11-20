import Link from 'next/link';
import { ArrowUpRight, ArrowUp, MapPin } from 'lucide-react';
import Logo from './Logo';
import { EMAIL, SOCIAL, LIVE, BOOKING_URL } from '@/lib/site';

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Odoo services', href: '/odoo-services' },
      { label: 'RevOps Audit', href: '/revops' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Revops Assessment', href: '/revops-maturity' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Follow us',
    links: SOCIAL.map((s) => ({ ...s, external: true })),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#f6f4ef] text-slate-600">
      <div className="container-x relative pt-20">
        {/* top: big CTA */}
        <div className="grid gap-10 border-b border-slate-300/70 pb-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Get in touch</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-6xl">
              Let&apos;s build your <span className="font-serif font-normal italic text-brand-600">revenue engine.</span>
            </h2>
            <a
              href={`mailto:${EMAIL}`}
              className="group mt-8 inline-flex items-center gap-3 border-b-2 border-navy-900 pb-1 font-display text-xl font-semibold text-navy-900 transition-colors hover:border-brand-600 hover:text-brand-600 md:text-2xl"
            >
              {EMAIL}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Book Strategy Call
            </a>
            <Link
              href="/revops-maturity"
              className="rounded-full border border-navy-900/20 px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900"
            >
              Take the Assessment
            </Link>
          </div>
        </div>

        {/* middle: brand + columns */}
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">Fractional RevOps consulting for predictable revenue growth</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-brand-600" /> Amstelveen, Netherlands
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2 md:border-l md:border-slate-300/70 md:pl-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">{c.title}</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group inline-flex items-center gap-1 transition-colors hover:text-brand-600"
                    >
                      {l.label}
                      {l.external && <ArrowUpRight className="h-3 w-3 opacity-50 transition group-hover:opacity-100" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex items-start md:col-span-2 md:justify-end">
            <a
              href="#"
              aria-label="Back to top"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-navy-900/20 text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-300/70 py-6 text-xs md:flex-row">
          <p>Copyright © gtmtechsol.com</p>
          <a href={`${LIVE}/cookie-policy`} target="_blank" rel="noopener noreferrer" className="hover:text-navy-900">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

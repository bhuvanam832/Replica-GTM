'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { NAV, BOOKING_URL } from '@/lib/site';

function NavLink({ item, onClick, className = '' }) {
  const props = item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Link href={item.href} onClick={onClick} className={className} {...props}>
      {item.label}
      {item.external && <ArrowUpRight className="ml-1 inline h-3 w-3 opacity-60" />}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  const isActive = (item) =>
    item.href ? item.href === pathname : item.children?.some((c) => c.href === pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled ? 'glass shadow-[0_10px_40px_-15px_rgba(15,23,42,0.12)]' : 'border border-transparent'
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              {item.children ? (
                <button
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition ${
                    isActive(item) ? 'text-fg' : 'text-fg2 hover:text-fg'
                  }`}
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  aria-expanded={open === item.label}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === item.label ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <NavLink
                  item={item}
                  className={`relative block rounded-full px-3.5 py-2 text-sm transition ${
                    isActive(item) ? 'text-fg' : 'text-fg2 hover:text-fg'
                  }`}
                />
              )}
              {isActive(item) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-line/[0.08]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <AnimatePresence>
                {item.children && open === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                  >
                    <div className="glass rounded-2xl bg-base2/90 p-2 shadow-2xl">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="block rounded-xl p-3 transition hover:bg-line/[0.06]"
                        >
                          <span className="flex items-center gap-1 text-sm font-medium text-fg">
                            {c.label}
                            {c.external && <ArrowUpRight className="h-3 w-3 opacity-60" />}
                          </span>
                          {c.desc && <span className="mt-0.5 block text-xs text-muted">{c.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contactus"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-10px_rgba(37,99,235,0.9)] transition hover:scale-[1.04]"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line/10 text-fg lg:hidden"
          onClick={() => setMobile((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 max-w-7xl rounded-2xl bg-base2/95 p-4 lg:hidden"
          >
            <ul className="space-y-1">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.label} className="pt-2">
                    <p className="px-3 pb-1 text-xs uppercase tracking-widest text-slate-500">{item.label}</p>
                    {item.children.map((c) => (
                      <NavLink key={c.label} item={c} className="block rounded-xl px-3 py-2.5 text-fg2 hover:bg-line/5" />
                    ))}
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink item={item} className="block rounded-xl px-3 py-2.5 text-fg2 hover:bg-line/5" />
                  </li>
                )
              )}
            </ul>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Link href="/contactus" className="rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white">
                Contact Us
              </Link>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line/15 px-5 py-3 text-center text-sm font-semibold text-fg">
                Book Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

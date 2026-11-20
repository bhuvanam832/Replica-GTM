'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Compass, GitBranch, Database, BarChart3, RefreshCcw } from 'lucide-react';
import { IMG } from '@/lib/site';

const caps = [
  { icon: Compass, title: 'Revenue Strategy', desc: 'Go-to-market model and revenue planning.', tags: ['GTM model', 'Revenue planning', 'Targets'], img: IMG.workshop },
  { icon: GitBranch, title: 'Pipeline Management', desc: 'Deal stages and pipeline hygiene.', tags: ['Deal stages', 'Hygiene', 'Governance'], img: IMG.laptopAnalytics },
  { icon: Database, title: 'CRM Architecture', desc: 'Systems integration.', tags: ['Odoo', 'HubSpot', 'Salesforce'], img: IMG.developers },
  { icon: BarChart3, title: 'Revenue Analytics', desc: 'Dashboards and reporting.', tags: ['Dashboards', 'Reporting', 'Forecasts'], img: IMG.darkDashboard },
  { icon: RefreshCcw, title: 'Customer Lifecycle', desc: 'From acquisition through expansion and retention.', tags: ['Acquisition', 'Expansion', 'Retention'], img: IMG.shop },
];

export default function CapabilityTabs() {
  const [active, setActive] = useState(0);
  const C = caps[active];
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="space-y-2 lg:col-span-2">
        {caps.map((c, i) => (
          <button
            key={c.title}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`relative flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition ${
              active === i ? 'text-white' : 'text-muted hover:bg-slate-50 hover:text-fg'
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="cap-active"
                className="absolute inset-0 rounded-2xl bg-brand-600 "
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className={`relative font-display text-sm ${active === i ? 'text-blue-200' : 'text-slate-400'}`}>0{i + 1}</span>
            <c.icon className="relative h-5 w-5" />
            <span className="relative font-medium">{c.title}</span>
          </button>
        ))}
      </div>
      <div className="relative min-h-[380px] overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(11,26,74,0.5)] lg:col-span-3">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={C.img}
            src={C.img}
            alt=""
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-navy-950/10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="on-dark absolute inset-x-0 bottom-0 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
              <C.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-3xl font-semibold text-fg">{C.title}</h3>
            <p className="mt-2 max-w-md text-lg text-fg2">{C.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {C.tags.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur"
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <div className="mt-6 flex gap-1.5">
              {caps.map((_, i) => (
                <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-aqua-400' : 'w-4 bg-white/30'}`} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Compass, Cpu, Users } from 'lucide-react';

const pillars = [
  { icon: Compass, title: 'RevOps Strategy', tag: 'Design your revenue engine', items: ['Revenue architecture', 'Pipeline framework', 'Forecasting models', 'Sales process design', 'KPI frameworks'], pos: 'left-[22%] top-[24%]', c: 'bg-brand-500/25 border-brand-400', label: 'left-[6%] top-[12%]' },
  { icon: Cpu, title: 'RevOps Technology', tag: 'Odoo-Powered Platform', items: ['CRM', 'Marketing automation', 'Sales pipeline management', 'Subscription billing', 'Revenue dashboards', 'Customer lifecycle management'], pos: 'left-[78%] top-[24%]', c: 'bg-aqua-400/25 border-aqua-400', label: 'right-[2%] top-[12%]' },
  { icon: Users, title: 'Fractional RevOps Team', tag: 'Specialists without full-time cost', items: ['RevOps Lead', 'CRM Architect', 'Sales Ops Specialist', 'Marketing Ops Specialist', 'Data & Analytics'], pos: 'left-1/2 top-[70%]', c: 'bg-indigo-400/25 border-indigo-400', label: 'left-1/2 -translate-x-1/2 bottom-[0%]' },
];

export default function VennFramework() {
  const [active, setActive] = useState(0);
  const P = pillars[active];
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        {pillars.map((p, i) => (
          <motion.button
            key={p.title}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ scale: active === i ? 1.06 : 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: i * 0.15 }}
            className={`absolute ${p.pos} h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 mix-blend-multiply transition-colors ${p.c} ${active === i ? 'z-10' : ''}`}
            aria-label={p.title}
          >
            <span className="sr-only">{p.title}</span>
          </motion.button>
        ))}
        {pillars.map((p, i) => (
          <span key={p.title} className={`pointer-events-none absolute ${p.label} flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-md ${active === i ? 'text-brand-600 ring-2 ring-brand-300' : 'text-fg2'}`}>
            <p.icon className="h-3.5 w-3.5" /> {p.title}
          </span>
        ))}
        <div className="pointer-events-none absolute left-1/2 top-[42%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900 text-center font-display text-sm font-bold text-white shadow-2xl">
          RevOps
          <br />
          OS
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg">
              <P.icon className="h-7 w-7" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Pillar 0{active + 1}</span>
              <h3 className="font-display text-2xl font-semibold text-fg">{P.title}</h3>
            </div>
          </div>
          <p className="mt-4 text-aqua-600">{P.tag}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {P.items.map((it, i) => (
              <motion.li key={it} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-fg2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" /> {it}
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2">
            {pillars.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Pillar ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-10 bg-brand-500' : 'w-4 bg-slate-200'}`} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

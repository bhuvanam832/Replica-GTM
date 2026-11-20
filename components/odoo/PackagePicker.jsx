'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, CalendarDays } from 'lucide-react';
import { ButtonLink } from '../ui';

const packages = [
  { name: 'Odoo Starter', time: '4–6 weeks', size: '5–15 employees', min: 5, max: 15, note: 'For businesses moving off Excel.', items: ['CRM setup', 'Sales module', 'Email integration', '2 custom dashboards', '2 half-day training sessions', '1 month post-go-live support'] },
  { name: 'Odoo SMB Core', time: '8–10 weeks', size: '15–30 employees', min: 16, max: 30, items: ['Everything in Starter', 'Inventory', 'Purchasing', 'Basic accounting', '3–5 workflow automations', '1 external integration'] },
  { name: 'Odoo SMB Established', time: '10–14 weeks', size: '31–50 employees', min: 31, max: 50, items: ['Everything in Core', 'Advanced inventory or manufacturing', 'Full accounting', 'Advanced reporting', 'AI-driven automation options', '2–3 integrations'] },
];

export default function PackagePicker() {
  const [n, setN] = useState(20);
  const idx = packages.findIndex((p) => n >= p.min && n <= p.max);

  return (
    <div>
      <div className="mx-auto mb-12 max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted">How many employees do you have?</span>
          <motion.span key={n} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="font-display text-3xl font-bold text-brand-600">
            {n}
          </motion.span>
        </div>
        <input
          type="range"
          min="5"
          max="50"
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="mt-4 w-full accent-brand-600"
          aria-label="Number of employees"
        />
        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>5</span>
          <span>15</span>
          <span>30</span>
          <span>50</span>
        </div>
        <p className="mt-4 text-center text-sm text-fg2">
          Recommended: <strong className="text-brand-600">{packages[idx].name}</strong>
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((p, i) => {
          const on = i === idx;
          return (
            <motion.div
              key={p.name}
              animate={{ scale: on ? 1.03 : 0.97, opacity: on ? 1 : 0.55, y: on ? -10 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              onClick={() => setN(Math.round((p.min + p.max) / 2))}
              className={`relative flex cursor-pointer flex-col rounded-[2rem] p-8 ${
                on ? 'on-dark bg-navy-900 shadow-xl' : 'border border-slate-200 bg-white'
              }`}
            >
              {on && (
                <motion.span layoutId="pkg-badge" className="absolute -top-3 left-8 rounded-full bg-aqua-400 px-3 py-1 text-xs font-bold text-navy-950">
                  Best fit for you
                </motion.span>
              )}
              <h3 className="font-display text-2xl font-semibold text-fg">{p.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="flex items-center gap-1 rounded-full bg-line/[0.07] px-3 py-1 text-fg2"><CalendarDays className="h-3 w-3" /> {p.time}</span>
                <span className="flex items-center gap-1 rounded-full bg-line/[0.07] px-3 py-1 text-fg2"><Users className="h-3 w-3" /> {p.size}</span>
              </div>
              {p.note && <p className="mt-4 text-sm text-muted">{p.note}</p>}
              <ul className="mt-6 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-fg2">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 ${on ? 'text-aqua-300' : 'text-brand-500'}`} />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href="/contactus" variant={on ? 'light' : 'ghost'} className="w-full">
                  Contact us for Quote
                </ButtonLink>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

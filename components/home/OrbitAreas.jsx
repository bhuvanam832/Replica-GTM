'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ORIG } from '@/lib/site';

const areas = [
  { title: 'Revenue Strategy', desc: 'Goals, ideal customer profile, and go-to-market alignment.' },
  { title: 'Marketing Ops', desc: 'Lead generation, scoring, and attribution.' },
  { title: 'Sales Ops', desc: 'Pipeline, process, and forecasting.' },
  { title: 'Customer Success', desc: 'Retention, expansion, and account health.' },
  { title: 'Revenue Data', desc: 'Quality, governance, and reporting.' },
  { title: 'Automation', desc: 'Workflows, integrations, and scaling.' },
];

export default function OrbitAreas() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % areas.length), 2800);
    return () => clearInterval(t);
  }, [paused]);

  const A = areas[active];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[580px]" onMouseLeave={() => setPaused(false)}>
      <div className="absolute inset-[9%] animate-spin-slow rounded-full border-2 border-dashed border-brand-200" />
      <div className="absolute inset-[20%] rounded-full border border-brand-100 bg-gradient-to-br from-brand-50/80 to-cyan-50/80" />
      {/* center */}
      <div className="absolute inset-[27%] flex items-center justify-center rounded-full bg-white p-6 text-center shadow-[0_30px_60px_-20px_rgba(30,58,138,0.35)]">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ORIG.areas[active]} alt="" className="mx-auto h-10 w-10 md:h-14 md:w-14" />
            <h3 className="mt-2 font-display text-base font-semibold text-fg md:text-xl">{A.title}</h3>
            <p className="mt-1 hidden text-sm text-muted sm:block">{A.desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      {areas.map((a, i) => {
        const ang = ((-90 + i * 60) * Math.PI) / 180;
        const left = 50 + 41 * Math.cos(ang);
        const top = 50 + 41 * Math.sin(ang);
        const on = i === active;
        return (
          <button
            key={a.title}
            onMouseEnter={() => {
              setPaused(true);
              setActive(i);
            }}
            onClick={() => setActive(i)}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${left}%`, top: `${top}%` }}
            aria-label={a.title}
          >
            <motion.span
              animate={{ scale: on ? 1.15 : 1 }}
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 bg-white p-2.5 shadow-lg transition-colors md:h-20 md:w-20 ${
                on ? 'border-brand-500 shadow-md' : 'border-white'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ORIG.areas[i]} alt="" className="h-full w-full object-contain" />
            </motion.span>
            <span className={`absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap text-xs font-semibold md:block ${on ? 'text-brand-600' : 'text-muted'}`}>
              {a.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

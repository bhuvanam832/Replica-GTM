'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardList, Settings2, ArrowRightLeft, FlaskConical, GraduationCap } from 'lucide-react';
import { IMG } from '@/lib/site';

const steps = [
  { icon: ClipboardList, title: 'Requirements', desc: 'Map your current processes and define a roadmap.', img: IMG.workshop },
  { icon: Settings2, title: 'Configuration & Setup', desc: 'Configure Odoo around your actual workflows.', img: IMG.developers },
  { icon: ArrowRightLeft, title: 'Data Migration', desc: 'Move historical data with validation checks.', img: IMG.paperwork },
  { icon: FlaskConical, title: 'Testing & Refinement', desc: 'Test with your team and tune the setup.', img: IMG.teamLaptops },
  { icon: GraduationCap, title: 'Training & Go-Live', desc: 'Train users and support the launch.', img: IMG.presenting },
];

const DURATION = 4500;

export default function ProcessStepper() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), DURATION);
    return () => clearTimeout(t);
  }, [active]);

  const S = steps[active];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
      <div className="grid grid-cols-5 border-b border-slate-200">
        {steps.map((s, i) => (
          <button key={s.title} onClick={() => setActive(i)} className={`relative px-2 py-4 text-left transition md:px-5 ${i === active ? 'bg-brand-50' : 'hover:bg-slate-50'}`}>
            <span className={`block font-display text-xs font-bold ${i <= active ? 'text-brand-600' : 'text-slate-400'}`}>PHASE {i + 1}</span>
            <span className={`mt-1 hidden text-sm font-medium md:block ${i === active ? 'text-fg' : 'text-muted'}`}>{s.title}</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-slate-100">
              {i === active && (
                <motion.span
                  key={active}
                  className="block h-full bg-brand-600"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: DURATION / 1000, ease: 'linear' }}
                />
              )}
              {i < active && <span className="block h-full w-full bg-brand-500" />}
            </span>
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2">
        <div className="relative flex min-h-[300px] flex-col justify-center p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.35 }}>
              <span className="font-display text-8xl font-bold leading-none text-brand-500/10">0{active + 1}</span>
              <div className="-mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg">
                <S.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold text-fg">{S.title}</h3>
              <p className="mt-3 text-lg text-muted">{S.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative min-h-[260px] overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={S.img}
              src={S.img}
              alt=""
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

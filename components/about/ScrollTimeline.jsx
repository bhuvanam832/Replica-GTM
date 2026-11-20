'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollTimeline({ steps }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      <div className="absolute bottom-0 left-6 top-0 w-1 rounded-full bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
      <motion.div style={{ scaleY: fill }} className="absolute bottom-0 left-6 top-0 w-1 origin-top rounded-full bg-gradient-to-b from-brand-500 via-aqua-400 to-emerald-400 md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-16">
        {steps.map((s, i) => {
          const right = i % 2 === 1;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: right ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-20 md:w-1/2 md:pl-0 ${right ? 'md:ml-auto md:pl-16' : 'md:pr-16 md:text-right'}`}
            >
              <span
                className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white font-display font-bold text-brand-600 shadow-lg ring-4 ring-brand-100 md:top-2 ${
                  right ? 'md:-left-6' : 'md:left-auto md:-right-6'
                }`}
              >
                {s.icon}
              </span>
              <span className="font-display text-7xl font-bold leading-none text-brand-500/10">0{i + 1}</span>
              <h3 className="-mt-6 font-display text-3xl font-semibold text-fg">{s.step}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-aqua-600">{s.sub}</p>
              <p className="mt-3 text-muted">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

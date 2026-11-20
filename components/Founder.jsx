'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FOUNDER_IMG } from '@/lib/site';

const DEFAULT_QUOTE = 'Revenue is not a result of effort — it is a result of architecture.';

export default function Founder({ eyebrow = 'Meet the RevOps Architect', title, points, quote = DEFAULT_QUOTE, role }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const nameX = useTransform(scrollYProgress, [0, 1], ['8%', '-28%']);
  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="on-dark relative overflow-hidden bg-navy-950 py-24 md:py-32">
      {/* giant outlined name drifting with scroll */}
      <motion.div
        aria-hidden
        style={{ x: nameX, WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}
        className="pointer-events-none absolute left-0 top-10 whitespace-nowrap font-display text-[18vw] font-extrabold uppercase leading-none tracking-tight text-transparent"
      >
        Sudheer Yalla · Sudheer Yalla
      </motion.div>

      <div className="container-x relative grid items-end gap-14 lg:grid-cols-12">
        {/* photo in arch */}
        <motion.div style={{ y: photoY }} className="relative mx-auto w-full max-w-sm lg:col-span-5">
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-t-[999px] bg-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FOUNDER_IMG} alt="Sudheer Yalla" className="aspect-[3/4] w-full object-cover object-top" />
          </motion.div>
          {/* rotating text seal */}
          <div className="absolute -right-6 top-10 hidden h-28 w-28 sm:block">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
              <defs>
                <path id="seal" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="9.5" letterSpacing="3" fill="#93b8fd" fontWeight="600">
                <textPath href="#seal">REVOPS · GTM ARCHITECT · REVOPS · GTM ·</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-extrabold text-white">20+</span>
          </div>
          <div className="mt-6 text-center lg:text-left">
            <p className="font-display text-2xl font-bold text-fg">Sudheer Yalla</p>
            <p className="mt-1 text-sm text-muted">{role || 'Founder | Fractional RevOps Consultant & GTM Tech Architect'}</p>
          </div>
        </motion.div>

        {/* content */}
        <div className="lg:col-span-7 lg:pb-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300"
          >
            <span className="h-px w-8 bg-brand-300" /> {eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-4xl font-bold tracking-tight text-fg md:text-6xl"
          >
            {title}
          </motion.h2>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 border-l-2 border-brand-400 pl-6 font-serif text-2xl italic leading-snug text-fg2 md:text-3xl"
          >
            “{quote}”
          </motion.blockquote>

          <div className="mt-12 flex items-end gap-6 border-b border-white/10 pb-8">
            <span className="font-display text-7xl font-extrabold leading-none text-fg md:text-8xl">20+</span>
            <span className="pb-2 text-sm uppercase tracking-[0.18em] text-muted">
              years in revenue
              <br />
              operations &amp; GTM tech
            </span>
          </div>

          <ol className="mt-2 grid sm:grid-cols-2 sm:gap-x-10">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="group flex gap-4 border-b border-white/10 py-5"
              >
                <span className="font-serif text-xl italic text-brand-300 transition group-hover:text-aqua-300">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-fg2 transition group-hover:text-fg">{p}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

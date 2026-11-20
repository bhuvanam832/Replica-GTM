'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function StrikeList({ items }) {
  return (
    <ul className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((t, i) => (
        <motion.li
          key={t}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="flex items-center gap-5 py-6"
        >
          <span className="font-display text-sm text-slate-400">0{i + 1}</span>
          <span className="relative flex-1 font-display text-xl text-fg md:text-2xl">
            {t}
            <motion.span
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-1/2 h-[3px] w-full origin-left rounded-full bg-brand-600"
            />
          </span>
          <motion.span
            variants={{ hidden: { scale: 0, rotate: -90 }, show: { scale: 1, rotate: 0 } }}
            transition={{ type: 'spring', delay: 0.9 + i * 0.15 }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
          >
            <Check className="h-5 w-5" />
          </motion.span>
        </motion.li>
      ))}
    </ul>
  );
}

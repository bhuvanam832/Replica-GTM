'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const scatter = [
  { x: -60, y: -30, r: -12 },
  { x: 80, y: 20, r: 9 },
  { x: -30, y: 40, r: 6 },
  { x: 50, y: -40, r: -8 },
  { x: -80, y: 10, r: 14 },
  { x: 40, y: 30, r: -10 },
];

export default function ChaosToOrder({ items, odooLogo }) {
  return (
    <motion.div initial="chaos" whileInView="order" viewport={{ once: true, margin: '-150px' }} className="relative">
      <div className="space-y-3">
        {items.map((t, i) => (
          <motion.div
            key={t}
            variants={{
              chaos: { x: scatter[i].x, y: scatter[i].y, rotate: scatter[i].r, opacity: 0.6 },
              order: { x: 0, y: 0, rotate: 0, opacity: 1 },
            }}
            transition={{ type: 'spring', stiffness: 70, damping: 12, delay: 0.3 + i * 0.12 }}
            className="flex items-center gap-4 rounded-2xl border border-rose-100 bg-white px-5 py-4 shadow-sm"
          >
            <XCircle className="h-5 w-5 shrink-0 text-rose-500" />
            <span className="text-fg2">{t}</span>
            <span className="ml-auto hidden rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] text-slate-500 sm:block">spreadsheet</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={{ chaos: { opacity: 0, scale: 0.8, y: 20 }, order: { opacity: 1, scale: 1, y: 0 } }}
        transition={{ delay: 1.3, type: 'spring' }}
        className="mt-6 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#714B67] to-[#8f6a86] px-5 py-5 text-white shadow-xl"
      >
        <span className="rounded-xl bg-white p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={odooLogo} alt="Odoo" className="h-6 w-auto" />
        </span>
        <span className="font-semibold">Odoo can bring all of this together in one platform.</span>
        <CheckCircle2 className="ml-auto h-6 w-6 shrink-0" />
      </motion.div>
    </motion.div>
  );
}

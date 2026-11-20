'use client';

import { motion } from 'framer-motion';

export default function RingGauge({ value, label, display, color = '#2563eb' }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-52 w-52">
        <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
          <circle cx="80" cy="80" r={r} stroke="#e2e8f0" strokeWidth="10" fill="none" />
          <motion.circle
            cx="80"
            cy="80"
            r={r}
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-4xl font-bold text-fg">{display}</span>
        </div>
      </div>
      <p className="mt-4 max-w-[200px] text-center font-medium text-fg2">{label}</p>
    </div>
  );
}

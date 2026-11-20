'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function HoverPreviewList({ items }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(-1);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 25 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 25 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setHover(-1)} className="relative">
      <AnimatePresence>
        {hover >= 0 && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            style={{ x, y, marginLeft: -128, marginTop: -96 }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden h-48 w-64 overflow-hidden rounded-2xl shadow-2xl md:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={items[hover].img} alt="" className="h-full w-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
      {items.map((it, i) => (
        <div
          key={it.text}
          onMouseEnter={() => setHover(i)}
          className="group relative flex cursor-default items-center gap-6 border-b border-slate-200 py-7 transition-colors first:border-t"
        >
          <span className="absolute inset-0 origin-bottom scale-y-0 bg-slate-50 transition-transform duration-500 group-hover:scale-y-100" />
          <span className="relative font-display text-lg text-slate-400 transition group-hover:text-brand-600">0{i + 1}</span>
          <span className="relative flex-1 font-display text-2xl font-medium text-fg transition-transform duration-500 group-hover:translate-x-3 md:text-4xl">{it.text}</span>
          <ArrowUpRight className="relative h-7 w-7 text-slate-300 transition-all duration-500 group-hover:rotate-45 group-hover:text-brand-600" />
        </div>
      ))}
    </div>
  );
}

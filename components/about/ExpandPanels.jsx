'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpandPanels({ items }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex h-auto flex-col gap-3 md:h-[480px] md:flex-row">
      {items.map((it, i) => {
        const on = i === active;
        return (
          <motion.div
            key={it.title}
            layout
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            transition={{ type: 'spring', stiffness: 200, damping: 28 }}
            className={`on-dark relative cursor-pointer overflow-hidden rounded-[1.75rem] ${on ? 'h-[360px] md:h-auto md:flex-[4]' : 'h-24 md:h-auto md:flex-1'}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.img} alt="" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ${on ? 'scale-100' : 'scale-125'}`} />
            <div className={`absolute inset-0 transition-colors duration-500 ${on ? 'bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-transparent' : 'bg-navy-950/70'}`} />
            <span className="absolute left-5 top-5 font-display text-sm font-semibold text-fg2">0{i + 1}</span>
            {!on && (
              <span className="absolute bottom-6 left-1/2 hidden origin-center -translate-x-1/2 whitespace-nowrap font-display text-lg font-semibold text-fg md:block md:-rotate-90 md:[bottom:50%]">
                {it.short}
              </span>
            )}
            {!on && <span className="absolute bottom-6 left-14 font-display font-semibold text-fg md:hidden">{it.title}</span>}
            <AnimatePresence>
              {on && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute inset-x-0 bottom-0 p-7 md:p-10"
                >
                  {it.icon}
                  <h3 className="mt-4 font-display text-2xl font-semibold text-fg md:text-3xl">{it.title}</h3>
                  <p className="mt-3 max-w-lg text-fg2">{it.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

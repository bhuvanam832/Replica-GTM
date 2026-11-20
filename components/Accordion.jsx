'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-line/10 rounded-3xl border border-line/10 bg-line/[0.02]">
      {items.map((it, i) => (
        <div key={it.title}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
            aria-expanded={open === i}
          >
            <span className="flex items-center gap-4">
              <span className="font-display text-sm text-slate-500">0{i + 1}</span>
              <span className={`font-display text-lg font-medium transition md:text-xl ${open === i ? 'text-fg' : 'text-fg2'}`}>{it.title}</span>
            </span>
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/15 transition-transform duration-300 ${open === i ? 'rotate-45 bg-brand-500 text-white' : 'text-fg2'}`}>
              <Plus className="h-4 w-4" />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 pl-[4.25rem] text-muted md:px-8 md:pl-[4.75rem]">{it.body}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

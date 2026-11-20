'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { LIVE } from '@/lib/site';

const KEY = 'gtm-proto-cookie';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = null;
    try {
      seen = localStorage.getItem(KEY);
    } catch {}
    if (!seen) {
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (v) => {
    try {
      localStorage.setItem(KEY, v);
    } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed inset-x-3 bottom-3 z-50 sm:left-auto sm:right-5 sm:bottom-5 sm:w-[380px]"
        >
          <div className="glass rounded-2xl bg-base2/90 p-5 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="icon-chip h-9 w-9 shrink-0">
                <Cookie className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-fg2">
                We use cookies to provide you a better user experience on this website.{' '}
                <a href={`${LIVE}/cookie-policy`} target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2">
                  Cookie Policy
                </a>
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button onClick={() => choose('essential')} className="flex-1 rounded-full border border-line/15 px-4 py-2 text-sm text-fg hover:bg-line/5">
                Only essentials
              </button>
              <button onClick={() => choose('all')} className="flex-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-slate-100">
                I agree
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

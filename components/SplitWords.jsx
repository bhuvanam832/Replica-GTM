'use client';

import { motion } from 'framer-motion';

/** Animates a headline word by word. `parts` = [{ text, className }] */
export default function SplitWords({ parts, className = '', delay = 0 }) {
  let i = 0;
  return (
    <h1 className={className}>
      {parts.map((p, pi) => (
        <span key={pi} className={p.className}>
          {p.text.split(' ').map((w) => {
            const d = delay + i++ * 0.07;
            return (
              <span key={`${w}-${d}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%', rotate: 4 }}
                  animate={{ y: '0%', rotate: 0 }}
                  transition={{ duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

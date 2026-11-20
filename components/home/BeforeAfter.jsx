'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';

const rows = [
  { label: 'Revenue growth', before: '2%', after: '10%', bw: 14, aw: 82 },
  { label: 'Pipeline visibility', before: 'Low', after: 'High', bw: 22, aw: 92 },
  { label: 'Forecast accuracy', before: '55%', after: '95%', bw: 55, aw: 95 },
  { label: 'Quota attainment', before: '20%', after: '30%', bw: 40, aw: 62 },
];

function Layer({ after }) {
  return (
    <div className={`absolute inset-0 p-6 md:p-10 ${after ? 'bg-gradient-to-br from-brand-700 via-brand-600 to-aqua-500' : 'bg-slate-100'}`}>
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${after ? 'bg-white/20 text-white' : 'bg-white text-slate-500'}`}>
          {after ? 'After RevOps' : 'Before RevOps'}
        </span>
      </div>
      <div className="mt-8 space-y-6">
        {rows.map((r) => (
          <div key={r.label}>
            <div className={`mb-2 flex items-baseline justify-between text-sm ${after ? 'text-blue-100' : 'text-slate-500'}`}>
              <span className="font-medium">{r.label}</span>
              <span className={`font-display text-2xl font-bold ${after ? 'text-white' : 'text-slate-600'}`}>{after ? r.after : r.before}</span>
            </div>
            <div className={`h-3 overflow-hidden rounded-full ${after ? 'bg-white/20' : 'bg-slate-200'}`}>
              <div className={`h-full rounded-full ${after ? 'bg-white' : 'bg-slate-400'}`} style={{ width: `${after ? r.aw : r.bw}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [pos, setPos] = useState(92);

  useEffect(() => {
    if (!inView) return;
    const c = animate(92, 45, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: setPos });
    return () => c.stop();
  }, [inView]);

  return (
    <div>
      <div ref={ref} className="relative h-[440px] select-none overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(11,26,74,0.5)] md:h-[460px]">
        <Layer />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Layer after />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white " style={{ left: `${pos}%` }}>
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-600 shadow-xl ring-4 ring-brand-200">
            <ChevronsLeftRight className="h-5 w-5" />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare before and after RevOps"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">Drag the handle to compare · *Illustrative, based on typical RevOps transformations.</p>
    </div>
  );
}

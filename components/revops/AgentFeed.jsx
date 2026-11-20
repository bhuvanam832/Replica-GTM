'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, LineChart, Radar } from 'lucide-react';

const agents = [
  { icon: Bot, title: 'AI Pipeline Hygiene Agent', desc: 'Flags stale deals, missing data, and pipeline risks.', color: 'text-brand-400', msg: 'Found 7 deals stalled > 30 days in "Proposal". 3 are missing a close date.' },
  { icon: LineChart, title: 'AI Forecast Accuracy Agent', desc: 'Machine learning models that improve forecasts over time.', color: 'text-aqua-400', msg: 'Q3 forecast adjusted to €1.24M (confidence 91%) based on historical win rates.' },
  { icon: Radar, title: 'AI Revenue Signals', desc: 'Alerts on revenue trends, churn signals, and expansion opportunities.', color: 'text-emerald-400', msg: 'Churn risk rising for 2 accounts. Expansion signal detected at 1 enterprise account.' },
];

export default function AgentFeed() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShown((s) => (s >= agents.length ? 0 : s + 1)), shown >= agents.length ? 4000 : 1800);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        {agents.map((a) => (
          <div key={a.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-lg">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
              <a.icon className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-fg">{a.title}</h3>
                <span className="rounded-full bg-aqua-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-aqua-600">Coming Soon</span>
              </div>
              <p className="mt-1 text-sm text-muted">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-[1.75rem] bg-navy-950 shadow-[0_40px_80px_-30px_rgba(11,26,74,0.8)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 font-mono text-xs text-slate-400">revops-agents — live preview</span>
          <span className="ml-auto flex items-center gap-1.5 text-[11px] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> running
          </span>
        </div>
        <div className="min-h-[340px] space-y-4 p-5 font-mono text-sm">
          <AnimatePresence>
            {agents.slice(0, shown).map((a) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className={`flex items-center gap-2 text-xs ${a.color}`}>
                  <a.icon className="h-3.5 w-3.5" /> {a.title}
                </div>
                <p className="mt-2 leading-relaxed text-slate-200">{a.msg}</p>
              </motion.div>
            ))}
          </AnimatePresence>
          {shown < agents.length && (
            <div className="flex items-center gap-1 text-slate-500">
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500 [animation-delay:0.15s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500 [animation-delay:0.3s]" />
            </div>
          )}
        </div>
        <p className="border-t border-white/10 px-5 py-3 text-[11px] text-slate-500">Sample output for illustration.</p>
      </div>
    </div>
  );
}

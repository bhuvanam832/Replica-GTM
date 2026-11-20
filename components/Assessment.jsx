'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, RotateCcw, Compass, Megaphone, Briefcase, HeartHandshake, BarChart3, Workflow, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/site';

const QUESTIONS = [
  {
    area: 'Revenue Strategy',
    icon: Compass,
    options: [
      'Siloed departments with no unified revenue goals',
      'Basic alignment with shared KPIs across some teams',
      'Integrated strategy with cross-functional planning',
      'Fully unified revenue engine with predictive modeling',
    ],
  },
  {
    area: 'Marketing Ops',
    icon: Megaphone,
    options: [
      'Manual campaign execution with basic email tools',
      'Marketing automation platform with lead scoring',
      'Multi-channel attribution with ABM capabilities',
      'AI-driven personalization with revenue attribution',
    ],
  },
  {
    area: 'Sales Ops',
    icon: Briefcase,
    options: [
      'Spreadsheet-based tracking with inconsistent processes',
      'CRM adoption with standardized sales stages',
      'Sales enablement tools with pipeline analytics',
      'Predictive forecasting with intelligent deal guidance',
    ],
  },
  {
    area: 'Customer Success Ops',
    icon: HeartHandshake,
    options: [
      'Reactive support with no proactive engagement',
      'Defined onboarding with basic health monitoring',
      'Customer health scores with expansion playbooks',
      'Predictive churn analytics with automated interventions',
    ],
  },
  {
    area: 'Revenue Data',
    icon: BarChart3,
    options: [
      'Disconnected systems with manual data exports',
      'Basic integrations with centralized reporting',
      'Unified data warehouse with real-time dashboards',
      'Advanced analytics with ML-driven insights',
    ],
  },
  {
    area: 'Automation',
    icon: Workflow,
    options: [
      'Manual processes with minimal automation',
      'Basic workflow automation for repetitive tasks',
      'Cross-functional automation with triggers',
      'Intelligent automation with AI-powered orchestration',
    ],
  },
];

const LEVELS = ['Foundational', 'Developing', 'Advanced', 'Optimized'];
const TOTAL = QUESTIONS.length + 1; // + details step

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [info, setInfo] = useState({ name: '', email: '', company: '', website: '', consent: false });
  const [done, setDone] = useState(false);

  const go = (n) => {
    setDir(n > step ? 1 : -1);
    setStep(n);
  };

  const pick = (i) => {
    const next = [...answers];
    next[step] = i;
    setAnswers(next);
    setTimeout(() => go(step + 1), 280);
  };

  const infoValid =
    info.name.trim() && /\S+@\S+\.\S+/.test(info.email) && info.company.trim() && info.website.trim() && info.consent;

  const result = useMemo(() => {
    const scores = answers.map((a) => (a ?? 0) + 1);
    const avg = scores.reduce((s, v) => s + v, 0) / scores.length;
    const pct = Math.round((avg / 4) * 100);
    const min = Math.min(...scores);
    const gaps = QUESTIONS.map((q, i) => ({ ...q, score: scores[i] })).filter((q) => q.score === min);
    return { scores, avg, pct, level: LEVELS[Math.min(3, Math.round(avg) - 1)], gaps };
  }, [answers]);

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setDone(false);
    go(0);
  };

  if (done) {
    const r = 70;
    const c = 2 * Math.PI * r;
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-[2rem] bg-base2/70 p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <div className="relative mx-auto h-48 w-48">
            <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
              <circle cx="80" cy="80" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="12" fill="none" />
              <motion.circle
                cx="80"
                cy="80"
                r={r}
                stroke="url(#g)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={c}
                initial={{ strokeDashoffset: c }}
                animate={{ strokeDashoffset: c - (c * result.pct) / 100 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#6d5efc" />
                  <stop offset="100%" stopColor="#3ee0f5" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-5xl font-bold text-fg">{result.pct}</span>
              <span className="text-xs text-muted">Maturity score</span>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-aqua-600">Your RevOps maturity</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-fg">{result.level}</h2>
            <p className="mt-3 text-muted">
              Thanks {info.name.split(' ')[0]} — here's how {info.company} scores across the six RevOps areas.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {QUESTIONS.map((q, i) => (
            <div key={q.area} className="grid items-center gap-2 sm:grid-cols-[200px_1fr_110px]">
              <span className="flex items-center gap-2 text-sm text-fg">
                <q.icon className="h-4 w-4 text-brand-600" /> {q.area}
              </span>
              <div className="h-2.5 overflow-hidden rounded-full bg-line/5">
                <motion.div
                  className={`h-full rounded-full ${result.scores[i] <= 2 ? 'bg-gradient-to-r from-rose-500 to-amber-400' : 'bg-brand-600'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(result.scores[i] / 4) * 100}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.08 }}
                />
              </div>
              <span className="text-right text-xs text-muted">{LEVELS[result.scores[i] - 1]}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-fg">
            <AlertTriangle className="h-5 w-5 text-amber-600" /> Highest-impact gaps to prioritize
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {result.gaps.map((g) => (
              <li key={g.area} className="rounded-full border border-line/10 bg-line/[0.05] px-4 py-1.5 text-sm text-fg">
                {g.area}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white">
            Book a Strategy Call to discuss
          </a>
          <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-line/15 px-6 py-3 text-sm text-fg hover:bg-line/5">
            <RotateCcw className="h-4 w-4" /> Retake assessment
          </button>
        </div>
        <p className="mt-6 text-xs text-slate-500">Prototype: results are calculated in your browser and not sent anywhere.</p>
      </motion.div>
    );
  }

  const q = QUESTIONS[step];
  const progress = (step / TOTAL) * 100;

  return (
    <div className="glass overflow-hidden rounded-[2rem] bg-base2/70">
      {/* progress */}
      <div className="border-b border-line/10 px-6 py-5 md:px-10">
        <div className="mb-3 flex items-center justify-between text-xs text-muted">
          <span>
            Step {step + 1} of {TOTAL}
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-line/5">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-500 via-aqua-400 to-lime-400" animate={{ width: `${progress}%` }} />
        </div>
        <div className="mt-4 hidden gap-2 md:flex">
          {QUESTIONS.map((qq, i) => (
            <button
              key={qq.area}
              onClick={() => (answers[i] !== null || i <= step ? go(i) : null)}
              className={`flex-1 truncate rounded-lg px-2 py-1.5 text-[11px] transition ${
                i === step ? 'bg-brand-500/20 text-fg' : answers[i] !== null ? 'text-aqua-600' : 'text-slate-500'
              }`}
            >
              {answers[i] !== null && <Check className="mr-1 inline h-3 w-3" />}
              {qq.area}
            </button>
          ))}
          <span className={`flex-1 rounded-lg px-2 py-1.5 text-center text-[11px] ${step === QUESTIONS.length ? 'bg-brand-500/20 text-fg' : 'text-slate-500'}`}>Your details</span>
        </div>
      </div>

      <div className="relative min-h-[460px] p-6 md:p-10">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.3 }}
          >
            {q ? (
              <>
                <div className="flex items-center gap-4">
                  <div className="icon-chip h-12 w-12">
                    <q.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Area {step + 1}</p>
                    <h2 className="font-display text-2xl font-semibold text-fg md:text-3xl">{q.area}</h2>
                  </div>
                </div>
                <p className="mt-5 text-muted">Which statement best describes your company today?</p>
                <div className="mt-6 grid gap-3">
                  {q.options.map((o, i) => {
                    const sel = answers[step] === i;
                    return (
                      <button
                        key={o}
                        onClick={() => pick(i)}
                        className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                          sel ? 'border-brand-400 bg-brand-500/15' : 'border-line/10 bg-line/[0.02] hover:border-line/25 hover:bg-line/[0.05]'
                        }`}
                      >
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${sel ? 'bg-brand-500 text-white' : 'bg-line/[0.06] text-muted'}`}>
                          {sel ? <Check className="h-4 w-4" /> : i + 1}
                        </span>
                        <span className="flex-1 text-fg2">{o}</span>
                        <span className="hidden text-[11px] uppercase tracking-wider text-slate-500 sm:block">{LEVELS[i]}</span>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (infoValid) setDone(true);
                }}
              >
                <h2 className="font-display text-2xl font-semibold text-fg md:text-3xl">Almost there — where should we send your results?</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ['name', 'Name', 'text'],
                    ['email', 'Email', 'email'],
                    ['company', 'Company Name', 'text'],
                    ['website', 'Company Website', 'text'],
                  ].map(([k, l, t]) => (
                    <label key={k} className="block">
                      <span className="mb-1.5 block text-sm text-fg2">
                        {l} <span className="text-rose-500">*</span>
                      </span>
                      <input required type={t} value={info[k]} onChange={(e) => setInfo({ ...info, [k]: e.target.value })} className="input" />
                    </label>
                  ))}
                </div>
                <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-line/10 bg-line/[0.02] p-4 text-sm text-muted">
                  <input
                    type="checkbox"
                    required
                    checked={info.consent}
                    onChange={(e) => setInfo({ ...info, consent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 accent-brand-500"
                  />
                  <span>
                    I consent to the collection and processing of my personal data to receive my RevOps maturity results and related
                    communications, in line with the Privacy Policy. I can request access, correction, or deletion of my data at any time.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!infoValid}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition enabled:hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  View My Results <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between border-t border-line/10 px-6 py-4 md:px-10">
        <button
          onClick={() => go(Math.max(0, step - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 text-sm text-fg2 disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        {step < QUESTIONS.length && answers[step] !== null && (
          <button onClick={() => go(step + 1)} className="inline-flex items-center gap-2 text-sm text-fg">
            Next <ArrowRight className="h-4 w-4" />
          </button>
        )}
        {step === 0 && answers[0] === null && (
          <Link href="/contactus" className="text-xs text-slate-500 hover:text-fg2">
            Questions? Contact us
          </Link>
        )}
      </div>
    </div>
  );
}

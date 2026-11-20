'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Shuffle, Boxes, BrainCircuit } from 'lucide-react';
import { IMG } from '@/lib/site';

const stages = [
  { n: '01', icon: Shuffle, title: 'Revenue Chaos', points: ['Disconnected systems', 'Poor visibility', 'Inaccurate forecasting'], img: IMG.paperwork, tone: 'from-rose-500/80' },
  { n: '02', icon: Boxes, title: 'Revenue Architecture', points: ['CRM process alignment', 'Pipeline governance', 'Revenue data model'], img: IMG.boardroom, tone: 'from-brand-600/80' },
  { n: '03', icon: BrainCircuit, title: 'Revenue Intelligence', points: ['Dashboards', 'Predictive insights', 'AI recommendations'], img: IMG.dataCenter, tone: 'from-aqua-500/80' },
];

export default function HorizontalJourney() {
  const target = useRef(null);
  const track = useRef(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => track.current && setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section ref={target} className="on-dark relative h-[320vh] bg-navy-950">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-500/25 blur-[140px]" />
        <div aria-hidden className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-aqua-500/20 blur-[140px]" />
        <div aria-hidden className="grid-bg absolute inset-0" />

        <motion.div ref={track} style={{ x }} className="relative flex items-stretch gap-8 px-[6vw]">
          {/* Intro panel */}
          <div className="flex w-[80vw] shrink-0 flex-col justify-center md:w-[38vw]">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aqua-300">The journey</span>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-fg md:text-7xl">
              The Revenue <span className="text-gradient">Transformation</span> Journey
            </h2>
            <p className="mt-6 max-w-sm text-lg text-fg2">Three stages from chaos to intelligence.</p>
            <span className="mt-10 inline-flex items-center gap-3 text-sm text-muted">
              Keep scrolling <ArrowRight className="h-4 w-4 animate-pulse" />
            </span>
          </div>

          {stages.map((s, i) => (
            <div key={s.n} className="group relative h-[68vh] w-[82vw] shrink-0 overflow-hidden rounded-[2rem] md:w-[54vw]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${s.tone} via-navy-950/70 to-navy-950/20`} />
              <span className="absolute right-6 top-2 font-display text-[9rem] font-bold leading-none text-white/10 md:text-[12rem]">{s.n}</span>
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-fg2">Stage {s.n}</p>
                <h3 className="mt-2 font-display text-4xl font-semibold text-fg md:text-5xl">{s.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <span key={p} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              {i < stages.length - 1 && (
                <div className="absolute right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-xl md:flex">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
          <div className="w-[6vw] shrink-0" />
        </motion.div>

        <div className="container-x relative mt-10">
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div style={{ scaleX: bar }} className="h-full origin-left bg-gradient-to-r from-rose-400 via-brand-400 to-aqua-400" />
          </div>
          <div className="mt-3 flex justify-between text-xs text-muted">
            <span>Chaos</span>
            <span>Architecture</span>
            <span>Intelligence</span>
          </div>
        </div>
      </div>
    </section>
  );
}

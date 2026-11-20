'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import SplitWords from '../SplitWords';
import { ButtonLink, Eyebrow } from '../ui';
import { BOOKING_URL, ORIG, FOUNDER_IMG } from '@/lib/site';

function Floater({ mx, my, depth, className, children, delay = 0 }) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 120, damping: 14 }}
      className={`absolute hidden lg:block ${className}`}
    >
      <div className="animate-float" style={{ animationDelay: `${-delay * 3}s` }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function HomeHero() {
  const ref = useRef(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const px = useMotionValue(50);
  const py = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${px}% ${py}%, rgba(37,99,235,0.06), transparent 60%)`;

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    mx.set((nx - 0.5) * 2);
    my.set((ny - 0.5) * 2);
    px.set(nx * 100);
    py.set(ny * 100);
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="relative flex min-h-[92vh] items-center overflow-hidden pb-20 pt-32 md:pt-40">
      {/* background: soft wash + faint cursor light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[75%] bg-gradient-to-b from-slate-50 to-white" />
        <motion.div className="absolute inset-0" style={{ backgroundImage: spotlight }} />
      </div>

      {/* floating brand elements (mouse parallax) */}
      <Floater mx={mx} my={my} depth={-30} delay={0.9} className="left-[6%] top-[22%]">
        <div className="rounded-2xl border border-white bg-white/90 p-3 shadow-xl backdrop-blur">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ORIG.odooLogo} alt="Odoo" className="h-8 w-auto" />
        </div>
      </Floater>
      <Floater mx={mx} my={my} depth={40} delay={1.05} className="right-[6%] top-[20%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ORIG.revopsBadge} alt="RevOps" className="h-24 w-24 rounded-full shadow-2xl ring-4 ring-white" />
      </Floater>
      <Floater mx={mx} my={my} depth={-50} delay={1.2} className="left-[10%] top-[44%]">
        <span className="rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-lg">Salesforce</span>
      </Floater>
      <Floater mx={mx} my={my} depth={55} delay={1.35} className="right-[9%] top-[46%]">
        <span className="rounded-full border border-cyan-100 bg-white px-4 py-2 text-sm font-semibold text-aqua-600 shadow-lg">HubSpot</span>
      </Floater>

      <div className="container-x relative text-center">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow className="mb-7">Fractional RevOps Consulting</Eyebrow>
          </motion.div>
          <SplitWords
            delay={0.1}
            className="mx-auto max-w-5xl font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-[5.4rem]"
            parts={[{ text: 'Revenue Visibility.' }, { text: 'Forecast Predictability.', className: 'text-gradient' }, { text: 'Scalable Growth.' }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-xl"
          >
            Fractional RevOps consulting helps SaaS and SMBs build a predictable revenue engine at a fractional cost.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <ButtonLink href="/revops-maturity" className="px-8 py-4 text-base">Take the RevOps Assessment</ButtonLink>
            <ButtonLink href={BOOKING_URL} variant="ghost" className="px-8 py-4 text-base">Book Strategy Call</ButtonLink>
          </motion.div>

          {/* trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mx-auto mt-10 flex w-fit flex-wrap items-center justify-center gap-4 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FOUNDER_IMG} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
            <span className="text-sm text-fg2">Led by <strong className="text-fg">Sudheer Yalla</strong> · 20+ years · ex-Salesforce &amp; Cognizant</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-14 flex flex-col items-center gap-2 text-xs text-slate-400"
        >
          <span className="flex h-9 w-6 justify-center rounded-full border-2 border-slate-300 pt-1.5">
            <motion.span animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="h-2 w-1 rounded-full bg-brand-500" />
          </span>
          <span className="flex items-center gap-1"><MousePointer2 className="h-3 w-3" /> Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}

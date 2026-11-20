import { Clock, BadgeCheck, Zap } from 'lucide-react';
import { Backdrop, Eyebrow } from '@/components/ui';
import Reveal from '@/components/Reveal';
import Assessment from '@/components/Assessment';

export const metadata = { title: 'RevOps Maturity Assessment | GTM Technology Solutions' };

export default function Maturity() {
  return (
    <section className="relative pb-24 pt-36 md:pt-44">
      <Backdrop />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-6">Free RevOps Assessment</Eyebrow>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl md:text-6xl">
            Assess Your <span className="text-gradient">RevOps Maturity</span>
          </h1>
          <p className="mt-5 text-lg text-muted">Answer 6 questions to see where your team stands.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-fg2">
            <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" /> Free</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-500" /> ~6 minutes</span>
            <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-emerald-500" /> Instant results</span>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mx-auto mt-12 max-w-4xl">
          <Assessment />
        </Reveal>
      </div>
    </section>
  );
}

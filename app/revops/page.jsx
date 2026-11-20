import {
  DatabaseBackup, ShieldAlert, EyeOff, Sheet, Building, Puzzle,
  LayoutDashboard, Repeat, Landmark, KanbanSquare, Megaphone, Trophy,
  CheckCircle2, MapPin, Award, Briefcase, BrainCircuit, BadgeCheck, Wallet, Unlink,
} from 'lucide-react';
import { Section, SectionTitle, ButtonLink, PageHero, CTABand } from '@/components/ui';
import Reveal from '@/components/Reveal';
import Photo from '@/components/Photo';
import Marquee from '@/components/Marquee';
import VennFramework from '@/components/revops/VennFramework';
import RingGauge from '@/components/revops/RingGauge';
import AgentFeed from '@/components/revops/AgentFeed';
import { BOOKING_URL, ORIG, IMG } from '@/lib/site';

export const metadata = { title: 'Revenue Operations (RevOps) | GTM Technology Solutions' };

const problems = [
  { icon: DatabaseBackup, title: 'Scattered CRM Data', desc: 'Customer data sits across several tools with no single source of truth.', rot: '-rotate-2', bg: 'bg-amber-50' },
  { icon: ShieldAlert, title: 'Untrustworthy Forecasts', desc: 'Forecasts rely on incomplete data and intuition.', rot: 'rotate-1', bg: 'bg-sky-50' },
  { icon: EyeOff, title: 'Poor Pipeline Visibility', desc: "Teams can't see deal status, risks, or likely closes.", rot: '-rotate-1', bg: 'bg-rose-50' },
  { icon: Sheet, title: 'Manual Spreadsheet Reporting', desc: 'Hours go to compiling reports instead of acting on data.', rot: 'rotate-2', bg: 'bg-emerald-50' },
  { icon: Building, title: 'Siloed Departments', desc: 'Sales, marketing, and finance work separately without shared goals.', rot: '-rotate-2', bg: 'bg-violet-50' },
  { icon: Puzzle, title: 'Too Many Disconnected Tools', desc: "Companies pay for 10+ SaaS tools that don't integrate.", rot: 'rotate-1', bg: 'bg-cyan-50' },
];

const platform = [
  { icon: LayoutDashboard, title: 'Executive Dashboards', tag: 'Board-level insights', desc: 'Real-time revenue metrics.' },
  { icon: Repeat, title: 'Subscription Revenue', tag: 'ARR tracking', desc: 'Automatic MRR, ARR, churn, and expansion tracking.' },
  { icon: Landmark, title: 'Financial Integration', tag: 'Revenue recognition', desc: 'Links sales data to financial reporting.' },
  { icon: KanbanSquare, title: 'CRM & Pipeline', tag: 'Real-time pipeline visibility', desc: 'Stage tracking and deal intelligence.' },
  { icon: Megaphone, title: 'Marketing Automation', tag: 'Better lead nurturing', desc: 'Campaigns, lead scoring, and nurture sequences.' },
  { icon: Trophy, title: 'Sales Performance', tag: 'Forecast accuracy', desc: 'Rep tracking, quota management, and coaching insights.' },
];

const models = [
  { level: 'Starter', title: 'Fractional RevOps', items: ['Strategy', 'Pipeline governance', 'Forecasting framework', 'CRM optimization'], lift: 'lg:mt-32' },
  { level: 'Most Popular', title: 'RevOps Platform Implementation', items: ['CRM setup', 'Sales workflows', 'Marketing automation', 'Dashboarding'], lift: 'lg:mt-16', featured: true },
  { level: 'Enterprise', title: 'End-to-End RevOps Transformation', items: ['Strategy', 'Systems', 'Processes', 'Data architecture', 'Team enablement'], lift: '' },
];

const whyUs = [
  { icon: Award, title: '20+ Years Experience', desc: 'GTM and sales strategy across enterprises and SMBs.' },
  { icon: Briefcase, title: 'Enterprise Background', desc: 'Former Salesforce and Cognizant leadership roles.' },
  { icon: BrainCircuit, title: 'Deep RevOps Expertise', desc: 'Data-driven operations and analytics.' },
  { icon: BadgeCheck, title: 'Odoo Implementation Specialists', desc: 'Certified to build and deploy Odoo platforms.' },
  { icon: Wallet, title: 'SMB-Friendly Pricing', desc: 'Enterprise-grade solutions at SMB-accessible prices.' },
];

export default function RevOps() {
  return (
    <>
      {/* HERO — split with photo + RevOps badge */}
      <PageHero
        eyebrow="Revenue Operations Consulting"
        title={<>From Revenue Chaos to <span className="text-gradient">Predictable Growth</span></>}
        sub="RevOps consulting, Odoo RevOps platforms, and fractional RevOps teams for SMBs."
        image={IMG.boardroom}
        imageAlt="Leadership team reviewing revenue"
        badge={
          // eslint-disable-next-line @next/next/no-img-element
          <img src={ORIG.revopsBadge} alt="RevOps" className="absolute -right-4 -top-8 h-28 w-28 animate-float rounded-full shadow-2xl ring-4 ring-white sm:-right-8" />
        }
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={BOOKING_URL}>Start Your RevOps Transformation</ButtonLink>
          <ButtonLink href="#platform" variant="ghost">Explore Odoo RevOps Platform</ButtonLink>
        </div>
      </PageHero>

      <Marquee label="Experience across" items={['Salesforce', 'Cognizant', 'Retail', 'Global SaaS', 'SMB Growth']} />

      {/* PROBLEM — pinned sticky notes */}
      <Section className="bg-[radial-gradient(#dbe8fe_1px,transparent_1px)] [background-size:22px_22px]">
        <SectionTitle eyebrow="The problem" title="Why Revenue Growth Becomes Chaotic" sub="Fragmented systems and siloed teams block predictable revenue growth." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className={`relative ${p.rot} ${p.bg} rounded-sm p-7 pt-10 shadow-[0_18px_30px_-14px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:rotate-0 hover:scale-105`}>
                <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-white/70 shadow-sm" />
                <p.icon className="h-7 w-7 text-fg" />
                <h3 className="mt-4 font-display text-xl font-semibold text-fg">{p.title}</h3>
                <p className="mt-2 text-sm text-fg2">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-2 md:gap-3">
            {['Marketing', 'Sales', 'Finance', 'Customer Success'].map((s, i, a) => (
              <span key={s} className="flex items-center gap-2 md:gap-3">
                <span className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-fg shadow-sm">{s}</span>
                {i < a.length - 1 && <Unlink className="h-5 w-5 text-rose-500" />}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-muted">
            <strong className="text-rose-500">Disconnected Systems</strong> — revenue decisions end up reactive rather than predictable.
          </p>
        </Reveal>
      </Section>

      {/* FRAMEWORK — interactive Venn */}
      <Section>
        <SectionTitle eyebrow="Our approach" title="The GTM TechSol RevOps Framework" sub="A revenue operating system built on three integrated pillars. Hover a circle." />
        <VennFramework />
      </Section>

      {/* PLATFORM — hub + list of modules on dark */}
      <section id="platform" className="on-dark relative overflow-hidden bg-navy-950 py-24 md:py-32">
        <div aria-hidden className="grid-bg absolute inset-0" />
        <div aria-hidden className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-brand-500/30 blur-[140px]" />
        <div className="container-x relative">
          <SectionTitle eyebrow="Odoo RevOps Platform" title="The RevOps Platform Built on Odoo" sub="One integrated system replaces 10 separate SaaS tools." />
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="relative mx-auto aspect-square w-full max-w-sm">
                <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/25" />
                <div className="absolute inset-12 rounded-full border border-white/15" />
                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ORIG.odooLogo} alt="Odoo" className="h-7 w-auto" />
                  <span className="mt-1 font-display text-sm font-semibold text-navy-900">RevOps Platform</span>
                </div>
                {[
                  ['Marketing', 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'],
                  ['Sales', 'right-0 top-1/2 translate-x-1/4 -translate-y-1/2'],
                  ['Finance', 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'],
                  ['Customer Success', 'left-0 top-1/2 -translate-x-1/4 -translate-y-1/2'],
                ].map(([l, pos]) => (
                  <span key={l} className={`absolute ${pos} rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur`}>{l}</span>
                ))}
              </div>
            </Reveal>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {platform.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="group flex items-center gap-5 py-5 transition-all hover:pl-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-aqua-300 transition group-hover:bg-aqua-400 group-hover:text-navy-950">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-fg">{p.title}</h3>
                      <p className="text-sm text-muted">{p.desc}</p>
                    </div>
                    <span className="hidden rounded-full border border-white/15 px-3 py-1 text-xs text-aqua-300 sm:block">{p.tag}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODELS — staircase */}
      <Section>
        <SectionTitle eyebrow="Engagement models" title="Flexible RevOps Engagement Models" sub="Start where you are — step up as you grow." />
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {models.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.15} className={m.lift}>
              <div className={`relative rounded-[2rem] p-8 ${m.featured ? 'on-dark bg-navy-900 shadow-xl' : 'border border-slate-200 bg-white shadow-lg'}`}>
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${m.featured ? 'bg-aqua-400 text-navy-950' : 'bg-brand-50 text-brand-600'}`}>{m.level}</span>
                  <span className="font-display text-sm text-muted">Step {i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-fg">{m.title}</h3>
                <ul className="mt-6 space-y-3">
                  {m.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-fg2">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 ${m.featured ? 'text-aqua-300' : 'text-brand-500'}`} /> {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href="/contactus" variant={m.featured ? 'light' : 'ghost'} className="w-full">Learn More</ButtonLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHO WE HELP — photo with pins + spec sheet */}
      <Section className="bg-slate-50/80">
        <SectionTitle eyebrow="Who we help" title="Who We Help" />
        <div className="grid gap-8 lg:grid-cols-2">
          <Photo src={IMG.amsterdam} alt="Amsterdam" aspect="aspect-[4/3]" overlay>
            <div className="on-dark absolute inset-x-0 bottom-0 space-y-2 p-6">
              {[
                ['Netherlands', 'Primary market'],
                ['Europe', 'Expanding'],
                ['United Kingdom', 'Active operations'],
              ].map(([c, s]) => (
                <div key={c} className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                  <span className="flex items-center gap-2 font-medium text-fg"><MapPin className="h-4 w-4 text-aqua-300" /> {c}</span>
                  <span className="text-xs text-fg2">{s}</span>
                </div>
              ))}
            </div>
          </Photo>
          <Reveal>
            <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
              <h3 className="font-display text-xl font-semibold text-fg">Ideal customer profile</h3>
              <dl className="mt-6 divide-y divide-slate-100">
                {[
                  ['Revenue', '€100K–€50M'],
                  ['Team size', '5–200 employees'],
                  ['Growth stage', 'Scaling / Post-PMF'],
                  ['Key challenges', 'Forecasting, visibility, CRM gaps'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-sm text-muted">{k}</dt>
                    <dd className="text-right font-display font-semibold text-fg">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <h3 className="mb-6 mt-16 text-center font-display text-2xl font-semibold text-fg">Why Work With GTM TechSol</h3>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <div className="group relative flex items-center gap-3 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-5 shadow-sm transition hover:border-brand-300 hover:shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white"><w.icon className="h-4 w-4" /></span>
                <span className="font-medium text-fg">{w.title}</span>
                <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-60 -translate-x-1/2 rounded-xl bg-navy-950 p-3 text-center text-xs text-white opacity-0 shadow-xl transition group-hover:opacity-100">{w.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* OUTCOMES — ring gauges */}
      <Section>
        <SectionTitle eyebrow="RevOps outcomes" title="Business Impact" sub="Clients typically see measurable improvements across their revenue operations." />
        <div className="flex flex-wrap items-start justify-center gap-16">
          <RingGauge value={50} display="30–50%" label="Pipeline visibility improvement" />
          <RingGauge value={30} display="30%" label="Forecast accuracy improvement" color="#06b6d4" />
        </div>
        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-3">
          {['Faster sales cycles', 'Reduced SaaS costs', 'Better revenue reporting'].map((t) => (
            <span key={t} className="flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2.5 font-medium text-emerald-700">
              <CheckCircle2 className="h-4 w-4" /> {t}
            </span>
          ))}
        </div>
      </Section>

      {/* ASSESSMENT — slim banner */}
      <Section className="!py-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-slate-50 p-8 md:p-12">
            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="font-display text-2xl font-semibold text-fg md:text-3xl">RevOps Maturity Assessment</h3>
                <p className="mt-2 max-w-xl text-fg2">A free assessment that gives you a personalized roadmap to predictable growth.</p>
              </div>
              <ButtonLink href="/revops-maturity">Assess Your RevOps Maturity</ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* AI AGENTS — live feed */}
      <Section>
        <SectionTitle eyebrow="Next-gen capabilities" title={<>AI-Powered <span className="text-gradient">RevOps Agents</span></>} sub="AI agents that work alongside your team." />
        <AgentFeed />
      </Section>

      <CTABand title="Ready to Build a Predictable Revenue Engine?" image={IMG.meeting}>
        <ButtonLink href={BOOKING_URL} variant="light">Book a RevOps Consultation</ButtonLink>
        <ButtonLink href="#platform" variant="ghost">Explore Odoo RevOps Platform</ButtonLink>
      </CTABand>
    </>
  );
}

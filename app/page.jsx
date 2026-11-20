import Link from 'next/link';
import { Clock, Zap, BadgeCheck, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Section, SectionTitle, ButtonLink, CTABand, OrigIcon } from '@/components/ui';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import Photo from '@/components/Photo';
import HomeHero from '@/components/home/HomeHero';
import HorizontalJourney from '@/components/home/HorizontalJourney';
import CapabilityTabs from '@/components/home/CapabilityTabs';
import BeforeAfter from '@/components/home/BeforeAfter';
import OrbitAreas from '@/components/home/OrbitAreas';
import Accordion from '@/components/Accordion';
import Founder from '@/components/Founder';
import { BOOKING_URL, ORIG, IMG } from '@/lib/site';

const problems = [
  { title: 'Disconnected systems', desc: 'Sales, marketing, and finance work in silos.', bg: 'bg-white' },
  { title: 'Poor pipeline hygiene', desc: 'Deals stall in stages and carry inaccurate data.', bg: 'bg-brand-50' },
  { title: 'Unreliable forecasts', desc: 'Leadership doubts revenue predictions.', bg: 'bg-cyan-50' },
  { title: 'Limited revenue insights', desc: 'No unified dashboards or analytics.', bg: 'bg-sky-50' },
];

const services = [
  { title: 'Fractional RevOps', desc: 'Part-time RevOps leadership for SaaS and SMBs.', href: '/revops', img: IMG.teamLaptops, span: 'md:col-span-2 md:row-span-2' },
  { title: 'RevOps Audit', desc: 'Reviews your revenue processes, CRM architecture, and forecasting.', href: '/revops', img: IMG.paperwork, span: 'md:col-span-2' },
  { title: 'Revenue Architecture', desc: 'Designs scalable go-to-market systems and revenue data models.', href: '/revops', img: IMG.laptopCharts, span: '' },
  { title: 'CRM Implementation', desc: 'Deploys and optimizes Odoo, HubSpot, or Salesforce.', href: '/odoo-services', img: IMG.developers, span: '' },
];

const steps = [
  { title: 'Answer Targeted Questions', desc: 'Questions cover all six RevOps areas.' },
  { title: 'Get Your Maturity Score', desc: 'Scores for each area, shown instantly.' },
  { title: 'Identify Real Gaps', desc: 'Highlights the highest-impact fixes to prioritize.' },
];

const deepDive = [
  { title: 'Revenue Strategy', body: 'Assesses your goals, ideal customer profile, and how well your go-to-market motion aligns with your buyers.' },
  { title: 'Marketing Operations', body: 'Assesses lead generation, lead scoring, and marketing attribution.' },
  { title: 'Sales Operations', body: 'Assesses pipeline reliability, stage definitions, and forecasting.' },
  { title: 'Customer Success', body: 'Assesses retention, customer health scores, and renewals.' },
  { title: 'Revenue Data', body: 'Assesses data cleanliness, governance, and reporting.' },
  { title: 'Automation', body: 'Assesses workflows and how well your tools are integrated.' },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO — elevated: mouse spotlight, depth floaters, scroll-flattening dashboard */}
      <HomeHero />

      <Marquee label="Experience across" items={['Salesforce', 'Cognizant', 'Odoo', 'HubSpot', 'Global SaaS', 'Retail', 'SMB Growth']} />

      {/* 2. PROBLEMS — sticky photo + stacking cards */}
      <section className="relative py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="self-start lg:sticky lg:top-28">
            <SectionTitle
              center={false}
              className="mb-8"
              eyebrow="The problem"
              title={<>Why companies struggle with <span className="text-gradient">revenue visibility</span></>}
            />
            <Photo src={IMG.workshop} alt="Team mapping their revenue process" aspect="aspect-[16/11]" />
          </div>
          <div className="pb-10">
            {problems.map((p, i) => (
              <div key={p.title} className="sticky mb-[14vh] last:mb-0" style={{ top: `${130 + i * 26}px` }}>
                <div className={`group flex min-h-[240px] flex-col justify-between rounded-[2rem] border border-slate-200 ${p.bg} p-8 shadow-[0_-10px_40px_-20px_rgba(11,26,74,0.25)] md:p-10`}>
                  <div className="flex items-start justify-between">
                    <OrigIcon src={ORIG.problems[i]} className="h-16 w-16" />
                    <span className="font-display text-6xl font-bold text-brand-500/15">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="mt-6 font-display text-3xl font-semibold text-fg">{p.title}</h3>
                    <p className="mt-2 text-lg text-muted">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. JOURNEY — horizontal scroll band */}
      <HorizontalJourney />

      {/* 4. SERVICES — bento grid */}
      <Section>
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle center={false} className="mb-0" eyebrow="What we do" title="How we help companies build a predictable revenue engine" />
          <Reveal>
            <ButtonLink href="/revops" variant="ghost">All services</ButtonLink>
          </Reveal>
        </div>
        <div className="grid auto-rows-[260px] gap-5 md:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className={s.span}>
              <Link href={s.href} className="on-dark group relative block h-full overflow-hidden rounded-[1.75rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent transition-colors duration-500 group-hover:from-brand-700/95" />
                <div className="absolute left-5 top-5">
                  <OrigIcon src={ORIG.services[i]} className="h-12 w-12 border-white bg-white" />
                </div>
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-brand-600">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className={`font-display font-semibold text-fg ${i === 0 ? 'text-3xl md:text-4xl' : 'text-xl'}`}>{s.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-fg2 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">{s.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. CAPABILITIES — tabs over photos */}
      <Section className="bg-slate-50/80">
        <SectionTitle eyebrow="Capabilities" title="RevOps capabilities required for predictable growth" />
        <Reveal>
          <CapabilityTabs />
        </Reveal>
      </Section>

      {/* 6. IMPACT — before/after slider */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle center={false} className="mb-8" eyebrow="Results" title={<>Impact of <span className="text-gradient">RevOps transformation</span></>} sub="Slide to see what changes when revenue operations are designed properly." />
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                {[['55% → 95%', 'Forecast accuracy'], ['2% → 10%', 'Revenue growth']].map(([v, l]) => (
                  <div key={l} className="rounded-2xl border border-slate-200 p-4">
                    <div className="font-display text-xl font-bold text-brand-600">{v}</div>
                    <div className="text-xs text-muted">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal>
            <BeforeAfter />
          </Reveal>
        </div>
      </Section>

      {/* 7. ASSESS — orbit of six areas */}
      <Section className="overflow-hidden bg-slate-50/70">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle center={false} className="mb-8" eyebrow="Assess your RevOps maturity" title="Your Company Is Growing. But Is Your Revenue Engine Actually Aligned?" />
            <Reveal>
              <div className="mb-10 flex flex-wrap items-center gap-2 text-sm">
                {['Marketing', 'Sales', 'Customer Success', 'Data', 'Systems'].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="rounded-full border border-brand-200 bg-white px-4 py-1.5 font-medium text-fg shadow-sm">{s}</span>
                    {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-brand-500" />}
                  </span>
                ))}
              </div>
              <ButtonLink href="/revops-maturity">Take the Free Assessment</ButtonLink>
              <span className="ml-4 inline-flex items-center gap-1.5 text-xs text-muted">
                <Clock className="h-3.5 w-3.5" /> Only 6 minutes to complete
              </span>
            </Reveal>
          </div>
          <Reveal>
            <OrbitAreas />
          </Reveal>
        </div>
      </Section>

      {/* 8. HOW IT WORKS — big numbered steps on a path */}
      <Section>
        <SectionTitle eyebrow="3 simple steps" title="How the Assessment Works" />
        <div className="relative grid gap-10 md:grid-cols-3">
          <svg aria-hidden className="absolute left-0 top-[60px] hidden h-10 w-full md:block" preserveAspectRatio="none" viewBox="0 0 100 10">
            <path d="M15 5 Q 32 -4, 50 5 T 85 5" fill="none" stroke="#93b8fd" strokeWidth="0.4" strokeDasharray="1.5 1.5" vectorEffect="non-scaling-stroke" />
          </svg>
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <div className="group relative text-center">
                <div className="relative mx-auto w-fit">
                  <OrigIcon src={ORIG.steps[i]} className="h-[120px] w-[120px] rounded-full bg-white p-4 shadow-lg" />
                  <span className="absolute -right-1 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white shadow-lg">{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-fg">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9. DEEP DIVE — accordion beside photo */}
      <Section className="bg-slate-50/80">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionTitle center={false} className="mb-8" eyebrow="Deep dive" title="Deep Dive: The Six RevOps Areas" sub="What each part of the assessment looks at in your revenue engine." />
            <Photo src={IMG.laptopAnalytics} alt="Laptop showing revenue analytics" aspect="aspect-[16/11]" className="hidden lg:block" />
          </div>
          <Reveal>
            <Accordion items={deepDive} />
          </Reveal>
        </div>
      </Section>

      {/* 10. CTA */}
      <CTABand title="Where Does Your Revenue Engine Stand?" image={IMG.meeting}>
        <ButtonLink href="/revops-maturity" variant="light">Start the Assessment Now</ButtonLink>
        <ButtonLink href={BOOKING_URL} variant="ghost">Book a Strategy Call</ButtonLink>
        <div className="mt-4 flex w-full flex-wrap gap-x-8 gap-y-2 text-sm text-fg2">
          <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-aqua-300" /> Free — no credit card needed</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-aqua-300" /> 6 minutes to complete</span>
          <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-aqua-300" /> Instant results & recommendations</span>
        </div>
      </CTABand>

      {/* 11. FOUNDER */}
      <Founder
          title="Meet the RevOps Architect"
          eyebrow="Founder"
          points={[
            '20+ years in revenue operations and technology',
            'Salesforce and Cognizant background',
            'Go-to-market architecture for SaaS and SMBs',
            'European focus with global delivery',
            'Track record in revenue visibility and growth',
          ]}
        />
    </>
  );
}

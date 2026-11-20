import { Hammer, Building2, Layers, Bot, Search, PencilRuler, Rocket, TrendingUp, Eye, Flag, MapPin } from 'lucide-react';
import { Section, SectionTitle, ButtonLink, PageHero, CTABand } from '@/components/ui';
import Reveal from '@/components/Reveal';
import Photo from '@/components/Photo';
import Founder from '@/components/Founder';
import StrikeList from '@/components/about/StrikeList';
import ExpandPanels from '@/components/about/ExpandPanels';
import ScrollTimeline from '@/components/about/ScrollTimeline';
import HoverPreviewList from '@/components/about/HoverPreviewList';
import FlipCard from '@/components/about/FlipCard';
import { BOOKING_URL, IMG } from '@/lib/site';

export const metadata = { title: 'About Us | GTM Technology Solutions' };

const pains = [
  'Forecasts that repeatedly miss targets',
  "CRM data that can't be trusted for decisions",
  "Pipelines that look full but don't convert",
  'Sales, marketing, and customer success teams that are disconnected',
];

const different = [
  { icon: <Hammer className="h-9 w-9 text-aqua-300" />, short: 'We implement', title: "We don't just advise — we implement", desc: 'Many consultants stop at strategy. We also design and run the full RevOps stack.', img: IMG.developers },
  { icon: <Building2 className="h-9 w-9 text-aqua-300" />, short: 'SMB × Enterprise', title: 'Built for SMBs, inspired by enterprise', desc: 'Enterprise-level thinking adapted for speed, cost-efficiency, and scale.', img: IMG.openOffice },
  { icon: <Layers className="h-9 w-9 text-aqua-300" />, short: 'Tech + Process + Data', title: 'Technology + Process + Data', desc: 'We integrate CRM (Odoo, HubSpot, Salesforce), automation (n8n and AI workflows), and reporting with Tableau-style insights.', img: IMG.laptopAnalytics },
  { icon: <Bot className="h-9 w-9 text-aqua-300" />, short: 'AI-driven', title: 'AI-driven RevOps approach', desc: 'We design agentic workflows for pipeline hygiene, forecast accuracy, customer health, and revenue leak detection.', img: IMG.dataCenter },
];

const approach = [
  { icon: <Search className="h-5 w-5" />, step: 'Diagnose', sub: 'RevOps Audit', desc: 'Assess GTM maturity, systems, and data quality.' },
  { icon: <PencilRuler className="h-5 w-5" />, step: 'Design', sub: 'Target Architecture', desc: 'Define processes, KPIs, and a technology blueprint.' },
  { icon: <Rocket className="h-5 w-5" />, step: 'Implement', sub: 'Execution', desc: 'Configure CRM, workflows, and reporting.' },
  { icon: <TrendingUp className="h-5 w-5" />, step: 'Optimize', sub: 'Fractional RevOps', desc: 'Stay involved to drive ongoing improvement.' },
];

const audience = [
  { text: 'B2B SaaS companies with €5M–€100M ARR', img: IMG.teamLaptops },
  { text: 'SMBs scaling sales and marketing operations', img: IMG.shop },
  { text: 'Founders preparing for their next growth phase', img: IMG.presenting },
  { text: 'Companies implementing or fixing CRM systems', img: IMG.laptopCharts },
];

export default function About() {
  return (
    <>
      {/* HERO — split with photo */}
      <PageHero
        eyebrow="About GTM Technology Solutions"
        title={<>From Revenue Chaos to <span className="text-gradient">Predictable Growth</span></>}
        sub="We help SaaS and SMB companies design, implement, and scale their go-to-market architecture by combining strategy, technology, and execution."
        image={IMG.teamLaptops}
        imageAlt="GTM team at work"
        badge={
          <div className="absolute -bottom-6 left-6 flex animate-float items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><MapPin className="h-5 w-5" /></span>
            <div>
              <div className="text-xs text-muted">Based in</div>
              <div className="font-semibold text-fg">The Netherlands</div>
            </div>
          </div>
        }
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={BOOKING_URL}>Book a 30-min RevOps Assessment</ButtonLink>
          <ButtonLink href="/revops" variant="ghost">Explore Our Services</ButtonLink>
        </div>
      </PageHero>

      {/* WHO WE ARE — editorial statement + strike-through list */}
      <Section>
        <Reveal>
          <p className="max-w-5xl font-display text-3xl font-medium leading-snug tracking-tight text-fg md:text-5xl">
            A <span className="text-gradient">Netherlands-based</span> RevOps &amp; GTM consulting firm helping growing companies add{' '}
            <span className="underline decoration-brand-300 decoration-4 underline-offset-8">structure</span>,{' '}
            <span className="underline decoration-brand-300 decoration-4 underline-offset-8">visibility</span>, and{' '}
            <span className="underline decoration-brand-300 decoration-4 underline-offset-8">predictability</span> to their revenue engine.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-lg text-muted">We work with founders, CROs, and leadership teams facing the problems that slow growth.</p>
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Common pain points we address</h3>
            <div className="mt-6 rounded-2xl bg-brand-600 p-6 text-white shadow-xl">
              Our answer: a <strong>Revenue Architecture</strong> that links strategy, processes, and technology.
            </div>
          </Reveal>
          <StrikeList items={pains} />
        </div>
      </Section>

      {/* FOUNDER */}
      <Founder
          eyebrow="Our founder"
          title="Sudheer Yalla"
          points={[
            '20+ years in Revenue Operations and GTM technology',
            'Former Salesforce and Cognizant leader with enterprise expertise',
            'Specializes in GTM architectures for SaaS and SMB companies',
            'Based in the Netherlands, with global delivery capabilities',
            'Track record in improving revenue visibility, predictability, and growth',
          ]}
          quote="Revenue is not a result of effort — it is a result of architecture."
        />

      {/* DIFFERENT — expanding image panels */}
      <Section>
        <SectionTitle eyebrow="Why us" title="What Makes Us Different" sub="Hover each panel to explore." />
        <Reveal>
          <ExpandPanels items={different} />
        </Reveal>
      </Section>

      {/* APPROACH — scroll-filled timeline */}
      <Section className="bg-slate-50/70">
        <SectionTitle eyebrow="Our approach" title="Our Approach" sub="Revenue Chaos → Revenue Architecture → Revenue Intelligence" />
        <ScrollTimeline steps={approach} />
      </Section>

      {/* WHO WE WORK WITH — big list with cursor image preview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <SectionTitle center={false} className="mb-8" eyebrow="Clients" title="Who We Work With" />
            <Photo src={IMG.amsterdam} alt="Amsterdam canal" aspect="aspect-[3/4]" className="hidden lg:block" />
          </div>
          <Reveal>
            <HoverPreviewList items={audience} />
          </Reveal>
        </div>
      </Section>

      {/* VISION / MISSION — flip cards */}
      <Section className="bg-slate-50/80">
        <SectionTitle eyebrow="Purpose" title="Vision & Mission" />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <FlipCard
              img={IMG.amsterdam}
              icon={Eye}
              title="Our Vision"
              body="To become the go-to RevOps and GTM technology partner for SMBs and SaaS companies in Europe, helping them scale with clarity, confidence, and control."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FlipCard
              img={IMG.handsTogether}
              icon={Flag}
              tone="from-navy-900 to-aqua-600"
              title="Our Mission"
              body="To simplify GTM systems by delivering practical, scalable, cost-effective RevOps solutions that produce measurable business results."
            />
          </Reveal>
        </div>
      </Section>

      <CTABand title="Ready to bring structure to your revenue engine?" sub="Let's discuss how to turn your revenue chaos into predictable growth." image={IMG.handsTogether}>
        <ButtonLink href="/revops-maturity" variant="light">Book a Free RevOps Maturity Assessment</ButtonLink>
        <ButtonLink href="/contactus" variant="ghost">Get a Personalized Roadmap</ButtonLink>
      </CTABand>
    </>
  );
}

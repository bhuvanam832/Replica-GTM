import { CheckCircle2, Handshake, Boxes, Calculator, Workflow, LayoutDashboard, DatabaseZap, Briefcase, Landmark } from 'lucide-react';
import { Section, SectionTitle, ButtonLink, PageHero, CTABand } from '@/components/ui';
import Reveal from '@/components/Reveal';
import Photo from '@/components/Photo';
import Counter from '@/components/Counter';
import ChaosToOrder from '@/components/odoo/ChaosToOrder';
import PackagePicker from '@/components/odoo/PackagePicker';
import ProcessStepper from '@/components/odoo/ProcessStepper';
import { BOOKING_URL, ORIG, IMG } from '@/lib/site';

export const metadata = { title: 'Odoo Services | GTM Technology Solutions' };

const pains = [
  'CRM and accounting live in separate systems',
  'Inventory is tracked manually',
  'No clear visibility into sales',
  'Invoicing and follow-ups are done by hand',
  'No real-time dashboards',
  'Too many tools that barely connect',
];

const apps = [
  { icon: Handshake, title: 'CRM & Sales Automation', desc: 'Lead tracking, pipeline visibility, and sales process automation.', c: 'from-blue-500 to-indigo-600' },
  { icon: Boxes, title: 'Inventory & Purchase', desc: 'Stock control and procurement workflows.', c: 'from-amber-400 to-orange-500' },
  { icon: Calculator, title: 'Accounting', desc: 'Setup aligned with Dutch VAT requirements.', c: 'from-emerald-400 to-teal-600' },
  { icon: Workflow, title: 'Workflow Automation', desc: 'Approval flows and business logic.', c: 'from-fuchsia-500 to-purple-600' },
  { icon: LayoutDashboard, title: 'Dashboards & Reporting', desc: 'KPI dashboards for live visibility.', c: 'from-cyan-400 to-sky-600' },
  { icon: DatabaseZap, title: 'Data Migration', desc: 'Structured transfer from legacy systems.', c: 'from-rose-400 to-pink-600' },
];

const why = [
  '19+ years in sales systems and enterprise programs',
  'Experience across Europe',
  'CRM and data programs delivered in the Netherlands',
  'Process-first approach',
  'In-house developers',
  'Exclusive focus on SMBs',
];

const cases = [
  { icon: Briefcase, tag: 'Service Business (SMB)', title: 'CRM Implementation', body: 'Moved from spreadsheets to a CRM — removing duplicate data entry, improving pipeline visibility, standardizing reporting, and reducing admin work.', img: IMG.shop },
  { icon: Landmark, tag: 'Netherlands', title: 'Program Leadership', body: 'Led a cross-functional data initiative — establishing governance, standardizing performance reporting, and providing oversight.', img: IMG.boardroom },
];

export default function OdooServices() {
  return (
    <>
      {/* HERO — split with warehouse photo + Odoo badge */}
      <PageHero
        eyebrow="Odoo Implementation"
        title={<>Odoo Implementation for <span className="text-gradient">Growing Dutch SMBs</span></>}
        sub="Replace Spreadsheets. Automate Operations. Scale with Confidence. Odoo rollouts for 5 to 40 employee businesses, in 6 to 10 weeks — with fixed scope, timeline, and pricing."
        image={IMG.warehouse}
        imageAlt="Organized warehouse operations"
        badge={
          <div className="absolute -bottom-6 -left-4 animate-float rounded-2xl bg-white p-4 shadow-2xl sm:-left-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ORIG.odooLogo} alt="Odoo" className="h-8 w-auto" />
            <div className="mt-2 text-xs text-muted">Implementation partner</div>
          </div>
        }
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="#services">Discover Our Services</ButtonLink>
          <ButtonLink href={BOOKING_URL} variant="ghost">Book Strategy Call</ButtonLink>
        </div>
        <div className="mt-10 flex flex-wrap gap-8">
          {[['5–40', 'employees'], ['6–10', 'weeks'], ['Fixed', 'scope & price']].map(([a, b]) => (
            <div key={b} className="border-l-2 border-brand-400 pl-4">
              <div className="font-display text-2xl font-bold text-fg">{a}</div>
              <div className="text-xs text-muted">{b}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* IS THIS YOU — chaos snaps into order */}
      <Section className="">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle center={false} className="mb-8" eyebrow="Is this you?" title="Are You Running Your Business on Spreadsheets and Disconnected Tools?" />
            <Photo src={IMG.paperwork} alt="Manual paperwork and spreadsheets" aspect="aspect-[16/10]" />
          </div>
          <ChaosToOrder items={pains} odooLogo={ORIG.odooLogo} />
        </div>
      </Section>

      {/* WHAT WE DO — app launcher */}
      <Section id="services">
        <SectionTitle eyebrow="What we do" title="We Implement Odoo Properly, Pragmatically, and for SMB Reality" />
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-200 bg-slate-50/80 p-6 shadow-inner md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {apps.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.07}>
                <div className="group flex flex-col items-center text-center">
                  <div className={`flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-gradient-to-br ${a.c} text-white shadow-[0_20px_40px_-15px_rgba(15,23,42,0.5)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[-6deg] group-hover:scale-110`}>
                    <a.icon className="h-10 w-10" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-fg">{a.title}</h3>
                  <p className="mt-1 max-w-[220px] text-sm text-muted">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* PACKAGES — interactive picker */}
      <Section className="bg-slate-50/70">
        <SectionTitle eyebrow="Packages" title="Our Implementation Package" sub="Clear pricing and expectations up front. Move the slider to find your fit." />
        <PackagePicker />
      </Section>

      {/* PROCESS — auto-playing stepper */}
      <Section>
        <SectionTitle eyebrow="Our implementation process" title="Structured. Clear. Controlled." sub="Clear visibility into progress, deliverables, and next steps — with no scope surprises." />
        <Reveal>
          <ProcessStepper />
        </Reveal>
      </Section>

      {/* RESULTS — parallax photo band with counters */}
      <section className="on-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${IMG.warehouse})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-brand-700/85 to-navy-950/90" />
        <div className="container-x relative">
          <SectionTitle eyebrow="Results you can expect" title="Measurable gains within 90 days" />
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { big: 'Central', label: 'Centralized operational control' },
              { big: <Counter to={100} suffix="%" />, label: 'Sales pipeline visibility' },
              { big: '10–50%', label: 'Less manual work' },
              { big: '30–50%', label: 'Less manual work' },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full bg-navy-950/60 p-8 text-center backdrop-blur">
                  <div className="font-display text-5xl font-bold text-fg">{r.big}</div>
                  <p className="mt-3 text-sm text-fg2">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY — overlapping photo + checklist card */}
      <Section>
        <div className="relative grid items-center lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Photo src={IMG.developers} alt="In-house developers" aspect="aspect-[4/3]" />
          </div>
          <Reveal className="relative -mt-16 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:-ml-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Why GTM Technology Solutions?</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-fg md:text-3xl">Enterprise-level ERP discipline — without enterprise complexity or cost.</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {why.map((w) => (
                  <li key={w} className="flex gap-2 text-sm text-fg2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {w}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-brand-600">We combine enterprise structure with SMB practicality.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CASES — magazine alternating rows */}
      <Section className="bg-slate-50/80">
        <SectionTitle eyebrow="Case experience" title="Case Experience" />
        <div className="space-y-20">
          {cases.map((c, i) => (
            <div key={c.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={i % 2 ? 'md:order-2' : ''}>
                <Photo src={c.img} alt={c.title} aspect="aspect-[16/11]" />
              </div>
              <Reveal x={i % 2 ? -40 : 40} y={0}>
                <span className="font-display text-8xl font-bold leading-none text-brand-500/10">0{i + 1}</span>
                <span className="-mt-4 block text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">{c.tag}</span>
                <h3 className="mt-2 font-display text-3xl font-semibold text-fg md:text-4xl">{c.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted">{c.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* CAPACITY — slots indicator */}
      <Section className="!py-12">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-[2rem] border-2 border-dashed border-amber-300 bg-amber-50 p-8 md:flex-row md:p-10">
            <div className="flex gap-3">
              {[0, 1].map((s) => (
                <span key={s} className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white font-display text-lg font-bold text-amber-600 shadow">
                  <span className="absolute inset-0 animate-pulse-ring rounded-2xl border-2 border-amber-400" style={{ animationDelay: `${s * 0.8}s` }} />
                  {s + 1}
                </span>
              ))}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl font-semibold text-fg">Limited Project Capacity</h3>
              <p className="mt-1 text-fg2">We take on at most two active implementations at a time. Planning Odoo within the next 3–6 months? Get in touch now.</p>
            </div>
            <ButtonLink href="/contactus">Reserve a slot</ButtonLink>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Ready to Bring Structure to Your Operations?"
        sub="In a free 15-minute strategy call we'll cover your current systems and bottlenecks, whether Odoo is a fit, the right package, and timeline and expected outcomes. No obligation."
        image={IMG.highFive}
      >
        <ButtonLink href={BOOKING_URL} variant="light">Book a free 15-minute strategy call</ButtonLink>
      </CTABand>
    </>
  );
}

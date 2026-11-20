import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Eyebrow } from '@/components/ui';
import Reveal from '@/components/Reveal';
import BlogIndex from '@/components/blog/BlogIndex';
import { POSTS, CASES } from '@/lib/blog';

export const metadata = { title: 'GTM Insights Blog | GTM Technology Solutions' };

export default function Blog() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 pb-14 pt-36 md:pt-44">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Reveal>
            <Eyebrow className="mb-6">GTM Insights</Eyebrow>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-fg md:text-7xl">
              Notes on <span className="text-gradient">revenue</span> operations.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted">
              Practical thinking on RevOps, forecasting, pipeline health, CRM and change — from the GTM Technology Solutions team.
            </p>
            <p className="mt-4 text-sm text-slate-400">{POSTS.length} articles</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <BlogIndex posts={POSTS} />
      </Section>

      <Section className="bg-slate-50/80 !pt-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg">Case studies</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <Link key={c.slug} href={`/insights/${c.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-8 transition-colors hover:border-navy-900">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{c.nav}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-fg">{c.title}</h3>
              <p className="mt-3 line-clamp-3 text-muted">{c.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg">
                Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

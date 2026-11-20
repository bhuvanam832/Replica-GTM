import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { CTABand, ButtonLink } from '@/components/ui';
import Article from '@/components/blog/Article';
import { CASES, getCase } from '@/lib/blog';
import { ORIG, BOOKING_URL } from '@/lib/site';

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCase(slug);
  return { title: c ? `${c.title} | Case Study` : 'Case Study' };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const other = CASES.find((x) => x.slug !== slug);

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 pb-16 pt-32 md:pt-40">
        <div className="container-x max-w-5xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <ArrowLeft className="h-4 w-4" /> Insights
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Case study · {c.nav}</span>
          </div>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-fg md:text-6xl">{c.title}</h1>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ORIG.odooLogo} alt="Odoo" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </section>

      <div className="container-x max-w-3xl py-14">
        <Article blocks={c.blocks} />
      </div>

      {other && (
        <div className="container-x max-w-3xl">
          <Link href={`/insights/${other.slug}`} className="group block border-t border-slate-200 pt-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Next case study</span>
            <p className="mt-2 font-display text-2xl font-semibold text-fg transition-colors group-hover:text-brand-600">{other.title} →</p>
          </Link>
        </div>
      )}

      <CTABand title="Want results like these with Odoo?" sub="Book a free 15-minute strategy call to see if Odoo fits your business.">
        <ButtonLink href={BOOKING_URL} variant="light">Book Strategy Call</ButtonLink>
        <ButtonLink href="/odoo-services" variant="ghost">Odoo Services</ButtonLink>
      </CTABand>
    </>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { ButtonLink, Section } from '@/components/ui';
import Article from '@/components/blog/Article';
import { POSTS, getPost, formatDate } from '@/lib/blog';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  return { title: p ? `${p.title} | GTM Insights` : 'GTM Insights', description: p?.excerpt };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const idx = POSTS.indexOf(post);
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const next = POSTS[idx + 1] || POSTS[0];

  return (
    <>
      <article className="pt-32 md:pt-40">
        <header className="container-x max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{formatDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readMin} min read</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>GTM Technology Solutions</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-fg md:text-6xl">{post.title}</h1>
          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-fg2">{t}</span>
              ))}
            </div>
          )}
        </header>

        <div className="container-x mt-12 max-w-5xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.cover} alt="" className="aspect-[16/8] w-full rounded-3xl object-cover" />
        </div>

        <div className="container-x max-w-3xl py-12">
          <Article blocks={post.blocks} />

          <div className="mt-16 flex flex-col gap-4 rounded-2xl bg-navy-900 p-8 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-xl font-semibold">Where does your revenue engine stand?</p>
              <p className="mt-1 text-sm text-blue-100">Take the free 6-minute RevOps maturity assessment.</p>
            </div>
            <ButtonLink href="/revops-maturity" variant="light">Start the assessment</ButtonLink>
          </div>

          <Link href={`/blog/${next.slug}`} className="group mt-10 block border-t border-slate-200 pt-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Next article</span>
            <p className="mt-2 font-display text-2xl font-semibold text-fg transition-colors group-hover:text-brand-600">{next.title} →</p>
          </Link>
        </div>
      </article>

      <Section className="border-t border-slate-200 bg-slate-50/80 !py-16">
        <h2 className="mb-8 font-display text-2xl font-bold text-fg">More from GTM Insights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {more.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <div className="overflow-hidden rounded-xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.cover} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-xs text-muted">{formatDate(p.date)}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-fg group-hover:text-brand-600">{p.title}</h3>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

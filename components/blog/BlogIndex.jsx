'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

const fmt = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function BlogIndex({ posts }) {
  const tags = useMemo(() => {
    const count = {};
    posts.forEach((p) => p.tags.forEach((t) => (count[t] = (count[t] || 0) + 1)));
    return Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([t]) => t);
  }, [posts]);
  const [tag, setTag] = useState('All');
  const list = tag === 'All' ? posts : posts.filter((p) => p.tags.includes(tag));
  const [featured, ...rest] = list;

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2">
        {['All', ...tags].map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${tag === t ? 'bg-navy-900 text-white' : 'border border-slate-200 text-fg2 hover:border-navy-900'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={tag} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group grid items-center gap-8 border-b border-slate-200 pb-14 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.cover} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Latest · {fmt(featured.date)}</p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-fg transition-colors group-hover:text-brand-600 md:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-lg text-muted">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-fg">
                  Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          )}

          <ul>
            {rest.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group grid items-center gap-5 border-b border-slate-200 py-7 md:grid-cols-[140px_1fr_200px]">
                  <span className="text-sm text-muted">{fmt(p.date)}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-fg transition-colors group-hover:text-brand-600 md:text-2xl">{p.title}</h3>
                    <p className="mt-1 line-clamp-2 text-muted">{p.excerpt}</p>
                  </div>
                  <div className="hidden items-center justify-end gap-4 md:flex">
                    <span className="flex items-center gap-1 text-xs text-muted"><Clock className="h-3.5 w-3.5" /> {p.readMin} min</span>
                    <div className="h-16 w-24 overflow-hidden rounded-lg bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.cover} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {!list.length && <p className="py-10 text-muted">No posts with this topic yet.</p>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const TOPICS = ['RevOps Maturity Assessment', 'RevOps Transformation', 'Explore Odoo RevOps Platform'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="glass relative overflow-hidden rounded-[2rem] bg-base2/70 p-6 md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}>
              <CheckCircle2 className="h-16 w-16 text-emerald-500" />
            </motion.div>
            <h3 className="mt-6 font-display text-3xl font-semibold text-fg">Thanks — message received!</h3>
            <p className="mt-2 max-w-sm text-muted">We will get back to you as soon as possible.</p>
            <p className="mt-6 text-xs text-slate-500">Prototype: this form is not connected to a backend yet.</p>
            <button onClick={() => setSent(false)} className="mt-6 text-sm text-brand-600 underline underline-offset-4">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Field label="Name" name="name" required />
            <Field label="Phone Number" name="phone" type="tel" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Company" name="company" />
            <Field label="Subject" name="subject" required className="sm:col-span-2" />
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm text-fg2">
                Topic <span className="text-rose-500">*</span>
              </span>
              <div className="grid gap-2 sm:grid-cols-3">
                {TOPICS.map((t, i) => (
                  <label key={t} className="cursor-pointer">
                    <input type="radio" name="topic" value={t} required defaultChecked={i === 0} className="peer sr-only" />
                    <span className="block h-full rounded-xl border border-line/10 bg-line/[0.03] px-4 py-3 text-sm text-fg2 transition peer-checked:border-brand-400 peer-checked:bg-brand-500/15 peer-checked:text-fg peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400">
                      {t}
                    </span>
                  </label>
                ))}
              </div>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm text-fg2">
                Question <span className="text-rose-500">*</span>
              </span>
              <textarea name="question" required rows={5} className="input resize-none" />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.8)] transition hover:scale-[1.03]"
              >
                Submit <Send className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, name, type = 'text', required, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm text-fg2">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      <input name={name} type={type} required={required} className="input" />
    </label>
  );
}

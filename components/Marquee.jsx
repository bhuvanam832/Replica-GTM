export default function Marquee({ items, label }) {
  const row = [...items, ...items];
  return (
    <div className="relative py-10">
      {label && <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-slate-500">{label}</p>}
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-14">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap font-display text-xl font-medium text-muted/80 md:text-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-aqua-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

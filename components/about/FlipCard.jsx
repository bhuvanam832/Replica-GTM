export default function FlipCard({ img, icon: Icon, title, body, tone = 'from-brand-700 to-brand-500' }) {
  return (
    <div className="group h-[420px] [perspective:1400px]">
      <div className="relative h-full w-full rounded-[2rem] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* front */}
        <div className="on-dark absolute inset-0 overflow-hidden rounded-[2rem] shadow-xl [backface-visibility:hidden]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <Icon className="h-9 w-9 text-white" />
            <h3 className="mt-4 font-display text-4xl font-semibold text-fg">{title}</h3>
            <p className="mt-2 text-sm text-fg2">Hover to read →</p>
          </div>
        </div>
        {/* back */}
        <div className={`on-dark absolute inset-0 flex flex-col justify-center rounded-[2rem] bg-gradient-to-br ${tone} p-10 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
          <Icon className="h-10 w-10 text-aqua-300" />
          <h3 className="mt-5 font-display text-3xl font-semibold text-fg">{title}</h3>
          <p className="mt-4 text-xl leading-relaxed text-fg2">{body}</p>
        </div>
      </div>
    </div>
  );
}

/** Renders extracted article blocks as clean editorial typography. */
function Lines({ text }) {
  const parts = text.split('\n');
  return parts.map((p, i) => (
    <span key={i}>
      {p}
      {i < parts.length - 1 && <br />}
    </span>
  ));
}

export default function Article({ blocks }) {
  const out = [];
  let list = null;

  const flush = () => {
    if (!list) return;
    const Tag = list.type === 'ol' ? 'ol' : 'ul';
    out.push(
      <Tag key={`l${out.length}`} className={`my-6 space-y-3 pl-6 ${Tag === 'ol' ? 'list-decimal' : 'list-disc'} marker:text-brand-500`}>
        {list.items.map((x, i) => (
          <li key={i} className="pl-1 text-lg leading-relaxed text-fg2">
            <Lines text={x} />
          </li>
        ))}
      </Tag>
    );
    list = null;
  };

  blocks.forEach((b, i) => {
    if (b.t === 'li') {
      if (!list || list.type !== b.l) {
        flush();
        list = { type: b.l, items: [] };
      }
      list.items.push(b.x);
      return;
    }
    flush();
    switch (b.t) {
      case 'h1':
      case 'h2':
        out.push(<h2 key={i} className="mb-4 mt-14 font-display text-3xl font-bold tracking-tight text-fg">{b.x}</h2>);
        break;
      case 'h3':
        out.push(<h3 key={i} className="mb-3 mt-10 font-display text-2xl font-semibold text-fg">{b.x}</h3>);
        break;
      case 'h4':
        out.push(<h4 key={i} className="mb-2 mt-8 font-display text-xl font-semibold text-fg">{b.x}</h4>);
        break;
      case 'blockquote': {
        const [first, ...rest] = b.x.split('\n');
        out.push(
          <blockquote key={i} className="my-8 border-l-4 border-brand-500 bg-brand-50/60 py-5 pl-6 pr-4">
            {rest.length ? (
              <>
                <p className="font-display text-lg font-semibold text-fg">{first}</p>
                <p className="mt-1 text-lg leading-relaxed text-fg2">{rest.join(' ')}</p>
              </>
            ) : (
              <p className="font-serif text-2xl italic leading-snug text-fg">{first}</p>
            )}
          </blockquote>
        );
        break;
      }
      case 'img':
        out.push(
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={b.src} alt={b.alt || ''} loading="lazy" className="my-10 w-full rounded-2xl border border-slate-200" />
        );
        break;
      default:
        out.push(
          <p key={i} className="my-5 text-lg leading-[1.8] text-fg2">
            <Lines text={b.x} />
          </p>
        );
    }
  });
  flush();
  return <div>{out}</div>;
}

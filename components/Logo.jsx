import Link from 'next/link';
import { ORIG } from '@/lib/site';

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`group flex items-center ${className}`} aria-label="GTM Technology Solutions home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ORIG.logo}
        alt="GTM Tech Solutions"
        className="h-10 w-auto rounded-lg shadow-[0_6px_20px_-8px_rgba(30,58,138,0.6)] transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}

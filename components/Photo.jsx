'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Photo with clip-path reveal on scroll + gentle parallax + hover zoom.
 */
export default function Photo({
  src,
  alt = '',
  className = '',
  aspect = 'aspect-[4/3]',
  rounded = 'rounded-3xl',
  parallax = 10,
  overlay = false,
  children,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden ${rounded} ${aspect} ${className} bg-slate-100 shadow-[0_30px_60px_-30px_rgba(11,26,74,0.45)]`}
      initial={{ clipPath: 'inset(10% 10% 10% 10% round 28px)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 0px)', opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ y, scale: 1 + parallax / 50 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />}
      {children}
    </motion.div>
  );
}

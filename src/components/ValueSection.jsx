import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { values } from '../data/index.js';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ValueSection() {
  return (
    <section id="values" className="relative py-28 bg-carbon-950 overflow-hidden">
      <div className="absolute left-0 top-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/15 to-transparent" />

      {/* BG decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(110,231,255,0.04), transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="font-mono text-xs text-electric/60 uppercase tracking-[0.3em] mb-4 block">Profil</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Ce qui me <span className="text-gradient">distingue</span>
          </h2>
          <p className="mt-4 font-body text-white/40 max-w-xl mx-auto">
            Au-delà des technologies : une façon de penser et de travailler qui fait la différence.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div className="glass glass-hover rounded-2xl p-7 h-full group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="font-display font-bold text-white text-base mb-2">{v.title}</h3>
                <p className="font-body text-white/45 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  { icon: '🧠', label: 'Machine Learning', sub: 'Modèles prédictifs & optimisation' },
  { icon: '🔬', label: 'Deep Learning', sub: 'Architectures CNN, LSTM, Transformer' },
  { icon: '📊', label: 'Data Science', sub: 'Analyse, visualisation & insights' },
  { icon: '🚀', label: 'Déploiement', sub: 'Du modèle à la production' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-carbon-900 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <FadeIn>
              <span className="font-mono text-xs text-electric/60 uppercase tracking-[0.3em] mb-4 block">À propos</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Construire l'intelligence
                <br />
                <span className="text-gradient">du futur</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-body text-white/60 leading-relaxed text-base mb-4">
                Je suis Ilyass AIT CHEIKH, 20 ans, passionné par l'intelligence artificielle et les systèmes capables d'apprendre, de s'adapter et de résoudre des problèmes complexes du monde réel.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="font-body text-white/60 leading-relaxed text-base mb-4">
                Ce qui m'anime, c'est la capacité du machine learning et du deep learning à extraire du sens là où les données semblent brutes et désordonnées. Que ce soit pour détecter une pneumonie sur une radiographie, reconnaître une émotion dans une voix, ou prédire un risque financier — je crois que l'IA, bien conçue, peut avoir un impact tangible et mesurable.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-body text-white/60 leading-relaxed text-base mb-8">
                Rigueur technique, curiosité constante, approche data-driven : ce sont les principes qui guident ma façon de travailler. Je vise à devenir un AI Engineer capable de construire des solutions intelligentes de bout en bout — du preprocessing à la mise en production.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-electric/40" />
                <span className="font-mono text-xs text-electric/60">Basé au Maroc · 20 ans</span>
              </div>
            </FadeIn>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <FadeIn key={p.label} delay={0.15 + i * 0.1}>
                <div className="glass glass-hover rounded-2xl p-6 h-full group cursor-default transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <div className="font-display font-semibold text-white text-sm mb-1">{p.label}</div>
                  <div className="font-body text-white/40 text-xs leading-relaxed">{p.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />
    </section>
  );
}

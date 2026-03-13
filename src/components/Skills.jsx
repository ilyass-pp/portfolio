import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillGroups } from '../data/index.js';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SkillCard({ group, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass glass-hover rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{group.icon}</span>
        <span className="font-display font-semibold text-white text-sm">{group.label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map(skill => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md bg-electric/8 border border-electric/15 text-electric/80 font-mono text-xs hover:bg-electric/15 hover:border-electric/30 hover:text-electric transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-carbon-950">
      <div className="absolute left-0 top-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="font-mono text-xs text-electric/60 uppercase tracking-[0.3em] mb-4 block">Stack technique</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Compétences
          </h2>
          <p className="mt-4 font-body text-white/40 max-w-xl mx-auto">
            Un ensemble de technologies soigneusement maîtrisées pour concevoir des systèmes intelligents robustes.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} delay={i * 0.07} />
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />
    </section>
  );
}

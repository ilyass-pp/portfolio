import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/index.js';

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

const metricColors = {
  electric: { text: 'text-electric', bg: 'bg-electric/10', border: 'border-electric/20' },
  sage: { text: 'text-sage', bg: 'bg-sage/10', border: 'border-sage/20' },
  ember: { text: 'text-ember', bg: 'bg-ember/10', border: 'border-ember/20' },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const c = metricColors[project.metricColor];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass rounded-3xl p-7 flex flex-col gap-5 hover:-translate-y-2 hover:border-electric/20 transition-all duration-400 overflow-hidden"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(110,231,255,0.06), transparent)' }}
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="text-3xl mb-3">{project.icon}</div>
          <span className="font-mono text-xs text-white/30 uppercase tracking-widest">{project.category}</span>
          <h3 className="font-display font-bold text-white text-xl mt-1 leading-tight">{project.title}</h3>
          <p className="font-body text-electric/60 text-xs mt-0.5">{project.subtitle}</p>
        </div>
        {/* Metric badge */}
        <div className={`flex-shrink-0 ml-4 px-3 py-2 rounded-xl ${c.bg} border ${c.border} text-center`}>
          <div className={`font-display font-bold text-lg ${c.text}`}>{project.metricValue}</div>
          <div className="font-mono text-xs text-white/30 mt-0.5">{project.metric}</div>
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-white/50 text-sm leading-relaxed">{project.description}</p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="px-2.5 py-1 rounded-md bg-carbon-800 border border-white/8 text-white/50 font-mono text-xs">
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-electric/10 border border-white/10 hover:border-electric/30 text-white/60 hover:text-electric text-xs font-body transition-all duration-200"
        >
          <Github size={13} />
          GitHub
        </a>
        <button
          disabled
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/3 border border-white/6 text-white/25 text-xs font-body cursor-not-allowed"
        >
          <ExternalLink size={13} />
          Démo bientôt
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-carbon-900">
      <div className="absolute left-0 top-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="font-mono text-xs text-electric/60 uppercase tracking-[0.3em] mb-4 block">Réalisations</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Projets <span className="text-gradient">IA</span>
          </h2>
          <p className="mt-4 font-body text-white/40 max-w-xl mx-auto">
            Des projets concrets, menés de bout en bout, démontrant la maîtrise des pipelines ML/DL modernes.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />
    </section>
  );
}

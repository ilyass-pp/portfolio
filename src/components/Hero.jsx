import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, ChevronDown, Linkedin} from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function FloatingOrb({ size, color, x, y, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size,
        background: color,
        left: x, top: y,
        filter: 'blur(80px)',
      }}
      animate={{ y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-carbon-950"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }}
      />

      {/* Ambient orbs */}
      <FloatingOrb size={500} color="rgba(110,231,255,0.07)" x="10%" y="20%" delay={0} />
      <FloatingOrb size={400} color="rgba(111,255,158,0.06)" x="60%" y="40%" delay={3} />
      <FloatingOrb size={300} color="rgba(255,107,53,0.05)" x="80%" y="10%" delay={6} />

      {/* Hero glow */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-hero-glow pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
      

        {/* Name */}
        <motion.h1 variants={item} className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-4">
          <span className="text-white">Ilyass</span>
          <br />
          <span className="text-gradient">AIT CHEIKH</span>
        </motion.h1>

        {/* Title */}
        <motion.p variants={item} className="font-display text-lg sm:text-xl md:text-2xl text-white/50 font-medium mb-6 tracking-wide">
          Futur AI Engineer
          <span className="mx-3 text-electric/30">·</span>
          Machine Learning
          <span className="mx-3 text-electric/30">·</span>
          Deep Learning
          <span className="mx-3 text-electric/30">·</span>
          Data Science
        </motion.p>

        {/* Description */}
        <motion.p variants={item} className="max-w-2xl mx-auto font-body text-white/50 text-base sm:text-lg leading-relaxed mb-10">
          Passionné par l'intelligence artificielle et les systèmes intelligents.
          Je construis des modèles robustes qui transforment les données brutes en décisions concrètes.
          20 ans, basé au Maroc, orienté impact réel.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-electric text-carbon-950 font-body font-semibold text-sm hover:bg-electric-dim transition-all duration-300 hover:shadow-[0_0_30px_rgba(110,231,255,0.4)]"
          >
            Voir mes projets
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/ilyass-pp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-white/80 hover:text-white font-body font-medium text-sm transition-all duration-300"
          >
            
            <Github size={16} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ilyass-ait-cheikh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-white/80 hover:text-white font-body font-medium text-sm transition-all duration-300">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="#contact"
            
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-electric/30 text-white/60 hover:text-electric font-body font-medium text-sm transition-all duration-300"
          >
            <Mail size={16} />
            Me contacter
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={item} className="mt-16 flex flex-wrap justify-center gap-8">
          {[
            { value: '4+', label: 'Projets IA' },
            { value: '91%', label: 'F1-Score Max' },
            { value: '8+', label: 'Technologies' },
            { value: '∞', label: 'Passion' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-electric">{stat.value}</div>
              <div className="font-body text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-electric transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}

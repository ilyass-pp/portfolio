import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';

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

const contacts = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'ilyass-pp',
    href: 'https://github.com/ilyass-pp',
    note: 'Code & projets',
    color: 'hover:border-white/30 hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Profil LinkedIn',
    href: 'https://www.linkedin.com/in/ilyass-ait-cheikh',
    note: 'Réseau professionnel',
    color: 'hover:border-[#0a66c2]/40 hover:text-[#0a66c2]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ilyassaitcheikh18@gmail.com',
    href: 'mailto:ilyassaitcheikh18@gmail.com',
    note: 'Collaboration & échanges',
    color: 'hover:border-electric/40 hover:text-electric',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Maroc',
    href: null,
    note: 'Disponible à distance',
    color: '',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-carbon-900">
      <div className="absolute left-0 top-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="font-mono text-xs text-electric/60 uppercase tracking-[0.3em] mb-4 block">Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Travaillons <span className="text-gradient">ensemble</span>
          </h2>
          <p className="font-body text-white/45 max-w-lg mx-auto">
            Ouvert aux collaborations, projets passionnants et opportunités dans le domaine de l'IA et de la data.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <div className={`glass glass-hover rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group ${c.color} border border-white/8`}>
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={18} className="text-white/60 group-hover:text-current transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-white/30 uppercase tracking-widest">{c.label}</div>
                  <div className="font-body font-medium text-white/80 mt-0.5 truncate">{c.value}</div>
                  <div className="font-body text-xs text-white/35 mt-0.5">{c.note}</div>
                </div>
                {c.href && c.href !== '#' && <ArrowUpRight size={16} className="text-white/20 group-hover:text-current transition-colors flex-shrink-0" />}
              </div>
            );

            return (
              <FadeIn key={c.label} delay={i * 0.1}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div>{inner}</div>
                )}
              </FadeIn>
            );
          })}
        </div>

        {/* CTA banner */}
        <FadeIn delay={0.4} className="mt-10">
          <div className="glass rounded-2xl p-8 text-center border border-electric/10">
            <p className="font-body text-white/50 mb-5 text-sm">
              Intéressé par une collaboration ou un projet IA ?
            </p>
            <a
              href="mailto:ilyassaitcheikh18@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-electric text-carbon-950 font-body font-semibold text-sm hover:bg-electric-dim transition-all duration-300 hover:shadow-[0_0_30px_rgba(110,231,255,0.35)]"
            >
              <Mail size={15} />
              Envoyer un message
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />
    </section>
  );
}

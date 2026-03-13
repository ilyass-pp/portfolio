import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';  
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-carbon-950 border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-electric/10 border border-electric/25 flex items-center justify-center">
            <span className="font-mono text-electric text-xs font-bold">I</span>
          </div>
          <div>
            <span className="font-display font-bold text-white text-sm">Ilyass AIT CHEIKH</span>
            <p className="font-body text-white/30 text-xs mt-0.5">Futur AI Engineer · Maroc</p>
          </div>
        </div>

        <p className="font-body text-white/25 text-xs text-center">
          Construit avec passion pour l'IA et l'excellence technique.
        </p>

        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/ilyass-pp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 hover:text-electric text-xs font-body transition-colors"
          >
            <Github size={14} />
            github.com/ilyass-pp
          </a>
          <a href="https://www.linkedin.com/in/ilyass-ait-cheikh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-white/30 hover:text-electric text-xs font-body transition-colors">
            <Linkedin size={14} />
            linkedin.com/in/ilyass-ait-cheikh
          </a>
          <a href="mailto:ilyassaitcheikh18@gmail.com" className="flex items-center gap-2 text-white/30 hover:text-electric text-xs font-body transition-colors">
            <Mail size={14} />
            ilyassaitcheikh18@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
}

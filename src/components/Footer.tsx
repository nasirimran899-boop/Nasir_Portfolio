import React from 'react';
import { MessageSquare, Linkedin, Mail, ArrowUp, MapPin } from 'lucide-react';
import { OWNER_DETAILS } from '../data/initialData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060b] border-t border-white/10 text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          <div>
            <div className="text-xl font-black text-white font-display tracking-tight flex items-center gap-2">
              <span>{OWNER_DETAILS.name.toUpperCase()}</span>
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
            </div>
            <p className="text-xs text-[#00f0ff] font-medium mt-1">
              {OWNER_DETAILS.title} · {OWNER_DETAILS.location}
            </p>
            <p className="text-xs text-slate-500 mt-2 max-w-sm">
              Crafting distinct brand identities, packaging, typography, and high-impact digital creatives.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#work" className="hover:text-[#00f0ff] transition-colors">
              Selected Work
            </a>
            <a href="#services" className="hover:text-[#00f0ff] transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-[#00f0ff] transition-colors">
              About Me
            </a>
            <a href="#skills" className="hover:text-[#00f0ff] transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-[#00f0ff] transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={OWNER_DETAILS.whatsappPrefilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-[#25D366] hover:text-black text-slate-300 transition-all border border-white/10"
              title="WhatsApp Chat"
              aria-label="Direct WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={OWNER_DETAILS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-[#00f0ff] hover:text-black text-slate-300 transition-all border border-white/10"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${OWNER_DETAILS.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-[#00f0ff] hover:text-black text-slate-300 transition-all border border-white/10"
              title="Send Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white hover:text-black text-slate-300 transition-all border border-white/10 ml-2"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {OWNER_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Available for new freelance design projects & contracts</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

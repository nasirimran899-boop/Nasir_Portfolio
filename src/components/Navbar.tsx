import React, { useState } from 'react';
import { MessageSquare, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { OWNER_DETAILS } from '../data/initialData';

interface NavbarProps {
  onOpenUpload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenUpload }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#05070e]/85 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a 
          href="#hero" 
          className="text-xl md:text-2xl font-black tracking-tight text-white font-display whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span>MUHAMMAD NASIR</span>
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] group-hover:scale-125 transition-transform" />
        </a>

        {/* Zone 2: 4-5 Clean Nav Links (single-line, subtle underlines) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#work" className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0">
            Selected Work
          </a>
          <a href="#services" className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0">
            Services
          </a>
          <a href="#about" className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0">
            About Me
          </a>
          <a href="#skills" className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0">
            Skills
          </a>
          <a href="#contact" className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Clickable Socials */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* LinkedIn Clickable Link */}
          <a
            href={OWNER_DETAILS.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Muhammad Nasir on LinkedIn"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Email Clickable Link */}
          <a
            href={`mailto:${OWNER_DETAILS.email}`}
            title="Email Muhammad Nasir"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Primary CTA Button: WhatsApp Direct Conversation */}
          <a
            href={OWNER_DETAILS.whatsappPrefilledUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00f0ff] text-black font-bold text-xs tracking-wide hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] active:scale-95 whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-black" />
            <span>Hire on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={OWNER_DETAILS.whatsappPrefilledUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#00f0ff] text-black text-xs font-bold"
            title="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#080b15] px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00f0ff]"
            >
              Selected Work
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00f0ff]"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00f0ff]"
            >
              About Me
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00f0ff]"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00f0ff]"
            >
              Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={OWNER_DETAILS.whatsappPrefilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#00f0ff] text-black font-bold text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp (+92 337 3522755)</span>
            </a>
            
            <a
              href={OWNER_DETAILS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 text-slate-300 text-xs font-medium border border-white/10 hover:text-white"
            >
              <Linkedin className="w-4 h-4 text-[#00f0ff]" />
              <span>Connect on LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUpload();
              }}
              className="w-full py-2 text-xs text-slate-400 hover:text-[#00f0ff] text-center"
            >
              Update / Upload Profile Photo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

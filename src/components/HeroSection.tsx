import React from 'react';
import { ArrowRight, MessageCircle, Linkedin, Mail, MapPin, Sparkles, Download, CheckCircle } from 'lucide-react';
import { OWNER_DETAILS } from '../data/initialData';
import { ProfilePhotoCard } from './ProfilePhotoCard';

interface HeroSectionProps {
  photoUrl: string | null;
  onOpenUpload: () => void;
  onPhotoUploaded: (url: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  photoUrl,
  onOpenUpload,
  onPhotoUploaded,
}) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-[#0066ff]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Split Hero: Left Column Text, Right Column Prominent Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Typographic Hierarchy) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Title Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5" />
              <span>{OWNER_DETAILS.location}</span>
              <span className="text-white/30">·</span>
              <span className="text-slate-300">{OWNER_DETAILS.title}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08] font-display text-balance">
              Transforming Brands With <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00f0ff]">Bold Visuals</span> & Precision Design.
            </h1>

            {/* Sub-lead with Owner Introduction */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              I’m <strong className="text-white font-semibold">{OWNER_DETAILS.name}</strong>, a professional Graphic Designer crafting high-impact brand identities, packaging, typography, and high-converting marketing creatives that make businesses impossible to ignore.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* WhatsApp Direct Action */}
              <a
                href={OWNER_DETAILS.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00f0ff] text-black font-extrabold text-sm tracking-wide hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-black stroke-none" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View Projects Link */}
              <a
                href="#work"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d1322] text-white border border-white/10 hover:border-[#00f0ff]/50 hover:bg-[#12192c] text-sm font-semibold transition-all"
              >
                <span>Explore Works</span>
              </a>

              {/* LinkedIn Quick Action */}
              <a
                href={OWNER_DETAILS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 text-sm font-medium transition-all"
                title="Open Muhammad Nasir LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-[#00f0ff]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Contact Micro-Info Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <a 
                href={`mailto:${OWNER_DETAILS.email}`} 
                className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>{OWNER_DETAILS.email}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a 
                href={OWNER_DETAILS.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{OWNER_DETAILS.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Prominently displaying Muhammad Nasir's Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfilePhotoCard
              photoUrl={photoUrl}
              onUploadClick={onOpenUpload}
              onPhotoUploaded={onPhotoUploaded}
              variant="hero"
            />
          </div>

        </div>

        {/* 4-Column KPI Strip Full-Width Row below the Hero Split */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#00f0ff] font-display tabular-nums">
              {OWNER_DETAILS.experienceYears}
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Years Experience
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-display tabular-nums">
              {OWNER_DETAILS.projectsCompleted}
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Design Projects Completed
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#00f0ff] font-display tabular-nums">
              {OWNER_DETAILS.happyClients}
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Satisfied Clients
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl lg:text-4xl font-extrabold text-white font-display tabular-nums">
              {OWNER_DETAILS.onTimeDelivery}
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              On-Time Project Delivery
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

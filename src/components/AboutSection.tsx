import React from 'react';
import { MapPin, Mail, MessageCircle, Linkedin, CheckCircle, Award, Palette, Layers, Sparkles } from 'lucide-react';
import { OWNER_DETAILS, SKILLS_LIST } from '../data/initialData';
import { ProfilePhotoCard } from './ProfilePhotoCard';

interface AboutSectionProps {
  photoUrl: string | null;
  onOpenUpload: () => void;
  onPhotoUploaded: (url: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  photoUrl,
  onOpenUpload,
  onPhotoUploaded,
}) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#070a13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Grid: Left side Muhammad Nasir's Photo, Right side Bio & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Prominently displaying the SAME photograph with rounded corners */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px]">
              <ProfilePhotoCard
                photoUrl={photoUrl}
                onUploadClick={onOpenUpload}
                onPhotoUploaded={onPhotoUploaded}
                variant="about"
              />

              {/* Quick credential card under photo */}
              <div className="mt-6 p-4 rounded-2xl bg-[#0b0f1b] border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-white font-medium">Headquarters</span>
                  <span className="text-[#00f0ff]">{OWNER_DETAILS.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-white font-medium">Focus</span>
                  <span className="text-slate-300">Identity · Print · Social Ads</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-white font-medium">Languages</span>
                  <span className="text-slate-300">English · Urdu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Experience */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-semibold">
              About The Designer
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight text-balance">
              Driven by Aesthetics, Grounded in Strategy.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I am <strong className="text-white font-semibold">{OWNER_DETAILS.name}</strong>, a Graphic Designer based in <strong className="text-white font-semibold">{OWNER_DETAILS.location}</strong>. Over the last five years, I have worked with entrepreneurs, consumer brands, retail ventures, and digital agencies to deliver memorable graphic design and cohesive visual brand systems.
              </p>
              <p>
                Whether developing a complete corporate identity from scratch, engineering eye-catching retail packaging that commands shelf space, or designing viral social media ad campaigns, my mission is always the same: <span className="text-[#00f0ff] font-medium">elevate the perception of your brand through world-class visual execution.</span>
              </p>
            </div>

            {/* Design Philosophy Quote */}
            <div className="p-5 rounded-2xl bg-[#0c1222] border border-[#00f0ff]/20 relative">
              <div className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-1">
                Design Philosophy
              </div>
              <p className="text-sm text-slate-200 italic font-serif leading-relaxed">
                "{OWNER_DETAILS.philosophy}"
              </p>
              <div className="text-xs text-slate-400 mt-2 font-mono">
                — {OWNER_DETAILS.name}, {OWNER_DETAILS.title}
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <Palette className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Visual Impact</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Striking contrast and balanced typography</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <Layers className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Pixel Precision</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">CMYK pre-press & vector perfection</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Client Success</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Clear communication and fast revisions</p>
                </div>
              </div>
            </div>

            {/* Interactive Connect Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={OWNER_DETAILS.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00f0ff] text-black font-bold text-xs hover:bg-white transition-all shadow-lg shadow-[#00f0ff]/20"
              >
                <MessageCircle className="w-4 h-4 fill-black stroke-none" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={OWNER_DETAILS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 text-xs font-medium transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#00f0ff]" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${OWNER_DETAILS.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 text-xs font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-[#00f0ff]" />
                <span>Email Nasir</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

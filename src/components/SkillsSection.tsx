import React from 'react';
import { SKILLS_LIST } from '../data/initialData';
import { Cpu, PenTool, Layout, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#060912] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-semibold">
              Technical Competence
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Industry Standard Tooling & Production Craft.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Great creative concepts require rigorous technical execution. From flawless vector bezier paths in Illustrator to color-calibrated CMYK pre-press proofs for commercial offset printing, every file is engineered to the highest production standard.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                <span>100% Vector Source Files (AI, SVG, EPS, PDF)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                <span>Commercial Print Dielines & Bleed Tolerances</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                <span>Optimized Digital Formats for Web, Meta Ads & Mobile</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS_LIST.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0b0f1c] border border-white/5 hover:border-[#00f0ff]/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#00f0ff] tabular-nums">
                      {skill.level}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2.5">{skill.category}</div>
                  
                  {/* Progress Bar with electric blue gradient */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0066ff] to-[#00f0ff] rounded-full transition-all duration-1000"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

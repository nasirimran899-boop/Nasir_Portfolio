import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'Brand Identity Systems',
    'Logo Design & Monograms',
    'Social Media Ad Creatives',
    'Packaging & Label Design',
    'Typographical Posters',
    'Marketing Collateral',
    'Vector Illustration',
    'Print Pre-Press & Bleed Setup',
    'Figma & UI Graphics',
  ];

  return (
    <div className="w-full bg-[#090d18] border-y border-[#00f0ff]/20 py-4 overflow-hidden relative select-none">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05070e] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05070e] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-300">
            <span className="text-[#00f0ff] font-mono text-base">✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/initialData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#05070e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-semibold mb-2">
            Client Feedback
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Trusted by Brands Across Karachi & Worldwide.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-[#0a0e1a] border border-white/10 hover:border-[#00f0ff]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#00f0ff] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00f0ff]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-[#00f0ff]">{t.role}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

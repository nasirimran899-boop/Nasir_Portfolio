import React from 'react';
import { ArrowUpRight, MessageCircle, Check, Sparkles } from 'lucide-react';
import { SERVICES, OWNER_DETAILS } from '../data/initialData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-semibold mb-2">
            Design Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            Services Built to Scale Your Brand.
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
            Every engagement delivers production-grade vector masters, exact print specifications, and high-resolution assets ready for immediate launch.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            const whatsappLink = `https://wa.me/923373522755?text=${encodeURIComponent(service.whatsappMessage)}`;

            return (
              <div
                key={service.id}
                className="group relative bg-[#0b0f1a] border border-white/10 hover:border-[#00f0ff]/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Service Number & Tools */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-white/5">
                    <span className="text-[#00f0ff] font-bold">0{idx + 1}.</span>
                    <span className="text-slate-400">{service.tools.join(' · ')}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors font-display tracking-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Deliverables Included:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Custom quotes available</span>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#00f0ff] hover:text-black text-slate-200 text-xs font-bold transition-all border border-white/10 hover:border-[#00f0ff]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

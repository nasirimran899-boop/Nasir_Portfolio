import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { OWNER_DETAILS } from '../data/initialData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative mb-1 hidden sm:flex items-center gap-3 bg-[#0d1322] border border-[#00f0ff]/30 text-white px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
          <div className="text-xs">
            <p className="font-semibold text-white">Chat with {OWNER_DETAILS.name}</p>
            <p className="text-[11px] text-slate-400">Direct WhatsApp: +92 337 3522755</p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-500 hover:text-slate-300 p-0.5 rounded-full"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow indicator */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0d1322] border-b border-r border-[#00f0ff]/30 rotate-45" />
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={OWNER_DETAILS.whatsappPrefilledUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp conversation with Muhammad Nasir"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_30px_rgba(0,240,255,0.7)] hover:bg-[#20ba5a] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#00f0ff]/40"
      >
        {/* Ambient Ring Wave */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />

        {/* Small Active Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#00f0ff] border-2 border-[#05070e]" />
      </a>
    </aside>
  );
};

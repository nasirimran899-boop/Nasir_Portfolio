import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Calendar, User, Wrench, MessageCircle, ArrowRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Project } from '../types';
import { OWNER_DETAILS } from '../data/initialData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onEditClick: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onEditClick
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const whatsappInquireUrl = `https://wa.me/923373522755?text=Hi%20Muhammad%20Nasir%2C%20I%20saw%20your%20uploaded%20project%20"${encodeURIComponent(project.title)}"%20on%20your%20portfolio%20and%20would%20love%20to%20order%20a%20design%20like%20this.`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-[#0c111e] border border-[#00f0ff]/30 rounded-3xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c16] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-xs text-slate-400 font-mono">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Full Quality</span>
            </a>

            <button
              type="button"
              onClick={() => onEditClick(project)}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#00f0ff]/10 text-slate-300 hover:text-[#00f0ff] text-xs font-medium border border-white/10 transition-colors"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Resolution Media Frame with Quality Controls */}
        <div className="relative w-full bg-[#04060c] border-b border-white/5 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[650px] p-2 sm:p-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className={`w-auto h-auto max-h-[600px] max-w-full object-contain rounded-lg transition-transform duration-300 ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Quick Zoom floating button */}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-4 right-4 p-2 rounded-xl bg-black/75 backdrop-blur-md text-white hover:text-[#00f0ff] border border-white/20 text-xs flex items-center gap-1.5 shadow-lg"
            title={isZoomed ? 'Zoom out' : 'Zoom in'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            <span className="hidden sm:inline">{isZoomed ? 'Actual Scale' : 'Zoom'}</span>
          </button>
        </div>

        {/* Project Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display mb-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#070a13] border border-white/5">
            <div>
              <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>Client / Brand</span>
              </div>
              <div className="text-sm font-semibold text-white">{project.client}</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>Production Year</span>
              </div>
              <div className="text-sm font-semibold text-white">{project.year}</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>Tools Used</span>
              </div>
              <div className="text-xs font-mono text-slate-300">
                {project.toolsUsed.join(' · ')}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium mr-1">Design Tags:</span>
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-lg border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00f0ff] mb-2 font-mono">
                Delivered Production Assets:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer CTA Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Designed by <strong className="text-white">{OWNER_DETAILS.name}</strong> · {OWNER_DETAILS.location}
            </div>

            <a
              href={whatsappInquireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00f0ff] text-black font-extrabold text-xs hover:bg-white transition-all shadow-lg shadow-[#00f0ff]/25 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black stroke-none" />
              <span>Discuss Similar Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

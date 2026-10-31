import React, { useRef } from 'react';
import { Camera, Upload, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { OWNER_DETAILS } from '../data/initialData';

interface ProfilePhotoCardProps {
  photoUrl: string | null;
  onUploadClick: () => void;
  onPhotoUploaded: (url: string) => void;
  variant?: 'hero' | 'about';
}

export const ProfilePhotoCard: React.FC<ProfilePhotoCardProps> = ({
  photoUrl,
  onUploadClick,
  onPhotoUploaded,
  variant = 'hero'
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onPhotoUploaded(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const isHero = variant === 'hero';

  return (
    <div className="relative group w-full max-w-[480px] mx-auto">
      {/* Hidden file input for fast 1-click photo update */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Decorative ambient electric glow behind the photo */}
      <div 
        className="absolute -inset-1.5 bg-gradient-to-r from-[#00f0ff] via-[#0066ff] to-[#00f0ff] rounded-[2rem] opacity-30 group-hover:opacity-75 blur-xl transition-all duration-700 animate-pulse pointer-events-none" 
        style={{ animationDuration: '6s' }}
      />

      {/* Photo Frame Container with rounded corners and electric border */}
      <div className="relative bg-[#0b0f19] border border-[#00f0ff]/30 rounded-[1.8rem] overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-[#00f0ff]/70">
        
        {/* Top bar inside photo frame */}
        <div className="px-5 py-3 border-b border-white/5 bg-[#0e1424]/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] inline-block animate-pulse" />
            <span className="text-slate-300 font-semibold uppercase tracking-wider">{OWNER_DETAILS.name}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#00f0ff] font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>Karachi, PK</span>
          </div>
        </div>

        {/* Image Display Area */}
        <div className={`relative ${isHero ? 'aspect-[4/5]' : 'aspect-square'} w-full overflow-hidden bg-[#070a13] flex items-center justify-center`}>
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Muhammad Nasir - Graphic Designer"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            /* Elegant Designer Monogram & Portrait Canvas if photo not yet selected */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#0c1222] via-[#090d19] to-[#05070e]">
              <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
              
              {/* Graphic Designer Monogram Mark */}
              <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#00f0ff]/20 to-[#0066ff]/10 border-2 border-[#00f0ff]/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)] mb-5">
                <span className="text-4xl font-extrabold font-display tracking-tight text-white">
                  M<span className="text-[#00f0ff]">N</span>
                </span>
                <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-[#00f0ff] text-black text-[10px] font-bold uppercase tracking-wider">
                  Designer
                </span>
              </div>

              <div className="relative z-10 max-w-[280px]">
                <h4 className="text-lg font-bold text-white mb-1">{OWNER_DETAILS.name}</h4>
                <p className="text-xs text-[#00f0ff] font-medium mb-3">{OWNER_DETAILS.title} · Karachi, Pakistan</p>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  Your uploaded photograph is prominently presented here & in About Me.
                </p>

                <button
                  type="button"
                  onClick={onUploadClick}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00f0ff] text-black font-semibold text-xs tracking-wide hover:bg-white transition-all shadow-lg shadow-[#00f0ff]/25 active:scale-95"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Your Photo (PNG/JPG)</span>
                </button>
              </div>
            </div>
          )}

          {/* Floating Change Photo overlay action */}
          <div className="absolute top-3 right-3 z-20">
            <button
              type="button"
              onClick={onUploadClick}
              title="Upload / Replace Photo"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white border border-[#00f0ff]/40 hover:border-[#00f0ff] hover:bg-[#00f0ff] hover:text-black text-xs font-medium transition-all shadow-lg active:scale-95"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{photoUrl ? 'Change Photo' : 'Upload Photo'}</span>
            </button>
          </div>

          {/* Subtle gradient vignette at bottom of photo */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/70 to-transparent pointer-events-none" />

          {/* Floating badge inside photo */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-slate-200 font-medium text-xs">Available for Projects</span>
            </div>
            <span className="text-[11px] font-mono text-[#00f0ff]">5+ Yrs Exp</span>
          </div>
        </div>

        {/* Footer strip of photo card */}
        <div className="p-4 bg-[#090d17] border-t border-white/5 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-white tracking-wide">{OWNER_DETAILS.name}</div>
            <div className="text-xs text-[#00f0ff]">{OWNER_DETAILS.title} · Karachi</div>
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-xs text-slate-400 hover:text-[#00f0ff] transition-colors underline underline-offset-4"
          >
            Select from device
          </button>
        </div>
      </div>
    </div>
  );
};

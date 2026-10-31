import React, { useState, useRef } from 'react';
import { X, Upload, Link as LinkIcon, Image as ImageIcon, Check, RefreshCw } from 'lucide-react';
import { OWNER_DETAILS } from '../data/initialData';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onSavePhoto: (photoData: string | null) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentPhoto);
  const [urlInput, setUrlInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file (PNG, JPG, WEBP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setError('Please provide a valid image URL');
      return;
    }
    setError(null);
    setPreviewUrl(urlInput.trim());
  };

  const handleSave = () => {
    onSavePhoto(previewUrl);
    onClose();
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    onSavePhoto(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0c101d] border border-[#00f0ff]/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080b15]">
          <div>
            <h3 className="text-lg font-bold text-white font-display">Update Profile Photograph</h3>
            <p className="text-xs text-slate-400">Updates photo in both Hero and About Me sections</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 p-1 bg-[#121727] rounded-xl border border-white/5">
            <button
              type="button"
              onClick={() => setActiveTab('upload')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'upload'
                  ? 'bg-[#00f0ff] text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>Upload from Device</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('url')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'url'
                  ? 'bg-[#00f0ff] text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LinkIcon className="w-4 h-4" />
              <span>Image URL Link</span>
            </button>
          </div>

          {/* Active Tab Form */}
          {activeTab === 'upload' ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-[#00f0ff]/40 hover:border-[#00f0ff] bg-[#070a13] rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-[#00f0ff]/5 group"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <div className="w-14 h-14 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Click to browse your photo</p>
              <p className="text-xs text-slate-400 text-center">Supports PNG, JPG, JPEG, WEBP</p>
            </div>
          ) : (
            <div className="space-y-3">
              <label className="text-xs font-medium text-slate-300">Paste image URL (LinkedIn, Google Drive, or Web):</label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 bg-[#080b15] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00f0ff]"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#00f0ff] hover:text-black text-xs font-semibold text-white transition-all"
                >
                  Apply
                </button>
              </div>
            </div>
          )}

          {error && (
            <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          {/* Live Preview */}
          <div className="pt-2 border-t border-white/10">
            <div className="text-xs font-semibold text-slate-400 mb-2">Live Preview:</div>
            <div className="flex items-center gap-4 p-3 bg-[#080b15] rounded-xl border border-white/5">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#151c30] border border-[#00f0ff]/40 flex-shrink-0 flex items-center justify-center">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageIcon className="w-8 h-8 text-slate-500" />
                )}
              </div>
              <div className="text-xs space-y-1">
                <div className="font-bold text-white">{OWNER_DETAILS.name}</div>
                <div className="text-[#00f0ff]">{OWNER_DETAILS.title}</div>
                <div className="text-slate-400">
                  {previewUrl ? 'Photo loaded successfully' : 'No custom photo selected yet'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#080b15]">
          {currentPhoto ? (
            <button
              type="button"
              onClick={handleRemove}
              className="text-xs text-rose-400 hover:text-rose-300 font-medium"
            >
              Reset to Monogram
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#00f0ff] text-black text-xs font-bold hover:bg-white transition-all shadow-lg shadow-[#00f0ff]/20 active:scale-95"
            >
              <Check className="w-4 h-4" />
              <span>Apply Photo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

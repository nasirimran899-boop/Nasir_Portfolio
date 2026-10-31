import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Link as LinkIcon, Image as ImageIcon, Check, Trash2 } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  onDelete?: (id: string) => void;
  initialProject?: Project | null;
}

import { CATEGORIES_LIST } from '../data/initialData';

const CATEGORIES: ProjectCategory[] = [...CATEGORIES_LIST];

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  initialProject
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('3D Logo Designs');
  const [client, setClient] = useState('');
  const [year, setYear] = useState('2026');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [toolsInput, setToolsInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialProject) {
      setTitle(initialProject.title);
      setCategory(initialProject.category);
      setClient(initialProject.client);
      setYear(initialProject.year);
      setImageUrl(initialProject.imageUrl);
      setDescription(initialProject.description);
      setTagsInput(initialProject.tags.join(', '));
      setToolsInput(initialProject.toolsUsed.join(', '));
    } else {
      setTitle('');
      setCategory('3D Logo Designs');
      setClient('');
      setYear(new Date().getFullYear().toString());
      setImageUrl('');
      setDescription('');
      setTagsInput('Logo Design, 3D Mockup, Graphic Design');
      setToolsInput('Adobe Illustrator, Photoshop');
    }
    setError(null);
  }, [initialProject, isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please choose a valid image file');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Project title is required');
      return;
    }
    if (!imageUrl.trim()) {
      setError('Please upload an image or provide an image URL');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const toolsUsed = toolsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const updatedProject: Project = {
      id: initialProject ? initialProject.id : `proj-${Date.now()}`,
      title: title.trim(),
      category,
      client: client.trim() || 'Client Project',
      year: year.trim() || new Date().getFullYear().toString(),
      imageUrl: imageUrl.trim(),
      description: description.trim() || 'Custom graphic design project designed by Muhammad Nasir.',
      tags: tags.length > 0 ? tags : ['Graphic Design', category],
      toolsUsed: toolsUsed.length > 0 ? toolsUsed : ['Adobe Illustrator', 'Photoshop'],
      featured: initialProject ? initialProject.featured : false
    };

    onSave(updatedProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0c111e] border border-[#00f0ff]/30 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c16] border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              {initialProject ? 'Edit Graphic Design Work' : 'Add New Graphic Design Work'}
            </h3>
            <p className="text-xs text-slate-400">Upload your own design samples to your portfolio</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
              {error}
            </div>
          )}

          {/* Project Title */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Project Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Minimalist Brand Identity"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
            />
          </div>

          {/* Category & Year */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#0c111e] text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Client / Brand</label>
              <input
                type="text"
                placeholder="e.g. Aura Cosmetics / Personal Project"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Image Upload / URL */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Project Graphic / Artwork *</label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center gap-2 p-3 bg-[#070a13] hover:bg-[#00f0ff]/10 border border-dashed border-[#00f0ff]/40 hover:border-[#00f0ff] rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-all"
              >
                <Upload className="w-4 h-4 text-[#00f0ff]" />
                <span>Upload from Device (PNG/JPG)</span>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />

              <div className="relative">
                <input
                  type="url"
                  placeholder="Or paste image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl pl-8 pr-4 py-2.5 text-xs text-white focus:outline-none"
                />
                <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* Preview image */}
            {imageUrl && (
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#05070e] border border-white/10 flex items-center justify-center mt-2">
                <img
                  src={imageUrl}
                  alt="Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setImageUrl('')}
                  className="absolute top-2 right-2 p-1 bg-black/75 rounded-lg text-rose-400 hover:text-rose-300 text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Project Summary / Story</label>
            <textarea
              rows={3}
              placeholder="Explain the design rationale, goals, and results..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none resize-none"
            />
          </div>

          {/* Tools & Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Tools Used (comma separated)</label>
              <input
                type="text"
                placeholder="Adobe Illustrator, Photoshop, Figma"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
                className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Keywords/Tags (comma separated)</label>
              <input
                type="text"
                placeholder="Branding, Minimalist, Logo, Packaging"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full bg-[#070a13] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            {initialProject && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  onDelete(initialProject.id);
                  onClose();
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-rose-400 hover:bg-rose-500/10 text-xs font-medium transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Project</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#00f0ff] text-black text-xs font-bold hover:bg-white transition-all shadow-lg shadow-[#00f0ff]/20 active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>{initialProject ? 'Save Changes' : 'Publish Project'}</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

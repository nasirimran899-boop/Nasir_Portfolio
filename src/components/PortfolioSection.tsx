import React, { useState } from 'react';
import { Plus, Search, Sparkles, Edit3, ArrowUpRight, Image as ImageIcon, Eye, Layers } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { CATEGORIES_LIST } from '../data/initialData';

interface PortfolioSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenAddModal: () => void;
  onEditProject: (project: Project) => void;
  onResetProjects: () => void;
}

const CATEGORIES: ('All Projects' | ProjectCategory)[] = [
  'All Projects',
  ...CATEGORIES_LIST
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  onSelectProject,
  onOpenAddModal,
  onEditProject,
  onResetProjects
}) => {
  const [activeCategory, setActiveCategory] = useState<'All Projects' | ProjectCategory>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');

  // Count items per category
  const getCategoryCount = (cat: 'All Projects' | ProjectCategory) => {
    if (cat === 'All Projects') return projects.length;
    return projects.filter(p => p.category === cat).length;
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All Projects' || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Original Works Gallery ({projects.length} Uploaded Designs)</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight text-balance">
              Graphic Design Portfolio & Selected Works
            </h2>
            <p className="text-sm md:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Explore authentic graphic design projects by <strong className="text-white">Muhammad Nasir</strong> across branding, 3D emblems, luxury wedding stationery, and advertising.
            </p>
          </div>

          {/* Action to Add New Project */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenAddModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00f0ff] text-black font-extrabold text-xs tracking-wide hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)] active:scale-95 whitespace-nowrap"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add Your Project</span>
            </button>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col gap-4 p-3 bg-[#0a0e1a] border border-white/10 rounded-2xl mb-10 shadow-xl">
          
          {/* Functional Category Filter Segmented Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-[#00f0ff] text-black shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive ? 'bg-black/20 text-black font-bold' : 'text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Active Count indicator */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-white/5">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by title, client, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#060911] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-[#00f0ff]"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Showing <span className="text-[#00f0ff] font-bold">{filteredProjects.length}</span> of {projects.length} original projects
            </div>
          </div>

        </div>

        {/* Gallery Grid */}
        {filteredProjects.length === 0 ? (
          /* Empty State for category with no uploaded images */
          <div className="text-center py-20 bg-[#080c16] rounded-3xl border border-white/5 p-8 max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <ImageIcon className="w-6 h-6 text-[#00f0ff]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-display">
              No Uploaded Projects in "{activeCategory}"
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              As per instructions, this category is left empty rather than displaying fake replacement designs. You can upload your own design samples anytime.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => { setActiveCategory('All Projects'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
              >
                View All Uploaded Works
              </button>
              <button
                type="button"
                onClick={onOpenAddModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00f0ff] text-black text-xs font-bold hover:bg-white transition-all shadow-lg shadow-[#00f0ff]/20"
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>Upload Sample to {activeCategory}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              // Custom responsive aspect ratio matching domain
              const isWideBanner = project.category === 'Facebook Banners' || project.category === 'YouTube Thumbnails';
              const isVerticalPost = project.category === 'Social Media Posts' && (project.imageUrl.includes('Screenshot_20260809_011722') || project.imageUrl.includes('Screenshot_20260809_011725'));
              
              let aspectClass = 'aspect-[4/3]';
              if (isWideBanner) {
                aspectClass = 'aspect-[16/9] md:aspect-[21/9] md:col-span-2 lg:col-span-3';
              } else if (isVerticalPost) {
                aspectClass = 'aspect-[3/4] sm:aspect-[4/5]';
              } else if (project.category === '3D Logo Designs' && (idx % 4 === 0)) {
                aspectClass = 'aspect-square md:aspect-[4/3]';
              }

              return (
                <div
                  key={project.id}
                  className={`group relative bg-[#0a0e19] border border-white/10 hover:border-[#00f0ff]/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] ${
                    isWideBanner ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  {/* Media Container with Full Quality Image */}
                  <div 
                    className={`relative w-full ${aspectClass} overflow-hidden bg-[#05070e] cursor-pointer flex items-center justify-center`}
                    onClick={() => onSelectProject(project)}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Scrim for readable hover state */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e19] via-transparent to-transparent opacity-70" />

                    {/* Top Right Quick Edit Button */}
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditProject(project);
                        }}
                        title="Edit project details"
                        className="p-2 rounded-xl bg-black/75 backdrop-blur-md text-white hover:text-[#00f0ff] hover:bg-black text-xs border border-white/20 transition-all shadow-md"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Hover Explore Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/45 backdrop-blur-xs">
                      <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00f0ff] text-black text-xs font-extrabold shadow-xl transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span>View Full Size Image</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Zero-Pill Unboxed Metadata */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Unboxed Metadata with Typographic Separator (NO PILLS) */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-2">
                        <span>{project.category}</span>
                        <span className="text-white/30" aria-hidden="true">·</span>
                        <span className="text-slate-400">{project.year}</span>
                        <span className="text-white/30" aria-hidden="true">·</span>
                        <span className="text-slate-400 truncate max-w-[120px]">{project.client}</span>
                      </div>

                      {/* Project Title */}
                      <h3 
                        onClick={() => onSelectProject(project)}
                        className="text-base sm:text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors cursor-pointer font-display tracking-tight"
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tools Strip */}
                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                      <div className="truncate pr-2 font-mono">
                        {project.toolsUsed.join(' / ')}
                      </div>
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="text-[#00f0ff] hover:underline font-semibold shrink-0"
                      >
                        Full Preview →
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Reset Option if customized */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onResetProjects}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-4"
          >
            Reset gallery to Muhammad Nasir's 21 original uploaded projects
          </button>
        </div>

      </div>
    </section>
  );
};

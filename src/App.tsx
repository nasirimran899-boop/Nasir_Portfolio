import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { INITIAL_PROJECTS, OWNER_DETAILS } from './data/initialData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { ProjectModal } from './components/ProjectModal';
import { AddProjectModal } from './components/AddProjectModal';

const STORAGE_KEY_PHOTO = 'muhammad_nasir_profile_photo';
const STORAGE_KEY_PROJECTS = 'muhammad_nasir_uploaded_portfolio_v3';

export default function App() {
  // Profile Photo state backed by localStorage
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_PHOTO);
    } catch {
      return null;
    }
  });

  // Projects state backed by localStorage, defaulting to Muhammad Nasir's 21 uploaded projects
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROJECTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].id?.startsWith('upload-')) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved projects', e);
    }
    return INITIAL_PROJECTS;
  });

  // Modals state
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Sync photo changes to localStorage
  const handlePhotoUploaded = (newPhoto: string | null) => {
    setPhotoUrl(newPhoto);
    try {
      if (newPhoto) {
        localStorage.setItem(STORAGE_KEY_PHOTO, newPhoto);
      } else {
        localStorage.removeItem(STORAGE_KEY_PHOTO);
      }
    } catch (e) {
      console.warn('Failed to save photo to localStorage', e);
    }
  };

  // Sync project updates to localStorage
  const handleSaveProject = (savedProject: Project) => {
    setProjects((prev) => {
      const exists = prev.some((p) => p.id === savedProject.id);
      let updated: Project[];
      if (exists) {
        updated = prev.map((p) => (p.id === savedProject.id ? savedProject : p));
      } else {
        updated = [savedProject, ...prev];
      }
      try {
        localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save projects to localStorage', e);
      }
      return updated;
    });
  };

  // Delete project
  const handleDeleteProject = (id: string) => {
    setProjects((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      try {
        localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save projects to localStorage', e);
      }
      return updated;
    });
  };

  // Reset to default sample works
  const handleResetProjects = () => {
    if (window.confirm('Reset gallery to initial sample design projects?')) {
      setProjects(INITIAL_PROJECTS);
      try {
        localStorage.removeItem(STORAGE_KEY_PROJECTS);
      } catch (e) {
        console.warn('Failed to reset projects in localStorage', e);
      }
    }
  };

  const handleOpenEdit = (project: Project) => {
    setSelectedProject(null);
    setEditingProject(project);
    setIsAddModalOpen(true);
  };

  const handleOpenAdd = () => {
    setEditingProject(null);
    setIsAddModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col font-sans selection:bg-[#00f0ff] selection:text-black">
      
      {/* Navigation Bar */}
      <Navbar onOpenUpload={() => setIsPhotoModalOpen(true)} />

      {/* Hero Section with Prominent Right-Side Photo */}
      <HeroSection
        photoUrl={photoUrl}
        onOpenUpload={() => setIsPhotoModalOpen(true)}
        onPhotoUploaded={handlePhotoUploaded}
      />

      {/* Animated Marquee Strip */}
      <MarqueeBanner />

      {/* Editable Portfolio Gallery */}
      <PortfolioSection
        projects={projects}
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenAddModal={handleOpenAdd}
        onEditProject={handleOpenEdit}
        onResetProjects={handleResetProjects}
      />

      {/* Services Section */}
      <ServicesSection />

      {/* About Me Section with Same Photo */}
      <AboutSection
        photoUrl={photoUrl}
        onOpenUpload={() => setIsPhotoModalOpen(true)}
        onPhotoUploaded={handlePhotoUploaded}
      />

      {/* Technical Skills & Software Craft */}
      <SkillsSection />

      {/* Testimonials & Proof */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Photo Upload Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={photoUrl}
        onSavePhoto={handlePhotoUploaded}
      />

      {/* Project Lightbox & Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEditClick={handleOpenEdit}
      />

      {/* Add / Edit Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
        onDelete={handleDeleteProject}
        initialProject={editingProject}
      />

    </div>
  );
}

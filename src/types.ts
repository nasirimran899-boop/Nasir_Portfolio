export type ProjectCategory = 
  | 'Business Cards'
  | 'Wedding Invitations'
  | 'Birthday & Party Invitations'
  | 'Logo Designs'
  | '3D Logo Designs'
  | 'Vector Art'
  | 'YouTube Thumbnails'
  | 'Facebook Banners'
  | 'Social Media Posts';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  imageUrl: string;
  description: string;
  tags: string[];
  toolsUsed: string[];
  deliverables?: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  tools: string[];
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  project: string;
  avatar?: string;
}

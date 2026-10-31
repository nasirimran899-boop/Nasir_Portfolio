import { Project, Service, Testimonial } from '../types';

export const OWNER_DETAILS = {
  name: 'Muhammad Nasir',
  title: 'Graphic Designer',
  subtitle: 'Brand Identity & Visual Design Specialist',
  location: 'Karachi, Pakistan',
  email: 'nasirimran899@gmail.com',
  phone: '+92 337 3522755',
  whatsappUrl: 'https://wa.me/923373522755',
  whatsappPrefilledUrl: 'https://wa.me/923373522755?text=Hi%20Muhammad%20Nasir%2C%20I%20saw%20your%20uploaded%20graphic%20design%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.',
  linkedinUrl: 'https://www.linkedin.com/in/muhammad-nasir-932185383/',
  experienceYears: '5+',
  projectsCompleted: '180+',
  happyClients: '45+',
  onTimeDelivery: '100%',
  bio: 'Muhammad Nasir is a Karachi-based Graphic Designer with a passionate focus on crafting bold visual identities, high-converting social media creatives, bespoke packaging, and impactful typography. Blending razor-sharp aesthetics with strategic visual storytelling, he helps brands stand out in saturated markets.',
  philosophy: 'Good design is not just what looks impressive on screen—it is visual problem solving that evokes emotion, communicates clarity, and drives business results.'
};

export const CATEGORIES_LIST = [
  'Business Cards',
  'Wedding Invitations',
  'Birthday & Party Invitations',
  'Logo Designs',
  '3D Logo Designs',
  'Vector Art',
  'YouTube Thumbnails',
  'Facebook Banners',
  'Social Media Posts'
] as const;

// All 21 authentic uploaded images from Muhammad Nasir
export const INITIAL_PROJECTS: Project[] = [
  // --- 3D Logo Designs ---
  {
    id: 'upload-3d-1',
    title: 'Aura Creative Studio - 3D Glass Badge',
    category: '3D Logo Designs',
    client: 'Aura Creative Studio',
    year: '2026',
    imageUrl: '/assets/aistudio/1793439233308_1e94a799.jpg',
    description: 'Bespoke round acrylic glass monogram badge with fluid gradient core, crisp black typographic engraving, and clean studio lighting.',
    tags: ['3D Logo', 'Glassmorphism', 'Branding', 'Acrylic Badge'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop', '3D Mockup Studio'],
    deliverables: ['3D Master Renders', 'Vector Source Files', 'Transparent PNGs'],
    featured: true
  },
  {
    id: 'upload-3d-2',
    title: 'Pulse Digital Media - Illuminated Wall Sign',
    category: '3D Logo Designs',
    client: 'Pulse Digital Media',
    year: '2026',
    imageUrl: '/assets/aistudio/1793439227705_8394988d.jpg',
    description: 'Brushed dark steel dimensional signage with electric cyan and lime green backlit neon waveform monogram P.',
    tags: ['3D Signage', 'Backlit Logo', 'Electric Cyan', 'Corporate Identity'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Architectural Signage Proof', 'Dieline Blueprint', 'Vector Assets'],
    featured: true
  },
  {
    id: 'upload-3d-3',
    title: 'Heritage Estate Agents - Royal Shield Crest',
    category: '3D Logo Designs',
    client: 'Heritage Estate Agents',
    year: '2025',
    imageUrl: '/assets/aistudio/1793439238949_1a16e80a.jpg',
    description: '3D sculpted antique gold crest featuring heraldic shield, fortified castle battlement, crown, and luxury leather texture.',
    tags: ['Embossed Crest', 'Gold Foil', 'Real Estate', 'Heraldic Emblem'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop', 'Dimension'],
    deliverables: ['3D Metallic Emblem', 'Vector Logo Mark', 'Stationery Specs'],
    featured: false
  },
  {
    id: 'upload-3d-4',
    title: 'Oakwood Property Group - Carved Wood Badge',
    category: '3D Logo Designs',
    client: 'Oakwood Property Group',
    year: '2025',
    imageUrl: '/assets/aistudio/1793439244504_84fd9cae.jpg',
    description: 'Dimensional architectural oak leaf and residential contour badge crafted in deep walnut wood and brushed copper trim.',
    tags: ['3D Wood Finish', 'Copper Trim', 'Property Branding', 'Architectural Mark'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Carved Wood Render', 'Signage Production File', 'Vector Pack'],
    featured: false
  },
  {
    id: 'upload-3d-5',
    title: 'Prestige Homes Realty - Brass Key Plaque',
    category: '3D Logo Designs',
    client: 'Prestige Homes Realty',
    year: '2025',
    imageUrl: '/assets/aistudio/1793439250803_e18c7a69.jpg',
    description: 'Cast bronze plaque mockup with raised brass roofline, antique key symbol, and refined serif typography.',
    tags: ['Bronze Plaque', 'Realty Branding', '3D Emboss', 'Key Symbol'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Brass Plaque Mockup', 'High-Res Print Masters', 'Monogram Vector'],
    featured: false
  },
  {
    id: 'upload-3d-6',
    title: 'Apex Strategic Branding - 3D Corporate Suite',
    category: '3D Logo Designs',
    client: 'Apex Strategic Branding',
    year: '2026',
    imageUrl: '/assets/aistudio/1793439222092_cc0052b1.jpg',
    description: 'Hero 3D illuminated arrow monogram with dark brushed metal finish and multi-panel production showcase.',
    tags: ['Corporate Solutions', '3D Lettering', 'Multi-Panel Mockup', 'Branding'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Full Brand Guidelines', 'Signage Kit', '3D Panel Series'],
    featured: true
  },

  // --- Logo Designs ---
  {
    id: 'upload-logo-1',
    title: 'Infinity Technology - Electric Gradient Mark',
    category: 'Logo Designs',
    client: 'Infinity Technology',
    year: '2026',
    imageUrl: '/assets/aistudio/Screenshot_20260809_011702_WhatsAppBusiness_9b0a4f41.jpg',
    description: 'Dynamic 3D-styled continuous ribbon infinity symbol with luminous magenta and blue gradients paired with bold slab serif typography.',
    tags: ['Tech Logo', 'Gradient Loop', 'Infinity', 'Dark Mode'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Vector AI/EPS', 'High-Res Transparent PNG', 'Dark & Light Variants'],
    featured: false
  },
  {
    id: 'upload-logo-2',
    title: 'Happy Bunny Tunes - Kids Music & Media Brand',
    category: 'Logo Designs',
    client: 'Happy Bunny Tunes',
    year: '2025',
    imageUrl: '/assets/aistudio/Screenshot_20260809_012031_WhatsApp_71e234d2.jpg',
    description: 'Vibrant circular badge logo featuring a cute cartoon rabbit in headphones, colorful musical notes, bubble typography, and gold ribbon banner.',
    tags: ['Cartoon Logo', 'Kids Channel', 'Mascot Design', 'Character Art'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Circular Vector Logo', 'Social Avatar Assets', 'Sticker Die-cut Vector'],
    featured: false
  },

  // --- Vector Art ---
  {
    id: 'upload-vector-1',
    title: 'The Smart Shelf - Clean Vector Retail Identity',
    category: 'Vector Art',
    client: 'The Smart Shelf Store',
    year: '2026',
    imageUrl: '/assets/aistudio/file_00000000dc3c81fa962475a4dd6d41d4_f8e67716.png',
    description: 'Flat vector logo illustration combining a supermarket trolley cart with tiered household electronics and cookware icons.',
    tags: ['Vector Illustration', 'E-Commerce', 'Clean Flat Design', 'Iconography'],
    toolsUsed: ['Adobe Illustrator'],
    deliverables: ['Scalable SVG Vector', 'Color Swatches', 'Horizontal & Vertical Lockups'],
    featured: false
  },
  {
    id: 'upload-vector-2',
    title: 'Jumbi Tunes - 3D Character Ensemble Badge',
    category: 'Vector Art',
    client: 'Jumbi Tunes Media',
    year: '2026',
    imageUrl: '/assets/aistudio/file_00000000edb482119c42a9057883341c_9dd8c745.png',
    description: 'Charming 3D rendered character badge featuring Panda, Cat, Rabbit, Bear, and Penguin with dimensional cartoon lettering and play icon.',
    tags: ['Character Design', '3D Mascot', 'Vector Badge', 'Kids Brand'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Circular Channel Badge', 'Vector Mascot Outlines', 'Merch Vector Print'],
    featured: true
  },

  // --- Wedding Invitations ---
  {
    id: 'upload-wedding-1',
    title: 'Sarah & James - Blush Floral Wedding Suite',
    category: 'Wedding Invitations',
    client: 'Sarah & James',
    year: '2024',
    imageUrl: '/assets/aistudio/1793438875487_dedf5f31.jpg',
    description: 'Romantic watercolor blush rose bouquet wedding invitation printed on textured heavy cotton cardstock with gold script lettering.',
    tags: ['Wedding Card', 'Floral Watercolor', 'Blush Roses', 'Calligraphy'],
    toolsUsed: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
    deliverables: ['5x7 Print Ready PDF', 'Bleed & Crop Marks', 'Foil Stamping Mask'],
    featured: true
  },
  {
    id: 'upload-wedding-2',
    title: 'Sophia & Liam - Eucalyptus Wreath Wedding Suite',
    category: 'Wedding Invitations',
    client: 'Sophia & Liam',
    year: '2024',
    imageUrl: '/assets/aistudio/1793438847044_cd9ee73a.jpg',
    description: 'Botanical foliage wreath invitation with gentle fairy light accents, rustic wooden background flatlay, and refined gold script typography.',
    tags: ['Botanical Wreath', 'Eucalyptus', 'Gold Script', 'Rustic Wedding'],
    toolsUsed: ['Adobe InDesign', 'Photoshop'],
    deliverables: ['Double-sided Invitation', 'RSVP Card Template', 'High-Res Print Master'],
    featured: false
  },
  {
    id: 'upload-wedding-3',
    title: 'Chloe & Mark - Minimalist Gold Polygon Suite',
    category: 'Wedding Invitations',
    client: 'Chloe & Mark',
    year: '2024',
    imageUrl: '/assets/aistudio/1793438869397_cd2d0f3d.jpg',
    description: 'Clean modern geometric multifaceted gold frame with fine-line botanical sprig and contemporary serif typography on linen envelope.',
    tags: ['Geometric Gold', 'Minimalist Wedding', 'Botanical Line Art', 'Stationery'],
    toolsUsed: ['Adobe Illustrator', 'InDesign'],
    deliverables: ['Die-cut Cutlines', 'CMYK Pre-press File', 'Digital E-vite'],
    featured: false
  },
  {
    id: 'upload-wedding-4',
    title: 'Wedding & Celebration Stationery Flatlay Collection',
    category: 'Wedding Invitations',
    client: 'Private Celebration Clients',
    year: '2024',
    imageUrl: '/assets/aistudio/1793438863703_d24fce52.jpg',
    description: 'Curated 6-piece flatlay presentation showcasing wedding invitation variants, emerald anniversary cards, and celestial birthday stationery.',
    tags: ['Invitation Suite', 'Flatlay Mockup', 'Luxury Paper', 'Gold Foil'],
    toolsUsed: ['Photoshop', 'InDesign'],
    deliverables: ['Full Portfolio Collection', 'Print Specifications', 'Client Lookbook'],
    featured: true
  },
  {
    id: 'upload-wedding-5',
    title: 'Bespoke Event Invitation Ensemble',
    category: 'Wedding Invitations',
    client: 'Event Planning Studio',
    year: '2024',
    imageUrl: '/assets/aistudio/1793438749053_928abfd9.jpg',
    description: 'Comprehensive invitation collection demonstrating custom envelope pairings, wax seal spots, and gold metallic leafing.',
    tags: ['Event Invitations', 'Envelope Liners', 'Luxury Print', 'Metallic Inks'],
    toolsUsed: ['Adobe InDesign', 'Illustrator'],
    deliverables: ['Matching Suite Collection', 'Die-cut Profiles', 'Print Proofs'],
    featured: false
  },

  // --- Birthday & Party Invitations ---
  {
    id: 'upload-bday-1',
    title: 'Emma’s 30th Birthday - Navy & Celestial Gold Suite',
    category: 'Birthday & Party Invitations',
    client: 'Emma Davis',
    year: '2024',
    imageUrl: '/assets/aistudio/1793438856264_04b6ed34.jpg',
    description: 'Deep midnight navy cardstock adorned with geometric constellation gold foil lines, stardust accents, champagne envelope, and candle flatlay.',
    tags: ['Birthday Invitation', 'Gold Foil', 'Midnight Blue', 'Celestial'],
    toolsUsed: ['Adobe Illustrator', 'InDesign', 'Photoshop'],
    deliverables: ['Invitation Card File', 'Gold Stamping Layer', 'Envelope Print Wrap'],
    featured: true
  },
  {
    id: 'upload-bday-2',
    title: 'David & Katherine - 25th Emerald Anniversary Suite',
    category: 'Birthday & Party Invitations',
    client: 'David & Katherine',
    year: '2024',
    imageUrl: '/assets/aistudio/1793438853237_0cfd7260.jpg',
    description: 'Opulent forest emerald green anniversary gala card bordered by intricate gilded corner filigree flourishes and gold script typography.',
    tags: ['Anniversary Gala', 'Emerald & Gold', 'Vintage Border', 'Celebration'],
    toolsUsed: ['Adobe Illustrator', 'InDesign'],
    deliverables: ['Gala Dinner Program', 'Anniversary Card', 'Digital Invitation File'],
    featured: false
  },
  {
    id: 'upload-bday-3',
    title: 'Celebration Favor Seals & Circular Tags',
    category: 'Birthday & Party Invitations',
    client: 'Luxury Event Favors',
    year: '2024',
    imageUrl: '/assets/aistudio/1793438957394_23d1cc55.jpg',
    description: 'Set of 6 die-cut circular sticker seals, coasters, and favor tags matching wedding and milestone birthday themes.',
    tags: ['Favor Tags', 'Circular Stickers', 'Event Branding', 'Die-cut'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Sticker Sheet Ready Vectors', 'Die-cut Lines', 'Proof PDFs'],
    featured: false
  },

  // --- Facebook Banners ---
  {
    id: 'upload-banner-1',
    title: 'Jumbi Tunes - Panoramic YouTube & Facebook Banner',
    category: 'Facebook Banners',
    client: 'Jumbi Tunes Kids Channel',
    year: '2026',
    imageUrl: '/assets/aistudio/file_0000000031ac8211b12dfd9ad5f69768_53c91aaf.png',
    description: 'High-energy wide panoramic channel banner with 3D characters, lush fantasy scenery, speech balloons, and social engagement buttons.',
    tags: ['Facebook Cover', 'YouTube Banner', '3D Landscape', 'Social Header'],
    toolsUsed: ['Adobe Photoshop', 'Illustrator'],
    deliverables: ['Facebook Cover (820x312)', 'YouTube Banner (2560x1440)', 'Mobile Optimized Safe Areas'],
    featured: true
  },

  // --- Social Media Posts ---
  {
    id: 'upload-social-1',
    title: 'Delicious Burger - High-Impact Dark Ad Creative',
    category: 'Social Media Posts',
    client: 'Gourmet Burger Kitchen',
    year: '2026',
    imageUrl: '/assets/aistudio/Screenshot_20260809_011722_WhatsAppBusiness_f45530b2.jpg',
    description: 'Mouth-watering gourmet food social ad featuring stacked melted cheese burger, floating ingredients, 30% off offer cloud, and high-contrast typography.',
    tags: ['Food Social Ad', 'Story Format', 'Restaurant Marketing', 'Promo Poster'],
    toolsUsed: ['Adobe Photoshop', 'Illustrator'],
    deliverables: ['Instagram Story (1080x1920)', 'Feed Post (1080x1080)', 'Editable PSD'],
    featured: true
  },
  {
    id: 'upload-social-2',
    title: 'Culinary Delights - Food Catering Social Media Creative',
    category: 'Social Media Posts',
    client: 'Elite Catering Services',
    year: '2026',
    imageUrl: '/assets/aistudio/Screenshot_20260809_011725_WhatsAppBusiness_027ba0c0.jpg',
    description: 'Eye-catching purple/magenta social media promotional flyer showcasing culinary dishes in circular frames with event booking checklist.',
    tags: ['Catering Flyer', 'Social Media', 'Service List', 'Food Photography Layout'],
    toolsUsed: ['Photoshop', 'Illustrator', 'Figma'],
    deliverables: ['Social Feed Templates', 'Ad Campaign Variants', 'Print Flyer Setup'],
    featured: false
  }
];

export const SERVICES: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity & Logo Systems',
    shortDesc: 'End-to-end visual identities that give your business authority, cohesion, and distinct market presence.',
    deliverables: [
      'Primary & secondary logo marks',
      '3D logo mockups & emblem design',
      'Vector master formats (AI, EPS, SVG, PNG)',
      'Brand guidelines and color specifications',
      'Business cards & corporate stationery'
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'Dimension'],
    whatsappMessage: 'Hi Nasir, I would like to consult with you regarding Logo Design & Brand Identity.'
  },
  {
    id: 'invitations',
    title: 'Wedding & Celebration Invitations',
    shortDesc: 'Luxurious, bespoke invitation suites for weddings, galas, milestone birthdays, and private parties.',
    deliverables: [
      'Gold foil & embossed print-ready PDF files',
      'Exact bleed, crop & die-cut tolerances',
      'Matching RSVP, envelope liners & favor tags',
      'Digital e-vites & social invitation cards',
      'Custom watercolor & geometric vector motifs'
    ],
    tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
    whatsappMessage: 'Hi Nasir, I need custom Wedding / Birthday Invitation design.'
  },
  {
    id: 'social-media',
    title: 'Social Media Creatives & Banners',
    shortDesc: 'Stop-the-scroll graphics crafted specifically to boost engagement, click-through rates, and channel growth.',
    deliverables: [
      'High-converting Instagram, Facebook & TikTok ads',
      'Panoramic YouTube headers & Facebook cover banners',
      'Promotional food, retail & e-commerce flyers',
      'Editable master templates',
      'Optimized dimensions for all devices'
    ],
    tools: ['Photoshop', 'Figma', 'Illustrator'],
    whatsappMessage: 'Hi Nasir, I want to discuss a Social Media Graphics / Banner package.'
  },
  {
    id: 'vector-art',
    title: 'Vector Art & Mascot Illustrations',
    shortDesc: 'Crisp scalable vector illustrations, character mascots, and custom iconography for brands and media channels.',
    deliverables: [
      '100% scalable vector artwork (zero pixelation)',
      'Character mascots & cartoon badges',
      'App & website vector iconography',
      'Commercial merchandise & sticker print vectors',
      'Full commercial ownership rights'
    ],
    tools: ['Adobe Illustrator', 'Photoshop'],
    whatsappMessage: 'Hi Nasir, I would love to order custom Vector Art / Illustration work.'
  }
];

export const SKILLS_LIST = [
  { name: 'Adobe Illustrator', category: 'Vector & Identity', level: '98%' },
  { name: 'Adobe Photoshop', category: 'Photo Compositing & Mockups', level: '96%' },
  { name: 'Adobe InDesign', category: 'Print & Event Stationery', level: '92%' },
  { name: 'Figma', category: 'Digital & Social Systems', level: '90%' },
  { name: '3D Mockup Styling', category: 'Realistic Lighting & Materials', level: '95%' },
  { name: 'Brand Strategy & Monograms', category: 'Conceptual Thinking', level: '94%' },
  { name: 'Typography & Calligraphy', category: 'Visual Hierarchy', level: '97%' },
  { name: 'Print Prep & CMYK Pre-press', category: 'Technical Output', level: '96%' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah & James',
    role: 'Wedding Clients',
    company: 'Private Event (UK)',
    text: 'Muhammad Nasir designed our entire blush floral wedding suite and wax seals. The quality of his print-ready artwork was absolutely breath-taking and every guest complimented the design.',
    project: 'Wedding Invitation Suite'
  },
  {
    id: 'test-2',
    name: 'Aura Studio Director',
    role: 'Brand Manager',
    company: 'Aura Creative Studio (Dubai)',
    text: 'Nasir’s 3D acrylic logo mockup and brand guidelines elevated our creative studio to an entirely new tier. His attention to lighting, edge reflections, and color grading is remarkable.',
    project: '3D Logo & Identity'
  },
  {
    id: 'test-3',
    name: 'Jumbi Tunes Team',
    role: 'Channel Producer',
    company: 'Kids Media Network',
    text: 'The YouTube channel banner and character emblem Nasir crafted for Jumbi Tunes captured exactly the playful, high-energy aesthetic we needed. Highly recommended!',
    project: 'Banners & Character Branding'
  }
];

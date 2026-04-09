// =============================================================================
// Site Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "DAVIDO | Afro-Beat Music Artist",
  description: "Experience the future of Afro music with DAVIDO - an unforgettable live performances.",
  language: "en",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg-1.png",
  brandName: "DAVIDO",
  decodeText: "5IVE ALIVE TOUR",
  decodeChars: "アイウエオカキクケコ0123456789",
  subtitle: "Afro-Beat Music Experience",
  ctaPrimary: "Explore Albums",
  ctaPrimaryTarget: "albums",
  ctaSecondary: "View Tour",
  ctaSecondaryTarget: "tour",
  cornerLabel: "LIVE EXPERIENCE",
  cornerDetail: "2026 World Tour",
  navItems: [
    { label: "Albums", sectionId: "albums", icon: "disc" },
    { label: "Gallery", sectionId: "gallery", icon: "play" },
    { label: "Tour", sectionId: "tour", icon: "calendar" },
    { label: "Contact", sectionId: "contact", icon: "music" },
  ],
};

// -- Album Cube Section -------------------------------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    {
      id: 1,
      title: "A GOOD TIME",
      subtitle: "DAVIDO",
      image: "/album-1.jpg",
    },
    {
      id: 2,
      title: "5IVE",
      subtitle: "DAVIDO",
      image: "/album-2.jpg",
    },
    {
      id: 3,
      title: "A BETTER TIME",
      subtitle: "DAVIDO",
      image: "/album-3.jpg",
    },
    {
      id: 4,
      title: "TIMELESS",
      subtitle: "DAVIDO",
      image: "/album-4.jpg",
    },
  ],
  cubeTextures: [
    "/album-7.jpg",
    "/album-8.jpg",
    "/album-3.jpg",
    "/album-4.jpg",
    "/album-9.jpg",
    "/album-10.jpg",
  ],
  scrollHint: "Scroll to explore",
};

// -- Parallax Gallery Section -------------------------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "VISUAL EXPERIENCE",
  sectionTitle: "Immersive Moments",
  galleryLabel: "LIVE GALLERY",
  galleryTitle: "Tour Memories",
  marqueeTexts: [
    "NEON PULSE",
    "ELECTRONIC EXPERIENCE",
    "CYBERPUNK SOUNDS",
    "IMMERSIVE AUDIO",
    "FUTURE MUSIC",
  ],
  endCtaText: "Join the Experience",
  parallaxImagesTop: [
    { id: 1, src: "/concert-1.jpg", alt: "Concert crowd with neon lights" },
    { id: 2, src: "/concert-2.jpg", alt: "DJ performing on stage" },
    { id: 3, src: "/concert-3.jpg", alt: "Festival audience with confetti" },
    { id: 4, src: "/concert-4.jpg", alt: "DJ hands on mixer" },
    { id: 5, src: "/concert-5.jpg", alt: "Aerial view of festival" },
    { id: 6, src: "/concert-6.jpg", alt: "Underground club scene" },
  ],
  parallaxImagesBottom: [
    { id: 1, src: "/concert-7.jpg", alt: "Artist walking to stage" },
    { id: 2, src: "/concert-8.jpg", alt: "Crowd with raised hands" },
    { id: 3, src: "/concert-9.jpg", alt: "Laser light show" },
    { id: 4, src: "/concert-10.jpg", alt: "Holographic pyramid stage" },
    { id: 5, src: "/concert-11.jpg", alt: "Dance floor from above" },
    { id: 6, src: "/concert-12.jpg", alt: "Sunset festival stage" },
  ],
  galleryImages: [
    { id: 1, src: "/concert-1.jpg", title: "EchoStorm Arena", date: "2026.03.15" },
    { id: 2, src: "/concert-3.jpg", title: "Neon Nights Festival", date: "2026.02.28" },
    { id: 3, src: "/concert-5.jpg", title: "Cyberpunk Warehouse", date: "2026.01.20" },
    { id: 4, src: "/concert-7.jpg", title: "Digital Dreams Tour", date: "2025.12.10" },
    { id: 5, src: "/concert-9.jpg", title: "Synthwave Sessions", date: "2025.11.05" },
    { id: 6, src: "/concert-11.jpg", title: "Future Bass Live", date: "2025.10.18" },
  ],
};

// -- Tour Schedule Section ----------------------------------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "UPCOMING SHOWS",
  sectionTitle: "2026 World Tour",
  vinylImage: "/vinyl-disc.png",
  buyButtonText: "Get Tickets",
  detailsButtonText: "Details",
  bottomNote: "More dates announced soon",
  bottomCtaText: "Subscribe for Updates",
  statusLabels: {
    onSale: "ON SALE",
    soldOut: "SOLD OUT",
    comingSoon: "COMING SOON",
    default: "TBA",
  },
  tourDates: [
    {
      id: 1,
      date: "2026.04.15",
      time: "20:00",
      city: "Tokyo",
      venue: "EchoStorm Arena",
      status: "on-sale",
      image: "/venue-1.jpg",
    },
    {
      id: 2,
      date: "2026.04.22",
      time: "21:00",
      city: "London",
      venue: "The Grand Theater",
      status: "sold-out",
      image: "/venue-2.jpg",
    },
    {
      id: 3,
      date: "2026.05.01",
      time: "22:00",
      city: "Berlin",
      venue: "Underground Warehouse",
      status: "on-sale",
      image: "/venue-3.jpg",
    },
    {
      id: 4,
      date: "2026.05.10",
      time: "19:30",
      city: "New York",
      venue: "Skyline Rooftop",
      status: "coming-soon",
      image: "/venue-4.jpg",
    },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/davido-2.png",
  portraitAlt: "DAVIDO Artist Portrait",
  heroTitle: "5IVE ALIVE TOUR",
  heroSubtitle: "Afro-Beat Music Experience",
  artistLabel: "ARTIST",
  artistName: "DAVIDO",
  artistSubtitle: "Afro-Beat Singer, & Music Producer",
  brandName: "DAVIDO",
  brandDescription: "Pushing the boundaries of Afro-Beat music with immersive soundscapes and deep rooted African culture. Experience the future of Afro-Beat.",
  quickLinksTitle: "Quick Links",
  quickLinks: ["Albums", "Tour Dates", "Gallery", "Merchandise", "Press Kit"],
  contactTitle: "Contact",
  emailLabel: "Email",
  email: "booking@neonpulse.music",
  phoneLabel: "Management",
  phone: "+1 (555) 987-6543",
  addressLabel: "Label",
  address: "DMW Davido Music World, Los Angeles",
  newsletterTitle: "Stay Connected",
  newsletterDescription: "Subscribe for exclusive content, early ticket access, and behind-the-scenes updates.",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Thank you for subscribing to DAVIDO updates!",
  copyrightText: "© 2026 DAVIDO. All rights reserved.",
  bottomLinks: ["Privacy Policy", "Terms of Service", "Cookie Settings"],
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "youtube", label: "YouTube", href: "https://youtube.com" },
    { icon: "music", label: "Spotify", href: "https://spotify.com" },
  ],
  galleryImages: [
    { id: 1, src: "/album-7.jpg" },
    { id: 2, src: "/album-8.jpg" },
    { id: 3, src: "/album-9.jpg" },
    { id: 4, src: "/album-10.jpg" },
    { id: 5, src: "/album-11.jpg" },
  ],
};

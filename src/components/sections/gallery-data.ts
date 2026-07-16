export interface GalleryImage {
  id: string;
  src: string;
  category: "Kitchen" | "Living Room" | "Bedroom" | "Office" | "Ceiling" | "Wardrobe";
  alt: string;
}

// Swap these URLs with real project photography.
export const galleryImages: GalleryImage[] = [
  {
    id: "g-01",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    category: "Kitchen",
    alt: "Luxury modular kitchen with gold accents",
  },
  {
    id: "g-02",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    category: "Living Room",
    alt: "Elegant living room with warm lighting",
  },
  {
    id: "g-03",
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    category: "Bedroom",
    alt: "Serene luxury master bedroom",
  },
  {
    id: "g-04",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
    category: "Office",
    alt: "Modern corporate office interior",
  },
  {
    id: "g-05",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    category: "Living Room",
    alt: "Contemporary living space with statement lighting",
  },
  {
    id: "g-06",
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1600&auto=format&fit=crop",
    category: "Wardrobe",
    alt: "Custom walk-in wardrobe with gold detailing",
  },
  {
    id: "g-07",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    category: "Ceiling",
    alt: "Designer false ceiling with cove lighting",
  },
  {
    id: "g-08",
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
    category: "Office",
    alt: "Boutique commercial interior fit-out",
  },
  {
    id: "g-09",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
    category: "Bedroom",
    alt: "Minimal luxury bedroom with soft textures",
  },
];

export const galleryCategories = [
  "All",
  "Kitchen",
  "Living Room",
  "Bedroom",
  "Office",
  "Ceiling",
  "Wardrobe",
] as const;
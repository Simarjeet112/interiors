export interface BeforeAfterItem {
  id: string;
  title: string;
  before: string;
  after: string;
}

// Swap these URLs with real before/after project photography.
export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba-01",
    title: "Modular Kitchen Transformation",
    before:
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?q=80&w=1800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "ba-02",
    title: "Living Room Renovation",
    before:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "ba-03",
    title: "Master Bedroom Wardrobe",
    before:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1800&auto=format&fit=crop",
  },
];
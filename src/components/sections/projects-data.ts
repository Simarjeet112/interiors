export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
}

// Swap these URLs with real project photography.
export const projects: Project[] = [
  {
    id: "01",
    title: "The Obsidian Residence",
    category: "Full Home Interior",
    location: "New Delhi",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Gilded Kitchen Studio",
    category: "Modular Kitchen",
    location: "Gurugram",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Ivory Corporate Suite",
    category: "Office Interior",
    location: "Noida",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "The Sodhi Penthouse",
    category: "Living Room Interior",
    location: "New Delhi",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Amber Wardrobe Suite",
    category: "Wardrobes",
    location: "Faridabad",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Noir Boutique Store",
    category: "Commercial Interior",
    location: "Gurugram",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop",
  },
];
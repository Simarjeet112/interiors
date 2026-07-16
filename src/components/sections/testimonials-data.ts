export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    name: "Anita Malhotra",
    location: "New Delhi",
    project: "Full Home Interior",
    quote:
      "S.S. Sodhi Interiors transformed our home into something we never imagined. The attention to detail on every wardrobe and ceiling was flawless.",
    rating: 5,
  },
  {
    id: "t-02",
    name: "Rajeev Khanna",
    location: "Gurugram",
    project: "Modular Kitchen",
    quote:
      "Professional from day one. The 3D design matched the final output almost exactly, and the team stuck to the timeline they promised.",
    rating: 5,
  },
  {
    id: "t-03",
    name: "Priya Sethi",
    location: "Noida",
    project: "Office Interior",
    quote:
      "Our office renovation was completed with zero disruption to daily work. The finish quality feels genuinely premium.",
    rating: 5,
  },
  {
    id: "t-04",
    name: "Karan Bedi",
    location: "Faridabad",
    project: "Living Room Interior",
    quote:
      "Best decision we made was going with S.S. Sodhi. Communication was clear throughout and the craftsmanship speaks for itself.",
    rating: 5,
  },
];
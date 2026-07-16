export const siteConfig = {
  name: "S.S. Sodhi Interiors",
  tagline: "Luxury Interior Design Studio",
  description:
    "S.S. Sodhi Interiors crafts bespoke luxury interiors — modular kitchens, wardrobes, false ceilings, and complete home & office transformations.",
  url: "https://sssodhinteriors.com",
  phones: ["9272569524", "8698489424", "9760058849"],
  whatsappNumber: "919272569524",
  whatsappDefaultMessage:
    "Hi S.S. Sodhi Interiors, I'd like to book a free luxury consultation for my space.",
  email: "info@sssodhinteriors.com",
} as const;

export const services = [
  "Wallpapers",
  "PVC Wall Panels",
  "Kitchen Trolleys",
  "POP Work",
  "Designer Paints",
  "Texture Paints",
  "Wooden Flooring",
  "Roller Blinds",
  "Roman Blinds",
  "False Ceiling",
  "Modular Kitchen",
  "Wardrobes",
  "TV Units",
  "Living Room Interior",
  "Bedroom Interior",
  "Office Interior",
  "Commercial Interior",
  "Home Renovation",
  "Custom Furniture",
] as const;

export type Service = (typeof services)[number];

export const budgetRanges = [
  "Under ₹1 Lakh",
  "₹1 Lakh - ₹3 Lakh",
  "₹3 Lakh - ₹5 Lakh",
  "₹5 Lakh - ₹10 Lakh",
  "₹10 Lakh+",
] as const;

export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(
    customMessage || siteConfig.whatsappDefaultMessage
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "How long does a typical interior project take?",
    answer:
      "Most modular kitchens and wardrobes are completed within 3–5 weeks, while full home interiors typically take 8–12 weeks depending on scope. We share a detailed timeline before work begins so there are no surprises.",
  },
  {
    id: "faq-2",
    question: "Do you offer a free consultation?",
    answer:
      "Yes. Every project starts with a complimentary consultation where we understand your space, style preferences and budget, then propose a tailored design direction — no obligation to proceed.",
  },
  {
    id: "faq-3",
    question: "What is included in your design quote?",
    answer:
      "Our quotes cover design, materials, fabrication, delivery and installation. Site preparation, civil work or third-party appliances are scoped separately and always confirmed with you in writing before we begin.",
  },
  {
    id: "faq-4",
    question: "Can I customize materials, finishes and hardware?",
    answer:
      "Absolutely. We work with a curated range of laminates, veneers, stones and premium hardware brands, and can also source specific materials you have in mind to match your vision precisely.",
  },
  {
    id: "faq-5",
    question: "Do you provide warranty on your work?",
    answer:
      "Yes, all modular work carries a standard warranty against manufacturing defects, and we remain available for post-installation support well beyond that period.",
  },
  {
    id: "faq-6",
    question: "Which cities do you currently serve?",
    answer:
      "We primarily serve Delhi NCR, including Gurugram and Noida, along with Mumbai and Bengaluru. Reach out with your location and our team will confirm feasibility for your project.",
  },
];
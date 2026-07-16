export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "Free on-site visit to understand your space, needs, and budget.",
  },
  {
    number: "02",
    title: "Design Concept",
    description: "Custom 3D layouts and material palettes tailored to your taste.",
  },
  {
    number: "03",
    title: "Finalization",
    description: "Detailed quotation, timelines, and material sign-off before work begins.",
  },
  {
    number: "04",
    title: "Execution",
    description: "In-house fabrication and installation with weekly progress updates.",
  },
  {
    number: "05",
    title: "Handover",
    description: "Final walkthrough, quality check, and warranty documentation.",
  },
];
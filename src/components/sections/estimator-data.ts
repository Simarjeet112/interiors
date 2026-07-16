export interface EstimatorService {
  id: string;
  label: string;
  baseMin: number;
  baseMax: number;
}

export const estimatorServices: EstimatorService[] = [
  { id: "kitchen", label: "Modular Kitchen", baseMin: 150000, baseMax: 400000 },
  { id: "wardrobe", label: "Wardrobes", baseMin: 80000, baseMax: 200000 },
  { id: "living", label: "Living Room Interior", baseMin: 200000, baseMax: 600000 },
  { id: "fullhome", label: "Full Home Interior", baseMin: 800000, baseMax: 2500000 },
  { id: "office", label: "Office Interior", baseMin: 500000, baseMax: 1500000 },
  { id: "ceiling", label: "False Ceiling", baseMin: 40000, baseMax: 120000 },
];

export interface EstimatorTier {
  id: string;
  label: string;
  description: string;
  multiplier: number;
}

export const estimatorTiers: EstimatorTier[] = [
  { id: "essential", label: "Essential", description: "Quality laminates & trusted brands", multiplier: 0.75 },
  { id: "premium", label: "Premium", description: "Designer finishes & premium hardware", multiplier: 1 },
  { id: "luxury", label: "Luxury", description: "Bespoke materials & custom fabrication", multiplier: 1.6 },
];

export function formatINR(value: number) {
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(value % 100000 === 0 ? 0 : 1)}L`;
  }
  return `₹${Math.round(value / 1000)}k`;
}
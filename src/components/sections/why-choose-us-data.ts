import {
  Gem,
  Ruler,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    icon: Gem,
    title: "Premium Materials Only",
    description:
      "Every panel, finish, and fitting is sourced from vetted premium suppliers — no compromises on quality.",
  },
  {
    icon: Ruler,
    title: "Precision Execution",
    description:
      "In-house design and fabrication teams ensure millimeter-accurate installs, every single time.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Structured project timelines with weekly progress updates, so your space is ready when promised.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Backed",
    description:
      "Comprehensive warranty coverage on modular work, hardware, and finishes for lasting peace of mind.",
  },
  {
    icon: Users,
    title: "Dedicated Design Team",
    description:
      "A single point of contact from concept to handover — no miscommunication, no surprises.",
  },
  {
    icon: Sparkles,
    title: "Bespoke to Your Space",
    description:
      "Every layout is custom-designed around your space, lifestyle, and taste — never off-the-shelf.",
  },
];
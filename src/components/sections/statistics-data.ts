export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}

export const statistics: Statistic[] = [
  { value: 800, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Design Experts" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];
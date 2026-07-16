import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0a0a0a",
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#999999",
          400: "#707070",
          500: "#4d4d4d",
          600: "#333333",
          700: "#1f1f1f",
          800: "#141414",
          900: "#0a0a0a",
          950: "#050505",
        },
        gold: {
          DEFAULT: "#c9a24b",
          50: "#fbf6ea",
          100: "#f5e9c9",
          200: "#ecd493",
          300: "#e0ba5f",
          400: "#d3a94f",
          500: "#c9a24b",
          600: "#a8823a",
          700: "#83642c",
          800: "#5c4620",
          900: "#3a2c14",
        },
        ivory: "#f7f5f0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "hero-sm": ["3.5rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "hero-md": ["6.5rem", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "hero-lg": ["9rem", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
      },
      spacing: {
        "section": "clamp(5rem, 10vw, 10rem)",
        "gutter": "clamp(1.5rem, 5vw, 6rem)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e0ba5f 0%, #c9a24b 45%, #83642c 100%)",
        "noise": "url('/images/noise.png')",
      },
      boxShadow: {
        "premium": "0 25px 80px -20px rgba(0,0,0,0.6)",
        "gold-glow": "0 0 40px -5px rgba(201,162,75,0.35)",
        "inset-glass": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.16, 1, 0.3, 1)",
        "silk": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      animation: {
        "marquee": "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "reveal": "reveal 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;

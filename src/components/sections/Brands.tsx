"use client";

import { motion } from "framer-motion";
import { brands } from "./brands-data";

export default function Brands() {
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="relative w-full bg-obsidian-950 py-16 sm:py-20 overflow-hidden border-y border-ivory/10">
      <div className="container-luxury mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 text-xs md:text-sm tracking-[0.4em] uppercase text-gold text-center"
        >
          <span className="w-10 h-[1px] bg-gold-gradient" />
          Trusted Brand Partners
          <span className="w-10 h-[1px] bg-gold-gradient" />
        </motion.p>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-obsidian-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-obsidian-950 to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {marqueeBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center px-10 sm:px-14 shrink-0"
            >
              <span className="font-display text-2xl sm:text-3xl text-obsidian-400 hover:text-gold transition-colors duration-300 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
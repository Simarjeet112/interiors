"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicesList, serviceIcons } from "./services-data";
import { getWhatsAppLink } from "@/lib/site-config";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
            >
              <span className="w-10 h-[1px] bg-gold-gradient" />
              What We Offer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
            >
              A complete suite of
              <span className="text-gold-gradient"> luxury interior services</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="max-w-sm text-obsidian-300 text-sm md:text-base leading-relaxed"
          >
            From wall finishes to full-scale renovations — every service is
            executed in-house, end to end, with premium materials and
            precision craftsmanship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ivory/10">
          {servicesList.map((service, index) => {
            const Icon = serviceIcons[service];
            const isHovered = hovered === index;

            return (
              <motion.a
                key={service}
                href={getWhatsAppLink(
                  `Hi S.S. Sodhi Interiors, I'd like to enquire about ${service}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (index % 3) * 0.08,
                }}
                className="group relative flex items-center justify-between gap-6 border-b border-r border-ivory/10 px-6 py-8 sm:px-8 sm:py-10 overflow-hidden"
              >
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-obsidian-900"
                />

                <div className="relative z-10 flex items-center gap-5 sm:gap-6">
                  <span className="font-display text-sm text-obsidian-400 group-hover:text-gold transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-obsidian-300 group-hover:text-gold transition-colors duration-300"
                  />
                  <span className="font-display text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors duration-300">
                    {service}
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="relative z-10 shrink-0 text-obsidian-500 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
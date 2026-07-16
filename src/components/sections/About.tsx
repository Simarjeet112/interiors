"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "800+", label: "Projects Delivered" },
  { value: "19", label: "Design Services" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Image */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
              <Image
                src="/images/about/studio.jpg"
                alt="S.S. Sodhi Interiors design studio craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 border border-ivory/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute -bottom-8 -right-4 sm:-right-8 glass px-8 py-6 max-w-[220px]"
          >
            <p className="font-display text-4xl text-gold-gradient">15+</p>
            <p className="mt-1 text-xs tracking-[0.2em] uppercase text-obsidian-300">
              Years Crafting Luxury Spaces
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7 lg:pl-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
          >
            <span className="w-10 h-[1px] bg-gold-gradient" />
            About the Studio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
          >
            Designing spaces that feel
            <span className="text-gold-gradient"> quietly extraordinary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-8 max-w-xl text-obsidian-200 text-base md:text-lg leading-relaxed"
          >
            S.S. Sodhi Interiors is a full-service luxury interior design
            studio, transforming homes and offices into refined, considered
            environments. From modular kitchens to complete space
            renovations, every project is executed with meticulous
            craftsmanship, premium materials, and an obsession with detail
            that lasts well beyond installation day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-xl border-t border-ivory/10 pt-10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl sm:text-4xl text-ivory">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.65rem] tracking-[0.15em] uppercase text-obsidian-300 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
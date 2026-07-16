"use client";

import { motion } from "framer-motion";
import { statistics } from "./statistics-data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Statistics() {
  return (
    <section className="relative w-full bg-obsidian-900 overflow-hidden">
      <div className="container-luxury py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 divide-y divide-ivory/10 lg:divide-y-0 lg:divide-x">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="flex flex-col items-center text-center pt-8 lg:pt-0 first:pt-0"
            >
              <p className="font-display text-5xl sm:text-6xl text-gold-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[0.65rem] sm:text-xs tracking-[0.2em] uppercase text-obsidian-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
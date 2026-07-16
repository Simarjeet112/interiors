"use client";

import { motion } from "framer-motion";
import { reasons } from "./why-choose-us-data";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full bg-obsidian-900 section-padding overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 right-0 w-[560px] h-[560px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="container-luxury relative">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
          >
            <span className="w-10 h-[1px] bg-gold-gradient" />
            Why Choose Us
            <span className="w-10 h-[1px] bg-gold-gradient" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
          >
            The difference is in the
            <span className="text-gold-gradient"> detail</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (index % 3) * 0.1,
                }}
                className="group relative bg-obsidian-900 p-8 sm:p-10 flex flex-col gap-6 transition-colors duration-300 hover:bg-obsidian-950"
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:shadow-gold-glow transition-all duration-300">
                  <Icon size={20} strokeWidth={1.5} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-ivory mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-obsidian-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
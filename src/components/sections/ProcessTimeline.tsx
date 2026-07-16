"use client";

import { motion } from "framer-motion";
import { processSteps } from "./process-data";

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="container-luxury">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
          >
            <span className="w-10 h-[1px] bg-gold-gradient" />
            Our Process
            <span className="w-10 h-[1px] bg-gold-gradient" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
          >
            From concept to
            <span className="text-gold-gradient"> completion</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[1px] bg-ivory/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.12,
                }}
                className="relative flex flex-col"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-obsidian-950 border border-gold/40 flex items-center justify-center font-display text-lg text-gold mb-6">
                  {step.number}
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-ivory mb-3">
                  {step.title}
                </h3>
                <p className="text-obsidian-300 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
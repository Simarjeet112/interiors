"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { beforeAfterItems } from "./before-after-data";

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const item = beforeAfterItems[active];

  return (
    <section
      id="transformations"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="container-luxury">
        <div className="flex flex-col items-center text-center mb-14 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
          >
            <span className="w-10 h-[1px] bg-gold-gradient" />
            The Transformation
            <span className="w-10 h-[1px] bg-gold-gradient" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
          >
            Drag to see the
            <span className="text-gold-gradient"> difference</span>
          </motion.h2>
        </div>

        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <BeforeAfterSlider
            before={item.before}
            after={item.after}
            title={item.title}
          />
          <p className="mt-6 text-center font-display text-xl sm:text-2xl text-ivory">
            {item.title}
          </p>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {beforeAfterItems.map((entry, index) => (
            <button
              key={entry.id}
              onClick={() => setActive(index)}
              data-cursor="hover"
              aria-label={`Show ${entry.title}`}
              className={`h-[2px] transition-all duration-300 ${
                index === active
                  ? "w-10 bg-gold-gradient"
                  : "w-5 bg-ivory/20 hover:bg-ivory/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
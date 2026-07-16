"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
    >
      <span className="text-[0.6rem] tracking-[0.35em] uppercase text-obsidian-300">
        Scroll
      </span>
      <div className="relative w-[1px] h-14 bg-obsidian-700 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-gold-gradient"
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

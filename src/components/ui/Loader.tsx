"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "";
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-obsidian-950"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-5xl tracking-[0.15em] text-ivory"
          >
            S.S. <span className="text-gold-gradient">SODHI</span>
          </motion.div>
          <p className="mt-3 text-[0.65rem] md:text-xs tracking-[0.4em] uppercase text-obsidian-300">
            Interiors
          </p>

          <div className="mt-10 w-48 h-[1px] bg-obsidian-700 overflow-hidden relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gold-gradient"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <p className="mt-3 text-[0.6rem] tracking-[0.3em] text-obsidian-400 font-sans">
            {Math.floor(Math.min(progress, 100))}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
      className="fixed right-5 sm:right-8 z-40"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient pulse ring */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-gold/40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          data-cursor="hover"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-gradient shadow-gold-glow"
        >
          <MessageCircle
            size={26}
            strokeWidth={1.75}
            className="text-obsidian-950"
          />

          {/* Desktop hover tooltip */}
          <span className="pointer-events-none absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden whitespace-nowrap rounded-sm glass px-4 py-2 text-xs tracking-[0.1em] text-ivory opacity-0 translate-x-2 transition-all duration-300 ease-luxury group-hover:opacity-100 group-hover:translate-x-0 sm:block">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}

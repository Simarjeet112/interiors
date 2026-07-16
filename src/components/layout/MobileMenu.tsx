"use client";

import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-obsidian-950 flex flex-col justify-between md:hidden"
        >
          <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col items-start justify-center gap-6 px-gutter"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                variants={item}
                href={link.href}
                onClick={onClose}
                className="font-display text-4xl text-ivory hover:text-gold-gradient transition-colors"
              >
                <span className="text-gold text-sm font-sans align-top mr-3">
                  0{i + 1}
                </span>
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="px-gutter pb-10 flex items-center gap-3 text-obsidian-300"
          >
            <Phone size={16} className="text-gold" />
            <a href={`tel:+91${siteConfig.phones[0]}`} className="text-sm tracking-wide">
              +91 {siteConfig.phones[0]}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

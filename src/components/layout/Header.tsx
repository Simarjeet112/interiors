"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";
import { siteConfig, getWhatsAppLink } from "@/lib/site-config";
import MobileMenu from "./MobileMenu";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-luxury ${
          scrolled ? "glass py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          <a
            href="#"
            data-cursor="hover"
            className="font-display text-xl md:text-2xl tracking-[0.1em] text-ivory"
          >
            S.S. <span className="text-gold-gradient">SODHI</span>
            <span className="hidden sm:inline text-[0.6rem] font-sans tracking-[0.35em] text-obsidian-300 ml-2 align-middle uppercase">
              Interiors
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="hover"
                className="relative text-sm tracking-wide text-obsidian-200 hover:text-ivory transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-gradient transition-all duration-300 ease-luxury group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <MagneticButton
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-6 py-2.5 text-xs tracking-[0.15em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-obsidian-950 transition-colors duration-300"
            >
              Book Consultation
            </MagneticButton>

            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              data-cursor="hover"
              className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
            >
              <span
                className={`block h-[1px] w-6 bg-ivory transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] w-6 bg-ivory transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[1px] w-6 bg-ivory transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

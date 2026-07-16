"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-obsidian-950 border-t border-ivory/10 overflow-hidden">
      <div className="container-luxury py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <a
              href="#"
              data-cursor="hover"
              className="font-display text-2xl tracking-[0.1em] text-ivory"
            >
              S.S. <span className="text-gold-gradient">SODHI</span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-obsidian-300 leading-relaxed">
              {siteConfig.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Explore
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor="hover"
                    className="text-sm text-obsidian-300 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-4"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Get In Touch
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={`tel:+91${siteConfig.phones[0]}`}
                  data-cursor="hover"
                  className="text-sm text-obsidian-300 hover:text-gold transition-colors duration-300"
                >
                  +91 {siteConfig.phones[0]}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  data-cursor="hover"
                  className="text-sm text-obsidian-300 hover:text-gold transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-obsidian-300">
                  Delhi NCR &middot; Gurugram &middot; Noida
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-obsidian-400 tracking-wide text-center sm:text-left">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-obsidian-400 tracking-wide">
            Crafted with precision, delivered with distinction.
          </p>
        </div>
      </div>
    </footer>
  );
}

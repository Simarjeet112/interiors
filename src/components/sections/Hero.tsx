"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { siteConfig, getWhatsAppLink } from "@/lib/site-config";
import { heroImages } from "./hero-images";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

const headingLines = ["Where Luxury", "Meets Living"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const words = headingRef.current?.querySelectorAll(".word-inner");
    if (!words) return;

    gsap.fromTo(
      words,
      { yPercent: 120, rotate: 4 },
      {
        yPercent: 0,
        rotate: 0,
        duration: 1.3,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.9,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-obsidian-950"
    >
      {/* Background image with parallax + ken burns */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={heroImages.primary}
            alt="Luxury interior living space by S.S. Sodhi Interiors"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/70 via-obsidian-950/50 to-obsidian-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/60 via-transparent to-obsidian-950/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full container-luxury flex flex-col justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
        >
          <span className="w-10 h-[1px] bg-gold-gradient" />
          Luxury Interior Design Studio
        </motion.p>

        <h1
          ref={headingRef}
          className="font-display text-hero-sm sm:text-hero-md lg:text-hero-lg text-ivory max-w-5xl"
        >
          {headingLines.map((line) => (
            <span key={line} className="block overflow-hidden py-1">
              <span className="word-inner inline-block">{line}</span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
          className="mt-8 max-w-md text-obsidian-200 text-base md:text-lg leading-relaxed"
        >
          Bespoke modular kitchens, wardrobes, false ceilings, and complete
          home & office transformations — crafted with precision, delivered
          with distinction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gold-gradient text-obsidian-950 text-xs tracking-[0.15em] uppercase font-medium shadow-gold-glow hover:shadow-none transition-shadow duration-300"
          >
            <MessageCircle size={16} />
            Get Free Consultation
          </MagneticButton>

          <MagneticButton
            href={`tel:+91${siteConfig.phones[0]}`}
            className="px-8 py-4 border border-ivory/25 text-ivory text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors duration-300"
          >
            <Phone size={16} />
            Call Now
          </MagneticButton>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "./projects-data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const activeProject = projects[active];

  return (
    <section
      id="projects"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
            >
              <span className="w-10 h-[1px] bg-gold-gradient" />
              Featured Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
            >
              Spaces that speak
              <span className="text-gold-gradient">
                {" "}
                for themselves
              </span>
            </motion.h2>
          </div>

          <MagneticButton
            href="#gallery"
            className="px-8 py-4 border border-ivory/25 text-ivory text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors duration-300 shrink-0"
          >
            View Full Gallery
            <ArrowRight size={16} />
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 border border-ivory/10 pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between">
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-2">
                  {activeProject.category}
                </p>

                <h3 className="font-display text-2xl sm:text-3xl text-ivory">
                  {activeProject.title}
                </h3>

                <p className="mt-1 text-xs text-obsidian-300 tracking-wide">
                  {activeProject.location} {" · "} {activeProject.year}
                </p>
              </div>

              <a
                href="#gallery"
                data-cursor="hover"
                className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full glass shrink-0 hover:border-gold/40 transition-colors duration-300"
              >
                <ArrowUpRight size={18} className="text-gold" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                data-cursor="hover"
                className={`group flex items-center justify-between gap-6 border-b border-ivory/10 py-5 sm:py-6 text-left transition-colors duration-300 ${
                  index === active
                    ? ""
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-5 sm:gap-6">
                  <span
                    className={`font-display text-sm transition-colors duration-300 ${
                      index === active
                        ? "text-gold"
                        : "text-obsidian-400"
                    }`}
                  >
                    {project.id}
                  </span>

                  <div>
                    <p
                      className={`font-display text-lg sm:text-xl transition-colors duration-300 ${
                        index === active
                          ? "text-gold"
                          : "text-ivory"
                      }`}
                    >
                      {project.title}
                    </p>

                    <p className="mt-1 text-xs text-obsidian-400 tracking-wide">
                      {project.category}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={16}
                  className={`shrink-0 transition-all duration-300 ${
                    index === active
                      ? "text-gold translate-x-0 opacity-100"
                      : "text-obsidian-500 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
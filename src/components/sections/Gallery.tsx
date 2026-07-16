"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { galleryImages, galleryCategories } from "./gallery-data";

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter]
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <section
      id="gallery"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
            >
              <span className="w-10 h-[1px] bg-gold-gradient" />
              The Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
            >
              A closer look at our
              <span className="text-gold-gradient"> craftsmanship</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                data-cursor="hover"
                className={`px-5 py-2.5 text-[0.65rem] tracking-[0.15em] uppercase transition-colors duration-300 border ${
                  filter === category
                    ? "border-gold text-gold"
                    : "border-ivory/15 text-obsidian-300 hover:border-ivory/40 hover:text-ivory"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.button
                key={image.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openLightbox(index)}
                data-cursor="hover"
                className="group relative mb-4 w-full block overflow-hidden rounded-sm break-inside-avoid"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian-950/0 group-hover:bg-obsidian-950/40 transition-colors duration-300 flex items-center justify-center">
                  <Expand
                    size={22}
                    className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <span className="absolute bottom-3 left-3 text-[0.6rem] tracking-[0.2em] uppercase text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass px-3 py-1.5">
                  {image.category}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian-950/95 backdrop-blur-md p-4 sm:p-10"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              data-cursor="hover"
              aria-label="Close"
              className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors duration-300"
            >
              <X size={18} className="text-ivory" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              data-cursor="hover"
              aria-label="Previous image"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors duration-300"
            >
              <ChevronLeft size={20} className="text-ivory" />
            </button>

            <motion.div
              key={filteredImages[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[4/3]"
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              data-cursor="hover"
              aria-label="Next image"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors duration-300"
            >
              <ChevronRight size={20} className="text-ivory" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
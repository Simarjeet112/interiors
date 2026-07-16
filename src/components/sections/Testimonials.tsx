"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import { testimonials } from "./testimonials-data";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="container-luxury">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
          >
            <span className="w-10 h-[1px] bg-gold-gradient" />
            Client Voices
            <span className="w-10 h-[1px] bg-gold-gradient" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
          >
            Trusted by discerning
            <span className="text-gold-gradient"> homeowners</span>
          </motion.h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={32}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".testimonials-pagination" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="glass h-full flex flex-col p-8 sm:p-10">
                <Quote size={28} strokeWidth={1.5} className="text-gold mb-6" />

                <p className="text-obsidian-200 text-sm sm:text-base leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                <div className="pt-4 border-t border-ivory/10">
                  <p className="font-display text-lg text-ivory">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-obsidian-400 tracking-wide">
                    {testimonial.project} &middot; {testimonial.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonials-pagination flex items-center justify-center gap-2 mt-10 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-ivory/20 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:bg-gold-gradient" />
      </div>
    </section>
  );
}
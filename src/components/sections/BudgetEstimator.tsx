"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { estimatorServices, estimatorTiers } from "./estimator-data";
import { siteConfig } from "@/lib/site-config";

export default function BudgetEstimator() {
  const [serviceId, setServiceId] = useState(estimatorServices[0].id);
  const [tierId, setTierId] = useState(estimatorTiers[1].id);

  const service = estimatorServices.find((s) => s.id === serviceId)!;
  const tier = estimatorTiers.find((t) => t.id === tierId)!;

  const whatsappHref = useMemo(() => {
    const message = `Hi S.S. Sodhi Interiors, I'm interested in ${service.label} (${tier.label} finish). Could you share a quote for my space?`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [service, tier]);

  return (
    <section
      id="estimate"
      className="relative w-full bg-obsidian-950 section-padding overflow-hidden"
    >
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[560px] h-[560px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="container-luxury relative">
        <div className="flex flex-col items-center text-center mb-14 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold"
          >
            <span className="w-10 h-[1px] bg-gold-gradient" />
            Plan Your Project
            <span className="w-10 h-[1px] bg-gold-gradient" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory max-w-2xl"
          >
            Tell us what
            <span className="text-gold-gradient"> you need</span>
          </motion.h2>

          <p className="mt-5 max-w-md text-sm text-obsidian-300">
            Pick your project and finish level, and our team will get back to
            you with a tailored quote.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl glass rounded-sm p-8 sm:p-12"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
            What are you working on?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {estimatorServices.map((s) => (
              <button
                key={s.id}
                type="button"
                data-cursor="hover"
                onClick={() => setServiceId(s.id)}
                className={`px-4 py-3 text-xs sm:text-sm tracking-wide border transition-colors duration-300 ${
                  serviceId === s.id
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-ivory/10 text-obsidian-300 hover:border-ivory/30"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
            Finish level
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {estimatorTiers.map((t) => (
              <button
                key={t.id}
                type="button"
                data-cursor="hover"
                onClick={() => setTierId(t.id)}
                className={`text-left px-5 py-4 border transition-colors duration-300 ${
                  tierId === t.id
                    ? "border-gold bg-gold/10"
                    : "border-ivory/10 hover:border-ivory/30"
                }`}
              >
                <p
                  className={`text-sm tracking-wide mb-1 ${
                    tierId === t.id ? "text-gold" : "text-ivory"
                  }`}
                >
                  {t.label}
                </p>
                <p className="text-xs text-obsidian-400">{t.description}</p>
              </button>
            ))}
          </div>

          <div className="flex justify-center pt-8 border-t border-ivory/10">
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 bg-gold-gradient px-10 py-4 text-xs tracking-[0.15em] uppercase text-obsidian-950 font-medium w-full sm:w-auto"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
              Get My Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  title,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = () => setDragging(false);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      data-cursor="hover"
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-sm border border-ivory/10 touch-none"
    >
      {/* After (base layer) */}
      <div className="absolute inset-0">
        <Image
          src={after}
          alt={`${title} after`}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover pointer-events-none"
          draggable={false}
        />
        <span className="absolute top-4 right-4 z-10 text-[0.6rem] tracking-[0.25em] uppercase text-ivory glass px-3 py-1.5">
          After
        </span>
      </div>

      {/* Before (clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div
          className="relative h-full"
          style={{ width: containerRef.current?.offsetWidth ?? "100vw" }}
        >
          <Image
            src={before}
            alt={`${title} before`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover pointer-events-none"
            draggable={false}
          />
        </div>
        <span className="absolute top-4 left-4 z-10 text-[0.6rem] tracking-[0.25em] uppercase text-ivory glass px-3 py-1.5">
          Before
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-20 w-[2px] bg-ivory/80"
        style={{ left: `${position}%` }}
      >
        <motion.div
          animate={{ scale: dragging ? 1.1 : 1 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold-glow"
        >
          <MoveHorizontal size={18} className="text-obsidian-950" />
        </motion.div>
      </div>
    </div>
  );
}
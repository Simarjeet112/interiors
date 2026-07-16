"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const ringPos = { x: 0, y: 0 };
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY, xPercent: -50, yPercent: -50 });
    };

    gsap.ticker.add(() => {
      ringPos.x += (mouseX - ringPos.x) * 0.15;
      ringPos.y += (mouseY - ringPos.y) * 0.15;
      gsap.set(ring, { x: ringPos.x, y: ringPos.y, xPercent: -50, yPercent: -50 });
    });

    const onEnterInteractive = () => {
      gsap.to(ring, { width: 60, height: 60, borderColor: "rgba(201,162,75,0.9)", duration: 0.3 });
    };
    const onLeaveInteractive = () => {
      gsap.to(ring, { width: 36, height: 36, borderColor: "rgba(201,162,75,0.5)", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveEls = document.querySelectorAll(
      "a, button, [data-cursor='hover']"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}

"use client";
import React, { useEffect, useRef } from "react";

type Props = {
  items: string[];
  speed?: number; // px per second
};

export default function Marquee({ items, speed = 80 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf: number;
    let x = 0;
    const step = () => {
      x -= speed / 60;
      el.style.transform = `translateX(${x}px)`;
      const width = el.scrollWidth / 2;
      if (Math.abs(x) > width) x = 0;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <div className="overflow-hidden border-y py-3 select-none">
      <div className="flex gap-8 whitespace-nowrap will-change-transform" ref={trackRef}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-sm md:text-base text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}




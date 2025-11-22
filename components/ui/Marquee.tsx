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
    <>
      <div className="relative w-full overflow-hidden select-none bg-[#67FEA6] dark:bg-[#6799FE]">
        {/* Content */}
        <div className="relative z-10 py-2 px-8">
          <div
            className="flex gap-8 whitespace-nowrap will-change-transform "
            ref={trackRef}
          >
            {[...items, ...items].map((item, i) => (
              <span
                key={i}
                className="text-base font-medium text-white flex items-center gap-3"
              >
                <span className="text-white/90 text-lg">✦</span>
                {item.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

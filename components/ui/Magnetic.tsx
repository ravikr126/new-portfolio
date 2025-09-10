"use client";
import React, { useEffect, useRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  strength?: number; // pixels to attract within
  children: React.ReactNode;
};

export default function Magnetic({ strength = 60, children, className, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < strength) {
        node.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
      } else {
        node.style.transform = `translate(0px, 0px)`;
      }
    };

    const onLeave = () => {
      node.style.transform = `translate(0px, 0px)`;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}




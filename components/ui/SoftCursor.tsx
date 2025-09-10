"use client";
import React, { useEffect, useRef } from "react";

export default function SoftCursor() {
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX - 4}px, ${targetY - 4}px)`;
      }
    };

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
      }
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    tick();
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        className="pointer-events-none fixed z-[9998] top-0 left-0 size-20 rounded-full blur-2xl opacity-40 transition-transform duration-150"
        style={{
          background: "radial-gradient(60% 60% at 50% 50%, var(--primary) 0%, transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] top-0 left-0 size-2 rounded-full bg-primary"
      />
    </>
  );
}




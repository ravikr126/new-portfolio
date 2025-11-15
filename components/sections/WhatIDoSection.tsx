"use client";
import React, { useEffect, useRef } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { servicesContent } from "@/data/constantData";

export default function WhatIDoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Create content with JSX for the sticky scroll
  const content = servicesContent.map((service, index) => ({
    title: service.title,
    description: service.description,
    content: (
      <div className="flex h-full w-full items-center justify-center text-white p-8">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">
            {index === 0 && "⚡"}
            {index === 1 && "🎨"}
            {index === 2 && "🚀"}
            {index === 3 && "👥"}
          </div>
          <h3 className="text-xl font-bold">{service.title}</h3>
        </div>
      </div>
    ),
  }));

  return (
    <section ref={sectionRef} className="pt-20 pb-10 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
          <p className="text-muted-foreground">
            Services focused on clarity, performance, and polish
          </p>
        </div>
        <StickyScroll content={content} />
      </div>
    </section>
  );
}


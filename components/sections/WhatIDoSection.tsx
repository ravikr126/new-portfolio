"use client";
import React, { useEffect, useRef } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { servicesContent } from "@/data/constantData";
import { AuroraText } from "../ui/aurora-text";

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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-2 md:space-y-3 mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-sm sm:text-md md:text-xl font-bold text-foreground">
            What I Do
          </h2>
          <p className="font-pacifico text-muted-foreground text-3xl md:text-4xl">
            Services focused on&nbsp;
            <AuroraText> Clarity, Performance, and Polish</AuroraText>
          </p>
        </div>
        <div className="flex justify-center">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
}

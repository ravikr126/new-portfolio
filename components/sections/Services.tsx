"use client";
import React, { useEffect, useRef } from "react";

const services = [
  {
    title: "Full-Stack Development",
    body: "End-to-end web apps from frontend interactions to scalable backend APIs.",
    tags: ["Next.js", "Node.js", "TypeScript"],
  },
  {
    title: "UI/UX & Frontend",
    body: "Intuitive, accessible, responsive interfaces with a premium feel.",
    tags: ["Design Systems", "TailwindCSS", "Accessibility"],
  },
  {
    title: "Performance & DX",
    body: "Optimization, code quality, and build pipelines that scale.",
    tags: ["Perf", "SEO", "Tooling"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = Array.from(sectionRef.current?.querySelectorAll('[data-card]') || []);
    cards.forEach((card, i) => {
      (card as HTMLElement).style.opacity = "0";
      (card as HTMLElement).style.transform = "translateY(16px)";
      const onEnter = () => {
        (card as HTMLElement).style.transition = "opacity 600ms ease, transform 600ms ease";
        (card as HTMLElement).style.opacity = "1";
        (card as HTMLElement).style.transform = "translateY(0)";
        window.removeEventListener('scroll', handle);
      };
      const handle = () => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) onEnter();
      };
      handle();
      window.addEventListener('scroll', handle, { passive: true });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
          <p className="text-muted-foreground">Services focused on clarity, performance, and polish</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-card
              className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs bg-muted rounded-md">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



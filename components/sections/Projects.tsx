"use client";
import React, { useEffect, useRef } from "react";

type Card = {
  title: string;
  body: string;
  tags: string[];
  emoji: string;
};

const cards: Card[] = [
  { title: "Project One", body: "A modern marketing experience.", tags: ["Next.js", "TypeScript"], emoji: "🚀" },
  { title: "Recruitment Platform", body: "A full-stack job portal.", tags: ["Next.js", "Node"], emoji: "💼" },
  { title: "Productivity SAAS", body: "Collaborate and get things done.", tags: ["SaaS", "React"], emoji: "✨" },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nodes = Array.from(sectionRef.current?.querySelectorAll('[data-proj]') || []);
    const onScroll = () => {
      nodes.forEach((n, i) => {
        const el = n as HTMLElement;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.style.transition = "opacity 700ms ease, transform 700ms ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0) rotate3d(0,0,0,0)";
        }
      });
    };
    nodes.forEach((n) => {
      const el = n as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px) rotate3d(0,1,0,10deg)";
    });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Works</h2>
          <p className="text-muted-foreground">Blending utility and aesthetics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              data-proj
              className="group rounded-xl border border-border bg-background overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex items-center justify-center">
                <div className="text-6xl">{c.emoji}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-muted-foreground">{c.body}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-muted rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



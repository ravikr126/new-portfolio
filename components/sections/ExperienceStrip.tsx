"use client";
import React, { useEffect, useRef } from "react";
import { experiences } from "@/data/experience";

export default function ExperienceStrip() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll('[data-item]')) as HTMLElement[];
    items.forEach((n, i) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(12px)";
      setTimeout(() => {
        n.style.transition = "opacity 600ms ease, transform 600ms ease";
        n.style.opacity = "1";
        n.style.transform = "translateY(0)";
      }, 120 * i);
    });
  }, []);

  return (
    <section ref={ref} className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-6">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
            <p className="text-muted-foreground">A quick look at recent roles</p>
          </div>
          <a href="/experience" className="text-primary underline text-sm">View all</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.slice(0, 2).map((exp, i) => (
            <article key={i} data-item className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{exp.role} • {exp.company}</h3>
              <p className="text-sm text-muted-foreground">{exp.start} — {exp.end}{exp.location ? ` • ${exp.location}` : ''}</p>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-muted-foreground text-sm">
                {exp.highlights.slice(0, 2).map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



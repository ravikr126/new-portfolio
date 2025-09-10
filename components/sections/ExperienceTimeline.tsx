"use client";
import React, { useEffect, useRef } from "react";
import { experiences } from "@/data/experience";

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = Array.from(sectionRef.current?.querySelectorAll('[data-step]') || []) as HTMLElement[];
    const onScroll = () => {
      items.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.style.transition = "opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    };
    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
    });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">The Experience</h2>
          <p className="text-muted-foreground">Experience that brings ideas to life</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${i}`}
                data-step
                className="relative grid md:grid-cols-2 gap-6 items-start"
              >
                <div className="hidden md:block" />
                <div className="relative rounded-xl border border-border bg-card p-6">
                  <span className="absolute -left-9 md:left-[-13px] top-6 size-4 rounded-full bg-primary shadow" />
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.start} — {exp.end}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-foreground font-medium">{exp.company}</span>
                    {exp.location ? <span> • {exp.location}</span> : null}
                  </div>
                  <ul className="mt-3 space-y-2 list-disc pl-5 text-muted-foreground text-sm">
                    {exp.highlights.slice(0, 4).map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs bg-muted rounded-md">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



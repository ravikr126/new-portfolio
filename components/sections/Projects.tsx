"use client";
import React, { useEffect, useRef } from "react";
import { PinContainer } from "../ui/3d-pin";
import { cards } from "@/data/constantData";


export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nodes = Array.from(
      sectionRef.current?.querySelectorAll("[data-proj]") || []
    );
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="pt-20 pb-30 md:pb-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-3 mb-18">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Works</h2>
          <p className="text-muted-foreground">
            Blending utility and aesthetics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-36 gap-x-8 sm:gap-y-32 sm:gap-x-6 md:gap-y-34 md:gap-x-8 lg:gap-16">
          {cards.map((c, index) => (
            <PinContainer
              key={c.title}
              title={c.linkTitle}
              href={c.link}
            >
              <div
                data-proj
                className="group rounded-xl border border-border bg-background overflow-hidden transition-all duration-300 w-[240px] h-[280px] sm:w-[220px] sm:h-[260px] md:w-[260px] md:h-[300px] lg:w-[280px] lg:h-[320px] mx-auto shadow-[0_4px_20px_rgba(51,51,153,0.15),0_8px_40px_rgba(51,51,153,0.1)] hover:shadow-[0_8px_30px_rgba(51,51,153,0.25),0_16px_60px_rgba(51,51,153,0.15),0_0_80px_rgba(130,255,200,0.1)] dark:shadow-[0_4px_25px_rgba(101,255,155,0.2),0_8px_50px_rgba(51,51,153,0.15)] dark:hover:shadow-[0_8px_35px_rgba(101,255,155,0.3),0_16px_70px_rgba(51,51,153,0.2),0_0_100px_rgba(101,255,155,0.15)]"
              >
                <div className="h-28 sm:h-32 md:h-36 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex items-center justify-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl">{c.emoji}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                </div>
                <div className="p-3 sm:p-4 md:p-5 space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{c.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-muted rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

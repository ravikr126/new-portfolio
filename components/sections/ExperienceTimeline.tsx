"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import { TimeLineData } from "@/data/experience";
import Magnetic from "@/components/ui/Magnetic";
import { CoolMode } from "@/components/ui/cool-mode";
import { ButtonIcons } from "@/data/constantData";
import { AuroraText } from "../ui/aurora-text";

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = Array.from(
      sectionRef.current?.querySelectorAll("[data-step]") || []
    ) as HTMLElement[];
    const onScroll = () => {
      items.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.style.transition =
            "opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="text-center space-y-2 md:space-y-3 mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-sm sm:text-md md:text-xl font-bold text-foreground">
          The Experience
        </h2>
        <p className="font-pacifico text-muted-foreground text-3xl md:text-4xl">
          Experience That Brings&nbsp;
          <AuroraText>Ideas to Life</AuroraText>
        </p>
      </div>
      <div className="container mx-auto max-w-5xl">
        <TimelineMap data={TimeLineData} />
      </div>
      <div className="flex justify-center mt-10">
        <Magnetic className="inline-block">
          <CoolMode
            options={{
              particle: ButtonIcons,
            }}
          >
            <Link
              href="/experience"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Explore Full Experience 🧐
            </Link>
          </CoolMode>
        </Magnetic>
      </div>
    </section>
  );
}

interface TimelineMapProps {
  data: Array<{
    title: string;
    company?: string;
    location?: string;
    workType?: string;
    role?: string;
    technologies?: string[];
    achievements: string[];
    content?: React.ReactNode;
  }>;
}

function TimelineMap({ data }: TimelineMapProps) {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

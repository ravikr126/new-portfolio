"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Magnetic from "@/components/ui/Magnetic";
import { TypeAnimation } from "react-type-animation";
import {
  ButtonIcons,
  ConnectionLink,
  SubTitle,
  Taglines,
} from "@/data/constantData";
import { DraggableCardSection } from "./DraggableCard";
import SocialMediaSection from "@/components/Common/SocialMediaSection";
import MagneticLink from "@/components/ui/MagneticLink";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>("#fff");

  useEffect(() => {
    // graceful, CSS-driven reveal
    const nodes = [
      titleRef.current,
      subtitleRef.current,
      descRef.current,
      mediaRef.current,
    ].filter(Boolean) as HTMLElement[];
    nodes.forEach((n, i) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(20px)";
      setTimeout(() => {
        n.style.transition = "opacity 600ms ease, transform 600ms ease";
        n.style.opacity = "1";
        n.style.transform = "translateY(0)";
      }, 120 + i * 120);
    });

    // subtle parallax for media
    const onScroll = () => {
      if (!mediaRef.current) return;
      const rect = mediaRef.current.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const offset = (rect.top - center) * 0.06; // parallax strength
      mediaRef.current.style.transform = `translateY(${offset}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // function to update background color from CSS variable
    const updateBackgroundColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim();
      if (color) setBackgroundColor(color);
    };
    updateBackgroundColor();

    // observe theme changes (class changes on <html>)
    const observer = new MutationObserver(() => {
      updateBackgroundColor();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 md:pb-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Ravi Kumar
                </span>
              </h1>
              <h2
                ref={subtitleRef}
                className="text-sm md:text-md text-muted-foreground"
              >
                <TypeAnimation
                  sequence={Taglines.flatMap((tag) => [tag, 1000])}
                  speed={50}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </h2>
            </div>

            <p
              ref={descRef}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {SubTitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticLink
                href={ConnectionLink.Resumelink}
                target="_blank"
                rel="noopener noreferrer"
                magneticClass="inline-block"
                linkClass="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                particles={ButtonIcons}
              >
                <FaDownload className="mr-2 h-4 w-4" />
                Download Resume
              </MagneticLink>
              <MagneticLink
                href="#projects"
                magneticClass="inline-block"
                linkClass="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
                particles={ButtonIcons}
              >
                View My Creativity
              </MagneticLink>
            </div>
            <SocialMediaSection />
          </div>

          <div
            ref={mediaRef}
            className="relative flex justify-center items-center w-full"
          >
            <DraggableCardSection />
          </div>
        </div>
      </div>
    </section>
  );
}

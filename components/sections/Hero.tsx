"use client";
import React, { useEffect, useRef, useState } from "react";
// Responsive canvas size hook
function useResponsiveCanvasSize() {
  const [size, setSize] = useState({ width: 300, height: 300 });
  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth;
      if (w < 640) {
        setSize({ width: 220, height: 220 }); // mobile
      } else if (w < 1024) {
        setSize({ width: 350, height: 350 }); // tablet
      } else {
        setSize({ width: 500, height: 500 }); // desktop
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import Magnetic from "@/components/ui/Magnetic";

import { PixelatedCanvas } from "../ui/pixelated-canvas";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>("#fff");
  const canvasSize = useResponsiveCanvasSize();

  useEffect(() => {
    // graceful, CSS-driven reveal
    const nodes = [titleRef.current, subtitleRef.current, descRef.current, mediaRef.current].filter(Boolean) as HTMLElement[];
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
      const color = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
      if (color) setBackgroundColor(color);
    };
    updateBackgroundColor();

    // observe theme changes (class changes on <html>)
    const observer = new MutationObserver(() => {
      updateBackgroundColor();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-20 px-4">

      {/* <BackgroundBeamsWithCollision > */}


      {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4"> */}


      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Your Name
                </span>
              </h1>
              <h2 ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground">
                Full Stack Developer & UI/UX Designer
              </h2>
            </div>

            <p ref={descRef} className="text-lg text-muted-foreground leading-relaxed">
              I create refined, performant, and user-centered digital experiences.
              Blending thoughtful design with robust engineering to ship premium products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Magnetic className="inline-block">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download Resume
                </button>
              </Magnetic>
              <Magnetic className="inline-block">
                <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
                  View My Work
                </a>
              </Magnetic>
            </div>

            <div className="flex space-x-4 pt-2">
              <a href="https://github.com" className="p-3 rounded-lg border border-border hover:bg-accent transition-colors" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="p-3 rounded-lg border border-border hover:bg-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="p-3 rounded-lg border border-border hover:bg-accent transition-colors" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div ref={mediaRef} className="relative flex justify-center items-center w-full">
            <PixelatedCanvas
              src="https://assets.aceternity.com/manu-red.png"
              width={canvasSize.width}
              height={canvasSize.height}
              cellSize={3}
              dotScale={0.9}
              shape="square"
              backgroundColor={backgroundColor}
              dropoutStrength={0.4}
              interactive
              distortionStrength={3}
              distortionRadius={80}
              distortionMode="swirl"
              followSpeed={0.2}
              jitterStrength={4}
              jitterSpeed={4}
              sampleAverage
              tintColor="#FFFFFF"
              tintStrength={0.2}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* </BackgroundLines> */}

      {/* </BackgroundBeamsWithCollision> */}

    </section>
  );
}



"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "../ui/aurora-text";
import FixedWidthWrapper from "../Common/FixedWidthWrapper";
import { skillsData } from "@/data/SkillsData";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const categoryColors = {
  frontend: "from-blue-500 to-purple-600",
  backend: "from-green-500 to-emerald-600",
  database: "from-orange-500 to-red-600",
  tools: "from-pink-500 to-rose-600",
  cloud: "from-cyan-500 to-blue-600",
};

const Skills = () => {
  const [isConverged, setIsConverged] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const getInitialPosition = (index: number) => {
    const angle = (index / skillsData.length) * Math.PI * 2;
    const radius = 200 + (index % 4) * 80;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const getConvergedPosition = (index: number) => {
    const width = windowSize.width || (typeof window !== "undefined" ? window.innerWidth : 1024);
    const itemsPerRow = width < 640 ? 4 : width < 1024 ? 6 : 7;
    const row = Math.floor(index / itemsPerRow);
    const col = index % itemsPerRow;
    const spacingX = width < 640 ? 80 : width < 1024 ? 90 : 100;
    const spacingY = width < 640 ? 110 : width < 1024 ? 120 : 160;

    const totalRows = Math.ceil(skillsData.length / itemsPerRow);
    const verticalOffset = (totalRows - 1) * spacingY * 0.5;

    return {
      x: (col - (itemsPerRow - 1) / 2) * spacingX,
      y: row * spacingY - verticalOffset,
    };
  };

  const animateToConverged = () => {
    if (!skillsRef.current || !tlRef.current) return;

    setIsConverged(true);
    
    // Hide scroll indicator
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    // Animate skills to grid positions
    skillsRef.current.forEach((skillEl, index) => {
      if (!skillEl) return;
      
      const convergedPos = getConvergedPosition(index);
      const nameEl = skillEl.querySelector('.skill-name');
      
      gsap.to(skillEl, {
        x: convergedPos.x,
        y: convergedPos.y,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        delay: index * 0.05,
        ease: "back.out(1.2)",
      });

      // Fade in skill names
      if (nameEl) {
        gsap.to(nameEl, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.8 + index * 0.02,
          ease: "power2.out"
        });
      }
    });
  };

  const animateToScattered = () => {
    if (!skillsRef.current || !tlRef.current) return;

    setIsConverged(false);
    
    // Show scroll indicator
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    // Animate skills to scattered positions
    skillsRef.current.forEach((skillEl, index) => {
      if (!skillEl) return;
      
      const initialPos = getInitialPosition(index);
      const nameEl = skillEl.querySelector('.skill-name');
      
      // Hide skill names first
      if (nameEl) {
        gsap.to(nameEl, {
          opacity: 0,
          y: 10,
          duration: 0.3,
          ease: "power2.in"
        });
      }

      gsap.to(skillEl, {
        x: initialPos.x,
        y: initialPos.y,
        scale: 0.7,
        rotation: Math.random() * 360 - 180,
        duration: 0.8,
        delay: index * 0.02,
        ease: "power2.inOut",
      });
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !skillsContainerRef.current) return;

    // Initialize GSAP timeline
    tlRef.current = gsap.timeline({ paused: true });

    // Set initial positions for skills
    skillsRef.current.forEach((skillEl, index) => {
      if (!skillEl) return;
      
      const initialPos = getInitialPosition(index);
      const nameEl = skillEl.querySelector('.skill-name');
      
      gsap.set(skillEl, {
        x: initialPos.x,
        y: initialPos.y,
        scale: 0.7,
        rotation: Math.random() * 360 - 180,
      });

      if (nameEl) {
        gsap.set(nameEl, {
          opacity: 0,
          y: 10
        });
      }
    });

    // Animate scroll indicator
    if (scrollIndicatorRef.current) {
      const mouseElement = scrollIndicatorRef.current.querySelector('.scroll-mouse');
      const wheelElement = scrollIndicatorRef.current.querySelector('.scroll-wheel');
      
      if (mouseElement && wheelElement) {
        gsap.to(mouseElement, {
          y: 10,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
        
        gsap.to(wheelElement, {
          y: 15,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    }

    // Set up ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: animateToConverged,
      onLeave: animateToScattered,
      onEnterBack: animateToConverged,
      onLeaveBack: animateToScattered,
    });

    return () => {
      scrollTrigger.kill();
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, [windowSize]);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 overflow-hidden"
    >
      <div className="text-center space-y-2 md:space-y-3 mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-sm sm:text-md md:text-xl font-bold text-foreground">
          My Skills
        </h2>
        <p className="font-pacifico text-muted-foreground text-3xl md:text-4xl">
          The Secret &nbsp;
          <AuroraText>Sauce</AuroraText>
        </p>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <FixedWidthWrapper className="relative z-10">
        {/* Skills Grid Container */}
        <div className="relative flex justify-center items-center min-h-[750px] md:min-h-[600px]">
          <div
            ref={skillsContainerRef}
            className="relative w-full max-w-5xl flex justify-center items-center"
          >
            {skillsData.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  ref={(el) => { skillsRef.current[index] = el; }}
                  className="absolute flex flex-col items-center justify-center group cursor-pointer"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.2,
                      zIndex: 10,
                      duration: 0.3,
                      ease: "back.out(1.7)"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: isConverged ? 1 : 0.7,
                      zIndex: 1,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  {/* Skill Icon Card */}
                  <div className="relative">
                    {/* Glow Effect */}
                    <div
                      className="absolute -inset-1 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                      style={{
                        backgroundColor: skill.color,
                        boxShadow: `0 0 30px ${skill.color}30`,
                      }}
                    />

                    {/* Main Card */}
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 group-hover:bg-white/15 transition-all duration-300 shadow-lg">
                      <div
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 transition-all duration-300 group-hover:scale-110 flex items-center justify-center rounded-lg"
                        style={{
                          color: skill.color,
                          backgroundColor: `${skill.color}15`,
                          filter: "brightness(1.2) contrast(1.1)",
                        }}
                      >
                        <IconComponent className="w-full h-full" />
                      </div>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <div className="skill-name mt-3 text-center">
                    <span className="text-black dark:text-white text-xs md:text-sm font-medium block">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] md:text-xs px-1.5 py-0.5 rounded-full bg-gradient-to-r ${
                        categoryColors[skill.category]
                      } text-white mt-1 inline-block`}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to see the magic</span>
            <div className="scroll-mouse w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="scroll-wheel w-1 h-3 bg-white/60 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </FixedWidthWrapper>
    </section>
  );
};

export default Skills;

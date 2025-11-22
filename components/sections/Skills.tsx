"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { AuroraText } from "../ui/aurora-text";
import FixedWidthWrapper from "../Common/FixedWidthWrapper";
import { skillsData } from "@/data/SkillsData";

const categoryColors = {
  frontend: "from-blue-500 to-purple-600",
  backend: "from-green-500 to-emerald-600",
  database: "from-orange-500 to-red-600",
  tools: "from-pink-500 to-rose-600",
  cloud: "from-cyan-500 to-blue-600",
};

const Skills = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isConverged, setIsConverged] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsResizing(true);

      // Clear previous timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      // Debounce resize updates
      resizeTimeoutRef.current = setTimeout(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        setIsResizing(false);
      }, 150);
    };

    // Set initial size
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && !isResizing) {
      setIsConverged(true);
      controls.start("visible");
    } else if (!isInView) {
      setIsConverged(false);
      controls.start("hidden");
    }
  }, [isInView, controls, isResizing]);

  const getInitialPosition = (index: number) => {
    const angle = (index / skillsData.length) * Math.PI * 2;
    const radius = 200 + (index % 4) * 80;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const getConvergedPosition = (index: number) => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1024;
    const itemsPerRow = width < 640 ? 4 : width < 1024 ? 6 : 7;
    const row = Math.floor(index / itemsPerRow);
    const col = index % itemsPerRow;
    const spacingX = width < 640 ? 80 : width < 1024 ? 40 : 90;
    const spacingY = width < 640 ? 110 : width < 1024 ? 50 : 160;

    // Adjust vertical centering to prevent bottom cutoff
    const totalRows = Math.ceil(skillsData.length / itemsPerRow);
    const verticalOffset = (totalRows - 1) * spacingY * 0.5;

    return {
      x: (col - (itemsPerRow - 1) / 2) * spacingX,
      y: row * spacingY - verticalOffset,
    };
  };

  const skillVariants: Variants = {
    hidden: (index: number) => {
      const initial = getInitialPosition(index);
      return {
        x: initial.x,
        y: initial.y,
        scale: 0.3,
        opacity: 0.6,
        rotate: Math.random() * 360,
      };
    },
    visible: (index: number) => {
      const converged = getConvergedPosition(index);
      return {
        x: converged.x,
        y: converged.y,
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
          duration: isResizing ? 0.3 : 1.2,
          delay: isResizing ? 0 : index * 0.05,
          type: "spring" as const,
          stiffness: isResizing ? 200 : 100,
          damping: isResizing ? 25 : 15,
        },
      };
    },
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: isResizing ? 0.2 : 0.5,
        staggerChildren: isResizing ? 0.02 : 0.1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-10 overflow-hidden"
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
          <motion.div
            variants={containerVariants}
            animate={controls}
            className="relative w-full max-w-5xl flex justify-center items-center"
          >
            {skillsData.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={skillVariants}
                  animate={controls}
                  whileHover={{
                    scale: 1.2,
                    zIndex: 10,
                    transition: { duration: 0.2 },
                  }}
                  className="absolute flex flex-col items-center justify-center group cursor-pointer"
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
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 transition-all duration-300 group-hover:scale-110 flex items-center justify-center  rounded-lg"
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
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isConverged ? 1 : 0,
                      y: isConverged ? 0 : 10,
                    }}
                    transition={{ delay: 0.5 + index * 0.02 }}
                    className="mt-3 text-center"
                  >
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
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        {!isConverged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/60">
              <span className="text-sm mb-2">Scroll to see the magic</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </FixedWidthWrapper>
    </section>
  );
};

export default Skills;

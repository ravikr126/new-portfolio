"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 0.5"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Improved breakpoint calculation for smoother transitions
    const progress = Math.max(0, Math.min(1, latest));
    const cardsBreakpoints = content.map((_, index) => (index + 0.5) / cardLength);
    
    let closestBreakpointIndex = 0;
    let minDistance = Math.abs(progress - cardsBreakpoints[0]);
    
    for (let i = 1; i < cardsBreakpoints.length; i++) {
      const distance = Math.abs(progress - cardsBreakpoints[i]);
      if (distance < minDistance) {
        minDistance = distance;
        closestBreakpointIndex = i;
      }
    }
    
    // Only update if the active card actually changed
    if (closestBreakpointIndex !== activeCard) {
      setActiveCard(closestBreakpointIndex);
    }
  });

  const backgroundColors = [
    "hsl(var(--background))", // theme background
    "hsl(var(--card))", // theme card background
    "hsl(var(--muted))", // theme muted background
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex min-h-[20rem] justify-center space-x-5 rounded-md"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-muted-foreground"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="md:h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-35 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

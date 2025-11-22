"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  company?: string;
  location?: string;
  workType?: string;
  role?: string;
  technologies?: string[];
  achievements: string[];
  content?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans px-4 sm:px-6 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-10">
        <h2 className="mb-3 sm:mb-4 text-foreground max-w-4xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
         I&apos;ve been working on <b>Trustt</b> for the past 6 months. Here&apos;s
          a timeline of my journey.
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 sm:pb-16 md:pb-20">
        {data.map((item, index) => {
          const TimelineCard = React.memo(() => (
            <div className="flex justify-start pt-6 sm:pt-8 md:pt-10 gap-4 sm:gap-6 md:gap-10">
              <div className="sticky flex flex-col md:flex-row z-40 items-start top-20 sm:top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-8 w-8 sm:h-10 sm:w-10 absolute left-2 sm:left-3 md:left-3 rounded-full border border-border flex items-center justify-center bg-background">
                  <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-background shadow-lg" />
                </div>
                <div className="hidden md:block md:pl-20 w-full">
                  <h3 className="text-xs sm:text-sm md:text-sm lg:text-base text-muted-foreground font-medium mb-2">
                    {item.title}
                  </h3>
                  {item.company && (
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 leading-tight">
                      {item.company}
                    </h2>
                  )}
                  {item.location && (
                    <p className="text-xs sm:text-sm md:text-sm lg:text-base text-muted-foreground flex items-center mb-1">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {item.location}
                    </p>
                  )}
                  {item.workType && (
                    <p className="text-xs sm:text-sm md:text-sm lg:text-base text-muted-foreground flex items-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      {item.workType}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative pl-12 sm:pl-16 md:pl-20 pr-2 sm:pr-4 md:pl-4 w-full">
                <div className="md:hidden block mb-4">
                  <h3 className="text-xs sm:text-sm md:text-sm lg:text-base text-muted-foreground font-medium mb-2">
                    {item.title}
                  </h3>
                  {item.company && (
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                      {item.company}
                    </h2>
                  )}
                  {item.location && (
                    <p className="text-xs sm:text-sm md:text-sm text-muted-foreground flex items-center mb-1">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {item.location}
                    </p>
                  )}
                  {item.workType && (
                    <p className="text-xs sm:text-sm md:text-sm text-muted-foreground flex items-center mb-4">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      {item.workType}
                    </p>
                  )}
                </div>
                
                {/* Role */}
                {item.role && (
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                    {item.role}
                  </p>
                )}
                
                {/* Achievements with bold text support */}
                {item.achievements && (
                  <ul className="space-y-2 sm:space-y-3 text-muted-foreground mb-4 sm:mb-6">
                    {item.achievements.map((achievement, idx) => {
                      const parts = achievement.split(/\*\*(.*?)\*\*/g);
                      return (
                        <li key={idx} className="flex items-start text-xs sm:text-sm md:text-base lg:text-base">
                          <span className="text-primary mr-2 mt-1 flex-shrink-0 text-sm sm:text-base">•</span>
                          <span className="leading-relaxed">
                            {parts.map((part, partIdx) => 
                              partIdx % 2 === 1 ? (
                                <strong key={partIdx} className="font-semibold text-foreground">{part}</strong>
                              ) : (
                                <span key={partIdx}>{part}</span>
                              )
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
                
                {/* Technology Tags */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {item.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-xs md:text-sm font-medium bg-muted text-muted-foreground rounded-full border border-border hover:bg-muted/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Fallback for legacy content */}
                {item.content && !item.achievements && item.content}
              </div>
            </div>
          ));
          
          return <TimelineCard key={index} />;
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[4px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

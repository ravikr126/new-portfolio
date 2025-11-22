"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    linkedin?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[450px] max-w-full shrink-0 rounded-xl md:rounded-2xl border border-border bg-card/80 backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 hover:bg-card transition-colors"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-xs sm:text-sm leading-[1.6] font-normal text-foreground">
                {item.quote}
              </span>
              <div className="relative z-20 mt-4 sm:mt-5 md:mt-6 flex flex-row items-end justify-between min-h-[3rem]">
                <span className="flex flex-col gap-1">
                  <span className="text-xs sm:text-sm leading-[1.6] font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-xs sm:text-sm leading-[1.6] font-normal text-muted-foreground">
                    {item.title}
                  </span>
                </span>
                {item.linkedin && (
                  <Link
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors group flex-shrink-0"
                    aria-label={`Visit ${item.name}'s LinkedIn profile`}
                  >
                    <FaLinkedin className="h-4 w-4 text-primary group-hover:text-primary/80 transition-colors" />
                  </Link>
                )}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

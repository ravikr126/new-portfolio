"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

// Component to handle quote truncation and expansion
const QuoteText = ({ quote, name }: { quote: string; name: string }) => {
  const [showMore, setShowMore] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        // Reset line-clamp temporarily to measure full height
        textRef.current.style.webkitLineClamp = 'unset';
        const fullHeight = textRef.current.scrollHeight;
        
        // Apply line-clamp to measure clamped height
        textRef.current.style.webkitLineClamp = '4';
        const clampedHeight = textRef.current.clientHeight;
        
        setIsOverflowing(fullHeight > clampedHeight + 5); // 5px buffer
      }
    };
    
    // Use timeout to ensure DOM is ready
    const timer = setTimeout(checkOverflow, 100);
    
    // Check on resize
    window.addEventListener('resize', checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [quote]);

  return (
    <>
      <span 
        ref={textRef}
        className="relative z-20 text-xs sm:text-sm leading-[1.6] font-normal text-foreground block line-clamp-4"
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4,
          overflow: 'hidden'
        }}
      >
        {quote}
      </span>
      {isOverflowing && (
        <Dialog open={showMore} onOpenChange={setShowMore}>
          <DialogTrigger asChild>
            <button className="text-primary hover:text-primary/80 text-xs mt-2 font-medium transition-colors">
              Show more
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-md sm:max-w-lg max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-left">{name}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                {quote}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

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
    title?: string;
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
            className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[220px] max-w-full shrink-0 rounded-xl md:rounded-2xl border border-border bg-card/80 backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 hover:bg-card transition-colors"
            key={item.name}
          >
            <blockquote className="h-full flex flex-col">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex-1">
                <QuoteText quote={item.quote} name={item.name} />
              </div>
              <div className="relative z-20 mt-1 flex flex-row items-end justify-between min-h-[3rem]">
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

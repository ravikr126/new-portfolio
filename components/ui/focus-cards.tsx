"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <CardContainer className="inter-var w-full ">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-sm mx-auto h-full md:min-h-[500px] rounded-xl p-6 sm:p-8 border flex flex-col">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {card.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {card.description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="h-32 sm:h-40 md:h-48 w-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center group-hover/card:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl">{card.image}</div>
            </div>
          </CardItem>
          <div className="mt-4">
            <CardItem translateZ="40" className="flex flex-wrap gap-2">
              {card.technologies.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs bg-muted rounded-md dark:bg-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </CardItem>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between items-center mt-auto pt-4">
            <CardItem
              translateZ={20}
              as="button"
              className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-accent transition-colors text-center"
            >
              View Project →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-black/90 dark:hover:bg-white/90 transition-colors text-center"
            >
              Source Code
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}

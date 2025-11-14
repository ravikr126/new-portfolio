import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { DraggableItems, DraggableTitle } from "@/data/constantData";

export function DraggableCardSection() {
  return (
    <DraggableCardContainer className="relative flex h-[300px] sm:h-[400px] md:h-[500px] lg:min-h-screen w-full items-center justify-center overflow-hidden">
      <p className="absolute top-1/2 mx-auto max-w-xs sm:max-w-sm px-2 -translate-y-3/4 text-center text-sm sm:text-lg md:text-2xl lg:text-4xl font-black text-neutral-400 dark:text-neutral-800">
        {DraggableTitle}
      </p>
      {DraggableItems.map((item, index) => (
        <DraggableCardBody key={item.title || index} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-80 lg:w-80 object-cover rounded-sm sm:rounded md:rounded-md lg:rounded-lg"
          />
          <h3 className="mt-1 sm:mt-2 md:mt-3 lg:mt-4 text-center text-xs sm:text-sm md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

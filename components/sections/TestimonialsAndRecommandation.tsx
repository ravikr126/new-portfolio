"use client";
import React from "react";
import Link from "next/link";
import { Vortex } from "../ui/vortex";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaLinkedin } from "react-icons/fa";
import { AuroraText } from "@/components/ui/aurora-text";
type Props = {};

const TestimonialsAndRecommandation = (props: Props) => {
  const testimonials = [
    {
      quote:
        "Ravi's technical expertise and attention to detail are exceptional. He delivered our project ahead of schedule with outstanding quality and his problem-solving skills are top-notch.",
      name: "Sarah Chen",
      title: "Product Manager at TechCorp",
      linkedin: "https://linkedin.com/in/sarahchen-pm",
    },
    {
      quote:
        "Working with Ravi was a game-changer for our startup. His full-stack development skills and ability to understand business requirements helped us scale efficiently.",
      name: "Michael Rodriguez",
      title: "CTO at StartupX",
      linkedin: "https://linkedin.com/in/michael-rodriguez-cto",
    },
    {
      quote:
        "Ravi seamlessly bridges the gap between design and development. His code brings our design visions to life perfectly while maintaining excellent performance.",
      name: "Emily Johnson",
      title: "Design Lead at CreativeStudio",
      linkedin: "https://linkedin.com/in/emilyjohnson-design",
    },
    {
      quote:
        "Outstanding developer with great communication skills. Ravi consistently delivers high-quality solutions and is always willing to go the extra mile for the team.",
      name: "David Park",
      title: "Engineering Manager at TechFlow",
      linkedin: "https://linkedin.com/in/davidpark-engineering",
    },
    {
      quote:
        "Ravi's expertise in React and Node.js helped us modernize our entire platform. His mentorship also elevated our entire development team's capabilities.",
      name: "Lisa Thompson",
      title: "VP of Engineering at DataPro",
      linkedin: "https://linkedin.com/in/lisathompson-vp-eng",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 relative overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={200}
        particleCount={300}
        baseHue={155} // Emerald to match your accent color
        rangeSpeed={1.2}
        baseSpeed={0.1}
        className="flex items-center flex-col justify-center w-full h-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px]"
      >
        <div className="container mx-auto max-w-6xl relative z-10 px-2 sm:px-4">
          <div className="text-center space-y-2 md:space-y-3 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-sm sm:text-md md:text-xl font-bold text-foreground">
              Testimonials
            </h2>
            <p className="font-pacifico text-muted-foreground text-3xl md:text-4xl">
              Word on the street&nbsp;
              <AuroraText> About me</AuroraText>
            </p>
          </div>
          <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
          <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="flex justify-center mt-6 md:mt-8 lg:mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </Vortex>
    </section>
  );
};

export default TestimonialsAndRecommandation;

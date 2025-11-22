import React from "react";
import Marquee from "@/components/ui/Marquee";
import Hero from "@/components/sections/Hero/Hero";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import BlogStrip from "@/components/sections/BlogStrip";
import { MarqueeData } from "@/data/constantData";
import TestimonialsAndRecommandation from "@/components/sections/TestimonialsAndRecommandation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Marquee items={MarqueeData} />
      <WhatIDoSection />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <BlogStrip />
<TestimonialsAndRecommandation/>
    </main>
  );
}

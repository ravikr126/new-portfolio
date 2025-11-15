import React from "react";
import Marquee from "@/components/ui/Marquee";
import Hero from "@/components/sections/Hero/Hero";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import Projects from "@/components/sections/Projects";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import BlogStrip from "@/components/sections/BlogStrip";
import { MarqueeData } from "@/data/constantData";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* Premium Marquee */}
      <Marquee items={MarqueeData} />
      <WhatIDoSection />
      <Projects />
      <ExperienceTimeline />
      <BlogStrip />

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with a variety of technologies to create amazing digital
              experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "Tailwind CSS",
              "Git",
              "Docker",
              "AWS",
              "Figma",
              "JavaScript",
            ].map((skill, index) => (
              <div
                key={skill}
                className="p-4 rounded-lg border border-border bg-background hover:bg-accent transition-colors text-center"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project, index) => (
              <div
                key={project}
                className="group rounded-xl border border-border bg-background overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                    🚀
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Project {project}
                  </h3>
                  <p className="text-muted-foreground">
                    A brief description of the project and the technologies used
                    to build it.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience (Condensed) */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
              <p className="text-muted-foreground">Recent roles and impact</p>
            </div>
            <a href="/experience" className="text-primary underline text-sm">
              View all
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">
                Senior Software Engineer • Company Name
              </h3>
              <p className="text-sm text-muted-foreground">
                Jan 2023 — Present • Remote
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-muted-foreground text-sm">
                <li>
                  Led development of high-impact features improving conversion
                  by 15%.
                </li>
                <li>
                  Mentored engineers and improved code quality guidelines.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">
                Frontend Engineer • Previous Company
              </h3>
              <p className="text-sm text-muted-foreground">
                Jun 2020 — Dec 2022 • Bengaluru, IN
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-muted-foreground text-sm">
                <li>Built component library used across 4 product teams.</li>
                <li>
                  Reduced bundle size by 28% via optimization and
                  code-splitting.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

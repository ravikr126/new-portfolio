"use client";
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "📋"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and dark/light theme support.",
      technologies: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
      image: "💼"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts and interactive charts.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS Grid"],
      image: "🌤️"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and reporting.",
      technologies: ["Vue.js", "D3.js", "Python", "Redis"],
      image: "📊"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and transaction management.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      image: "🏦"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center mb-16">
          My <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span>
        </h1>
        
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item group rounded-xl border border-border bg-background overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2 pt-2">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    View Project
                  </button>
                  <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





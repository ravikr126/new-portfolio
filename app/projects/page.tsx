"use client";
import React, { useRef } from 'react'
import { FocusCards } from '@/components/ui/focus-cards';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
        <FocusCards cards={projects} />
      </div>
    </div>
  )
}





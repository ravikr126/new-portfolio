"use client";
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);


  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center mb-16">
          About <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Me</span>
        </h1>
        
        <div ref={contentRef} className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate full-stack developer and UI/UX designer with over 5 years of experience 
            creating digital experiences that matter. My journey began with a curiosity about how 
            things work, which led me to explore the intersection of technology and design.
          </p>
          
          <p>
            I specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. 
            My design philosophy centers around creating intuitive, accessible, and beautiful interfaces 
            that solve real-world problems.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community. I believe in continuous learning 
            and staying up-to-date with the latest trends in web development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Skills</h3>
              <ul className="space-y-2">
                <li>• Frontend Development (React, Next.js, TypeScript)</li>
                <li>• Backend Development (Node.js, Python, PostgreSQL)</li>
                <li>• UI/UX Design (Figma, Adobe Creative Suite)</li>
                <li>• Cloud Technologies (AWS, Docker, CI/CD)</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
              <ul className="space-y-2">
                <li>• 5+ years in web development</li>
                <li>• Led multiple successful projects</li>
                <li>• Mentored junior developers</li>
                <li>• Open source contributor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





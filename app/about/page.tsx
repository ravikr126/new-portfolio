"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import FixedWidthWrapper from "@/components/Common/FixedWidthWrapper";
import { AuroraText } from "@/components/ui/aurora-text";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AboutPageData } from "@/data/constantData";

interface ContributionData {
  date: string;
  count: number;
  level: number;
}

interface GitHubApiResponse {
  total: {
    lastYear: number;
    [year: string]: number;
  };
  contributions: ContributionData[];
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // GitHub contributions state
  const [contributions, setContributions] = useState<ContributionData[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2024); // Default to current year, will update on client
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  // Set current year on client side
  useEffect(() => {
    setSelectedYear(new Date().getFullYear());
  }, []);

  // Fetch GitHub contributions data
  const fetchContributions = useCallback(async (year?: number) => {
    try {
      setLoading(true);
      const targetYear = year || selectedYear;
      const response = await fetch(`https://github-contributions-api.jogruber.de/v4/ravikr126?y=${targetYear}`);
      const data: GitHubApiResponse = await response.json();
      
      setContributions(data.contributions || []);
      setTotalContributions(data.total[targetYear.toString()] || data.total.lastYear || 0);
      
      // Extract available years from the data
      const years = Object.keys(data.total)
        .filter(key => key !== 'lastYear' && !isNaN(Number(key)))
        .map(Number)
        .sort((a, b) => b - a);
      
      if (years.length === 0) {
        // If no years available, use current year and previous years
        const currentYear = new Date().getFullYear();
        setAvailableYears([currentYear, currentYear - 1, currentYear - 2]);
      } else {
        setAvailableYears(years);
      }
    } catch (error) {
      console.error('Failed to fetch contributions:', error);
      // Fallback data
      setContributions([]);
      setTotalContributions(0);
      const currentYear = new Date().getFullYear();
      setAvailableYears([currentYear, currentYear - 1, currentYear - 2]);
    } finally {
      setLoading(false);
    }
  }, [selectedYear]);

  // Get contribution level color
  const getContributionColor = (level: number): string => {
    const colors = {
      0: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700',
      1: 'bg-green-200 dark:bg-green-900 hover:bg-green-300 dark:hover:bg-green-800',
      2: 'bg-green-400 dark:bg-green-700 hover:bg-green-500 dark:hover:bg-green-600',
      3: 'bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-400',
      4: 'bg-green-800 dark:bg-green-400 hover:bg-green-900 dark:hover:bg-green-300'
    };
    return colors[level as keyof typeof colors] || colors[0];
  };

  // Format date for tooltip
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  useEffect(() => {
    fetchContributions();
  }, [fetchContributions]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    // Animate title
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate content
    tl.fromTo(
      contentRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.5"
    );

    // Animate image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, rotateY: 15 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: "back.out(1.7)" },
      "-=0.6"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="py-20 px-4">
      <FixedWidthWrapper className="px-10 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main content */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-muted-foreground tracking-wider uppercase"
            >
              More About Me
            </motion.p>
            
            <div className="space-y-2">
              <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Ravi Kumar
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                a creative <AuroraText>engineer</AuroraText>
              </p>
            </div>
            
            <div ref={contentRef} className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Ravi Kumar, a proactive full-stack developer passionate about
                creating dynamic web experiences. From frontend to backend, I
                thrive on solving complex problems with clean, efficient code. My
                expertise spans React, Next.js, and Node.js, and I'm always eager
                to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying
                curious. Life's about balance, and I love embracing every part of
                it.
              </p>
              <p className="font-medium">
                I believe in waking up each day eager to make a difference!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://linkedin.com/in/theravikr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card border border-border rounded-lg hover:bg-accent transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5 text-muted-foreground" />
              </motion.a>
              
              <motion.a
                href="https://github.com/ravikr126"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card border border-border rounded-lg hover:bg-accent transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 text-muted-foreground" />
              </motion.a>
              
              <motion.a
                href="https://twitter.com/ravi14577"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card border border-border rounded-lg hover:bg-accent transition-all duration-300"
              >
                <FaTwitter className="w-5 h-5 text-muted-foreground" />
              </motion.a>
            </div>
          </div>

          {/* Right Column - GitHub Contributions Heatmap */}
          <div className="order-1 lg:order-2" ref={imageRef}>
             <AnimatedTestimonials testimonials={AboutPageData} />
          </div>
        </div>
        <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-card rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-lg"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {loading ? (
                      <div className="h-6 bg-muted animate-pulse rounded w-48"></div>
                    ) : (
                      `${totalContributions.toLocaleString()} contributions in ${selectedYear}`
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Building, learning, and sharing code
                  </p>
                </div>
                
                {/* Year Filter Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
                  >
                    {selectedYear}
                    <FaChevronDown className={`w-3 h-3 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isYearDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[120px]"
                      >
                        {availableYears.map((year) => (
                          <button
                            key={year}
                            onClick={() => {
                              setSelectedYear(year);
                              setIsYearDropdownOpen(false);
                              fetchContributions(year);
                            }}
                            className={`w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors first:rounded-t-lg last:rounded-b-lg ${
                              year === selectedYear ? 'bg-accent' : ''
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* GitHub Link */}
              <div className="mb-4">
                <Link
                  href="https://github.com/ravikr126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  @theravikr
                </Link>
              </div>
              
              {/* Contribution Grid */}
              {loading ? (
                <div className="space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="grid grid-cols-53 gap-1">
                    {Array.from({ length: 365 }, (_, i) => (
                      <div key={i} className="w-3 h-3 bg-muted animate-pulse rounded-sm" />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="inline-grid grid-cols-53 gap-1 min-w-max">
                    {contributions.map((day, index) => (
                      <motion.div
                        key={`${day.date}-${index}`}
                        className={`w-3 h-3 rounded-sm cursor-pointer transition-all duration-200 ${getContributionColor(day.level)}`}
                        title={`${day.count} contributions on ${formatDate(day.date)}`}
                        whileHover={{ scale: 1.3 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.001 }}
                        suppressHydrationWarning
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Legend */}
              <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(level).split(' ')[0]}`}
                      title={`Level ${level}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </motion.div>
      </FixedWidthWrapper>
    </section>
  );
}

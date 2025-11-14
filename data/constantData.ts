import React from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaCalendarCheck,
} from "react-icons/fa";
import { MdContactMail, MdWork } from "react-icons/md";
import { ImBlog } from "react-icons/im";

// Navbar
export const Title = "RK";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: React.createElement(FaHome, {
      className: "h-4 w-4 text-neutral-500 dark:text-white",
    }),
  },
  {
    name: "About",
    link: "/about",
    icon: React.createElement(FaUser, {
      className: "h-4 w-4 text-neutral-500 dark:text-white",
    }),
  },
  {
    name: "Experience",
    link: "/experience",
    icon: React.createElement(FaBriefcase, {
      className: "h-4 w-4 text-neutral-500 dark:text-white",
    }),
  },
  {
    name: "Projects",
    link: "/projects",
    icon: React.createElement(FaCode, {
      className: "h-4 w-4 text-neutral-500 dark:text-white",
    }),
  },
];
export const moreItems = [
  {
    name: "Blog",
    link: "/blog",
    icon: React.createElement(ImBlog, {
      className: "h-4 w-4 text-neutral-500 dark:text-white",
    }),
  },
  {
    name: "Work",
    link: "/work",
    icon: React.createElement(MdWork, {
      className: "h-4 w-4 text-neutral-500 dark:text-white",
    }),
  },
  {
    name: "Contact",
    link: "/contact",
    icon: React.createElement(MdContactMail, {
      className: "h-4 w-4 text-neutral-500 dark:text-white",
    }),
  },
  {
    name: "Book a Call",
    link: "https://topmate.io/theravikr/",
    icon: React.createElement(FaCalendarCheck, {
      className: "h-4 w-4 text-neutral-500 dark:text-white",
    }),
  },
];

// Hero section
export const Taglines = [
  "Full Stack Developer",
  "React & Node.js Developer",
  "Tech Mentor",
  "Open Source Contributor",
  "Open Source Mentor",
  "Frontend Specialist",
  "Performance-Focused Engineer",
  "System Design Enthusiast",
];

export const SubTitle =
  " I create refined, performant, and user-centered digital experiences.Blending thoughtful design with robust engineering to ship premium products.";
export const ButtonIcons = ["🚀", "⚡", "🎯", "💻", "⭐"];
export const ConnectionLink = {
  Resumelink:
    "https://drive.google.com/file/d/12wvL3cr4QRBrkSavrTAsz2k5Y7hpXUiN/view?usp=share_link",
  Github: "https://github.com/ravikr126",
  Linkedin: "https://www.linkedin.com/in/theravikr/",
  X: "https://x.com/ravi14577",
  Medium: "https://medium.com/@ravi14577",
  Quora: "https://www.quora.com/profile/Ravi-Kumar-7379",
  Hashnode: "https://hashnode.com/@ravikr126",
  Stackoverflow: "https://stackoverflow.com/users/14477339/ravi-kumar",
  leetcode: "https://leetcode.com/night_codex/",
  Gfg: "https://auth.geeksforgeeks.org/user/ravikr126",
  Codechef: "https://www.codechef.com/users/ravikr126",
  Codeforces: "https://codeforces.com/profile/ravikr",
  Youtube: "https://www.youtube.com/@learn1percenteveryday",
};
export const DraggableTitle = "Thanks for be here!!";
export const DraggableItems = [
  {
    title: "Tyler Durden",
    image:
      "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "absolute top-4 left-[5%] sm:top-6 sm:left-[15%] lg:top-10 lg:left-[20%] rotate-[-5deg]",
  },
  {
    title: "The Narrator",
    image:
      "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "absolute top-16 left-[10%] sm:top-24 sm:left-[20%] lg:top-40 lg:left-[25%] rotate-[-7deg]",
  },
  {
    title: "Iceland",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "absolute top-2 left-[45%] sm:top-3 sm:left-[40%] lg:top-5 lg:left-[40%] rotate-[8deg]",
  },
  {
    title: "Japan",
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "absolute top-14 left-[60%] sm:top-20 sm:left-[55%] lg:top-32 lg:left-[55%] rotate-[10deg]",
  },
  {
    title: "Norway",
    image:
      "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "absolute top-8 right-[15%] sm:top-12 sm:right-[25%] lg:top-20 lg:right-[35%] rotate-[2deg]",
  },
  {
    title: "New Zealand",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "absolute top-10 left-[35%] sm:top-16 sm:left-[40%] lg:top-24 lg:left-[45%] rotate-[-7deg]",
  },
  {
    title: "Canada",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "absolute top-3 left-[25%] sm:top-5 sm:left-[28%] lg:top-8 lg:left-[30%] rotate-[4deg]",
  },
];

// Marquee section
export const MarqueeData = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Redis",
  "TailwindCSS",
  "GSAP",
  "Framer Motion",
  "Animations",
  "Design Systems",
  "UI Engineering",
  "UX",
  "Accessibility",
  "Performance",
  "System Design",
  "API Design",
  "Microservices",
  "Scalability",
  "Caching",
  "DevTools",
  "Testing",
  "SEO",
  "Open Source",
  "Cloud",
  "CI/CD",
  "AWS",
  "Data Structures and Algorithms",
];

export type Experience = {
  company: string;
  role: string;
  start: string; // ISO date or Month YYYY
  end: string;   // 'Present' or Month YYYY
  location?: string;
  highlights: string[];
  technologies?: string[];
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Senior Software Engineer",
    start: "Jan 2023",
    end: "Present",
    location: "Remote",
    highlights: [
      "Led development of high-impact features improving conversion by 15%",
      "Mentored 3 engineers and introduced code quality guidelines",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://example.com",
  },
  {
    company: "Previous Company",
    role: "Frontend Engineer",
    start: "Jun 2020",
    end: "Dec 2022",
    location: "Bengaluru, IN",
    highlights: [
      "Built component library used across 4 product teams",
      "Reduced bundle size by 28% through code-splitting and optimization",
    ],
    technologies: ["React", "Redux", "Jest", "Webpack"],
  },
];



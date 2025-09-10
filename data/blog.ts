export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO
  readingTime: string;
  summary: string;
  topics: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "my-2025-frontend-stack",
    title: "My 2025 Stack as a Frontend Developer",
    date: "2025-03-19",
    readingTime: "4 min read",
    summary: "A tuned setup that boosts productivity and code quality in 2025.",
    topics: ["frontend", "tools", "productivity"],
  },
  {
    slug: "nextjs-mdx-blog",
    title: "How to Build a Blog with Next.js and MDX",
    date: "2025-06-28",
    readingTime: "14 min read",
    summary: "A complete walkthrough to build a blazing fast MDX blog.",
    topics: ["typescript", "nextjs", "mdx"],
  },
  {
    slug: "learning-programming",
    title: "Learning Programming – Easy to Start, Hard to Master",
    date: "2024-12-16",
    readingTime: "8 min read",
    summary: "Mindset and habits that accelerate your journey.",
    topics: ["developer mindset", "productivity"],
  },
];



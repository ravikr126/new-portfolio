import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiGit,
  SiFigma,
  SiFramer,
  SiGreensock,
  SiCss3,
  SiHtml5,
  SiExpress,
  SiPython,
  SiLinux,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiNotion,
  SiSlack,
  SiMiro
} from 'react-icons/si'
import { FaReact, FaAws } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud'
  color: string
}

export const skillsData: Skill[] = [
  { name: 'React', icon: SiReact, category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, category: 'frontend', color: '#F7DF1E' },
  { name: 'TailwindCSS', icon: SiTailwindcss, category: 'frontend', color: '#06B6D4' },
  { name: 'HTML5', icon: SiHtml5, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend', color: '#1572B6' },
  { name: 'Framer Motion', icon: SiFramer, category: 'frontend', color: '#0055FF' },
  { name: 'GSAP', icon: SiGreensock, category: 'frontend', color: '#88CE02' },
  
  { name: 'Node.js', icon: SiNodedotjs, category: 'backend', color: '#339933' },
  { name: 'Express', icon: SiExpress, category: 'backend', color: '#000000' },
  { name: 'Python', icon: SiPython, category: 'backend', color: '#3776AB' },
  
  { name: 'MongoDB', icon: SiMongodb, category: 'database', color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'database', color: '#4169E1' },
  { name: 'Redis', icon: SiRedis, category: 'database', color: '#DC382D' },
  
  { name: 'Docker', icon: SiDocker, category: 'tools', color: '#2496ED' },
  { name: 'Git', icon: SiGit, category: 'tools', color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, category: 'tools', color: '#181717' },
  { name: 'VS Code', icon: VscCode, category: 'tools', color: '#007ACC' },
  { name: 'Figma', icon: SiFigma, category: 'tools', color: '#F24E1E' },
  { name: 'Notion', icon: SiNotion, category: 'tools', color: '#000000' },
  { name: 'Slack', icon: SiSlack, category: 'tools', color: '#4A154B' },
  { name: 'Miro', icon: SiMiro, category: 'tools', color: '#050038' },
  { name: 'Linux', icon: SiLinux, category: 'tools', color: '#FCC624' },
  
  { name: 'AWS', icon: FaAws, category: 'cloud', color: '#FF9900' },
  { name: 'Vercel', icon: SiVercel, category: 'cloud', color: '#000000' },
  { name: 'Netlify', icon: SiNetlify, category: 'cloud', color: '#00C7B7' },
]
import React from 'react'
import { FaHome, FaUser, FaEnvelope, FaCode, FaBriefcase } from 'react-icons/fa'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { ThemeToggle } from '@/components/theme-toggle'

type Props = {}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experience",
    link: "/experience",
    icon: <FaBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <FaEnvelope className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const MainHeader = (props: Props) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <FloatingNav navItems={navItems} />
    </>
  )
}

export default MainHeader
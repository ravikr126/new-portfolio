import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Your Name
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Full Stack Developer & UI/UX Designer
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I create beautiful, functional, and user-centered digital experiences. 
                With expertise in modern web technologies and a passion for clean code, 
                I bring ideas to life through thoughtful design and robust development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download Resume
                </button>
                
                <button className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
                  View My Work
                </button>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com"
                  className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with a variety of technologies to create amazing digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
              'Tailwind CSS', 'Git', 'Docker', 'AWS', 'Figma', 'JavaScript'
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
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
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
                    A brief description of the project and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind'].map((tech) => (
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
    </main>
  )
}
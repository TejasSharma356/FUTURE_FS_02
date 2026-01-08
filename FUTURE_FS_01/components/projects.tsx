"use client"

import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      name: "Bugless-AI",
      description:
        "AI-powered code analysis platform that automates the process of reviewing, debugging, and optimizing software code. Leverages large language models to identify logical errors, security vulnerabilities, and performance bottlenecks.",
      technologies: ["React", "TypeScript", "Node.js", "AI/ML"],
      period: "Oct 2025 - Nov 2025",
      github: "https://github.com/TejasSharma356/Bugless-AI",
      color: "from-primary/10 to-accent/10",
      borderColor: "border-primary/30",
    },
    {
      name: "Athlos",
      description:
        "Gamified fitness application that turns real-world running into an interactive, map-based game. Tracks live GPS movement and integrates Spring Boot REST APIs for user data, goals, and leaderboards.",
      technologies: ["React", "TypeScript", "Spring Boot", "Maps API"],
      period: "Aug 2025 - Oct 2025",
      github: "https://github.com/TejasSharma356/Athlos",
      role: "Frontend Lead",
      color: "from-accent/10 to-primary/5",
      borderColor: "border-accent/30",
    },
    {
      name: "Resume Builder",
      description:
        "Full-stack application for creating, editing, and exporting professional resumes. Features React frontend with Firebase authentication and dynamic template system for customizable resume designs.",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      period: "Sep 2025",
      github: "https://github.com/TejasSharma356/Resume-Builder",
      color: "from-primary/5 to-accent/10",
      borderColor: "border-primary/20",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-base md:text-lg text-muted-foreground">Crafted with modern tech and attention to detail</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative rounded-xl overflow-hidden border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
            >
              <div className="p-7 flex flex-col h-full">
                <div className="mb-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {project.name}
                    </h3>
                  </div>
                  {project.role && (
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider">{project.role}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">{project.period}</p>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/15 text-primary text-xs rounded-full font-medium hover:bg-primary/25 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold text-sm group/link"
                >
                  <Github className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

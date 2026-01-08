export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Web Developer",
      company: "Future Interns",
      period: "Present",
      description:
        "Building full-stack applications with React, TypeScript, and Node.js. Contributing to the development of internal tools and client-facing applications.",
      technologies: ["React", "TypeScript", "Node.js", "Spring Boot"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/20 p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-semibold text-accent">{exp.period}</span>
              </div>
              <p className="text-primary font-semibold mb-4 text-lg">{exp.company}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-primary/12 text-primary text-sm rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

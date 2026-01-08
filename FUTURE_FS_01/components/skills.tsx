"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "React Native", "TypeScript", "JavaScript", "HTML/CSS", "Redux", "Tailwind CSS"],
      icon: "🎨",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Spring Boot", "REST APIs", "SQL", "Firebase"],
      icon: "⚙️",
    },
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "Python", "C++", "C"],
      icon: "📝",
    },
    {
      category: "Tools & Others",
      skills: ["Figma", "Git", "GitHub", "VS Code", "Postman"],
      icon: "🛠️",
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Skills</h2>
          <p className="text-base md:text-lg text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/20 p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-7">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/12 text-primary text-sm rounded-lg hover:bg-primary/20 hover:scale-105 transition-all duration-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

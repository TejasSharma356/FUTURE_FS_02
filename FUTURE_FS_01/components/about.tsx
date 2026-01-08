"use client"

import { MapPin, Briefcase, GraduationCap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Full stack developer passionate about building great products
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a Full Stack Web Developer with a passion for creating dynamic, user-centric applications. Currently,
              I'm an intern at Future Interns, where I work on full-stack development projects using modern technologies
              like React, TypeScript, and Spring Boot.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              learning about emerging trends in web development. I'm always excited to collaborate with talented teams
              and work on challenging projects that make an impact.
            </p>
          </div>

          <div className="space-y-4">
            <div className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Location</h3>
              </div>
              <p className="text-foreground font-semibold">Delhi, India</p>
            </div>

            <div className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Currently</h3>
              </div>
              <p className="text-foreground font-semibold">Full Stack Developer</p>
              <p className="text-sm text-muted-foreground">at Future Interns</p>
            </div>

            <div className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Education</h3>
              </div>
              <p className="text-foreground font-semibold">B.Tech in CS</p>
              <p className="text-sm text-muted-foreground">SRM Institute, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

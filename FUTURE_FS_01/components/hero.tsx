export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">Tejas Sharma</h1>
              <p className="text-xl md:text-2xl text-accent font-semibold">Full Stack Web Developer</p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm a passionate full-stack web developer based in Delhi, specializing in building modern, responsive
              applications with React, TypeScript, and Node.js. I love transforming ideas into clean, efficient code and
              creating seamless user experiences.
            </p>

            <div className="flex gap-4 pt-6 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl hover:shadow-primary/30"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-accent/50 text-accent rounded-lg hover:bg-accent/10 hover:border-accent transition-all duration-300 font-semibold text-sm md:text-base"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl rounded-full scale-110"></div>
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-primary/60 shadow-2xl">
                <img src="/profile.png" alt="Tejas Sharma profile picture" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

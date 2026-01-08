export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">© {currentYear} Tejas Sharma. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/TejasSharma356"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">•</span>
          <a
            href="https://linkedin.com/in/tejassharmaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border">•</span>
          <a
            href="mailto:tejassharma356@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

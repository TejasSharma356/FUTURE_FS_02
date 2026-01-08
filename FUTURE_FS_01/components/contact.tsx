import ContactForm from "./contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out using the form
          below or contact me directly!
        </p>

        {/* Contact Form */}
        <div className="bg-card/50 border border-border rounded-lg p-8 mb-12">
          <ContactForm />
        </div>

        {/* Quick Contact Links */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <a
            href="mailto:tejassharma356@gmail.com"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-center"
          >
            Send Me an Email
          </a>
          <a
            href="https://linkedin.com/in/tejassharmaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium text-center"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com/TejasSharma356"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tejassharmaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tejassharma356@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

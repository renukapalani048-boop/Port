import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <p className="text-center text-sm italic text-muted-foreground">
          Driven by curiosity. Powered by code.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:renukapalani048@gmail.com"
            className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/renu-p-b72b9b2a6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="rounded-lg border border-border bg-card p-2.5 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground/60">
          {"Renuka Palani \u00A9 2026. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}

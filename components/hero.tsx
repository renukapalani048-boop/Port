"use client"

import { ArrowDown, Download, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase animate-fade-in-up">
          Aspiring Web Developer
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Renuka Palani
        </h1>
        <p className="mb-3 text-lg text-muted-foreground sm:text-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Final-Year CSE Student
        </p>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Developing secure, scalable and user-focused digital solutions.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#project"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
      </div>
    </section>
  )
}

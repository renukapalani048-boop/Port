"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-col md:flex-row">
      {/* Left: Beige Panel */}
      <div className="flex w-full flex-col justify-center bg-[#F5F1E8] px-8 py-24 md:w-3/5 md:px-16">
        <h1 className="animate-float text-balance text-5xl font-bold tracking-tight text-[#2E2E2E] sm:text-6xl lg:text-7xl">
          {"<RENUKA P>"}
        </h1>
        <h2 className="animate-float-slower mt-4 text-2xl font-medium text-[#2E2E2E]/80 sm:text-3xl lg:text-4xl">
          Aspiring Web Developer
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-[#2E2E2E]/60">
          Final-year CSE student with a strong foundation in web technologies, building secure and scalable digital solutions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://drive.google.com/file/d/1nYzOewT4u_nvEZwB_pG-R2F3uB3037b9/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#6F5E53] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5A4E43]"
          >
            Resume
          </a>
          <a
            href="mailto:renukapalani048@gmail.com"
            className="rounded-md bg-[#6F5E53] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5A4E43]"
          >
            Contact
          </a>
          <a
            href="#projects"
            className="rounded-md border border-[#6F5E53]/30 bg-transparent px-6 py-3 text-sm font-semibold text-[#6F5E53] transition-colors hover:bg-[#6F5E53]/10"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Right: Dark Panel */}
      <div className="flex w-full flex-col items-center justify-center bg-[#1C1C1C] px-8 py-20 md:w-2/5 md:px-16">
        <p className="max-w-xs text-center text-xl italic leading-relaxed text-[#F2F2F2] sm:text-2xl">
          Building Secure and Scalable Digital Systems.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 text-[#F2F2F2]/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

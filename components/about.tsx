"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { GraduationCap, MapPin, Target } from "lucide-react"

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-6 py-24 lg:py-32"
    >
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
          About Me
        </p>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Who I Am
        </h2>

        <div className="mb-10 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Final-year B.E. Computer Science Engineering student at Government College of Engineering, Bodinayakanur with a CGPA of 7.26. I have a strong foundation in HTML, CSS, and JavaScript with knowledge of Python and C basics.
          </p>
          <p>
            I completed a Web Technologies internship at Adviyo Technologies and developed a QR-based smart hostel management system as my final year project. My interests span Web Development, Backend Systems, and Cloud Technologies.
          </p>
          <p>
            I am seeking an entry-level IT role in Bangalore to contribute my technical skills and grow professionally in the industry.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">B.E. in CSE</p>
              <p className="text-xs text-muted-foreground">GCE Bodinayakanur &middot; CGPA 7.26</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Web Development</p>
              <p className="text-xs text-muted-foreground">Frontend, Backend & Cloud</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Bangalore</p>
              <p className="text-xs text-muted-foreground">Seeking entry-level roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Cpu, Zap, Globe } from "lucide-react"

const projects = [
  {
    icon: Cpu,
    title: "Smart Home Management System",
    description: "Arduino-based automation with sensor integration. Implemented device control logic for seamless home automation.",
    tags: ["Arduino", "Sensors", "IoT"],
  },
  {
    icon: Zap,
    title: "Footstep Power Generator",
    description: "Prototype converting mechanical energy into electrical energy. Focused on sustainable energy concept and practical implementation.",
    tags: ["Hardware", "Energy", "Prototype"],
  },
  {
    icon: Globe,
    title: "Responsive Website Projects",
    description: "Developed responsive websites using HTML, CSS, and JavaScript. Designed structured UI and clean navigation systems.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
]

export function OtherProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <div ref={ref} className="px-6 pb-24">
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
          Other Projects
        </p>
        <h3 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          More Work
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <project.icon className="mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <h4 className="mb-2 text-sm font-semibold text-foreground">{project.title}</h4>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

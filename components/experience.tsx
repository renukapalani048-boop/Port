"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Briefcase, Award } from "lucide-react"

const experiences = [
  {
    role: "Web Technologies Intern",
    company: "Adviyo Technologies",
    points: [
      "Developed responsive web pages",
      "Worked with HTML, CSS, JavaScript",
      "Assisted in UI design and structure",
    ],
  },
  {
    role: "Junior Technician",
    company: "Tata Electronics",
    points: [
      "Quality inspection and digital documentation",
      "Process monitoring and reporting",
    ],
  },
]

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    badge: "Elite",
  },
  {
    title: "Big Data Computing",
    issuer: "NPTEL",
    badge: "Elite",
  },
]

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section
      id="experience"
      ref={ref}
      className="relative px-6 py-24 lg:py-32"
    >
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Experience */}
        <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
          Experience
        </p>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Work & Internship
        </h2>

        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute top-0 left-3 h-full w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.role} className="relative pl-10">
                {/* Timeline dot */}
                <div className="absolute top-1 left-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <div className="rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30">
                  <div className="mb-1 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
                  </div>
                  <p className="mb-3 text-xs text-primary/70">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
          Certifications & Activities
        </p>
        <h3 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Achievements
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30"
            >
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">{cert.title}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <span className="mt-2 inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30 sm:col-span-2">
            <div className="mt-0.5 h-5 w-5 shrink-0 text-primary">NSS</div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">NSS Volunteer</h4>
              <p className="text-xs text-muted-foreground">
                Active participation in social service initiatives, community engagement, and teamwork activities through the National Service Scheme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

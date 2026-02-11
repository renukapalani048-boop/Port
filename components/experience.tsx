"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Briefcase, Award, Heart, ExternalLink } from "lucide-react"

const experiences = [
  {
    role: "Web Technologies Intern",
    company: "Adviyo Technologies",
    duration: "Internship",
    description:
      "Built responsive web pages & assisted UI structuring using HTML, CSS, and JavaScript. Gained hands-on experience with front-end development workflows.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    role: "Junior Technician",
    company: "Tata Electronics",
    duration: "Industrial",
    description:
      "Quality inspections, digital documentation, and process monitoring & reporting. Developed attention to detail and systematic documentation practices.",
    skills: ["Documentation", "Quality Assurance", "Process Monitoring"],
  },
]

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    badge: "Elite",
    detail: "Covered cloud architectures, virtualization, and deployment models",
  },
  {
    title: "Big Data Computing",
    issuer: "NPTEL",
    badge: "Elite",
    detail: "Hadoop ecosystem, MapReduce, and distributed data processing",
  },
]

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="experience" ref={ref} className="bg-[#1C1C1C] px-8 py-16 md:px-16">
      <div
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="mb-2 text-3xl font-bold text-[#F2F2F2] sm:text-4xl">
          Experience & Certifications
        </h2>
        <p className="mb-10 text-sm text-[#F2F2F2]/40">
          Professional exposure and recognized courses
        </p>

        {/* Experience */}
        <div className="mb-10 space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="rounded-lg bg-[#F2F2F2]/5 p-5 transition-colors hover:bg-[#F2F2F2]/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6F5E53]/20">
                  <Briefcase className="h-5 w-5 text-[#F5F1E8]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-[#F2F2F2]">
                        {exp.role}
                      </h4>
                      <p className="mt-0.5 text-sm font-medium text-[#6F5E53]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#F2F2F2]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#F2F2F2]/60">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#F2F2F2]/55">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded bg-[#6F5E53]/15 px-2 py-0.5 text-[10px] font-semibold text-[#F5F1E8]/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications heading */}
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#F2F2F2]">
          <Award className="h-5 w-5 text-[#6F5E53]" />
          Certifications
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-lg bg-[#F2F2F2]/5 p-5 transition-colors hover:bg-[#F2F2F2]/10"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#F2F2F2]">{cert.title}</h4>
                  <p className="text-xs text-[#F2F2F2]/50">{cert.issuer}</p>
                </div>
                <span className="shrink-0 rounded-md bg-[#6F5E53]/30 px-2 py-0.5 text-[10px] font-bold text-[#F5F1E8]">
                  {cert.badge}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#F2F2F2]/40">
                {cert.detail}
              </p>
            </div>
          ))}
        </div>

        {/* NSS */}
        <div className="mt-4 rounded-lg bg-[#F2F2F2]/5 p-5 transition-colors hover:bg-[#F2F2F2]/10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6F5E53]/20">
              <Heart className="h-5 w-5 text-[#F5F1E8]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F2F2F2]">NSS Volunteer</h4>
              <p className="mt-0.5 text-xs font-medium text-[#6F5E53]">
                National Service Scheme
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#F2F2F2]/55">
                Active participation in social service initiatives, community
                engagement, and teamwork activities. Developed leadership and
                organizational skills through community outreach programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

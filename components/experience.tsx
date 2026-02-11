"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Briefcase, Award, Heart } from "lucide-react"

const experiences = [
  {
    role: "Web Technologies Intern",
    company: "Adviyo Technologies",
    description: "Built responsive web pages & assisted UI structuring using HTML, CSS, and JavaScript.",
  },
  {
    role: "Junior Technician",
    company: "Tata Electronics",
    description: "Quality inspections, digital documentation, and process monitoring & reporting.",
  },
]

const certifications = [
  { title: "Cloud Computing", issuer: "NPTEL", badge: "Elite" },
  { title: "Big Data Computing", issuer: "NPTEL", badge: "Elite" },
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
        <h2 className="mb-10 text-3xl font-bold text-[#F2F2F2] sm:text-4xl">
          Experience & Certifications
        </h2>

        {/* Experience */}
        <div className="mb-10 space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="flex items-start gap-4 rounded-lg bg-[#F2F2F2]/5 p-5 transition-colors hover:bg-[#F2F2F2]/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6F5E53]/20">
                <Briefcase className="h-5 w-5 text-[#F5F1E8]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#F2F2F2]">{exp.role}</h4>
                <p className="mt-0.5 text-sm font-medium text-[#6F5E53]">{exp.company}</p>
                <p className="mt-2 text-sm text-[#F2F2F2]/60">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-4 rounded-lg bg-[#F2F2F2]/5 p-5 transition-colors hover:bg-[#F2F2F2]/10"
            >
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-[#F5F1E8]" />
              <div>
                <h4 className="text-sm font-bold text-[#F2F2F2]">{cert.title}</h4>
                <p className="text-xs text-[#F2F2F2]/50">{cert.issuer}</p>
                <span className="mt-2 inline-block rounded-md bg-[#6F5E53]/30 px-2 py-0.5 text-[10px] font-bold text-[#F5F1E8]">
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* NSS */}
        <div className="mt-4 flex items-start gap-4 rounded-lg bg-[#F2F2F2]/5 p-5 transition-colors hover:bg-[#F2F2F2]/10">
          <Heart className="mt-0.5 h-5 w-5 shrink-0 text-[#F5F1E8]" />
          <div>
            <h4 className="text-sm font-bold text-[#F2F2F2]">NSS Volunteer</h4>
            <p className="mt-1 text-sm text-[#F2F2F2]/60">
              Active participation in social service initiatives, community engagement, and teamwork activities through the National Service Scheme.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

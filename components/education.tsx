"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { GraduationCap, School } from "lucide-react"

const educationItems = [
  {
    icon: GraduationCap,
    title: "B.E. Computer Science Engineering",
    subtitle: "Government College of Engineering, Bodinayakanur",
    detail: "CGPA: 7.26",
  },
  {
    icon: School,
    title: "HSC (Higher Secondary)",
    subtitle: "12th Standard",
    detail: "85.67%",
  },
  {
    icon: School,
    title: "SSLC",
    subtitle: "10th Standard",
    detail: "92.2%",
  },
]

export function Education() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="education" ref={ref} className="bg-[#F5F1E8] px-8 py-16 md:px-16">
      <div
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="mb-10 text-3xl font-bold text-[#2E2E2E] sm:text-4xl">
          Education
        </h2>

        <div className="space-y-5">
          {educationItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-lg bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6F5E53]/10">
                <item.icon className="h-5 w-5 text-[#6F5E53]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#2E2E2E]">{item.title}</h4>
                <p className="mt-0.5 text-sm text-[#2E2E2E]/60">{item.subtitle}</p>
                <span className="mt-2 inline-block rounded-md bg-[#6F5E53]/10 px-2.5 py-0.5 text-xs font-bold text-[#6F5E53]">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

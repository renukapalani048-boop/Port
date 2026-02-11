"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    category: "Programming",
    skills: ["Python", "C", "Java"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "MySQL"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Visual Studio", "Linux"],
  },
  {
    category: "Productivity",
    skills: ["MS Word", "MS Excel", "MS PowerPoint"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Logical Thinking", "Team Collaboration", "Adaptability"],
  },
]

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  const [activeCategory, setActiveCategory] = useState("Frontend")

  const activeSkills = skillCategories.find((c) => c.category === activeCategory)

  return (
    <section
      id="skills"
      ref={ref}
      className="relative px-6 py-24 lg:py-32"
    >
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
          Skills
        </p>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical Proficiency
        </h2>

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              type="button"
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeCategory === cat.category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {activeSkills?.skills.map((skill) => (
            <div
              key={skill}
              className="group flex items-center justify-center rounded-lg border border-border bg-card p-4 text-center transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

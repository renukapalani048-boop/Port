"use client"

import {
  SiFlutter,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiMysql,
  SiC,
  SiJava,
  SiVisualstudiocode,
  SiLinux,
  SiGit,
} from "react-icons/si"

interface Skill {
  name: string
  icon: React.ReactNode
}

const skills: Skill[] = [
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Python", icon: <SiPython /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "C", icon: <SiC /> },
  { name: "Java", icon: <SiJava /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Git", icon: <SiGit /> },
]

const categories = [
  { label: "Languages", items: ["JavaScript", "Python", "Java", "C"] },
  { label: "Frontend", items: ["HTML5", "CSS3", "Flutter"] },
  { label: "Backend & DB", items: ["Node.js", "MySQL"] },
  { label: "Tools", items: ["Git", "VS Code", "Linux"] },
]

export function SkillsTicker() {
  return (
    <section id="skills" className="bg-[#1C1C1C] px-8 py-14 md:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-3xl font-bold text-[#F2F2F2] sm:text-4xl">
          Skills & Tools
        </h2>
        <p className="mb-8 text-sm text-[#F2F2F2]/50">
          Technologies I work with
        </p>

        {/* Category pills */}
        <div className="mb-8 flex flex-wrap gap-6">
          {categories.map((cat) => (
            <div key={cat.label}>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#6F5E53]">
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-[#F2F2F2]/8 px-2.5 py-1 text-xs font-medium text-[#F2F2F2]/80 transition-all duration-300 hover:bg-[#F2F2F2]/15 hover:text-[#F2F2F2]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="overflow-hidden border-t border-b border-[#F2F2F2]/8 py-5">
        <div className="flex animate-scroll-left items-center" style={{ width: "max-content" }}>
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="mx-6 flex shrink-0 items-center gap-2.5 transition duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center text-[#6F5E53]">
                {skill.icon}
              </div>
              <span className="whitespace-nowrap text-base font-medium text-[#F5F1E8]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

const skills = [
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
]

export function SkillsTicker() {
  return (
    <section className="overflow-hidden bg-[#1C1C1C] py-6">
      <div className="flex animate-scroll-left items-center" style={{ width: "max-content" }}>
        {/* Duplicate the list for seamless loop */}
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="mx-6 flex shrink-0 items-center gap-2"
          >
            <img
              src={skill.logo || "/placeholder.svg"}
              alt={skill.name}
              className="h-7 w-7"
              loading="lazy"
            />
            <span className="whitespace-nowrap text-base font-medium text-[#F5F1E8]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

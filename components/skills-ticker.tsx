"use client"

const skills = [
  { name: "Flutter", logo: "https://svglogos.vercel.app/flutter.svg" },
  { name: "Node.js", logo: "https://svglogos.vercel.app/nodejs.svg" },
  { name: "JavaScript", logo: "https://svglogos.vercel.app/javascript.svg" },
  { name: "HTML5", logo: "https://svglogos.vercel.app/html.svg" },
  { name: "CSS3", logo: "https://svglogos.vercel.app/css.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
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
              <img
                src={skill.logo}
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
      </div>
    </section>
  )
}

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SkillsTicker } from "@/components/skills-ticker"
import { Projects } from "@/components/projects"
import { SystemLogs } from "@/components/system-logs"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsTicker />
        <Projects />
        <SystemLogs />
        <Education />
        <Experience />
      </main>
      <Contact />
    </>
  )
}

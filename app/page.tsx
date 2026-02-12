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
    <div className="relative min-h-screen">
      {/* Fixed tech background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

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
    </div>
  )
}

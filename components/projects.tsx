"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  ChevronDown,
  ChevronUp,
  Shield,
  QrCode,
  Smartphone,
  Database,
  Server,
  Users,
  Clock,
  CheckCircle2,
  Cpu,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react"

const coreFeatures = [
  { icon: Smartphone, text: "Student leave application via mobile app" },
  { icon: Users, text: "Deputy warden and principal online approval" },
  { icon: QrCode, text: "Time-bound QR code generation" },
  { icon: CheckCircle2, text: "QR-based entry/exit validation at gate" },
  { icon: Clock, text: "Emergency leave extension via parent request" },
  { icon: Database, text: "Real-time database validation" },
  { icon: Server, text: "Digital record storage and monitoring dashboard" },
]

const securityFeatures = [
  "OTP verification for parents",
  "Time-limited QR code access",
  "Server-side validation before entry approval",
  "Access denied for expired or invalid QR codes",
]

const learnings = [
  "Full-stack system design",
  "Role-based authentication",
  "Backend API handling",
  "Database management",
  "Real-time QR validation logic",
  "Secure digital workflow implementation",
]

const otherProjects = [
  {
    icon: Cpu,
    title: "Smart Home Management System",
    description:
      "Arduino-based automation with sensor integration. Implemented device control logic for seamless home automation.",
    tags: ["Arduino", "Sensors", "IoT"],
    status: "Completed",
  },
  {
    icon: Zap,
    title: "Footstep Power Generator",
    description:
      "Prototype converting mechanical energy into electrical energy. Focused on sustainable energy concept.",
    tags: ["Hardware", "Energy", "Prototype"],
    status: "Completed",
  },
  {
    icon: Globe,
    title: "Responsive Websites",
    description:
      "Developed responsive websites using HTML, CSS, and JavaScript with clean navigation systems.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Ongoing",
  },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggle = (section: string) =>
    setExpandedSection(expandedSection === section ? null : section)

  return (
    <section id="projects" ref={ref} className="bg-[#F5F1E8] px-8 py-16 md:px-16">
      <div
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#2E2E2E] sm:text-4xl">Projects</h2>
            <p className="mt-1 text-sm text-[#2E2E2E]/50">
              Highlights from academic and personal work
            </p>
          </div>
          <span className="hidden text-xs text-[#2E2E2E]/30 sm:block">
            {`${otherProjects.length + 1} projects`}
          </span>
        </div>

        {/* Main Project Card */}
        <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-md">
          {/* Header bar */}
          <div className="flex items-center justify-between bg-[#1C1C1C] px-6 py-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F5F1E8]/60">
              Final Year Project
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-0.5 text-[10px] font-bold text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Active
            </span>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              {/* QR illustration */}
              <div className="flex h-48 w-full shrink-0 flex-col items-center justify-center rounded-lg bg-[#1C1C1C] md:w-48">
                <QrCode className="h-16 w-16 text-[#F5F1E8]" />
                <span className="mt-2 text-[10px] tracking-wider text-[#F5F1E8]/40">
                  SCAN TO ENTER
                </span>
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-2xl font-bold text-[#2E2E2E]">
                  Hostel Entry Authorization App
                </h3>
                <p className="mb-1 text-xs font-medium text-[#6F5E53]">
                  Govt. College of Engineering, Bodinayakanur
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#2E2E2E]/65">
                  Secure QR-based digital leave & entry management system replacing
                  manual approvals. Built for multi-role usage: students apply,
                  wardens and principals approve, and gate security validates
                  time-bound QR codes at entry/exit points.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Node.js", "MySQL", "ZXing", "OTP Auth", "RBAC"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[#6F5E53]/10 px-3 py-1 text-xs font-semibold text-[#6F5E53]"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Expandable sections */}
            <div className="mt-6 space-y-2">
              {/* Core Features */}
              <div className="overflow-hidden rounded-lg border border-[#2E2E2E]/10">
                <button
                  type="button"
                  onClick={() => toggle("features")}
                  className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-[#F5F1E8]/50"
                >
                  <span className="flex items-center gap-2">
                    <QrCode className="h-4 w-4 text-[#6F5E53]" />
                    <span className="text-sm font-semibold text-[#2E2E2E]">
                      Core Features
                    </span>
                    <span className="rounded bg-[#6F5E53]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#6F5E53]">
                      {coreFeatures.length}
                    </span>
                  </span>
                  {expandedSection === "features" ? (
                    <ChevronUp className="h-4 w-4 text-[#2E2E2E]/50" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-[#2E2E2E]/50" />
                  )}
                </button>
                {expandedSection === "features" && (
                  <div className="border-t border-[#2E2E2E]/10 px-4 py-4">
                    <ul className="space-y-2.5">
                      {coreFeatures.map((f) => (
                        <li key={f.text} className="flex items-start gap-3">
                          <f.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#6F5E53]" />
                          <span className="text-sm text-[#2E2E2E]/70">{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Security Features */}
              <div className="overflow-hidden rounded-lg border border-[#2E2E2E]/10">
                <button
                  type="button"
                  onClick={() => toggle("security")}
                  className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-[#F5F1E8]/50"
                >
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#6F5E53]" />
                    <span className="text-sm font-semibold text-[#2E2E2E]">
                      Security Features
                    </span>
                    <span className="rounded bg-[#6F5E53]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#6F5E53]">
                      {securityFeatures.length}
                    </span>
                  </span>
                  {expandedSection === "security" ? (
                    <ChevronUp className="h-4 w-4 text-[#2E2E2E]/50" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-[#2E2E2E]/50" />
                  )}
                </button>
                {expandedSection === "security" && (
                  <div className="border-t border-[#2E2E2E]/10 px-4 py-4">
                    <ul className="space-y-2">
                      {securityFeatures.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6F5E53]" />
                          <span className="text-sm text-[#2E2E2E]/70">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Learning Outcomes */}
              <div className="overflow-hidden rounded-lg border border-[#2E2E2E]/10">
                <button
                  type="button"
                  onClick={() => toggle("learning")}
                  className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-[#F5F1E8]/50"
                >
                  <span className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-[#6F5E53]" />
                    <span className="text-sm font-semibold text-[#2E2E2E]">
                      Learning Outcomes
                    </span>
                    <span className="rounded bg-[#6F5E53]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#6F5E53]">
                      {learnings.length}
                    </span>
                  </span>
                  {expandedSection === "learning" ? (
                    <ChevronUp className="h-4 w-4 text-[#2E2E2E]/50" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-[#2E2E2E]/50" />
                  )}
                </button>
                {expandedSection === "learning" && (
                  <div className="border-t border-[#2E2E2E]/10 px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      {learnings.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-[#F5F1E8] px-3 py-1.5 text-xs font-medium text-[#2E2E2E]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid gap-5 sm:grid-cols-3">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-lg bg-white p-5 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between">
                <project.icon className="h-6 w-6 text-[#6F5E53] transition-transform group-hover:scale-110" />
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    project.status === "Ongoing"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h4 className="mb-2 text-sm font-bold text-[#2E2E2E]">
                {project.title}
              </h4>
              <p className="mb-4 flex-1 text-xs leading-relaxed text-[#2E2E2E]/60">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[#F5F1E8] px-2 py-0.5 text-[10px] font-semibold text-[#2E2E2E]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/renukapalani048-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6F5E53] transition-colors hover:text-[#5A4E43]"
          >
            View more on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

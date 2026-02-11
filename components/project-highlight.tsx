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
} from "lucide-react"

const techStack = [
  { name: "Flutter", desc: "Mobile App" },
  { name: "Node.js", desc: "Backend" },
  { name: "MySQL", desc: "Database" },
  { name: "ZXing", desc: "QR Library" },
]

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

export function ProjectHighlight() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggle = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section
      id="project"
      ref={ref}
      className="relative px-6 py-24 lg:py-32"
    >
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
          Featured Project
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hostel Entry Authorization App
        </h2>
        <p className="mb-2 font-mono text-xs text-primary/70">Using QR Code</p>

        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Developed a secure, digital hostel leave and entry management system that replaces manual paper-based processes with a QR-code-based automated system.
        </p>

        {/* Tech Stack */}
        <div className="mb-8 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 transition-all hover:border-primary/40 hover:bg-primary/10"
            >
              <p className="text-sm font-semibold text-primary">{tech.name}</p>
              <p className="text-xs text-muted-foreground">{tech.desc}</p>
            </div>
          ))}
          <div className="rounded-lg border border-border bg-card px-4 py-2">
            <p className="text-sm font-semibold text-foreground">OTP Auth</p>
            <p className="text-xs text-muted-foreground">Verification</p>
          </div>
          <div className="rounded-lg border border-border bg-card px-4 py-2">
            <p className="text-sm font-semibold text-foreground">RBAC</p>
            <p className="text-xs text-muted-foreground">Access Control</p>
          </div>
        </div>

        {/* Expandable sections */}
        <div className="space-y-3">
          {/* Core Features */}
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => toggle("features")}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-secondary/50"
            >
              <span className="flex items-center gap-3">
                <QrCode className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Core Features</span>
              </span>
              {expandedSection === "features" ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            {expandedSection === "features" && (
              <div className="border-t border-border px-5 py-4">
                <ul className="space-y-3">
                  {coreFeatures.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <feature.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Security Features */}
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => toggle("security")}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-secondary/50"
            >
              <span className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Security Features</span>
              </span>
              {expandedSection === "security" ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            {expandedSection === "security" && (
              <div className="border-t border-border px-5 py-4">
                <ul className="space-y-2">
                  {securityFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      <span className="text-sm text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Learning Outcome */}
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => toggle("learning")}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-secondary/50"
            >
              <span className="flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Learning Outcomes</span>
              </span>
              {expandedSection === "learning" ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            {expandedSection === "learning" && (
              <div className="border-t border-border px-5 py-4">
                <div className="flex flex-wrap gap-2">
                  {learnings.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
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
    </section>
  )
}

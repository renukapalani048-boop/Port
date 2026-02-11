"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Terminal } from "lucide-react"

const logs = [
  { time: "10:02 AM", message: "Student leave request submitted", tag: "Flutter", type: "info" },
  { time: "10:03 AM", message: "Parent OTP verification sent", tag: "Auth", type: "info" },
  { time: "10:05 AM", message: "Deputy Warden approved request", tag: "RBAC", type: "success" },
  { time: "10:07 AM", message: "Principal approval granted", tag: "RBAC", type: "success" },
  { time: "10:08 AM", message: "QR Code generated (expires 11:00 PM)", tag: "ZXing", type: "info" },
  { time: "06:30 PM", message: "QR scanned at hostel entry gate", tag: "Scanner", type: "info" },
  { time: "06:30 PM", message: "Server-side validation passed", tag: "Node.js", type: "success" },
  { time: "06:30 PM", message: "Access GRANTED \u2014 Entry recorded in database", tag: "MySQL", type: "success" },
]

export function SystemLogs() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, 0.3)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    setVisibleCount(0)
    const timers: NodeJS.Timeout[] = []
    logs.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCount((c) => c + 1), (i + 1) * 500))
    })
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <section ref={ref} className="bg-[#1C1C1C] px-8 py-14 md:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-[#6F5E53]" />
          <h3 className="text-xl font-bold text-[#F2F2F2] sm:text-2xl">
            System Activity Logs
          </h3>
          <span className="text-xs text-[#F2F2F2]/30">
            \u2014 Hostel Entry Auth App
          </span>
        </div>

        {/* Terminal window */}
        <div className="overflow-hidden rounded-lg border border-[#F2F2F2]/8">
          {/* Title bar */}
          <div className="flex items-center gap-2 bg-[#161616] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-3 text-[10px] text-[#F2F2F2]/30 font-mono">
              auth-system.log
            </span>
          </div>

          {/* Log content */}
          <div className="h-64 overflow-y-auto bg-[#0D0D0D] p-5 font-mono text-sm">
            {logs.slice(0, visibleCount).map((log, i) => (
              <p
                key={i}
                className="log-entry mb-2.5 flex flex-wrap items-center gap-x-2"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="text-[#F2F2F2]/30">[{log.time}]</span>
                <span
                  className={
                    log.type === "success"
                      ? "text-green-400/90"
                      : "text-[#F2F2F2]/80"
                  }
                >
                  {log.message}
                </span>
                <span className="inline-block rounded bg-[#6F5E53]/25 px-1.5 py-0.5 text-[10px] font-semibold text-[#F5F1E8]/60">
                  {log.tag}
                </span>
              </p>
            ))}
            {visibleCount >= logs.length && (
              <p className="log-entry mt-4 text-[#6F5E53]">
                {">"} All systems operational. Awaiting next request...
                <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-[#6F5E53]" />
              </p>
            )}
            {visibleCount === 0 && isInView && (
              <p className="animate-pulse text-[#F2F2F2]/30">
                {">"} Initializing system logs...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

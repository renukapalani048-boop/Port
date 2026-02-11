"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const logs = [
  { time: "10:02 AM", message: "Student leave request submitted", tag: "Flutter" },
  { time: "10:05 AM", message: "Deputy Warden approved request", tag: "Auth" },
  { time: "10:07 AM", message: "Principal approval granted", tag: "RBAC" },
  { time: "10:08 AM", message: "QR Code generated successfully", tag: "ZXing" },
  { time: "06:30 PM", message: "QR scanned at hostel entry", tag: "Scanner" },
  { time: "06:30 PM", message: "Access granted \u2014 Entry recorded", tag: "MySQL" },
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
      timers.push(setTimeout(() => setVisibleCount((c) => c + 1), (i + 1) * 400))
    })
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <section ref={ref} className="bg-[#1C1C1C] px-8 py-12 md:px-16">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-5 text-xl font-bold text-[#F2F2F2] sm:text-2xl">
          System Activity Logs
        </h3>
        <div className="h-56 overflow-y-auto rounded-lg bg-[#161616] p-5 font-mono text-sm">
          {logs.slice(0, visibleCount).map((log, i) => (
            <p
              key={i}
              className="log-entry mb-2 text-[#F2F2F2]/90"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-[#F2F2F2]/40">[{log.time}]</span>{" "}
              {log.message}{" "}
              <span className="ml-1 inline-block rounded bg-[#6F5E53]/30 px-1.5 py-0.5 text-[10px] font-semibold text-[#F5F1E8]/70">
                {log.tag}
              </span>
            </p>
          ))}
          {visibleCount >= logs.length && (
            <p className="log-entry mt-3 text-[#6F5E53]">
              {">"} All systems operational. Awaiting next request...
            </p>
          )}
          {visibleCount === 0 && isInView && (
            <p className="animate-pulse text-[#F2F2F2]/30">Initializing logs...</p>
          )}
        </div>
      </div>
    </section>
  )
}

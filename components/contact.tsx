"use client"

import React from "react"
import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react"

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:renukapalani048@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.open(mailtoLink, "_blank")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <footer id="contact" ref={ref} className="bg-[#1C1C1C] px-8 py-16 md:px-16">
      <div
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Contact card */}
        <div className="mx-auto max-w-lg rounded-lg bg-[#F5F1E8] p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#2E2E2E]">Contact Me</h3>
          <p className="mt-2 text-sm font-semibold text-[#2E2E2E]">
            {"I'm open to entry-level developer opportunities in Bangalore."}
          </p>

          {/* Contact details */}
          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#6F5E53]/10">
                <Mail className="h-4 w-4 text-[#6F5E53]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#2E2E2E]/40">
                  Email
                </p>
                <a
                  href="mailto:renukapalani048@gmail.com"
                  className="text-sm font-medium text-[#6F5E53] underline transition-colors hover:text-[#5A4E43]"
                >
                  renukapalani048@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#6F5E53]/10">
                <Phone className="h-4 w-4 text-[#6F5E53]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#2E2E2E]/40">
                  Phone
                </p>
                <a
                  href="tel:+918248839603"
                  className="text-sm font-medium text-[#6F5E53] underline transition-colors hover:text-[#5A4E43]"
                >
                  +91-8248839603
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#6F5E53]/10">
                <MapPin className="h-4 w-4 text-[#6F5E53]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#2E2E2E]/40">
                  Location
                </p>
                <p className="text-sm font-medium text-[#2E2E2E]/70">
                  Bangalore, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com/in/renu-p-b72b9b2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#6F5E53] text-white transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/renukapalani048-boop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#6F5E53] text-white transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:renukapalani048@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#6F5E53] text-white transition-transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-[#2E2E2E]/10" />

          {/* Quick Message Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#2E2E2E]/40">
              Send a quick message
            </p>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-md border border-[#A3A3A3] bg-white px-3 py-2 text-sm text-[#2E2E2E] placeholder:text-[#2E2E2E]/40 focus:border-[#6F5E53] focus:outline-none focus:ring-1 focus:ring-[#6F5E53]"
              placeholder="Your name"
              aria-label="Your name"
            />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border border-[#A3A3A3] bg-white px-3 py-2 text-sm text-[#2E2E2E] placeholder:text-[#2E2E2E]/40 focus:border-[#6F5E53] focus:outline-none focus:ring-1 focus:ring-[#6F5E53]"
              placeholder="Your email"
              aria-label="Your email"
            />
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-md border border-[#A3A3A3] bg-white px-3 py-2 text-sm text-[#2E2E2E] placeholder:text-[#2E2E2E]/40 focus:border-[#6F5E53] focus:outline-none focus:ring-1 focus:ring-[#6F5E53]"
              placeholder="Your message..."
              aria-label="Your message"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-[#6F5E53] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5A4E43]"
            >
              <Send className="h-4 w-4" />
              {submitted ? "Opening email..." : "Send Message"}
            </button>
          </form>

          <p className="mt-6 text-sm font-semibold text-[#2E2E2E]">
            Structured. Secure. Scalable.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#F2F2F2]/40">
            {"Designed & built by Renuka Palani \u00A9 2026"}
          </p>
          <p className="mt-1 text-[10px] text-[#F2F2F2]/25">
            Driven by curiosity. Powered by code.
          </p>
        </div>
      </div>
    </footer>
  )
}

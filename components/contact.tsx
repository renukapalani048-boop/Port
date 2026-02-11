"use client"

import React from "react"
import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:renukapalani048@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.open(mailtoLink, "_blank")
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
          <h3 className="mb-1 text-2xl font-bold text-[#2E2E2E]">Contact Me</h3>
          <p className="mb-6 text-sm text-[#2E2E2E]/60">
            {"I'm open to entry-level developer opportunities in Bangalore."}
          </p>

          <div className="mb-6 space-y-3">
            <p className="text-sm font-semibold text-[#2E2E2E]">
              Email:{" "}
              <a
                href="mailto:renukapalani048@gmail.com"
                className="font-normal underline transition-colors hover:text-[#6F5E53]"
              >
                renukapalani048@gmail.com
              </a>
            </p>
            <p className="text-sm font-semibold text-[#2E2E2E]">
              Phone:{" "}
              <a
                href="tel:+918248839603"
                className="font-normal underline transition-colors hover:text-[#6F5E53]"
              >
                +91-8248839603
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="mb-6 flex gap-3">
            <a
              href="https://www.linkedin.com/in/renu-p-b72b9b2a6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#6F5E53] text-white transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
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

          {/* Quick Message Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-md border border-[#2E2E2E]/15 bg-white px-3 py-2 text-sm text-[#2E2E2E] placeholder:text-[#2E2E2E]/40 focus:border-[#6F5E53] focus:outline-none focus:ring-1 focus:ring-[#6F5E53]"
                placeholder="Your name"
                aria-label="Your name"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-md border border-[#2E2E2E]/15 bg-white px-3 py-2 text-sm text-[#2E2E2E] placeholder:text-[#2E2E2E]/40 focus:border-[#6F5E53] focus:outline-none focus:ring-1 focus:ring-[#6F5E53]"
                placeholder="your@email.com"
                aria-label="Your email"
              />
            </div>
            <textarea
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-md border border-[#2E2E2E]/15 bg-white px-3 py-2 text-sm text-[#2E2E2E] placeholder:text-[#2E2E2E]/40 focus:border-[#6F5E53] focus:outline-none focus:ring-1 focus:ring-[#6F5E53]"
              placeholder="Your message..."
              aria-label="Your message"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-[#6F5E53] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#5A4E43]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>

          <p className="mt-6 text-sm font-semibold text-[#2E2E2E]">
            Structured. Secure. Scalable.
          </p>
        </div>

        {/* Footer bottom */}
        <p className="mt-8 text-center text-xs text-[#F2F2F2]/40">
          {"Renuka Palani \u00A9 2026. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}

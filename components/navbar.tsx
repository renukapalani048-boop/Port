"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F1E8]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-[#2E2E2E] transition-colors hover:text-[#6F5E53]"
        >
          RP.
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#2E2E2E]/70 transition-colors hover:text-[#6F5E53]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1nYzOewT4u_nvEZwB_pG-R2F3uB3037b9/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#6F5E53] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5A4E43]"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#2E2E2E] transition-colors hover:text-[#6F5E53] md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="bg-[#F5F1E8]/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-[#2E2E2E]/70 transition-colors hover:bg-[#6F5E53]/10 hover:text-[#6F5E53]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1nYzOewT4u_nvEZwB_pG-R2F3uB3037b9/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-md bg-[#6F5E53] px-3 py-2 text-center text-sm font-medium text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

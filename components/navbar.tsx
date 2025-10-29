"use client"

import Link from "next/link"
import { useEffect } from "react"

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#certs", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
]

export default function Navbar() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <header className="sticky top-4 z-40">
      <nav className="mx-auto max-w-6xl rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="#home"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white"
            aria-label="Logo"
          >
            V
          </Link>
          <ul className="hidden items-center gap-6 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-zinc-300 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full border border-blue-500/40 bg-blue-600/90 px-3 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(59,130,246,.35)] hover:bg-blue-600 md:inline-flex"
            >
              Request a Project →
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

"use client"

import Link from "next/link"
import { useEffect } from "react"

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#leetcode", label: "LeetCode" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6">
      <nav className="mx-auto max-w-6xl rounded-full border border-emerald-500/20 bg-slate-950/40 backdrop-blur-md px-4 sm:px-6 py-3 transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-950/60">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="#home"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 font-bold text-sm transition-transform hover:scale-110"
            aria-label="Logo"
          >
            VG
          </Link>
          <ul className="hidden items-center gap-1 sm:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  className="text-xs sm:text-sm px-3 py-2 rounded-lg text-zinc-300 transition-all duration-300 hover:text-emerald-300 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 border border-emerald-400/60 hover:border-emerald-300 px-4 py-2 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

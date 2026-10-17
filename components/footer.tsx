"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Instagram } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
      <div className="border-t border-border/60 pb-8" />
      <div className="flex flex-col items-center gap-6 text-center">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-foreground/70 hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Vansh-g-hash"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md bg-secondary/40 p-2 text-foreground/80 ring-1 ring-border/60 hover:bg-secondary/60 hover:text-foreground transition-colors"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://www.instagram.com/heyitsv28?igsh=MTlxaXBkOXVsYWg3YQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-md bg-secondary/40 p-2 text-foreground/80 ring-1 ring-border/60 hover:bg-secondary/60 hover:text-foreground transition-colors"
          >
            <Instagram className="size-4" />
          </a>
        </div>

        <div className="space-y-1">
          <p className="text-foreground/70">
            © {new Date().getFullYear()} <span className="text-foreground">Vansh Gupta</span>. All rights reserved.
          </p>
          <p className="text-foreground/60">
            Built with <span className="text-foreground">React</span> and deployed on{" "}
            <span className="text-foreground">Vercel</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}

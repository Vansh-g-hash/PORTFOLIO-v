"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-transparent bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">Vansh Gupta</span>{" "}
          <span className="text-muted-foreground">AI/ML Engineer</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
              aria-current={undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

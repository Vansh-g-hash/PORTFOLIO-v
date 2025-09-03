"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CERTS = [
  { title: "Boot.dev — Capstone Project (Aug 26, 2025)", src: "/certs/bootdev-capstone.png" },
  { title: "Boot.dev — First Personal Project (Aug 23, 2025)", src: "/certs/bootdev-first-project.png" },
  { title: "Energy Swaraj Foundation — Energy Literacy Training (May 15, 2025)", src: "/certs/energy-swaraj.png" },
  { title: "Simplilearn — AI & Machine Learning (May 10, 2025)", src: "/certs/simplilearn-aiml.png" },
  { title: "Oracle Academy — Database Programming with SQL (Dec 30, 2024)", src: "/certs/oracle-sql.png" },
]

export default function CertificationsSection() {
  const scroller = useRef<HTMLDivElement>(null)
  const scrollBy = (dx: number) => scroller.current?.scrollBy({ left: dx, behavior: "smooth" })

  return (
    <section className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-zinc-100 md:text-5xl">
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <p className="mt-3 text-pretty text-zinc-400">Some courses I actually completed — fancy certificates!</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-1 w-10 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/30" />
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="relative">
        <button
          aria-label="Previous"
          onClick={() => scrollBy(-380)}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-zinc-200 backdrop-blur"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scroller}
          className="scrollbar-none relative flex gap-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-6"
        >
          {CERTS.map((c) => (
            <figure key={c.title} className="min-w-[360px] rounded-xl border border-white/10 bg-white/5 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.src || "/placeholder.svg"}
                alt={`${c.title} certificate`}
                className="h-[220px] w-[360px] rounded-lg object-cover"
              />
              <figcaption className="mt-3 text-center text-sm text-zinc-300">{c.title}</figcaption>
            </figure>
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={() => scrollBy(380)}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-zinc-200 backdrop-blur"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, GraduationCap } from "lucide-react"

type Edu = {
  title: string
  place: string
  years: string
}

const EDUCATION: Edu[] = [
  { title: "Bachelor of Technology (B.Tech) — CSE", place: "PDM University, Haryana", years: "2022 – 2026" },
  {
    title: "Senior Secondary (XII)",
    place: "New Delhi Public School, Vikaspuri, New Delhi 110059",
    years: "2021 – 2022",
  },
  { title: "Secondary (X)", place: "Sanjeevani Public School", years: "2019 – 2020" },
]

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="mt-3 text-pretty text-zinc-400">
          Where I learned theory and then forgot half of it while learning to actually code.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-1 w-10 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/30" />
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* timeline line */}
        <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-6" />
        <div className="space-y-6">
          {EDUCATION.map((e, idx) => (
            <div key={e.title} className="relative pl-12 md:pl-14">
              <div className="absolute left-2 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-blue-600/20 text-blue-300 md:left-3">
                <GraduationCap className="h-3 w-3" />
              </div>
              <Card className="rounded-2xl border-white/10 bg-white/[0.04] backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg text-zinc-100 md:text-xl">{e.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between text-sm text-zinc-300">
                  <p>{e.place}</p>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <CalendarDays className="h-4 w-4" />
                    <span>{e.years}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

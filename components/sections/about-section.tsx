import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CircleUserRound, Code2, Rocket, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      {/* Heading + subtitle */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] md:text-6xl">
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">About Me</span>
        </h2>
        <p className="mt-3 text-pretty text-zinc-400">
          Just a curious developer who loves turning ideas into reality (and debugging at 2 AM).
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-1 w-10 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/30" />
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>
        <Button className="mt-6 rounded-full bg-blue-600 px-5 text-white hover:bg-blue-600/90">
          Problem-solver by day, product-builder by night - where innovation meets execution.
        </Button>
      </div>

      {/* 2x2 info grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="rounded-2xl border-white/10 bg-white/[0.04] backdrop-blur">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
              <CircleUserRound className="h-5 w-5" />
            </div>
            <CardTitle>Who I Am</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>AI/ML engineering student focused on building intelligent systems.</li>
              <li>Hands-on with machine learning and deep learning: data prep, model training, and evaluation.</li>
              <li>Interested in MLOps, deploying models, and using cloud tooling for scalable inference.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-white/10 bg-white/[0.04] backdrop-blur">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-300">
              <Code2 className="h-5 w-5" />
            </div>
            <CardTitle>What I Do</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Build fast, scalable web apps with modern frameworks.</li>
              <li>Optimize code for efficiency and maintainability.</li>
              <li>Engage with open‑source and stay updated with trends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-white/10 bg-white/[0.04] backdrop-blur">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-300">
              <Rocket className="h-5 w-5" />
            </div>
            <CardTitle>My Goals</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Create impactful tech solutions for real‑world problems.</li>
              <li>Grow as a full‑stack developer with leading‑edge tools.</li>
              <li>Support the developer community through contributions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-white/10 bg-white/[0.04] backdrop-blur">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600/20 text-orange-300">
              <Lightbulb className="h-5 w-5" />
            </div>
            <CardTitle>My Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Technology should simplify and enhance everyday life.</li>
              <li>Effective software solves problems with clarity.</li>
              <li>Continuous learning is essential for growth.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[70vh] max-w-5xl place-items-center px-4 pb-10 pt-16 md:min-h-[80vh] md:pb-16 md:pt-24">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">AI/ML Engineer Portfolio</p>
        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">Vansh Gupta</span>
        </h1>
        <p className="max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
          AI/ML Engineer building clean, useful, intelligent experiences.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="inline-block">
            <Button className="gap-2">See Projects</Button>
          </a>
          <a href="https://github.com/VANSH-G-HASH" target="_blank" rel="noreferrer" className="inline-block">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-gupta-62354432a"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <Button variant="ghost" className="gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

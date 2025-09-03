"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">Get in touch</span>
        </h2>
        <p className="mt-3 text-pretty text-zinc-400">
          Got a cool project idea? Want to collaborate? Or just want to say hi? Drop me a line!
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-1 w-10 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/30" />
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Info Card */}
        <Card className="rounded-2xl border-white/10 bg-white/[0.04] backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl">Let’s Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p className="text-sm text-zinc-400">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
              visions.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:vansh.gupta@example.com"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.06]"
              >
                <Mail className="h-4 w-4 text-zinc-300" />
                <span>vansh.gupta@example.com</span>
              </a>
              <a
                href="https://github.com/Vansh-g-hash"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.06]"
              >
                <Github className="h-4 w-4 text-zinc-300" />
                <span>github.com/Vansh-g-hash</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vansh-gupta-62354432a"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.06]"
              >
                <Linkedin className="h-4 w-4 text-zinc-300" />
                <span>linkedin.com/in/vansh-gupta-62354432a</span>
              </a>
              <a
                href="https://www.instagram.com/heyitsv28?igsh=MTlxaXBkOXVsYWg3YQ=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.06]"
                aria-label="Instagram profile"
              >
                <Instagram className="h-4 w-4 text-zinc-300" />
                <span>instagram.com/heyitsv28</span>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Form Card */}
        <Card className="rounded-2xl border-white/10 bg-white/[0.04] backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl">Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const target = e.currentTarget as HTMLFormElement
                const data = Object.fromEntries(new FormData(target).entries())
                console.log("[v0] Contact form submit:", data)
                alert("Thanks! This demo doesn’t send yet. Hook up your action or email provider.")
              }}
              className="space-y-4"
            >
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
              </div>
              <Button type="submit" className="w-full rounded-lg bg-blue-600 text-white hover:bg-blue-600/90">
                Send Message ↗
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

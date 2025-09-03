import { Card } from "@/components/ui/card"

type Skill = { label: string; icon: string; alt: string }

const SKILLS: Skill[] = [
  {
    label: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML5 logo",
  },
  { label: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3 logo" },
  {
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript logo",
  },
  {
    label: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React logo",
  },
  {
    label: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js logo",
  },
  {
    label: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB logo",
  },
  {
    label: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "MySQL logo",
  },
  {
    label: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    alt: "Prisma logo",
  },
  {
    label: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    alt: "C++ logo",
  },
  {
    label: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python logo",
  },
  {
    label: "Streamlit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
    alt: "Streamlit logo",
  },
  {
    label: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    alt: "Visual Studio Code logo",
  },
  { label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git logo" },
  {
    label: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "GitHub logo",
  },
  {
    label: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    alt: "Postman logo",
  },
  {
    label: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    alt: "Vercel logo",
  },
  {
    label: "Adobe Photoshop",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    alt: "Adobe Photoshop official logo",
  },
  {
    label: "Canva",
    icon: "https://cdn.simpleicons.org/canva/00C4CC",
    alt: "Canva logo",
  },
  {
    label: "CapCut",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/CapCut_Logo.svg",
    alt: "CapCut official logo",
  },
]

const SKILL_LINKS: Record<string, string> = {
  HTML: "https://developer.mozilla.org/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/docs/Web/JavaScript",
  React: "https://react.dev",
  "Node.js": "https://nodejs.org",
  MongoDB: "https://www.mongodb.com",
  MySQL: "https://www.mysql.com",
  Prisma: "https://www.prisma.io",
  "C++": "https://isocpp.org",
  Python: "https://www.python.org",
  Streamlit: "https://streamlit.io",
  "VS Code": "https://code.visualstudio.com",
  Git: "https://git-scm.com",
  GitHub: "https://github.com",
  Postman: "https://www.postman.com",
  Vercel: "https://vercel.com",
  "Adobe Photoshop": "https://www.adobe.com/products/photoshop.html",
  Canva: "https://www.canva.com",
  CapCut: "https://www.capcut.com",
}

function Tile({ skill, href }: { skill: Skill; href?: string }) {
  const card = (
    <Card
      role="listitem"
      aria-label={skill.label}
      className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border-white/10 bg-white/[0.04] text-zinc-200 backdrop-blur transition-colors hover:border-sky-500/30 hover:bg-white/[0.06]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-1.5">
        <img
          src={skill.icon || "/placeholder.svg"}
          alt={skill.alt}
          width={32}
          height={32}
          className="h-7 w-7 object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-xs text-zinc-300">{skill.label}</span>
    </Card>
  )

  if (!href) return card

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${skill.label} official website`}
      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
    >
      <span className="sr-only">{`Open ${skill.label} official website`}</span>
      {card}
    </a>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="mt-3 text-pretty text-zinc-400">The tech stack I’ve been collecting — gotta catch ’em all!</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-1 w-10 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/30" />
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>
      </div>

      <div role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {SKILLS.map((s) => (
          <Tile key={s.label} skill={s} href={SKILL_LINKS[s.label]} />
        ))}
      </div>
    </section>
  )
}

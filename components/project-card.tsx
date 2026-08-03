import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  imageAlt?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-balance">{project.title}</CardTitle>
        <CardDescription className="text-pretty">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
        <div className="aspect-[16/9] w-full overflow-hidden rounded-md border">
          <img
            src="/ai-project-thumbnail.png"
            alt={project.imageAlt ?? "Project thumbnail"}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button asChild variant="ghost" className="gap-2">
          <a href={project.href ?? "https://github.com/VANSH-G-HASH"} target="_blank" rel="noreferrer">
            <ExternalLink className="h-4 w-4" />
            Learn more
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

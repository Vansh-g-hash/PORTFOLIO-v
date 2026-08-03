import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export type Project = {
  title: string
  description: string
  tools: string[]
  special: string
  href?: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base md:text-lg">{project.title}</CardTitle>
        <CardDescription>{project.special}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        {project.href ? (
          <Button asChild size="sm">
            <a href={project.href} target="_blank" rel="noreferrer">
              View
            </a>
          </Button>
        ) : (
          <Button asChild size="sm" variant="ghost">
            <a href="https://github.com/VANSH-G-HASH" target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

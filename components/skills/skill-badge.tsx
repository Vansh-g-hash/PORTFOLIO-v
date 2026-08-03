import { cn } from "@/lib/utils"

export function SkillBadge({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 text-xs",
        accent ? "border-sky-600 text-sky-700 dark:border-sky-500 dark:text-sky-300" : "text-muted-foreground",
      )}
    >
      {label}
    </span>
  )
}

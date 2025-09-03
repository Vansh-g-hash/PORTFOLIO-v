"use client"

import { useMemo } from "react"
import useSWR from "swr"
import { Card } from "@/components/ui/card"

type Day = { date: string; count: number }
type APIResponse = { username: string; from: string; to: string; days: Day[]; error?: string }

const LEVELS = [
  "bg-white/10 dark:bg-white/10",
  "bg-sky-300 dark:bg-sky-900/70",
  "bg-sky-400/80 dark:bg-sky-800",
  "bg-sky-500/90 dark:bg-sky-700",
  "bg-sky-600 dark:bg-sky-600",
]

// fallback heatmap if API fails
function generateFallbackHeatmap(): Day[][] {
  const today = new Date()
  const start = new Date(today)
  start.setDate(start.getDate() - 53 * 7)
  const grid: Day[][] = []
  for (let w = 0; w < 53; w++) {
    const col: Day[] = []
    for (let d = 0; d < 7; d++) {
      const dt = new Date(start)
      dt.setDate(start.getDate() + w * 7 + d)
      const key = dt.toISOString().slice(0, 10)
      const hash = Array.from(key).reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
      const count = hash % 5
      col.push({ date: key, count })
    }
    grid.push(col)
  }
  return grid
}

function toGrid(days: Day[]): Day[][] {
  if (!days || days.length === 0) return generateFallbackHeatmap()
  const map = new Map(days.map((d) => [d.date, d.count]))

  const start0 = new Date(days[0].date)
  const start = new Date(start0)
  start.setDate(start.getDate() - start.getDay()) // back to Sunday

  const end0 = new Date(days[days.length - 1].date)
  const end = new Date(end0)
  end.setDate(end.getDate() + (6 - end.getDay())) // forward to Saturday

  const grid: Day[][] = []
  const cur = new Date(start)
  while (cur <= end) {
    const col: Day[] = []
    for (let i = 0; i < 7; i++) {
      const key = cur.toISOString().slice(0, 10)
      const count = map.get(key) ?? 0
      col.push({ date: key, count })
      cur.setDate(cur.getDate() + 1)
    }
    grid.push(col)
  }
  return grid
}

function monthLabels(grid: Day[][]): { index: number; label: string }[] {
  const labels: { index: number; label: string }[] = []
  for (let i = 0; i < grid.length; i++) {
    const firstDay = grid[i][0]
    const dt = new Date(firstDay.date)
    const isStartOfMonth = dt.getDate() <= 7
    if (isStartOfMonth) {
      labels.push({ index: i, label: dt.toLocaleString(undefined, { month: "short" }) })
    }
  }
  return labels
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function GitHubHeatmap({ username = "Vansh-g-hash" }: { username?: string }) {
  const { data, error } = useSWR<APIResponse>(
    `/api/github/contributions?username=${encodeURIComponent(username)}`,
    fetcher,
    { revalidateOnFocus: false },
  )

  const grid = useMemo(() => {
    if (data?.days?.length) return toGrid(data.days)
    return generateFallbackHeatmap()
  }, [data])

  const months = useMemo(() => monthLabels(grid), [grid])
  const total = useMemo(
    () =>
      data?.days?.length ? data.days.reduce((s, d) => s + d.count, 0) : grid.flat().reduce((s, d) => s + d.count, 0),
    [data, grid],
  )

  return (
    <section id="github" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            GitHub Contributions
          </span>
        </h2>
        <p className="mt-3 text-pretty text-zinc-400">
          My GitHub is where I code and commit — check out my streak and repos I’m proud of.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-1 w-10 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/30" />
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>
      </div>

      <Card className="rounded-3xl border-white/10 bg-white/[0.04] p-6 backdrop-blur">
        {/* Month labels */}
        <div className="relative mb-2 h-5">
          <div className="pointer-events-none absolute left-0 top-0 grid auto-cols-min grid-flow-col text-[10px] text-zinc-400">
            {months.map((m) => (
              <div key={m.index} style={{ gridColumnStart: m.index + 1 }} className="mr-2">
                {m.label}
              </div>
            ))}
          </div>
        </div>

        {/* Heatmap grid */}
        <div className="overflow-x-auto">
          <div className="grid auto-cols-min grid-flow-col gap-1">
            {grid.map((col, i) => (
              <div key={i} className="grid grid-rows-7 gap-1">
                {col.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`h-3 w-3 rounded-[3px] ${LEVELS[Math.max(0, Math.min(4, day.count))]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer row: total + legend + link */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <p>
            {total} contributions in the last year {error ? "(from fallback)" : ""}
          </p>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex items-center gap-1">
              {LEVELS.map((cls, i) => (
                <span key={i} className={`h-3 w-3 rounded-[3px] ${cls}`} />
              ))}
            </div>
            <span>More</span>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-300 hover:text-white"
          >
            View profile →
          </a>
        </div>
      </Card>
    </section>
  )
}

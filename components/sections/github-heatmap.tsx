'use client'

import { useMemo } from 'react'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

type Day = { date: string; count: number }
type APIResponse = { username: string; from: string; to: string; days: Day[]; error?: string }

const LEVELS = [
  'bg-emerald-950/40',
  'bg-emerald-700/50',
  'bg-emerald-600/70',
  'bg-emerald-500/80',
  'bg-emerald-400/90',
]

function generateUnavailableGrid(): Day[][] {
  // Keep the fallback deterministic so the first server and client renders match.
  const today = new Date('2026-10-17T00:00:00.000Z')
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
  if (!days || days.length === 0) return generateUnavailableGrid()
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
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  for (let i = 0; i < grid.length; i++) {
    const firstDay = grid[i][0]
    const dt = new Date(`${firstDay.date}T00:00:00.000Z`)
    const isStartOfMonth = dt.getUTCDate() <= 7
    if (isStartOfMonth) {
      labels.push({ index: i, label: monthNames[dt.getUTCMonth()] })
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
    return generateUnavailableGrid()
  }, [data])

  const months = useMemo(() => monthLabels(grid), [grid])
  const total = useMemo(
    () =>
      data?.days?.length ? data.days.reduce((s, d) => s + d.count, 0) : grid.flat().reduce((s, d) => s + d.count, 0),
    [data, grid],
  )

  return (
    <section id="github" className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-radial from-emerald-400/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-block mb-4">
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-xs font-medium text-emerald-300/80 tracking-widest uppercase">GitHub</span>
            </div>
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="gradient-text">Contribution Graph</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            One year of commits, contributions, and continuous development reflected in real data.
          </p>
        </motion.div>

        {/* Heatmap Card */}
        <motion.div
          className="glass border-emerald-500/30 rounded-2xl p-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Month labels */}
          <div className="relative mb-4 h-5">
            <div className="pointer-events-none absolute left-0 top-0 grid auto-cols-min grid-flow-col text-[10px] text-zinc-400">
              {months.map((m) => (
                <div key={m.index} style={{ gridColumnStart: m.index + 1 }} className="mr-2">
                  {m.label}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap grid */}
          <div className="overflow-x-auto mb-6 pb-4 border-b border-emerald-500/10">
            <div className="grid auto-cols-min grid-flow-col gap-1">
              {data?.days?.length ? grid.map((col, i) => (
                <div key={i} className="grid grid-rows-7 gap-1">
                  {col.map((day) => (
                    <motion.div
                      key={day.date}
                      title={`${day.count} contributions on ${day.date}`}
                      className={`h-3 w-3 rounded-sm transition-all duration-300 hover:ring-2 hover:ring-emerald-400/50 cursor-default ${LEVELS[Math.max(0, Math.min(4, day.count))]}`}
                      whileHover={{ scale: 1.5 }}
                    />
                  ))}
                </div>
              )) : null}
            </div>
          </div>

          {/* Footer row: total + legend + link */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Stats */}
            <div className="text-sm text-zinc-300">
              <p className="font-medium text-white mb-1">{data?.days?.length ? `${total} Contributions` : 'Stats temporarily unavailable'}</p>
              <p className="text-xs text-zinc-400">{data?.days?.length ? 'in the last year' : 'View the profile for the live contribution calendar'}</p>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400">Less</span>
              <div className="flex items-center gap-1">
                {LEVELS.map((cls, i) => (
                  <div key={i} className={`h-3 w-3 rounded-sm ${cls}`} />
                ))}
              </div>
              <span className="text-xs text-zinc-400">More</span>
            </div>

            {/* Link */}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 text-zinc-300 hover:text-emerald-300 font-medium text-sm"
            >
              <Github className="w-4 h-4" />
              View GitHub Profile
            </a>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transform -skew-x-12 hover:translate-x-full transition-all duration-700" />
        </motion.div>
      </div>
    </section>
  )
}

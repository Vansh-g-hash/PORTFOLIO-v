import { NextResponse } from "next/server"

function formatDate(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const username = searchParams.get("username") || "Vansh-g-hash"

    const to = new Date()
    const from = new Date()
    from.setDate(to.getDate() - 365)

    const url = `https://github.com/users/${encodeURIComponent(
      username,
    )}/contributions?from=${formatDate(from)}&to=${formatDate(to)}`

    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
      cache: "no-store",
    })

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch contributions" }, { status: 502 })
    }

    const html = await res.text()

    const rectRegex = /<rect[^>]*data-date="([^"]+)"[^>]*?(?:data-count="(\d+)")?[^>]*?(?:data-level="(\d+)")?[^>]*?>/g
    const items: { date: string; count: number }[] = []
    let m: RegExpExecArray | null
    while ((m = rectRegex.exec(html)) !== null) {
      const date = m[1]
      const rawCount = m[2]
      const level = m[3]
      let count = 0
      if (rawCount) {
        count = Number.parseInt(rawCount, 10)
      } else if (level) {
        const lvl = Number.parseInt(level, 10)
        const map = [0, 1, 3, 6, 10]
        count = map[Math.max(0, Math.min(4, lvl))]
      }
      items.push({ date, count })
    }

    items.sort((a, b) => (a.date < b.date ? -1 : 1))

    return NextResponse.json({
      username,
      from: formatDate(from),
      to: formatDate(to),
      days: items,
    })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Unknown error" }, { status: 500 })
  }
}

export function SectionHeader({
  id,
  title,
  subtitle,
}: {
  id: string
  title: string
  subtitle?: string
}) {
  return (
    <div id={id} className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-zinc-100 md:text-5xl">
        <span className="bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">{title}</span>
      </h2>
      {subtitle ? <p className="mt-3 text-pretty text-zinc-400">{subtitle}</p> : null}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-1 w-10 rounded-full bg-white/20" />
        <span className="h-1 w-2 rounded-full bg-white/30" />
        <span className="h-1 w-10 rounded-full bg-white/20" />
      </div>
    </div>
  )
}

export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid with radial mask */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
      {/* Central radial glow (primary blue) */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/12 via-transparent to-transparent [mask-image:radial-gradient(60%_55%_at_50%_35%,black,transparent)]" />
      {/* Accent blurred blobs */}
      <div className="absolute left-[10%] top-24 h-56 w-56 rounded-full bg-sky-500/14 blur-3xl" />
      <div className="absolute right-[12%] top-64 h-64 w-64 rounded-full bg-cyan-400/12 blur-3xl" />
      {/* Soft rings */}
      <div className="absolute left-1/2 top-24 h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-sky-500/20 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      <div className="absolute right-[8%] top-[38%] h-[360px] w-[360px] rounded-full border border-cyan-400/20 [mask-image:radial-gradient(closest-side,black,transparent)]" />
    </div>
  )
}

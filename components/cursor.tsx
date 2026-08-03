"use client"

import { useEffect, useRef, useState } from "react"

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (isCoarse || prefersReduced) return
    setEnabled(true)

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      const dot = dotRef.current
      if (dot) dot.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`
    }

    let raf = 0
    const loop = () => {
      rx += (x - rx) * 0.15
      ry += (y - ry) * 0.15
      const ring = ringRef.current
      if (ring) ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

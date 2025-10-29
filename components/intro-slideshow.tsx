"use client"

import { useEffect, useState } from "react"

export default function IntroSlideshow() {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Check if user has already seen the intro
    const hasSeenIntro = localStorage.getItem("hasSeenIntro")

    if (hasSeenIntro) {
      setIsVisible(false)
      return
    }

    // Show intro for 3.5 seconds, then fade out
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        setIsVisible(false)
        localStorage.setItem("hasSeenIntro", "true")
      }, 600) // Duration of fade-out animation
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-600 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-20" />

      {/* Animated text container */}
      <div className="relative z-10 text-center">
        {/* Main name text with animation */}
        <div
          className={`text-6xl md:text-8xl font-bold transition-all duration-1000 ${
            isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 60px rgba(59, 130, 246, 0.3)",
            filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.2))",
          }}
        >
          Vansh Gupta
        </div>

        {/* Subtitle with staggered animation */}
        <div
          className={`mt-6 text-lg md:text-2xl text-muted-foreground transition-all duration-1000 delay-300 ${
            isExiting ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          AI/ML Engineer
        </div>

        {/* Animated accent line */}
        <div
          className={`mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full transition-all duration-1000 delay-500 ${
            isExiting ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
          }`}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 transition-opacity duration-1000 ${
            isExiting ? "opacity-0" : "opacity-20"
          }`}
          style={{
            animation: isExiting ? "none" : "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 transition-opacity duration-1000 ${
            isExiting ? "opacity-0" : "opacity-20"
          }`}
          style={{
            animation: isExiting ? "none" : "pulse 4s ease-in-out infinite 1s",
          }}
        />
      </div>
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import BackgroundFX from "@/components/background-fx"
import Cursor from "@/components/cursor"

export const metadata: Metadata = {
  title: "Vansh Gupta — AI/ML Engineer",
  description:
    "Portfolio of Vansh Gupta, an aspiring AI & Machine Learning Engineer building intelligent, real-world AI applications.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <div className="relative min-h-dvh overflow-x-clip">
            <BackgroundFX />
            <Cursor />
            {children}
            <Analytics />
          </div>
        </Suspense>
      </body>
    </html>
  )
}

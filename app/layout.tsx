import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Cinzel, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import BackgroundFX from "@/components/background-fx"
import Cursor from "@/components/cursor"
import IntroSlideshow from "@/components/intro-slideshow"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-heading" })
const cormorantGaramond = Cormorant_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-subheading" })

export const metadata: Metadata = {
  title: "Vansh Gupta — Software Engineer",
  description:
    "A premium portfolio showcasing AI, machine learning, and full-stack development projects. Explore elegant design and real engineering work.",
  generator: "v0.app",
  metadataBase: new URL("https://vansh-gupta.vercel.app"),
  openGraph: {
    title: "Vansh Gupta — Software Engineer",
    description: "Premium AI & Software Engineering Portfolio",
    type: "website",
    url: "https://vansh-gupta.vercel.app",
    siteName: "Vansh Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Gupta — Software Engineer",
    description: "Premium AI & Software Engineering Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} ${cinzel.variable} ${cormorantGaramond.variable} dark`}>
      <body className="font-sans antialiased bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900">
        <Suspense fallback={null}>
          <div className="relative min-h-dvh overflow-x-clip">
            <IntroSlideshow />
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

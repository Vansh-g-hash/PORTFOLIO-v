'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, FileDown, ExternalLink, Code2 } from 'lucide-react'
import { MagicCandle } from '@/components/effects/magic-candle'
import { FloatingParticles } from '@/components/effects/floating-particles'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 -z-20">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-900" />
        
        {/* Moonlight effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-emerald-400/10 to-transparent rounded-full blur-3xl opacity-30" />
        
        {/* Candlelight warmth */}
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-radial from-amber-400/5 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      {/* Floating Candles */}
      <MagicCandle x={10} y={15} delay={0} />
      <MagicCandle x={85} y={25} delay={0.3} />
      <MagicCandle x={20} y={70} delay={0.6} />
      <MagicCandle x={80} y={65} delay={0.9} />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Label */}
        <motion.div
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <div className="glass px-4 py-2 rounded-full">
            <p className="text-xs sm:text-sm font-medium text-emerald-300/80 tracking-widest uppercase">
              Software Engineer • AI • Full-Stack
            </p>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center mb-8"
          variants={titleVariants}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display tracking-tighter leading-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="block text-white">Vansh Gupta</span>
          </h1>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg text-zinc-300 text-center max-w-2xl mx-auto mb-12"
          style={{ fontFamily: 'var(--font-subheading)' }}
          variants={itemVariants}
        >
          Crafting elegant solutions at the intersection of artificial intelligence, thoughtful design, and production engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          {/* Resume Button */}
          <a href="/resume.pdf" download>
            <motion.button
              className="glass px-6 sm:px-8 py-3 rounded-lg text-white font-medium text-sm sm:text-base border border-emerald-400/40 hover:border-emerald-300/80 transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileDown className="w-4 h-4 group-hover:text-emerald-300 transition-colors" />
              Resume
            </motion.button>
          </a>

          {/* Projects Button */}
          <a href="#projects">
            <motion.button
              className="px-6 sm:px-8 py-3 rounded-lg text-white font-medium text-sm sm:text-base bg-gradient-to-r from-emerald-500/20 to-amber-500/10 border border-emerald-400/60 hover:border-emerald-300 hover:from-emerald-500/30 hover:to-amber-500/20 transition-all duration-300 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 flex items-center gap-2 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </a>

          {/* GitHub Button */}
          <a href="https://github.com/Vansh-g-hash" target="_blank" rel="noreferrer">
            <motion.button
              className="glass px-6 sm:px-8 py-3 rounded-lg text-white font-medium text-sm sm:text-base border border-emerald-400/40 hover:border-emerald-300/80 transition-all duration-300 flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.button>
          </a>

          {/* LeetCode Button */}
          <a href="https://leetcode.com/u/9iiNaN50z5" target="_blank" rel="noreferrer">
            <motion.button
              className="glass px-6 sm:px-8 py-3 rounded-lg text-white font-medium text-sm sm:text-base border border-emerald-400/40 hover:border-emerald-300/80 transition-all duration-300 flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code2 className="w-4 h-4" />
              LeetCode
            </motion.button>
          </a>

          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/vansh-gupta-62354432a" target="_blank" rel="noreferrer">
            <motion.button
              className="glass px-6 sm:px-8 py-3 rounded-lg text-white font-medium text-sm sm:text-base border border-emerald-400/40 hover:border-emerald-300/80 transition-all duration-300 flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-16 sm:mt-24"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Scroll to explore</span>
            <svg className="w-5 h-5 text-emerald-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

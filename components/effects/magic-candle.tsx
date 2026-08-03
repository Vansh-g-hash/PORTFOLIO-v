'use client'

import { motion } from 'framer-motion'

interface MagicCandleProps {
  x: number
  y: number
  delay?: number
}

export function MagicCandle({ x, y, delay = 0 }: MagicCandleProps) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
      }}
    >
      {/* Candle glow aura */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-gradient-radial from-amber-400/30 to-transparent blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          delay,
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Candle body */}
      <div className="relative w-2 h-8 bg-gradient-to-b from-amber-100 to-amber-50 rounded-b mx-auto shadow-lg shadow-amber-900/50" />

      {/* Flame - animated */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-3"
        animate={{
          scale: [0.8, 1.1, 0.9],
          rotateZ: [-2, 2, -1],
        }}
        transition={{
          delay,
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-amber-400 via-yellow-300 to-yellow-100 rounded-full blur-sm" />
      </motion.div>

      {/* Candle flicker particles */}
      <motion.div
        className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-yellow-200 rounded-full blur-sm"
        animate={{
          opacity: [0, 1, 0],
          y: [-4, -8, -10],
          x: [0, -1, 1],
        }}
        transition={{
          delay,
          duration: 1.5,
          repeat: Infinity,
        }}
      />
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Users, Code, Zap, BookOpen } from 'lucide-react'

const cardData = [
  {
    title: 'Who I Am',
    icon: Users,
    color: 'from-emerald-500/20 to-emerald-600/10',
    borderColor: 'border-emerald-500/30',
    description: 'B.Tech Computer Science graduate with hands-on experience in AI, machine learning, computer vision, and full-stack development. Built real projects during internships and personal work.',
  },
  {
    title: 'What I Build',
    icon: Code,
    color: 'from-amber-500/20 to-amber-600/10',
    borderColor: 'border-amber-500/30',
    description: 'AI-powered applications, full-stack web platforms, and machine learning systems. Strong foundation in Python, JavaScript, React, Node.js, and deployment on production platforms.',
  },
  {
    title: 'My Approach',
    icon: Zap,
    color: 'from-cyan-500/20 to-cyan-600/10',
    borderColor: 'border-cyan-500/30',
    description: 'Build useful products, not demos. Prioritize clean, maintainable code. Ship fast, iterate based on feedback. Use technology responsibly to solve real problems.',
  },
  {
    title: 'My Philosophy',
    icon: BookOpen,
    color: 'from-violet-500/20 to-violet-600/10',
    borderColor: 'border-violet-500/30',
    description: 'Continuous learning through building. Elegant solutions over complex ones. Thoughtful design matters. Every pixel, every line of code has purpose.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-radial from-emerald-400/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-amber-400/5 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-xs font-medium text-emerald-300/80 tracking-widest uppercase">About</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
            variants={itemVariants}
          >
            <span className="gradient-text">Who I Am</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-subheading)' }}
            variants={itemVariants}
          >
            A software engineer passionate about building intelligent systems and thoughtful products. Fascinated by the intersection of AI, clean code, and elegant design.
          </motion.p>
        </motion.div>

        {/* Premium Glass Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cardData.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                className={`glass ${card.borderColor} rounded-xl p-6 sm:p-8 overflow-hidden group cursor-default`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-emerald-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          className="mt-20 pt-12 border-t border-emerald-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 text-center">Technical Foundation</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Python', color: 'from-blue-500/20' },
              { label: 'JavaScript', color: 'from-yellow-500/20' },
              { label: 'React', color: 'from-cyan-500/20' },
              { label: 'AI/ML', color: 'from-emerald-500/20' },
              { label: 'Full-Stack', color: 'from-purple-500/20' },
              { label: 'Design', color: 'from-pink-500/20' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`glass border-emerald-500/20 rounded-lg px-4 py-3 text-center bg-gradient-to-br ${tech.color} group hover:border-emerald-400/60 transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <span className="text-sm font-medium text-zinc-200 group-hover:text-emerald-300 transition-colors">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

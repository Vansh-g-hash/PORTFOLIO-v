'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data/skills'
import { Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-radial from-violet-400/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-block mb-4">
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-xs font-medium text-emerald-300/80 tracking-widest uppercase">Skills</span>
            </div>
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="gradient-text">Technical Arsenal</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            A comprehensive toolkit built through hands-on projects and continuous learning across multiple domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {Object.entries(skillsData).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              className={`glass ${data.borderColor} rounded-xl p-6 sm:p-8 overflow-hidden group`}
              variants={categoryVariants}
              whileHover={{ y: -8 }}
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`} />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${data.color} border ${data.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Sparkles className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {category}
                </h3>
              </div>

              {/* Skills Container */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {data.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    custom={skillIndex}
                    variants={skillItemVariants}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <motion.div
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-br ${data.color} border ${data.borderColor} text-zinc-200 cursor-default group/skill hover:border-emerald-400/60 transition-all duration-300`}
                      whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
                      }}
                    >
                      {skill}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating particle on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Note */}
        <motion.div
          className="mt-16 pt-12 border-t border-emerald-500/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-zinc-400">
            Proficiency comes from building real projects. Every skill listed has been applied in production or personal work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Tile({ skill, href }: { skill: Skill; href?: string }) {
  const card = (
    <Card
      role="listitem"
      aria-label={skill.label}
      className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border-white/10 bg-white/[0.04] text-zinc-200 backdrop-blur transition-colors hover:border-sky-500/30 hover:bg-white/[0.06]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-1.5">
        <img
          src={skill.icon || "/placeholder.svg"}
          alt={skill.alt}
          width={32}
          height={32}
          className="h-7 w-7 object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-xs text-zinc-300">{skill.label}</span>
    </Card>
  )

  if (!href) return card

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${skill.label} official website`}
      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
    >
      <span className="sr-only">{`Open ${skill.label} official website`}</span>
      {card}
    </a>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="mt-3 text-pretty text-zinc-400">The tech stack I’ve been collecting — gotta catch ’em all!</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-1 w-10 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/30" />
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>
      </div>

      <div role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {SKILLS.map((s) => (
          <Tile key={s.label} skill={s} href={SKILL_LINKS[s.label]} />
        ))}
      </div>
    </section>
  )
}

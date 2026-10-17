'use client'

import { motion, type Variants } from 'framer-motion'
import { experienceData } from '@/lib/data/experience'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, x: (index: number) => (index % 2 === 0 ? -30 : 30) },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-radial from-emerald-400/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-xs font-medium text-emerald-300/80 tracking-widest uppercase">Experience</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
            variants={itemVariants}
          >
            <span className="gradient-text">Professional Journey</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-subheading)' }}
            variants={itemVariants}
          >
            Building real products and gaining hands-on experience in software development, from startups to enterprise systems.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/40 to-emerald-500/0" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 relative`}
                variants={itemVariants}
              >
                {/* Timeline Crystal Node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Crystal outer glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-30`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    {/* Crystal inner */}
                    <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} border ${exp.borderColor} flex items-center justify-center shadow-lg shadow-emerald-900/20`}>
                      <Briefcase className="w-6 h-6 text-emerald-300" />
                    </div>
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="w-full md:w-1/2"
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className={`glass ${exp.borderColor} rounded-xl p-6 sm:p-8 group cursor-default`}>
                    {/* Card gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl -z-10`} />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-sm sm:text-base text-emerald-300/80 font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-6 pb-6 border-b border-emerald-500/10">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-400/60" />
                        {exp.duration}
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-400/60" />
                          {exp.location}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-zinc-300 mb-5 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, i) => (
                          <li key={i} className="text-sm text-zinc-300 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-emerald-500/10">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300/80 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700 rounded-xl" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection

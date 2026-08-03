'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '@/lib/data/projects'
import { Github, ExternalLink, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    y: -12,
    transition: { duration: 0.3 },
  },
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const selected = selectedProject ? projectsData.find(p => p.id === selectedProject) : null

  const categories = ['all', 'ai', 'web', 'ml'] as const
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'web' | 'ml'>('all')

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-radial from-emerald-400/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-radial from-amber-400/5 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <span className="text-xs font-medium text-emerald-300/80 tracking-widest uppercase">Projects</span>
            </div>
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="gradient-text">Featured Work</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            Real projects built with purpose. Each one solving actual problems and demonstrating technical expertise.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'glass border-emerald-400/60 text-emerald-300 bg-emerald-500/10'
                    : 'glass border-emerald-500/20 text-zinc-300 hover:border-emerald-400/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Projects' : category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedProject(project.id)}
                className="cursor-pointer"
              >
                <div className="glass border-emerald-500/30 rounded-xl overflow-hidden group h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-emerald-500/10 to-amber-500/5">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${
                        project.category === 'ai' ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' :
                        project.category === 'web' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                        'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}>
                        {project.category === 'ai' ? 'AI/ML' : project.category === 'web' ? 'Web' : 'Machine Learning'}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4 pb-4 border-t border-emerald-500/10">
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300/80 border border-emerald-500/20">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 text-zinc-400">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg glass border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 text-zinc-300 hover:text-emerald-300"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg glass border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 text-zinc-300 hover:text-emerald-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass border-emerald-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 bg-gradient-to-br from-emerald-500/10 to-amber-500/5 overflow-hidden">
                {selected.image && (
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg glass border-emerald-500/20 hover:border-emerald-400/50 transition-all text-zinc-300 hover:text-emerald-300 z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Title & Category */}
                <div className="mb-6">
                  <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full mb-3 ${
                    selected.category === 'ai' ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' :
                    selected.category === 'web' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                    'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {selected.category === 'ai' ? 'AI/ML' : selected.category === 'web' ? 'Web' : 'Machine Learning'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                    {selected.title}
                  </h2>
                  <p className="text-zinc-300 text-lg">
                    {selected.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8 pb-8 border-b border-emerald-500/10">
                  <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selected.features.map((feature, i) => (
                      <li key={i} className="text-sm text-zinc-300 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Lessons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-emerald-500/10">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Challenges</h3>
                    <ul className="space-y-2">
                      {selected.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-zinc-300">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Lessons</h3>
                    <ul className="space-y-2">
                      {selected.lessons.map((lesson, i) => (
                        <li key={i} className="text-sm text-zinc-300">
                          • {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 text-zinc-300 hover:text-emerald-300 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-amber-500/10 border border-emerald-400/60 hover:border-emerald-300 transition-all duration-300 text-white hover:text-emerald-200 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

'use client'

import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { certificationsData } from '@/lib/data/certifications'
import { Award, Calendar, ExternalLink, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const categoryColors: Record<string, string> = {
  development: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-300',
  analytics: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300',
  ai: 'from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-300',
  sustainability: 'from-green-500/20 to-lime-500/10 border-green-500/30 text-green-300',
}

const categoryIcons: Record<string, React.ComponentType<any>> = {
  development: () => <Award className="w-4 h-4" />,
  analytics: () => <Award className="w-4 h-4" />,
  ai: () => <Award className="w-4 h-4" />,
  sustainability: () => <Award className="w-4 h-4" />,
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const certVariants: Variants = {
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

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = ['all', ...new Set(certificationsData.map(c => c.category))]
  const filteredCerts = activeCategory === 'all'
    ? certificationsData
    : certificationsData.filter(c => c.category === activeCategory)

  const selected = selectedCert ? certificationsData.find(c => c.id === selectedCert) : null

  return (
    <section id="certifications" className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-radial from-emerald-400/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-radial from-violet-400/5 to-transparent rounded-full blur-3xl opacity-30" />
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
              <span className="text-xs font-medium text-emerald-300/80 tracking-widest uppercase">Credentials</span>
            </div>
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            Verified credentials from industry leaders and specialized training programs.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'glass border-emerald-400/60 text-emerald-300 bg-emerald-500/10'
                    : 'glass border-emerald-500/20 text-zinc-300 hover:border-emerald-400/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Certifications' : category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <AnimatePresence mode="wait">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                variants={certVariants}
                whileHover="hover"
                onClick={() => setSelectedCert(cert.id)}
                className="cursor-pointer"
              >
                <div className={`glass border rounded-xl p-6 overflow-hidden group h-full flex flex-col transition-all duration-300 ${categoryColors[cert.category]}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 mb-3">
                        {cert.issuer}
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors mb-2">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 mb-4 flex-1">
                    {cert.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Skills */}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map(skill => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Certificate Image */}
                  {cert.image && (
                    <div className="relative h-32 -mx-6 -mb-6 mt-2 overflow-hidden rounded-b-xl">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Verification Info */}
        <motion.div
          className="glass border-emerald-500/30 rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm text-zinc-400">
            All certificates are verified and can be validated on their respective issuing platforms.
            <br />
            Hover over any certification to view details.
          </p>
        </motion.div>
      </div>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="glass border-emerald-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Image */}
              {selected.image && (
                <div className="relative h-72 bg-gradient-to-br from-emerald-500/10 to-amber-500/5 overflow-hidden">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 rounded-lg glass border-emerald-500/20 hover:border-emerald-400/50 transition-all text-zinc-300 hover:text-emerald-300 z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Title & Issuer */}
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                    {selected.title}
                  </h2>
                  <p className="text-emerald-300 font-medium">{selected.issuer}</p>
                  <p className="text-sm text-zinc-400 mt-2">{selected.date}</p>
                </div>

                {/* Description */}
                <div className="mb-6 pb-6 border-b border-emerald-500/10">
                  <p className="text-zinc-300 leading-relaxed">
                    {selected.description}
                  </p>
                </div>

                {/* Skills & Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pb-6 border-b border-emerald-500/10">
                  {selected.skills && (
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Skills Covered</h3>
                      <div className="flex flex-wrap gap-2">
                        {selected.skills.map(skill => (
                          <span key={skill} className="px-3 py-1.5 text-xs rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selected.supervisor && (
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Supervisor</h3>
                      <p className="text-zinc-300 text-sm">{selected.supervisor}</p>
                    </div>
                  )}

                  {selected.learningHours && (
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Learning Hours</h3>
                      <p className="text-zinc-300 text-sm">{selected.learningHours}</p>
                    </div>
                  )}
                </div>

                {/* Verification */}
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4 mb-6">
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Verification Code</h3>
                  <p className="text-sm text-emerald-300 font-mono break-all">{selected.verificationCode}</p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full px-4 py-3 rounded-lg glass border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 text-white font-medium flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '5+', label: 'Years of Excellence' },
  { value: '28', label: 'Warehouses Planned' },
  { value: '8', label: 'Acres Development' },
  { value: '24/7', label: 'Security & Support' },
]

const faqs = [
  {
    q: 'What makes MAQ Builders different?',
    a: "MAQ GROUP OF COMPANIES combines precision engineering with visionary design — delivering Pakistan's first private gated warehouse community with SBCA & LDA approval, strategic CPEC-corridor location, and a One-Touch Smart App for digital warehouse management.",
  },
  {
    q: 'Why choose Elite Warehouse Systems?',
    a: 'Strategically located at M-10 Motorway — just 15-20 minutes from Karachi Port and at the CPEC starting point. With 28 warehouses across 8 acres, 60ft roads, earthquake-resistant structure, and 24/7 security, it is Pakistan\'s most complete warehouse solution.',
  },
  {
    q: 'What is your construction philosophy?',
    a: 'We follow a systematic 4-step process: Sketching → Working → Utilization → Delivery. Every project is conceptualized with client aspirations, built with world-class materials, optimized for maximum functionality, and delivered with uncompromising quality assurance.',
  },
  {
    q: 'What upcoming projects are planned?',
    a: 'MAQ Builders is developing Elite 4 Star Hotel — a landmark hospitality project, and Elite Vista 5 Towers — a residential community designed to break traditional isolating high-rise trends while preserving privacy and fostering social connection.',
  },
  {
    q: 'How do you ensure quality & transparency?',
    a: 'Every project is SBCA (Sindh Building Control Authority) and LDA (Liyari Development Authority) approved. We maintain clear payment plans, legal documentation, and our CEO Muhammad Asim Quraishi personally oversees quality with over two decades of industry experience.',
  },
]

export function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 md:py-36 overflow-hidden" ref={containerRef}>
      <div className="container-main">
        {/* Top label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-8 h-px bg-brand" />
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-brand">
            About Us
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          We Believe Great{' '}
          <span className="text-brand">Construction</span> Starts with Asking
          the Right Questions
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left – stacked images with accent */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/assets/about-us-section.jpeg"
                alt="MAQ Builders – Professional Construction Team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badge on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                  <span className="text-sm text-white font-medium">
                    MAQ GROUP OF COMPANIES — Est. 2019
                  </span>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl bg-white/[0.04] border border-white/08 p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-xl font-bold text-brand">{stat.value}</p>
                  <p className="text-[10px] text-white/40 leading-tight mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-brand/15 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full border border-brand/25 pointer-events-none" />
          </motion.div>

          {/* Right – accordion */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Intro text */}
            <p className="text-white/60 text-[15px] leading-relaxed mb-8">
              The name <span className="text-white font-medium">MAQ GROUP OF COMPANIES</span> is
              synonymous with excellence, quality, commitment and personalized service. Founded in
              2019, we have built a reputation as a developer of integrity — combining vision with
              precision to shape Pakistan's industrial landscape.
            </p>

            {/* Accordion */}
            <div className="space-y-2">
              {faqs.map((item, i) => {
                const isOpen = openIndex === i
                return (
                  <motion.div
                    key={i}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-brand/25 bg-brand/[0.05]'
                        : 'border-white/08 bg-white/[0.02] hover:border-white/15'
                    }`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    >
                      <span
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          isOpen ? 'text-brand' : 'text-white group-hover:text-brand'
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'bg-brand text-black rotate-0'
                            : 'bg-white/08 text-white/60'
                        }`}
                      >
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 pb-5">
                            <div className="w-full h-px bg-brand/15 mb-4" />
                            <p className="text-sm text-white/55 leading-relaxed">{item.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors group"
              >
                Our Full Story
                <span className="w-8 h-8 rounded-full border border-brand/40 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all">
                  <ArrowRight size={14} className="group-hover:text-black transition-colors" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

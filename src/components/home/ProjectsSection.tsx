import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, MapPin, Calendar, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    num: '01',
    slug: 'elite-warehouse-systems',
    title: 'Elite Warehouse Systems',
    type: 'Industrial · Warehousing',
    year: '2025',
    location: 'M-10 Motorway, Karachi',
    area: '8 Acres · 28 Units',
    description:
      "Pakistan's first private gated warehouse community — strategically positioned at the CPEC starting point. Each warehouse spans 850–1300 sq.yd with 27ft height, earthquake-resistant structure, and integrated smart technology.",
    image: '/assets/project-warehouse.jpeg',
    category: 'warehousing',
  },
  {
    id: 2,
    num: '02',
    slug: 'elite-4-star-hotel',
    title: 'Elite 4 Star Hotel',
    type: 'Hospitality · Construction',
    year: '2024',
    location: 'Karachi, Pakistan',
    area: 'Landmark Development',
    description:
      'A landmark hospitality project where location, design and facilities are crafted with the same precision as service and guest experience. Premium 4-star accommodation redefining hospitality standards in Karachi.',
    image: '/assets/project-elite-4star.jpeg',
    category: 'construction',
  },
  {
    id: 3,
    num: '03',
    slug: 'elite-5-towers',
    title: 'Elite Vista 5 Towers',
    type: 'Residential · Commercial',
    year: '2024',
    location: 'Karachi, Pakistan',
    area: 'Multi-Tower Complex',
    description:
      'A visionary residential tower complex designed to break traditional isolating high-rise trends. Elite Vista 5 Towers fosters community and social connection while preserving personal privacy — reimagining vertical living.',
    image: '/assets/project-towers.png',
    category: 'commercial',
  },
]

export function ProjectsSection() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const project = projects[active]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-36 overflow-hidden"
      style={{ background: 'var(--color-canvas)' }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-brand">
                Our Projects
              </span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Latest{' '}
              <span className="text-brand">Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors group"
            >
              View All
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Project tabs selector */}
        <motion.div
          className="flex gap-2 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === i
                  ? 'bg-brand text-black border-brand shadow-[0_4px_20px_rgba(245,184,0,0.25)]'
                  : 'border-white/10 text-white/50 hover:text-white hover:border-white/25 bg-white/[0.03]'
              }`}
            >
              <span className="text-xs opacity-60 mr-1">{p.num}</span> {p.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Main featured project */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Image — large featured */}
            <motion.div
              className="relative group overflow-hidden rounded-3xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <motion.img
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.04 }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom info overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="text-[11px] tracking-widest uppercase text-brand mb-2">{project.type}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
                <div className="flex items-center gap-3 text-white/50 text-xs mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {project.location}
                  </span>
                  <span className="w-px h-3 bg-white/20" />
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {project.year}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right info panel */}
            <motion.div
              className="flex flex-col justify-between gap-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <motion.p
                  key={project.num}
                  className="text-[120px] font-black leading-none select-none"
                  style={{ color: 'rgba(245,184,0,0.05)' }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.num}
                </motion.p>
                <div className="-mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="space-y-3 mb-8">
                    {[
                      { icon: MapPin, text: project.location },
                      { icon: Tag, text: project.area },
                      { icon: Calendar, text: `${project.type} · ${project.year}` },
                    ].map(({ icon: Icon, text }, i) => (
                      <motion.div
                        key={text}
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                      >
                        <Icon size={15} className="text-brand shrink-0" />
                        <span className="text-white/60">{text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-3 group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-brand transition-colors">
                      View Project Details
                    </span>
                    <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all">
                      <ArrowRight size={14} className="group-hover:text-black transition-colors" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Other project thumbnails */}
              <div className="space-y-3">
                <p className="text-[11px] tracking-widest uppercase text-white/25 mb-3">Other Projects</p>
                {projects.filter((_, i) => i !== active).map((p, i) => (
                  <motion.button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(projects.indexOf(p))}
                    className="flex items-center gap-4 w-full group"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                        {p.title}
                      </p>
                      <p className="text-[11px] text-white/30">{p.type}</p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

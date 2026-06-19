import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects, projectCategories } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProjectCategory } from '@/types'
import { cn } from '@/lib/utils'

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-28 md:pt-32 pb-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Portfolio
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink">
            Our Projects
          </h1>
        </motion.div>

        <SectionHeading
          title="Experience & Creativity"
          subtitle="A curated collection of our latest and recent projects."
          className="mb-10"
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                activeCategory === cat.value
                  ? 'bg-ink text-surface'
                  : 'bg-surface text-ink-muted hover:text-ink border border-border'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link to={`/projects/${project.slug}`}>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-surface/90 text-xs font-medium capitalize">
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                  <span className="text-xs text-ink-faint uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h2 className="mt-1 font-serif text-2xl text-ink group-hover:text-warm transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted line-clamp-2">
                    {project.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-ink">
                    View Project
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

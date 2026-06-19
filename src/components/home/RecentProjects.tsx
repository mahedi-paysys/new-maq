import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects, projectCategories } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProjectCategory } from '@/types'
import { cn } from '@/lib/utils'

export function RecentProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container-main">
        <SectionHeading
          eyebrow="Recent Projects"
          title="A Curated Collection"
          subtitle="Experience & creativity in every structure we build."
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
                  ? 'bg-brand text-black'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link to={`/projects/${project.slug}`}>
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-surface/90 text-xs font-medium text-ink">
                      {project.year}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-2xl text-surface mb-2">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm text-surface/80 group-hover:text-surface transition-colors">
                        Take a Look
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

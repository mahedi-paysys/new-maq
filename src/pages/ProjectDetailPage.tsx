import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Building } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/AnimatedSection'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2)

  return (
    <div className="pt-28 md:pt-32 pb-24">
      <div className="container-main">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm capitalize">
            {project.status.replace('-', ' ')}
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink">
            {project.title}
          </h1>
        </motion.div>

        <div className="mt-10 aspect-[21/9] rounded-3xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-serif text-3xl text-ink mb-6">About Project</h2>
              <p className="text-ink-muted leading-relaxed text-lg">
                {project.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
              {project.location && (
                <div className="flex gap-3">
                  <MapPin size={18} className="text-warm shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ink-faint">
                      Location
                    </span>
                    <span className="text-sm text-ink">{project.location}</span>
                  </div>
                </div>
              )}
              <div className="flex gap-3">
                <Calendar size={18} className="text-warm shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-faint">
                    Year
                  </span>
                  <span className="text-sm text-ink">{project.year}</span>
                </div>
              </div>
              {project.architecture && (
                <div className="flex gap-3">
                  <Building size={18} className="text-warm shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ink-faint">
                      Architecture
                    </span>
                    <span className="text-sm text-ink">{project.architecture}</span>
                  </div>
                </div>
              )}
              <Button to="/contact" className="w-full">
                Inquire About This Project
              </Button>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-3xl text-ink mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((p) => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="group">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-ink group-hover:text-warm transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

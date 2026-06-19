import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { upcomingProjectsList } from '@/data/pages'

export function UpcomingProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Upcoming Projects"
        description="Explore MAQ Builders upcoming developments across hospitality, commercial and industrial sectors."
      />
      <section className="py-16 md:py-24">
        <div className="container-main space-y-8">
          {upcomingProjectsList.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 card-dark rounded-2xl overflow-hidden">
                <div className="md:col-span-2 aspect-video md:aspect-auto">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover min-h-[240px]" />
                </div>
                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <span className="text-xs text-brand uppercase tracking-wider mb-2">{project.status}</span>
                  <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
                  <p className="text-sm text-white/50 mb-3">{project.location}</p>
                  <p className="text-sm text-white/65 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

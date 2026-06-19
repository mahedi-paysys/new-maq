import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, Award, Presentation } from 'lucide-react'

const sections = [
  {
    title: 'Site Gallery',
    href: '/gallery/site-gallery',
    description: 'Construction progress, aerial views and on-site photography of our projects.',
    icon: Camera,
  },
  {
    title: 'Expo Exhibition',
    href: '/gallery/expo-exhibition',
    description: 'MAQ Builders at industry exhibitions and real estate summits.',
    icon: Presentation,
  },
  {
    title: 'Certificate',
    href: '/gallery/certificate',
    description: 'SBCA, LDA approvals and quality certifications.',
    icon: Award,
  },
]

export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Gallery"
        description="Explore our latest projects, exhibitions and certifications."
      />
      <section className="py-16 md:py-24">
        <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.href} delay={i * 0.1}>
                <Link to={item.href} className="group block card-dark rounded-2xl p-8 hover:border-brand/30 transition-colors h-full">
                  <Icon size={24} className="text-brand mb-5" />
                  <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-brand transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
                  <span className="inline-flex items-center gap-1 mt-5 text-sm text-brand">
                    View <ArrowUpRight size={14} />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}

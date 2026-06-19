import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { galleryImages } from '@/data/pages'

export function SiteGalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Site Gallery" description="Latest photography from our construction sites and project developments." />
      <section className="py-16 md:py-24">
        <div className="container-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <div className="group rounded-2xl overflow-hidden card-dark">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="p-4 text-sm font-medium text-white/80">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

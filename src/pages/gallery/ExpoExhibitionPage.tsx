import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { expoItems } from '@/data/pages'

export function ExpoExhibitionPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Expo Exhibition" description="MAQ Builders at leading construction and real estate exhibitions." />
      <section className="py-16 md:py-24">
        <div className="container-main space-y-8">
          {expoItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 card-dark rounded-2xl overflow-hidden">
                <div className="aspect-video md:aspect-auto">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover min-h-[220px]" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs text-brand uppercase tracking-wider mb-2">{item.date}</span>
                  <h2 className="text-xl font-semibold text-white mb-3">{item.title}</h2>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

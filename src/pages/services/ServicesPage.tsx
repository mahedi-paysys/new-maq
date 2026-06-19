import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { offerings } from '@/data/content'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Building2, Layers } from 'lucide-react'

const services = [
  {
    title: 'Elite Warehouse Systems For Rental',
    href: '/services/elite-warehouse-rental',
    description: 'Flexible warehousing solutions with dedicated office space, 24/7 security and smart app integration.',
    icon: Layers,
  },
  {
    title: 'Elite Warehouse Systems For Sale',
    href: '/services/elite-warehouse-sale',
    description: 'Own premium industrial units at CPEC corridor with SBCA & LDA approved freehold ownership.',
    icon: Building2,
  },
]

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Services"
        description="Comprehensive warehousing and industrial development solutions by MAQ Builders & Developers."
      />
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.href} delay={i * 0.1}>
                  <Link to={item.href} className="group block card-dark rounded-2xl p-8 hover:border-brand/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-brand" />
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-brand transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                    <span className="inline-flex items-center gap-1 mt-5 text-sm text-brand">
                      View Details <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>

          <h2 className="text-2xl font-semibold text-white mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06}>
                <div className="card-dark rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

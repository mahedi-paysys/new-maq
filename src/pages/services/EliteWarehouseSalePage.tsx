import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { saleFeatures } from '@/data/pages'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

export function EliteWarehouseSalePage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Elite Warehouse Systems For Sale"
        description="Invest in freehold industrial units at the CPEC starting point — 28 warehouses across 8 acres of prime land."
      />
      <section className="py-16 md:py-24">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80&auto=format&fit=crop"
                alt="Elite Warehouse For Sale"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-semibold text-white mb-6">Ownership Benefits</h2>
            <ul className="space-y-4">
              {saleFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/65">
                  <Check size={16} className="text-brand shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="brand" className="mt-8">
              Inquire About Purchase
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

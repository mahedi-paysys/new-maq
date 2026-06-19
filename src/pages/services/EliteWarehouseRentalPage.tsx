import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { rentalFeatures } from '@/data/pages'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

export function EliteWarehouseRentalPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Elite Warehouse Systems For Rental"
        description="Premium warehousing units available for lease at M-10 motorway, Karachi — Pakistan's first SBCA approved warehouse system."
      />
      <section className="py-16 md:py-24">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop"
                alt="Elite Warehouse Rental"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-semibold text-white mb-6">Rental Features</h2>
            <ul className="space-y-4">
              {rentalFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/65">
                  <Check size={16} className="text-brand shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="brand" className="mt-8">
              Inquire About Rental
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

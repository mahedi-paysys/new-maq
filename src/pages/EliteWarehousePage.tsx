import { motion } from 'framer-motion'
import { Download, MapPin } from 'lucide-react'
import { warehouseFeatures } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function EliteWarehousePage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80&auto=format&fit=crop"
          alt="Elite Warehouse Systems"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />
        <div className="relative z-10 container-main pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-warm">
              Upcoming Project
            </span>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl text-surface max-w-4xl">
              Elite Warehouse Systems
            </h1>
            <p className="mt-6 text-lg text-surface/75 max-w-2xl">
              Pakistan&apos;s first and finest warehouse system — SBCA & LDA approved,
              setting a spectacular industrial solution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-main">
          <SectionHeading
            eyebrow="What is Elite Warehouse Systems?"
            title="Industrial Excellence Redefined"
            subtitle="The biggest construction in the real world — planned with distinctive and state-of-the-art industrial amenities."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warehouseFeatures.map((feature, i) => (
              <Reveal key={feature.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full p-8 rounded-3xl bg-surface border border-border shadow-soft hover:shadow-card transition-shadow duration-500"
                >
                  <span className="block font-serif text-4xl text-ink/10 mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-ink mb-3">{feature.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Button icon={<Download size={18} />} iconPosition="left">
              Download Elite Warehouse Brochure
            </Button>
            <Button to="/contact" variant="outline">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-surface">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl">Location</h2>
              <p className="mt-6 text-surface/70 leading-relaxed">
                Strategically situated at M-10 motorway, just 20 minutes from Karachi Port.
                The starting point of CPEC linking the center way towards Gawadar, Quetta
                & Punjab — an ideal landmark for industrial and logistics operations.
              </p>
              <div className="mt-8 flex items-start gap-3">
                <MapPin size={20} className="text-warm shrink-0 mt-1" />
                <span className="text-surface/80">
                  M-10 Motorway, Karachi, Pakistan
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="aspect-video rounded-3xl overflow-hidden bg-surface/10">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80&auto=format&fit=crop"
                  alt="Location map"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}

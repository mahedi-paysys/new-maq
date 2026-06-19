import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CTABanner() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 md:px-16 md:py-20"
        >
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/80" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              Ready to Build?
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-surface leading-tight">
              We Construct Your Future
            </h2>
            <p className="mt-5 text-surface/70 leading-relaxed">
              Partner with MAQ Builders for world-class construction and infrastructure
              solutions. Always dedicated and devoted to your vision.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                to="/contact"
                size="lg"
                className="bg-warm text-ink hover:bg-warm/90"
                icon={<ArrowRight size={18} />}
              >
                Get in Touch
              </Button>
              <Button
                to="/projects/elite-warehouse-systems"
                variant="outline"
                size="lg"
                className="border-surface/30 text-surface hover:bg-surface hover:text-ink"
              >
                Elite Warehouse Systems
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

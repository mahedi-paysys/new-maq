import { motion } from 'framer-motion'
import { ceoMessage } from '@/data/content'
import { Reveal } from '@/components/ui/AnimatedSection'

export function LeadershipPage() {
  return (
    <div className="pt-28 md:pt-32 pb-24">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            About / Leadership
          </span>
          <h1 className="mt-4 font-serif text-5xl text-ink">Leadership</h1>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-canvas">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop"
                alt="Muhammad Asim Quraishi, CEO"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-3">
            <h2 className="font-serif text-3xl text-ink">Muhammad Asim Quraishi</h2>
            <p className="mt-2 text-warm font-medium">Chief Executive Officer</p>
            <div className="mt-8 space-y-4 text-ink-muted leading-relaxed">
              {ceoMessage.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

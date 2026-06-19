import { motion } from 'framer-motion'
import { stats } from '@/data/content'
import { staggerContainer, fadeInUp } from '@/hooks/useScrollAnimation'

export function StatsBar() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 glass-dark rounded-3xl shadow-elevated border border-white/10 overflow-hidden"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={i}
              className="relative px-8 py-10 md:py-12 text-center group"
            >
              {i > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
              )}
              <span className="block font-serif text-4xl md:text-5xl lg:text-6xl text-brand group-hover:text-brand-dark transition-colors duration-500">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm md:text-base text-ink-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

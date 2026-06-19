import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-32 md:pt-36 pb-12 md:pb-16 section-alt border-b border-white/5">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-3">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-white max-w-3xl leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base text-white/60 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

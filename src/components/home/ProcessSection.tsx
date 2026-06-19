import { motion } from 'framer-motion'
import { processSteps } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation'

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-ink text-surface overflow-hidden">
      <div className="container-main">
        <SectionHeading
          eyebrow="Who We Are"
          title="Welcome to MAQ Builders & Developers"
          subtitle="From sketching to delivery — a systematic approach to constructing exceptional quality projects."
          light
          className="mb-16 md:mb-20"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              custom={i}
              className="relative group"
            >
              <span className="block font-serif text-6xl text-surface/10 group-hover:text-warm/30 transition-colors duration-500">
                {step.step}
              </span>
              <h3 className="font-serif text-2xl -mt-4 mb-3">{step.title}</h3>
              <p className="text-sm text-surface/60 leading-relaxed">
                {step.description}
              </p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-surface/20" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

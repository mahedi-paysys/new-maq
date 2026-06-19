import { motion } from 'framer-motion'
import { whyChooseUs } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/AnimatedSection'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Excellence Defined by Exclusivity"
          subtitle="The name MAQ Builders is synonymous with principles of excellence, quality, commitment and personalized service."
          className="mb-16 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl card-dark"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-ink group/link"
                  >
                    Learn More
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

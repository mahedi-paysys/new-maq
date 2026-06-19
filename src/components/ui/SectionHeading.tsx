import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-3 block text-xs font-sans font-semibold uppercase tracking-[0.18em]',
            light ? 'text-brand' : 'text-brand'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-[1.15]',
          light ? 'text-surface' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed',
            light ? 'text-surface/70' : 'text-ink-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

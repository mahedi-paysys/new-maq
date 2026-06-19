import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface PlaceholderPageProps {
  title: string
  eyebrow?: string
  description?: string
}

export function PlaceholderPage({
  title,
  eyebrow = 'Coming Soon',
  description = 'This page is under development. We are crafting something exceptional for you.',
}: PlaceholderPageProps) {
  return (
    <div className="pt-36 md:pt-40 pb-24 min-h-[70vh] flex items-center">
      <div className="container-main text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-4">
            <span className="w-8 h-px bg-brand" />
            {eyebrow}
            <span className="w-8 h-px bg-brand" />
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-ink">{title}</h1>
          <p className="mt-6 text-ink-muted text-lg max-w-lg mx-auto leading-relaxed">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/" variant="brand" icon={<ArrowLeft size={18} />} iconPosition="left">
              Back to Home
            </Button>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

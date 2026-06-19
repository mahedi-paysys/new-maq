import { motion } from 'framer-motion'
import { mission, vision, principles } from '@/data/content'
import { Reveal } from '@/components/ui/AnimatedSection'

const items = [
  { title: 'Mission', content: mission, accent: false },
  { title: 'Vision', content: vision, accent: false },
  { title: 'Principles of Excellence', content: principles, accent: true },
]

export function MissionVisionPage() {
  return (
    <div className="pt-28 md:pt-32 pb-24">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            About / Mission & Vision
          </span>
          <h1 className="mt-4 font-serif text-5xl text-ink">Mission & Vision</h1>
        </motion.div>

        <div className="mt-16 space-y-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div
                className={`p-10 md:p-12 rounded-3xl ${
                  item.accent
                    ? 'bg-ink text-surface'
                    : 'bg-surface border border-border'
                }`}
              >
                <h2 className="font-serif text-3xl mb-4">{item.title}</h2>
                <p
                  className={`text-lg leading-relaxed max-w-3xl ${
                    item.accent ? 'text-surface/70' : 'text-ink-muted'
                  }`}
                >
                  {item.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

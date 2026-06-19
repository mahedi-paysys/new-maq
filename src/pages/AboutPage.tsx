import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, ArrowRight } from 'lucide-react'
import {
  ceoMessage,
  companyProfile,
  mission,
  vision,
  principles,
  offerings,
} from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="container-main pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            About Us
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink max-w-3xl">
            Building Integrity, One Project at a Time
          </h1>
        </motion.div>
      </section>

      <section className="container-main pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop"
                alt="MAQ Builders construction site"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
              CEO Message
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink">
              Muhammad Asim Quraishi
            </h2>
            <p className="mt-2 text-sm text-ink-muted">Chief Executive Officer</p>
            <div className="mt-6 space-y-4 text-ink-muted leading-relaxed">
              {ceoMessage.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-white/5">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Reveal>
              <div className="p-8 rounded-2xl card-dark h-full">
                <h3 className="font-serif text-2xl text-ink mb-4">Mission</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 rounded-2xl card-dark h-full">
                <h3 className="font-serif text-2xl text-ink mb-4">Vision</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-ink text-surface h-full">
                <h3 className="font-serif text-2xl mb-4">Principles</h3>
                <p className="text-surface/70 text-sm leading-relaxed">{principles}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-main">
          <SectionHeading
            eyebrow="Company Profile"
            title="We Construct Your Future"
            subtitle={companyProfile}
            className="mb-12"
          />
          <div className="flex flex-wrap gap-4">
            <Button icon={<Download size={18} />} iconPosition="left">
              Download Company Profile
            </Button>
            <Button to="/projects" variant="outline" icon={<ArrowRight size={18} />}>
              View Our Projects
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-white/5">
        <div className="container-main">
          <SectionHeading
            eyebrow="Best Features"
            title="Why Choose MAQ Builders"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.slice(0, 3).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <div className="p-8 rounded-2xl card-dark">
                  <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container-main flex flex-wrap gap-4">
          <Link
            to="/about/company-profile"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Company Profile →
          </Link>
          <Link
            to="/about/leadership"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Leadership →
          </Link>
          <Link
            to="/about/mission-vision"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Mission & Vision →
          </Link>
        </div>
      </section>
    </div>
  )
}

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/content'
import { Button } from '@/components/ui/Button'

const contactCards = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: siteConfig.address,
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: siteConfig.uan,
    href: `tel:${siteConfig.phoneAlt.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 overflow-hidden" style={{ background: 'var(--color-canvas)' }}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-brand">
              Contact Us
            </span>
            <div className="w-8 h-px bg-brand" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Let&apos;s Build{' '}
            <span className="text-brand">Something Great</span>
          </h2>
          <p className="mt-4 text-white/50 text-[15px] max-w-lg mx-auto leading-relaxed">
            Ready to start your next project? Reach out and our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon
              const inner = (
                <motion.div
                  className="group p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-brand/25 hover:bg-brand/[0.04] transition-all duration-500"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors duration-400">
                    <Icon size={18} className="text-brand" />
                  </div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-white/35 mb-2">{card.label}</p>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                    {card.value}
                  </p>
                </motion.div>
              )

              return card.href ? (
                <a key={card.label} href={card.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={card.label}>{inner}</div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all group mt-2"
              >
                View Full Contact Page
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Quick contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-surface overflow-hidden">
              {/* Subtle glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(245,184,0,0.06) 0%, transparent 70%)',
                }}
              />

              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-sm text-white/45 mb-8">
                  Fill out the form and we&apos;ll respond within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center mx-auto mb-4">
                      <Send size={22} className="text-brand" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Message Sent!</h4>
                    <p className="mt-2 text-white/45 text-sm">Thank you — we&apos;ll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/40 transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/40 transition-colors"
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/40 transition-colors"
                    />
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/40 transition-colors resize-none"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-brand text-black hover:bg-brand-dark w-full sm:w-auto"
                      icon={<Send size={16} />}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

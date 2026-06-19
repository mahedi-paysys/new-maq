import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { siteConfig } from '@/data/content'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/AnimatedSection'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-28 md:pt-32 pb-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Contact
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink">
            Get in Touch
          </h1>
          <p className="mt-4 text-ink-muted text-lg">Always dedicated and devoted</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <div className="p-8 rounded-3xl bg-surface border border-border">
                <MapPin size={22} className="text-warm mb-4" />
                <h3 className="font-serif text-xl text-ink mb-2">Address</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-surface border border-border">
                <Phone size={22} className="text-warm mb-4" />
                <h3 className="font-serif text-xl text-ink mb-2">Phone</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="block text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`tel:${siteConfig.phoneAlt}`}
                  className="block text-sm text-ink-muted hover:text-ink transition-colors mt-1"
                >
                  {siteConfig.phoneAlt}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-surface border border-border">
                <Mail size={22} className="text-warm mb-4" />
                <h3 className="font-serif text-xl text-ink mb-2">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="p-8 md:p-12 rounded-3xl bg-surface border border-border shadow-soft">
              <h2 className="font-serif text-3xl text-ink mb-2">Send a Message</h2>
              <p className="text-sm text-ink-muted mb-8">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-warm-light flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-ink" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink">Message Sent!</h3>
                  <p className="mt-2 text-ink-muted text-sm">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-ink-faint mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm focus:outline-none focus:border-ink/30 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-ink-faint mb-2">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm focus:outline-none focus:border-ink/30 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-ink-faint mb-2">
                      Your Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm focus:outline-none focus:border-ink/30 transition-colors"
                      placeholder="0300-0000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-ink-faint mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm focus:outline-none focus:border-ink/30 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-ink-faint mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-5 py-3.5 rounded-2xl bg-canvas border border-border text-sm focus:outline-none focus:border-ink/30 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" size="lg" icon={<Send size={18} />}>
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

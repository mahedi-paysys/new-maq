import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What is MAQ GROUP OF COMPANIES?',
    answer:
      'MAQ GROUP OF COMPANIES is a premier construction company founded in 2019 by Muhammad Asim Quraishi. We are synonymous with excellence, quality, commitment and personalized service — known for structurally sound, sustainable, and innovative projects in Pakistan.',
  },
  {
    id: 2,
    category: 'Warehouse',
    question: 'What is Elite Warehouse Systems?',
    answer:
      "Pakistan's first and finest private gated warehouse community — 28 warehouses across 8 acres at M-10 Motorway, just 15–20 minutes from Karachi Port at the CPEC starting point. Each unit is 850–1300 sq.yd with 27ft height, 17ft gate clearance, SBCA & LDA approved, and available for sale or rental.",
  },
  {
    id: 3,
    category: 'Warehouse',
    question: 'What security features are included?',
    answer:
      'Elite Warehouse Systems features a full boundary wall, 24/7 CCTV surveillance, trained security guards, gated checkpoints, watch towers, and an advanced fire extinguishing system. Additionally, our One-Touch Smart App provides in-house camera tracking and real-time caution alerts.',
  },
  {
    id: 4,
    category: 'Investment',
    question: 'What is the payment plan for purchasing a warehouse?',
    answer:
      'Our flexible payment plan is structured as: 25% booking amount, 15% during construction phase, 20% upon completion, and the remaining 40% spread across 12–24 month installments. A sample unit is listed at PKR 7 Crore for a 1,000 sq.yd warehouse in Kemari Town, Karachi.',
  },
  {
    id: 5,
    category: 'Technology',
    question: 'What is the One-Touch Smart App?',
    answer:
      'Our proprietary palm application provides a complete digital warehouse management solution — including online payment processing, in-house camera tracking, caution and security alerts, unique warehouse IDs, virtual warehouse access, and full supply chain visibility from anywhere in the world.',
  },
  {
    id: 6,
    category: 'Structure',
    question: 'How durable is the construction?',
    answer:
      'Every MAQ Builders project uses lightweight RCC & imported steel-framed structures on deep pile foundations, UPVC roofing sheets (wind, sound & heat resistant), and earthquake-resistant design with rubber and steel absorbing pads. Our buildings are engineered to require no major repairs for decades.',
  },
  {
    id: 7,
    category: 'Projects',
    question: 'What are your upcoming projects?',
    answer:
      'We are developing two landmark projects: (1) Elite 4 Star Hotel — a premium hospitality development where design, location and service concept are crafted together; and (2) Elite Vista 5 Towers — an innovative residential tower complex breaking the isolating high-rise mold to foster community while preserving privacy.',
  },
  {
    id: 8,
    category: 'General',
    question: 'How can I get in touch or start a project?',
    answer:
      'Reach us via UAN: 111-627-111 or WhatsApp: 0300-1-627-627. Email us at info@maqbuilders.pk or visit our office at Plot #4, 1st Floor, Sumya Corner, Shaheed-e-Millat Road, Block #3, Karachi. Our team is available 24/7 for project inquiries and consultations.',
  },
]

const categories = ['All', 'General', 'Warehouse', 'Investment', 'Technology', 'Structure', 'Projects']

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1)
  const [activeCategory, setActiveCategory] = useState('All')
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const filtered =
    activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 md:py-36 overflow-hidden relative"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,184,0,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/[0.06] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle size={13} className="text-brand" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand">FAQs</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Have Questions?{' '}
            <span className="text-brand">Here Are</span>
            <br />
            Quick Answers
          </motion.h2>

          <motion.p
            className="text-white/45 text-base max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Can't find what you're looking for?{' '}
            <Link to="/contact" className="text-brand hover:text-white transition-colors underline underline-offset-4">
              Contact us directly
            </Link>
            {' '}and we'll get back to you promptly.
          </motion.p>
        </div>

        {/* Category pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat)
                setOpenId(null)
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-brand text-black border-brand'
                  : 'border-white/10 text-white/45 hover:text-white hover:border-white/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ list - max width centered */}
        <div className="max-w-3xl mx-auto">
          {/* Glassmorphism card wrapper */}
          <motion.div
            className="rounded-3xl overflow-hidden border border-white/[0.07]"
            style={{
              background: 'linear-gradient(135deg, rgba(17,17,17,0.9) 0%, rgba(10,10,10,0.95) 100%)',
              backdropFilter: 'blur(20px)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filtered.map((faq, i) => {
                  const isOpen = openId === faq.id
                  return (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      className={`border-b border-white/[0.06] last:border-b-0 transition-colors duration-300 ${
                        isOpen ? 'bg-white/[0.03]' : ''
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        className="w-full flex items-center gap-4 px-7 py-5 text-left group"
                      >
                        {/* Question mark icon */}
                        <span
                          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            isOpen
                              ? 'bg-brand text-black'
                              : 'bg-white/[0.06] text-white/40 group-hover:bg-brand/15 group-hover:text-brand'
                          }`}
                        >
                          ?
                        </span>

                        {/* Question */}
                        <span
                          className={`flex-1 text-sm font-semibold transition-colors duration-300 ${
                            isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'
                          }`}
                        >
                          {faq.question}
                        </span>

                        {/* Category badge */}
                        <span className="hidden sm:block text-[10px] font-medium text-white/25 mr-3">
                          {faq.category}
                        </span>

                        {/* Toggle icon */}
                        <span
                          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen ? 'bg-brand text-black' : 'bg-white/[0.06] text-white/40'
                          }`}
                        >
                          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="px-7 pb-6 pl-[76px]">
                              <p className="text-sm text-white/55 leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className="text-white/35 text-sm mb-4">Still have questions about our projects?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-brand text-black text-sm font-bold hover:bg-white transition-all duration-300 group"
            >
              Get In Touch
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

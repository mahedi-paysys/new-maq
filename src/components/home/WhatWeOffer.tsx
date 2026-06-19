import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { MapPin, Shield, Building2, Award, Layers, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const offerings = [
  {
    id: 'landmark',
    num: '01',
    title: 'Ideal Landmark',
    subtitle: 'Prime CPEC Corridor Location',
    description:
      'Strategically positioned just 15–20 minutes from Karachi Port, at M-10 Motorway leading towards Mochko Hub — the starting point of CPEC linking Gwadar, Quetta & Punjab. The most coveted industrial address in Pakistan.',
    icon: MapPin,
    accent: '#f5b800',
    tags: ['CPEC Starting Point', 'M-10 Motorway', 'Karachi Port Access'],
    image: '/assets/project-warehouse.jpeg',
  },
  {
    id: 'gated',
    num: '02',
    title: 'Gated Community',
    subtitle: 'Fort-Level Security Infrastructure',
    description:
      'Pakistan\'s first private gated warehouse community — surrounded by a full boundary wall, 24/7 CCTV surveillance, trained security guards, checkpoints, watch towers and a fire extinguishing system that ensures maximum protection.',
    icon: Shield,
    accent: '#f5b800',
    tags: ['24/7 CCTV', 'Security Guards', 'Fire Suppression', 'Checkpoints'],
    image: '/assets/gallery-1.jpeg',
  },
  {
    id: 'towers',
    num: '03',
    title: 'Office Towers',
    subtitle: 'Integrated Commercial Ecosystem',
    description:
      'A dedicated office tower featuring separate integrated office suites, a trading room, conference hall and prayer area — all designed to exceed client expectations and create a complete business environment within the complex.',
    icon: Building2,
    accent: '#f5b800',
    tags: ['Office Suites', 'Conference Hall', 'Trading Room', 'Prayer Area'],
    image: '/assets/gallery-5.jpeg',
  },
  {
    id: 'durability',
    num: '04',
    title: 'Guaranteed Durability',
    subtitle: 'Engineered for Decades',
    description:
      'Built on deep pile foundations with lightweight RCC & imported steel frames, UPVC roofing sheets (wind, sound & heat resistant) and earthquake-resistant design using rubber and steel absorbing pads. No major repairs for decades.',
    icon: Award,
    accent: '#f5b800',
    tags: ['Earthquake Resistant', 'Steel Framed', 'UPVC Roofing', 'Deep Pile'],
    image: '/assets/how-we-work.jpeg',
  },
  {
    id: 'structure',
    num: '05',
    title: 'Strong Structure',
    subtitle: 'World-Class Engineering Standards',
    description:
      'Every warehouse spans 850–1300 square yards with 27ft height and 17ft gate clearance. RCC & imported steel-framed structure on deep pile foundation, block masonry, plastered with cement mortar — built to last generations.',
    icon: Layers,
    accent: '#f5b800',
    tags: ['27ft Height', '17ft Gate', '850–1300 sq.yd', 'RCC Steel'],
    image: '/assets/gallery-6.jpeg',
  },
  {
    id: 'app',
    num: '06',
    title: 'One Touch Smart App',
    subtitle: 'Digital Warehouse Management',
    description:
      'A cutting-edge palm application providing one-touch solution for online payments processing, in-house camera tracking, caution alerts, unique warehouse IDs, virtual warehouse access and complete supply chain visibility.',
    icon: Smartphone,
    accent: '#f5b800',
    tags: ['Online Tracking', 'Camera Access', 'Virtual Tours', 'Smart Alerts'],
    image: '/assets/about-us-section.jpeg',
  },
]

function useActiveIndex(count: number, sectionRef: React.RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const idx = Math.min(Math.floor(v * count), count - 1)
      setActive(Math.max(0, idx))
    })
    return unsubscribe
  }, [scrollYProgress, count])

  return { active, scrollYProgress }
}

export function WhatWeOffer() {
  const sectionRef = useRef<HTMLElement>(null)
  const { active } = useActiveIndex(offerings.length, sectionRef)

  const current = offerings[active]
  const Icon = current.icon

  return (
    <section
      ref={sectionRef}
      id="what-we-offer"
      style={{ height: `${offerings.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Left panel — label */}
        <div className="hidden xl:flex flex-col justify-center w-[72px] shrink-0 border-r border-white/[0.06]">
          <div
            className="whitespace-nowrap text-[11px] font-semibold tracking-[0.3em] uppercase text-white/20"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', paddingBottom: '2rem' }}
          >
            What We Offer
          </div>
        </div>

        {/* Main sticky content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 overflow-hidden">
          {/* Left text panel */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 relative bg-canvas">
            {/* Progress dots */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
              {offerings.map((_, i) => (
                <div
                  key={i}
                  className="relative w-1.5 h-1.5 rounded-full transition-all duration-500"
                  style={{
                    background: i === active ? '#f5b800' : 'rgba(255,255,255,0.15)',
                    transform: i === active ? 'scale(1.6)' : 'scale(1)',
                  }}
                />
              ))}
            </div>

            {/* Section label */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-brand">
                What We Offer
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Number */}
                <div className="text-[80px] md:text-[100px] font-black leading-none text-white/[0.04] select-none mb-[-16px]">
                  {current.num}
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                  {current.title}
                </h2>
                <p className="text-brand text-sm font-semibold tracking-wide mb-6">
                  {current.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/55 text-[15px] leading-relaxed mb-8 max-w-xl">
                  {current.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/projects/elite-warehouse-systems"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand transition-colors group"
                >
                  Explore Elite Warehouse
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right visual panel */}
          <div className="relative overflow-hidden bg-surface">
            {/* Animated background gradient */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + '-bg'}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: `radial-gradient(ellipse at 30% 50%, rgba(245,184,0,0.08) 0%, transparent 60%)`,
                }}
              />
            </AnimatePresence>

            {/* Grid lines */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            {/* Image + icon display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + '-visual'}
                  className="flex flex-col items-center gap-8 w-full max-w-md"
                  initial={{ opacity: 0, scale: 0.92, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -40 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Feature image */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] shadow-elevated">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Icon badge overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-brand/90 flex items-center justify-center">
                        <Icon size={20} className="text-black" />
                      </div>
                      <p className="text-sm font-semibold text-white">{current.title}</p>
                    </div>
                  </div>

                  {/* Offering number label */}
                  <div className="text-center">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-1">
                      Feature {current.num} of {offerings.length.toString().padStart(2, '0')}
                    </p>
                    <p className="text-base font-medium text-white/70">{current.subtitle}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step progress bar bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/05">
              <motion.div
                className="h-full bg-brand"
                animate={{ width: `${((active + 1) / offerings.length) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
const steps = [
  {
    num: '01',
    title: 'Discovery & Sketching',
    desc: 'We begin by deeply understanding your goals. Our architects and engineers conceptualize visionary designs tailored to your aspirations — translating ideas into precise blueprints.',
    detail: 'Site analysis · Client briefing · Blueprint creation · Design approval',
  },
  {
    num: '02',
    title: 'Precision Working',
    desc: 'Our expert teams execute with world-class materials and methodology. Lightweight RCC, imported steel frames, deep pile foundations — every element engineered for longevity.',
    detail: 'Material procurement · Structural engineering · Quality checks · Progress reporting',
  },
  {
    num: '03',
    title: 'Utilization & Integration',
    desc: 'We optimize every space for maximum functionality. Smart systems, 24/7 CCTV, power backup, modern drainage — all seamlessly integrated for operational excellence.',
    detail: 'Systems integration · Smart app setup · Safety testing · Compliance review',
  },
  {
    num: '04',
    title: 'Handover & Delivery',
    desc: 'On-time handover with zero compromise on quality. Full documentation, SBCA & LDA approvals, and our team remains available for ongoing support after delivery.',
    detail: 'Final inspection · Legal documentation · Client walkthrough · Post-delivery support',
  },
]

function StepContent({ step, isActive }: { step: typeof steps[0]; isActive: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 40,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-start gap-6 group">
        <div className="shrink-0">
          <div className="relative w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center">
            <span className="text-xl font-bold text-brand font-mono">{step.num}</span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h3>
          <p className="text-white/55 text-sm md:text-base leading-relaxed mb-4">{step.desc}</p>
          <div className="flex flex-wrap gap-2">
            {step.detail.split(' · ').map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const idx = Math.min(Math.floor(v * steps.length), steps.length - 1)
      setActiveStep(Math.max(0, idx))
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      style={{ height: `${steps.length * 100}vh` }}
      className="relative"
    >
      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden"
        style={{ background: 'var(--color-surface)' }}
      >
        <div className="container-main w-full py-16 md:py-20">
          {/* Header */}
          <div ref={headerRef} className="mb-12 md:mb-16 max-w-2xl">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-8 h-px bg-brand" />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-brand">
                How We Work
              </span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              A Proven Process
              <br />
              <span className="text-brand">Built on Excellence</span>
            </motion.h2>
          </div>

          {/* Steps + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">
            {/* Scroll-driven steps */}
            <div className="relative h-[320px] md:h-[280px]">
              {/* Progress indicator */}
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 hidden md:flex flex-col items-center gap-0">
                {steps.map((s, i) => (
                  <div key={s.num} className="flex flex-col items-center flex-1">
                    <motion.div
                      className="w-2 h-2 rounded-full transition-colors duration-500"
                      animate={{
                        background: i <= activeStep ? '#f5b800' : 'rgba(255,255,255,0.15)',
                        scale: i === activeStep ? 1.4 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 my-1 transition-colors duration-500"
                        style={{
                          background:
                            i < activeStep
                              ? 'rgba(245,184,0,0.4)'
                              : 'rgba(255,255,255,0.08)',
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {steps.map((step, i) => (
                <StepContent key={step.num} step={step} isActive={activeStep === i} />
              ))}
            </div>

            {/* Sticky image */}
            <motion.div
              className="relative w-full h-[340px] md:h-[400px] rounded-3xl overflow-hidden"
              style={{ y: imageY }}
              initial={{ opacity: 0, x: 40 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/assets/how-we-work.jpeg"
                alt="MAQ Group construction process"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* SBCA badge only */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 16 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center shrink-0">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">SBCA & LDA Approved</p>
                    <p className="text-white/50 text-xs">All projects fully certified</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Step counter */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-white/25">
              Step {steps[activeStep].num} of {steps.length.toString().padStart(2, '0')}
            </span>
            <div className="flex-1 h-px bg-white/[0.06]">
              <motion.div
                className="h-full bg-brand/60"
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

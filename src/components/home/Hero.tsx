import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides, siteConfig } from '@/data/content'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6500)
    return () => clearInterval(timer)
  }, [next])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  const slide = heroSlides[current]

  const contentVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 24 : -24,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -16 : 16,
      transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] as const },
    }),
  }

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={siteConfig.assets.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
      </div>

      <div className="relative z-10 container-main w-full pb-16 md:pb-24 pt-36 md:pt-44">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                {slide.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-[3rem] text-white font-semibold leading-[1.1] tracking-tight">
                {slide.title}
              </h1>
              <p className="mt-5 text-base md:text-[17px] text-white/70 max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="mt-8">
                <Button
                  to={slide.ctaLink}
                  size="md"
                  variant="brand"
                  icon={<ArrowRight size={16} />}
                >
                  {slide.cta}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-10 right-6 md:bottom-14 md:right-10 flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? 'w-7 bg-brand' : 'w-3.5 bg-white/35'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

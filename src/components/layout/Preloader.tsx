import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/content'

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [ready, setReady] = useState(false)
  const [buildComplete, setBuildComplete] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = siteConfig.assets.logo

    const video = document.createElement('video')
    video.preload = 'auto'
    video.src = siteConfig.assets.heroVideo

    Promise.all([
      new Promise<void>((resolve) => {
        img.onload = () => resolve()
        img.onerror = () => resolve()
      }),
      new Promise<void>((resolve) => {
        video.onloadeddata = () => resolve()
        video.onerror = () => resolve()
        setTimeout(resolve, 2000)
      }),
    ]).then(() => setReady(true))
  }, [])

  useEffect(() => {
    if (!ready) return
    const buildTimer = setTimeout(() => setBuildComplete(true), 2400)
    const exitTimer = setTimeout(onComplete, 3200)
    return () => {
      clearTimeout(buildTimer)
      clearTimeout(exitTimer)
    }
  }, [ready, onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0a' }}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {/* Subtle construction grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,184,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,0,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(245,184,0,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex flex-col items-center gap-8 px-6">
        {/* Logo — construction build: fade-in + fade-up + clip reveal */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-24 h-24 md:w-28 md:h-28">
            {/* Ghost outline */}
            <img
              src={siteConfig.assets.logo}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-contain opacity-[0.08]"
              draggable={false}
            />

            {/* Building reveal from bottom */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={
                ready
                  ? { clipPath: 'inset(0% 0 0 0)' }
                  : { clipPath: 'inset(100% 0 0 0)' }
              }
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <img
                src={siteConfig.assets.logo}
                alt={siteConfig.fullName}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </motion.div>

            {/* Construction scan line */}
            {ready && !buildComplete && (
              <motion.div
                className="absolute left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(245,184,0,0.7), transparent)',
                }}
                initial={{ top: '100%' }}
                animate={{ top: '0%' }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              />
            )}
          </div>

          {/* Underline accent */}
          <motion.div
            className="mx-auto mt-5 h-px bg-brand/40"
            initial={{ width: 0, opacity: 0 }}
            animate={ready ? { width: 64, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Company name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-white/50 font-medium">
            MAQ GROUP OF COMPANIES
          </p>
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.p
        className="absolute bottom-10 left-0 right-0 text-center text-[10px] tracking-[0.3em] text-white/12 uppercase px-6"
        initial={{ opacity: 0 }}
        animate={buildComplete ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        We Construct For Your Better Tomorrow
      </motion.p>
    </motion.div>
  )
}

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3x3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const galleryItems = [
  {
    id: 1,
    src: '/assets/gallery-1.jpeg',
    title: 'Elite Warehouse – Aerial View',
    category: 'Warehouse',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: '/assets/gallery-2.jpeg',
    title: 'Site Overview',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: '/assets/gallery-3.jpeg',
    title: 'Aerial Perspective',
    category: 'Warehouse',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: '/assets/gallery-4.jpeg',
    title: 'Night View – Warehouse',
    category: 'Night Shots',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    src: '/assets/gallery-5.jpeg',
    title: 'Office Tower – Night',
    category: 'Night Shots',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: '/assets/gallery-6.jpeg',
    title: 'Warehouse Structure',
    category: 'Structure',
    span: 'col-span-2 row-span-1',
  },
]

const categories = ['All', 'Warehouse', 'Night Shots', 'Structure']

interface LightboxProps {
  items: typeof galleryItems
  index: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

function Lightbox({ items, index, onClose, onNext, onPrev }: LightboxProps) {
  const item = items[index]

  return (
    <motion.div
      className="fixed inset-0 z-[9000] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/92 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-4"
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between mb-4 px-1">
          <div>
            <p className="text-xs tracking-widest uppercase text-brand">{item.category}</p>
            <h3 className="text-white font-semibold">{item.title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30 font-mono">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/05 transition-all"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            className="relative rounded-2xl overflow-hidden"
            style={{ maxHeight: '70vh' }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full object-contain"
              style={{ maxHeight: '70vh' }}
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-white/08 rounded-2xl pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            type="button"
            onClick={onPrev}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '24px' : '6px',
                  background: i === index ? '#f5b800' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onNext}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0)),
    [filtered.length]
  )
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0)),
    [filtered.length]
  )

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="py-24 md:py-36 overflow-hidden"
        style={{ background: 'var(--color-surface)' }}
      >
        <div className="container-main">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-px bg-brand" />
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-brand">
                  Gallery
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Our <span className="text-brand">Latest</span> &amp; Recent Projects
              </motion.h2>
            </div>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-brand text-black border-brand'
                      : 'border-white/10 text-white/50 hover:text-white hover:border-white/25 bg-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Masonry Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group ${item.span}`}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Default — clean image only, no text */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Hover overlay — slides up from bottom */}
                  <div className="absolute inset-x-0 bottom-0 overflow-hidden">
                    <motion.div
                      className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    >
                      <div
                        className="px-5 py-5 pt-10"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 60%, transparent 100%)',
                        }}
                      >
                        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-brand/20 border border-brand/30 text-brand mb-2">
                          {item.category}
                        </span>
                        <p className="text-sm font-semibold text-white leading-snug">{item.title}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Zoom icon on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white">
                      <ZoomIn size={15} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View more row */}
          <motion.div
            className="mt-10 flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <Grid3x3 size={15} />
              <span>{filtered.length} photos in this collection</span>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors group"
            >
              View All Photos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </>
  )
}

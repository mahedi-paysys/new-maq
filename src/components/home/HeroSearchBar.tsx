import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Building2, Trees, DollarSign, ChevronDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const filters = [
  {
    id: 'category',
    label: 'Category',
    value: 'Buy / Rent',
    icon: Building2,
    options: ['Buy', 'Rent', 'Both'],
  },
  {
    id: 'type',
    label: 'Type',
    value: 'Warehouse',
    icon: Building2,
    options: ['Warehouse', 'Commercial', 'Industrial'],
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Karachi, PK',
    icon: MapPin,
    options: ['Karachi, PK', 'M-10 Motorway', 'CPEC Corridor'],
  },
  {
    id: 'nature',
    label: 'Nature Type',
    value: 'Industrial',
    icon: Trees,
    options: ['Industrial', 'Logistics', 'Storage'],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    value: 'Contact Us',
    icon: DollarSign,
    options: ['Under 50M', '50M - 100M', 'Contact Us'],
  },
]

export function HeroSearchBar() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(filters.map((f) => [f.id, f.value]))
  )
  const [searching, setSearching] = useState(false)

  const handleSearch = () => {
    setSearching(true)
    setTimeout(() => setSearching(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="glass-dark rounded-2xl md:rounded-full border border-white/10 shadow-elevated overflow-visible">
        <div className="flex flex-col lg:flex-row items-stretch gap-1 p-2 md:p-2.5">
          {filters.map((filter, index) => {
            const Icon = filter.icon
            const isOpen = activeFilter === filter.id
            return (
              <motion.div
                key={filter.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.06 }}
                className="relative flex-1"
              >
                <button
                  type="button"
                  onClick={() => setActiveFilter(isOpen ? null : filter.id)}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 md:px-5 py-3.5 md:py-4 rounded-xl md:rounded-full transition-all duration-300 text-left group',
                    isOpen
                      ? 'bg-brand/10 ring-1 ring-brand/30'
                      : 'hover:bg-white/5'
                  )}
                >
                  <div
                    className={cn(
                      'w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors',
                      isOpen ? 'bg-brand/20' : 'bg-white/5 group-hover:bg-brand/10'
                    )}
                  >
                    <Icon size={18} className={isOpen ? 'text-brand' : 'text-ink-muted'} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] uppercase tracking-wider text-ink-faint font-medium">
                      {filter.label}
                    </span>
                    <span className="block text-sm md:text-base font-semibold text-ink truncate">
                      {values[filter.id]}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={cn(
                      'text-ink-faint shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180 text-brand'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 right-0 mt-2 z-30 rounded-xl glass-dark border border-white/10 shadow-elevated py-2 overflow-hidden"
                    >
                      {filter.options.map((opt, i) => (
                        <motion.button
                          key={opt}
                          type="button"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          onClick={() => {
                            setValues((v) => ({ ...v, [filter.id]: opt }))
                            setActiveFilter(null)
                          }}
                          className={cn(
                            'w-full px-5 py-3 text-sm md:text-base text-left transition-colors',
                            values[filter.id] === opt
                              ? 'text-brand bg-brand/10'
                              : 'text-ink/70 hover:text-brand hover:bg-white/5'
                          )}
                        >
                          {opt}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}

          <motion.button
            type="button"
            onClick={handleSearch}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="lg:shrink-0 flex items-center justify-center gap-2 px-8 py-4 rounded-xl md:rounded-full bg-brand text-black font-bold text-base uppercase tracking-wide hover:bg-brand-dark transition-colors min-h-[56px]"
          >
            <AnimatePresence mode="wait">
              {searching ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles size={18} />
                  </motion.span>
                  Searching...
                </motion.span>
              ) : (
                <motion.span
                  key="search"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Search size={20} />
                  Search Now
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

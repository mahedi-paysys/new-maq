import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Building2, Trees, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const filters = [
  { id: 'category', label: 'Category', value: 'Buy / Rent', icon: Building2 },
  { id: 'type', label: 'Type', value: 'Warehouse', icon: Building2 },
  { id: 'location', label: 'Location', value: 'Karachi, PK', icon: MapPin },
  { id: 'nature', label: 'Nature Type', value: 'Industrial', icon: Trees },
  { id: 'pricing', label: 'Pricing', value: 'Contact Us', icon: DollarSign },
]

export function SearchBar() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row items-stretch gap-3 p-3 bg-surface rounded-full border border-border shadow-soft"
        >
          {filters.map((filter) => {
            const Icon = filter.icon
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() =>
                  setActiveFilter(activeFilter === filter.id ? null : filter.id)
                }
                className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-full transition-all duration-300 text-left ${
                  activeFilter === filter.id
                    ? 'bg-canvas'
                    : 'hover:bg-canvas/60'
                }`}
              >
                <Icon size={18} className="text-ink-muted shrink-0" />
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-wider text-ink-faint">
                    {filter.label}
                  </span>
                  <span className="block text-sm font-medium text-ink truncate">
                    {filter.value}
                  </span>
                </div>
              </button>
            )
          })}
          <Button
            className="lg:shrink-0 rounded-full!"
            icon={<Search size={18} />}
            iconPosition="left"
          >
            Search
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

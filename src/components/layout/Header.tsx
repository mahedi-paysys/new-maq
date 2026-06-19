import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Search, Phone, Mail } from 'lucide-react'
import { navigation, siteConfig } from '@/data/content'
import { TopBar } from '@/components/layout/TopBar'
import { SearchOverlay } from '@/components/layout/SearchOverlay'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { cn } from '@/lib/utils'

function isNavActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const { direction, scrollY } = useScrollDirection()

  const isHome = location.pathname === '/'
  const overHero = isHome && scrollY < 120
  const showTopBar = direction === 'up' || scrollY < 80

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setSearchOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <TopBar visible={showTopBar} overHero={overHero} />

        <div
          className={cn(
            'transition-all duration-500 border-b',
            overHero
              ? 'bg-transparent border-transparent'
              : 'bg-[#111111]/95 backdrop-blur-xl border-white/8 shadow-nav'
          )}
        >
          <div className="container-nav flex items-center justify-between gap-4 h-[68px] lg:h-[72px]">
            <Link to="/" className="shrink-0 group">
              <img
                src={siteConfig.assets.logo}
                alt={siteConfig.fullName}
                className="h-[46px] w-[46px] sm:h-[48px] sm:w-[48px] lg:h-[52px] lg:w-[52px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5">
              {navigation.map((item) => {
                const active = isNavActive(location.pathname, item.href)
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        'relative flex items-center gap-1 px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.07em] transition-colors duration-300',
                        active
                          ? 'text-brand'
                          : overHero
                            ? 'text-white/90 hover:text-brand'
                            : 'text-white/75 hover:text-brand'
                      )}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          size={13}
                          className={cn(
                            'transition-transform duration-300',
                            activeDropdown === item.label && 'rotate-180'
                          )}
                        />
                      )}
                      {active && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-brand rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {item.children && activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 mt-2 min-w-[280px] rounded-xl bg-[#161616] border border-white/10 shadow-elevated py-2 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-5 py-3 text-[13px] font-medium text-white/70 hover:text-brand hover:bg-brand/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className={cn(
                  'p-2.5 rounded-full transition-colors',
                  overHero
                    ? 'text-white/90 hover:text-brand hover:bg-white/10'
                    : 'text-white/80 hover:text-brand hover:bg-white/5'
                )}
              >
                <Search size={20} />
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                className={cn(
                  'xl:hidden p-2.5 rounded-full transition-colors',
                  overHero ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/5'
                )}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden bg-[#111111] border-b border-white/8 overflow-hidden max-h-[80vh] overflow-y-auto"
            >
              <nav className="container-nav py-4">
                {navigation.map((item) => (
                  <div key={item.href} className="border-b border-white/5 last:border-0">
                    <Link
                      to={item.href}
                      className={cn(
                        'block py-3.5 text-sm font-semibold uppercase tracking-wide',
                        isNavActive(location.pathname, item.href) ? 'text-brand' : 'text-white'
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="py-2 text-sm text-white/60 hover:text-brand"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 flex flex-col gap-2 text-sm text-white/60">
                  <a href={`tel:${siteConfig.phoneAlt}`} className="flex items-center gap-2 py-1">
                    <Phone size={14} className="text-brand" /> {siteConfig.uan}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 py-1">
                    <Mail size={14} className="text-brand" /> {siteConfig.email}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

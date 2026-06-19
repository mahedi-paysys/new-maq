import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { navigation, siteConfig } from '@/data/content'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ZameenIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" width="16" height="16" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1b9e2f" />
      <path d="M16 5L6 11v4h3v11h14V15h3v-4L16 5zm0 3.2L22 12v1h-1.5v10h-9V13H10v-1l6-3.8z" fill="white" />
      <text x="11" y="21" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">Z</text>
    </svg>
  )
}

const socialLinks = [
  {
    href: siteConfig.social.facebook,
    label: 'Facebook',
    icon: FacebookIcon,
    hoverColor: '#1877f2',
  },
  {
    href: siteConfig.social.instagram,
    label: 'Instagram',
    icon: InstagramIcon,
    hoverColor: '#e1306c',
  },
  {
    href: siteConfig.social.whatsapp,
    label: 'WhatsApp',
    icon: WhatsAppIcon,
    hoverColor: '#25d366',
  },
  {
    href: siteConfig.social.zameen,
    label: 'Zameen.com',
    icon: ZameenIcon,
    hoverColor: '#1b9e2f',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden border-t border-white/[0.06]"
      style={{ background: 'var(--color-canvas)' }}
    >
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(245,184,0,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={siteConfig.assets.logo}
                alt={siteConfig.fullName}
                className="h-14 w-14 object-contain"
              />
              <div>
                <span className="text-lg font-bold text-white block tracking-wide">{siteConfig.name}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand/70">
                  Group of Companies
                </span>
              </div>
            </Link>
            <p className="mt-6 text-sm text-white/45 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-brand hover:border-brand/30 hover:bg-brand/10 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand/70 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-brand"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand/70 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/50">
                <MapPin size={16} className="shrink-0 mt-0.5 text-brand" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Phone size={16} className="shrink-0 mt-0.5 text-brand" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Mail size={16} className="shrink-0 mt-0.5 text-brand" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand/70 mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-white/45 mb-5 leading-relaxed">
              Stay updated with our latest projects and developments.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/40 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-brand text-black text-sm font-semibold hover:bg-brand-dark transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-white/25 tracking-[0.15em] uppercase">
            Always Dedicated &amp; Devoted
          </p>
        </div>
      </div>
    </footer>
  )
}

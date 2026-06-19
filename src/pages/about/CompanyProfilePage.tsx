import { motion } from 'framer-motion'
import { companyProfile, siteConfig } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'

export function CompanyProfilePage() {
  return (
    <div className="pt-28 md:pt-32 pb-24">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            About / Company Profile
          </span>
          <h1 className="mt-4 font-serif text-5xl text-ink">Company Profile</h1>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionHeading title="Who We Are" subtitle={companyProfile} />
            <div className="mt-8 space-y-4 text-ink-muted leading-relaxed">
              <p>
                Founded in {siteConfig.founded}, {siteConfig.fullName} has rapidly
                established itself as a trusted name in Pakistan&apos;s construction and
                real estate development sector.
              </p>
              <p>
                Our portfolio spans commercial towers, hospitality projects, and
                Pakistan&apos;s first SBCA & LDA approved warehouse system.
              </p>
            </div>
            <Button className="mt-8" icon={<Download size={18} />} iconPosition="left">
              Download Company Profile
            </Button>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="aspect-video rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80&auto=format&fit=crop"
                alt="MAQ Builders projects"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

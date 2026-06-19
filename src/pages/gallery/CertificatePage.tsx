import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { certificates } from '@/data/pages'
import { Award } from 'lucide-react'

export function CertificatePage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Certificates & Approvals" description="Official certifications and regulatory approvals for MAQ Builders projects." />
      <section className="py-16 md:py-24">
        <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.1}>
              <div className="card-dark rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-5">
                  <Award size={24} className="text-brand" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">{cert.title}</h2>
                <p className="text-sm text-white/55">{cert.issuer}</p>
                <span className="inline-block mt-4 text-xs text-brand uppercase tracking-wider">{cert.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

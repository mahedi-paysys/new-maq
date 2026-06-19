import { Hero } from '@/components/home/Hero'
import { AboutSection } from '@/components/home/AboutSection'
import { HowWeWork } from '@/components/home/HowWeWork'
import { WhatWeOffer } from '@/components/home/WhatWeOffer'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { GallerySection } from '@/components/home/GallerySection'
import { FAQSection } from '@/components/home/FAQSection'
import { ContactSection } from '@/components/home/ContactSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HowWeWork />
      <WhatWeOffer />
      <ProjectsSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
    </>
  )
}

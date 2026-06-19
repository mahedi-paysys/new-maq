import type { Project, ProjectCategory } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'elite-4-star',
    title: 'Elite 4 Star',
    category: 'construction',
    status: 'in-progress',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop',
    excerpt: 'Elite 4 Star Construction — Premium hospitality development.',
    description:
      'We believe that a hotel\'s location, design and facilities are just as essential as its service concept, guest experience and the people caring for your guests. A landmark hospitality project currently under construction.',
    location: 'Karachi, Pakistan',
    architecture: 'Modern Luxury',
  },
  {
    id: '2',
    slug: 'elite-ware-houses',
    title: 'Elite Ware Houses',
    category: 'warehousing',
    status: 'upcoming',
    year: 2025,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop',
    excerpt: 'Elite Ware Houses Architecture — Industrial excellence redefined.',
    description:
      'Pakistan\'s first and finest warehouse system with SBCA & LDA approval. Eight acres of premium warehousing with 28 units, each featuring dedicated office space and smart technology integration.',
    location: 'M-10 Motorway, Karachi',
    architecture: 'Industrial Modern',
  },
  {
    id: '3',
    slug: 'elite-5-towers',
    title: 'Elite 5 Towers',
    category: 'commercial',
    status: 'in-progress',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
    excerpt: 'Elite 5 Towers Construction — Vertical excellence in commercial development.',
    description:
      'A prestigious commercial tower development featuring integrated office suites, trading rooms, conference facilities and prayer areas — designed to exceed client expectations.',
    location: 'Karachi, Pakistan',
    architecture: 'Contemporary Commercial',
  },
]

export const projectCategories: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Construction', value: 'construction' },
  { label: 'Architecture', value: 'architecture' },
  { label: 'Warehousing', value: 'warehousing' },
  { label: 'Commercial', value: 'commercial' },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

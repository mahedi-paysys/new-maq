export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Project {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  status: 'completed' | 'in-progress' | 'upcoming'
  year: number
  image: string
  excerpt: string
  description: string
  location?: string
  architecture?: string
}

export type ProjectCategory =
  | 'all'
  | 'construction'
  | 'architecture'
  | 'warehousing'
  | 'commercial'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

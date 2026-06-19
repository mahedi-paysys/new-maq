import type { NavItem } from '@/types'

export const siteConfig = {
  name: 'MAQ',
  fullName: 'MAQ GROUP OF COMPANIES',
  tagline: 'We Construct For Your Better Tomorrow',
  description:
    'Creating a sustainable future through building preservation, green architecture, and smart design.',
  founded: 2019,
  email: 'info@maqbuilders.pk',
  phone: '0300-1-627-627',
  phoneAlt: '111 627 111',
  uan: 'UAN: 111 627 111',
  address:
    'Plot #4, 1st Floor, Sumya Corner, Shaheed-e-Millat Road, Block #3, Karachi, Pakistan',
  social: {
    facebook: 'https://facebook.com/maqbuilders',
    linkedin: 'https://linkedin.com/company/maqbuilders',
    youtube: 'https://youtube.com/@maqbuilders',
    instagram: 'https://instagram.com/maqbuilders',
  },
  assets: {
    logo: '/assets/logo.png',
    heroVideo: '/assets/hero_section_video.mp4',
  },
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Elite Warehouse Systems For Rental',
        href: '/services/elite-warehouse-rental',
      },
      {
        label: 'Elite Warehouse Systems For Sale',
        href: '/services/elite-warehouse-sale',
      },
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery',
    children: [
      { label: 'Site Gallery', href: '/gallery/site-gallery' },
      { label: 'Expo Exhibition', href: '/gallery/expo-exhibition' },
      { label: 'Certificate', href: '/gallery/certificate' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'Elite Warehouse Systems', href: '/projects/elite-warehouse-systems' },
      { label: 'Upcoming Projects', href: '/projects/upcoming-projects' },
    ],
  },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
]

export const heroSlides = [
  {
    id: 'elite-warehouse',
    eyebrow: 'Upcoming Projects',
    title: 'Elite Warehouse Systems',
    subtitle: 'The Biggest Construction In The Real World',
    cta: 'Contact Us',
    ctaLink: '/contact',
  },
  {
    id: 'engineering',
    eyebrow: 'Welcome to MAQ GROUP OF COMPANIES',
    title: 'Engineering Your Dreams With Us',
    subtitle:
      'Creating a sustainable future through building preservation, green architecture, and smart design.',
    cta: 'Contact Us',
    ctaLink: '/contact',
  },
  {
    id: 'dedicated',
    eyebrow: 'Always Dedicated & Devoted',
    title: 'Elite Warehouse Systems',
    subtitle:
      'MAQ GROUP OF COMPANIES is proud to announce Elite Warehouse Systems — a spectacular industrial solution.',
    cta: 'Upcoming Projects',
    ctaLink: '/projects/upcoming-projects',
  },
]

export const stats = [
  { value: '28+', label: 'Warehouses Planned' },
  { value: '8', label: 'Acres Development' },
  { value: '24/7', label: 'Security & Support' },
]

export const processSteps = [
  {
    step: '01',
    title: 'Sketching',
    description: 'Conceptualizing visionary designs tailored to client aspirations.',
  },
  {
    step: '02',
    title: 'Working',
    description: 'Precision engineering with world-class materials and methodology.',
  },
  {
    step: '03',
    title: 'Utilization',
    description: 'Optimizing every space for maximum functionality and efficiency.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'On-time handover with uncompromising quality assurance.',
  },
]

export const offerings = [
  {
    id: 'landmark',
    title: 'Ideal Landmark',
    description:
      'Just 20 minutes from Karachi Port, strategically situated at M-10 motorway leading towards Mochko Hub and the starting point of CPEC linking Gawadar, Quetta & Punjab.',
    icon: 'MapPin',
  },
  {
    id: 'gated',
    title: 'Gated Community',
    description:
      'Surrounded with boundary wall, round-the-clock security, 24/7 CCTV surveillance and fire extinguishing system ensuring high standards of protection.',
    icon: 'Shield',
  },
  {
    id: 'towers',
    title: 'Office Towers',
    description:
      'Separate integrated office suites, trading room, conference hall and prayer area — perfectly designed to meet client expectations and aspirations.',
    icon: 'Building2',
  },
  {
    id: 'durability',
    title: 'Guaranteed Durability',
    description:
      'The project guarantees no major repairs for decades, drastically reducing repair-related costs.',
    icon: 'Award',
  },
  {
    id: 'structure',
    title: 'Strong Structure',
    description:
      'Lightweight RCC & imported steel-framed structure on deep pile foundation, block masonry, plastered with cement mortar.',
    icon: 'Layers',
  },
  {
    id: 'app',
    title: 'One Touch Smart App',
    description:
      'Palm application providing one-touch solution for online payments, security alerts and virtual warehouse accessibility.',
    icon: 'Smartphone',
  },
]

export const whyChooseUs = [
  {
    id: 'portfolio',
    title: 'Exclusive Portfolio Access',
    description:
      'SBCA & LDA approved projects with distinctive state-of-the-art industrial amenities — Pakistan\'s first and finest warehouse system.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'transparency',
    title: 'Certified Transparency & Assurance',
    description:
      'MAQ Builders is synonymous with excellence, quality, commitment and personalized service with a reputation of integrity.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'negotiation',
    title: 'Strategic Price Negotiation',
    description:
      'Professional approach to constructing exceptional quality projects with innovative ideas in the construction industry.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'acquisition',
    title: 'White-Glove Acquisition Service',
    description:
      '24/7 online support with dedicated teams ensuring seamless experience from inquiry to project delivery.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop',
  },
]

export const advisoryServices = [
  {
    id: 'off-market',
    title: 'Exclusive Off-Market Portfolio',
    description:
      'Access premium warehousing and commercial developments before they reach the open market.',
  },
  {
    id: 'valuation',
    title: 'Bespoke Valuation Strategy',
    description:
      'Data-driven investment analysis tailored to your business and residential solutions.',
  },
  {
    id: 'marketing',
    title: 'Global Network Marketing',
    description:
      'Leveraging strategic location at CPEC corridor for maximum visibility and reach.',
  },
  {
    id: 'legal',
    title: 'Legal Transaction Management',
    description:
      'End-to-end compliance with SBCA, LDA and all regulatory requirements for peace of mind.',
  },
]

export const warehouseFeatures = [
  {
    id: 'landmark',
    title: 'Ideal Landmark',
    description:
      'Just 20 minutes from Karachi Port, strategically at M-10 motorway towards Mochko Hub and CPEC starting point.',
  },
  {
    id: 'structure',
    title: 'Strong Structure',
    description:
      'Lightweight RCC & imported steel-framed structure on deep pile foundation with cement mortar plastering.',
  },
  {
    id: 'spaces',
    title: 'Quality Spaces',
    description:
      'Expanding over eight acres with 60ft roads, 28 warehouses each with dedicated office space.',
  },
  {
    id: 'gated',
    title: 'Gated Community',
    description:
      'Full boundary wall, 24/7 CCTV surveillance, security system and fire extinguishing protection.',
  },
  {
    id: 'app',
    title: 'One Touch Smart App',
    description:
      'Palm application for online payments, security alerts and virtual warehouse accessibility.',
  },
  {
    id: 'durability',
    title: 'Guaranteed Durability',
    description:
      'No major repairs for decades — drastically reducing long-term maintenance costs.',
  },
]

export const ceoMessage = `Muhammad Asim Quraishi, CEO of MAQ GROUP OF COMPANIES, dedicated and passionate to deliver quality and standardized infrastructure and to promote systematic approach in real estate world. He has over two decades of diversified experience and exposure in the construction industry.

Being associated with the construction and development industry, creating awareness amongst the masses as to what basic standards are in terms of business futuristic advancement and luxury living. With the vision of uplifting and transforming real estate into a fine art, where we conceptualize our idea and mold our concept into the real world according to the business and residential solutions.

MAQ GROUP OF COMPANIES is placing its name among renowned builders and developers — performing by going the extra mile in introducing new dimensions to real estate for our valued customers.`

export const companyProfile = `MAQ GROUP OF COMPANIES is a construction company known for some of the most structurally sound and sustainable buildings in the modern world. Founded in 2019 by Muhammad Asim Qureshi, the company has become a force in the building community within a few years.

The company values teamwork, innovation, and hard work, which shows in the company's output. Our employees are trained to be the best in their field and give our clients the quality service that they deserve.`

export const mission =
  'We will provide a professional approach to constructing exceptional quality projects in a systematic approach. Our mission is to bring innovative ideas in the Construction Industry.'

export const vision =
  'To be a world-class construction and infrastructure enterprise committed to quality, timely completion and customer satisfaction.'

export const principles =
  'The name MAQ GROUP OF COMPANIES is synonymous with those principles of excellence, quality, commitment and personalized service. MAQ GROUP OF COMPANIES has a reputation as a developer of integrity and solid repute continues.'

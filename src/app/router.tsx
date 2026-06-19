import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/layout/PageTransition'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { CompanyProfilePage } from '@/pages/about/CompanyProfilePage'
import { LeadershipPage } from '@/pages/about/LeadershipPage'
import { MissionVisionPage } from '@/pages/about/MissionVisionPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { EliteWarehousePage } from '@/pages/EliteWarehousePage'
import { ContactPage } from '@/pages/ContactPage'
import { ServicesPage } from '@/pages/services/ServicesPage'
import { EliteWarehouseRentalPage } from '@/pages/services/EliteWarehouseRentalPage'
import { EliteWarehouseSalePage } from '@/pages/services/EliteWarehouseSalePage'
import { GalleryPage } from '@/pages/gallery/GalleryPage'
import { SiteGalleryPage } from '@/pages/gallery/SiteGalleryPage'
import { ExpoExhibitionPage } from '@/pages/gallery/ExpoExhibitionPage'
import { CertificatePage } from '@/pages/gallery/CertificatePage'
import { UpcomingProjectsPage } from '@/pages/projects/UpcomingProjectsPage'
import { BlogsPage } from '@/pages/BlogsPage'

function withTransition(element: React.ReactNode) {
  return <PageTransition>{element}</PageTransition>
}

export function AppRouter() {
  const location = useLocation()

  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={withTransition(<HomePage />)} />
            <Route path="/about" element={withTransition(<AboutPage />)} />
            <Route path="/about/company-profile" element={withTransition(<CompanyProfilePage />)} />
            <Route path="/about/leadership" element={withTransition(<LeadershipPage />)} />
            <Route path="/about/mission-vision" element={withTransition(<MissionVisionPage />)} />

            <Route path="/services" element={withTransition(<ServicesPage />)} />
            <Route path="/services/elite-warehouse-rental" element={withTransition(<EliteWarehouseRentalPage />)} />
            <Route path="/services/elite-warehouse-sale" element={withTransition(<EliteWarehouseSalePage />)} />

            <Route path="/gallery" element={withTransition(<GalleryPage />)} />
            <Route path="/gallery/site-gallery" element={withTransition(<SiteGalleryPage />)} />
            <Route path="/gallery/expo-exhibition" element={withTransition(<ExpoExhibitionPage />)} />
            <Route path="/gallery/certificate" element={withTransition(<CertificatePage />)} />

            <Route path="/projects" element={withTransition(<ProjectsPage />)} />
            <Route path="/projects/elite-warehouse-systems" element={withTransition(<EliteWarehousePage />)} />
            <Route path="/projects/upcoming-projects" element={withTransition(<UpcomingProjectsPage />)} />
            <Route path="/projects/:slug" element={withTransition(<ProjectDetailPage />)} />
            <Route path="/elite-warehouse-systems" element={withTransition(<EliteWarehousePage />)} />

            <Route path="/blogs" element={withTransition(<BlogsPage />)} />
            <Route path="/contact" element={withTransition(<ContactPage />)} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

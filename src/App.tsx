import { useState, useCallback } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AppRouter } from '@/app/router'
import { Preloader } from '@/components/layout/Preloader'
import { useLenis } from '@/hooks/useLenis'

function AppContent() {
  useLenis()
  return <AppRouter />
}

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  const handleComplete = useCallback(() => setShowPreloader(false), [])

  return (
    <BrowserRouter>
      <AppContent />
      <AnimatePresence mode="wait">
        {showPreloader && <Preloader key="preloader" onComplete={handleComplete} />}
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App

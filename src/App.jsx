import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'
import CursorSpotlight from './components/CursorSpotlight.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ResumeModal from './components/ResumeModal.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CursorSpotlight />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Journey />
        <Contact />
      </main>
      <ScrollToTop />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  )
}

export default App
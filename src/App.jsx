import { useEffect, useState } from 'react'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgressBar from './components/ScrollProgressBar'
import BackToTop from './components/BackToTop'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen show={loading} />
      <ScrollProgressBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="cv-content" className="relative">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App

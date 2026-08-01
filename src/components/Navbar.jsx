import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FiDownload, FiSun, FiMoon } from 'react-icons/fi'
import { profile, navLinks } from '../data/portfolio'
import { downloadResumePDF } from '../utils/pdf'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0B1220]/80 backdrop-blur-md shadow-softer border-b border-slate-200/60 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 sm:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="font-display font-bold text-lg sm:text-xl text-primary dark:text-white tracking-tight"
        >
          {profile.name}
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`relative text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-primary dark:text-accent'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-secondary rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/15 text-slate-600 dark:text-slate-200 hover:border-secondary hover:text-secondary transition-colors"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => downloadResumePDF(profile.resumeImageUrl)}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-soft transition-all hover:-translate-y-0.5"
          >
            <FiDownload size={16} />
            Download CV
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/15 text-slate-600 dark:text-slate-200"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/15 text-primary dark:text-white"
          >
            {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-md border-t border-slate-200/60 dark:border-white/10"
          >
            <ul className="section-container flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`block py-2.5 text-sm font-medium ${
                      active === link.href ? 'text-primary dark:text-accent' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <button
                type="button"
                onClick={() => downloadResumePDF(profile.resumeImageUrl)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full"
              >
                <FiDownload size={16} />
                Download CV
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

import { useEffect, useState } from 'react'
import { downloadResumePDF } from '../utils/pdf'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile, contactItems } from '../data/portfolio'

function useTypingEffect(words, speed = 70, pause = 1500) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypingEffect(profile.role)

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl animate-gradient-slow" />
        <div className="absolute top-40 -right-24 w-[380px] h-[380px] bg-accent/25 dark:bg-accent/10 rounded-full blur-3xl animate-gradient-slow [animation-delay:3s]" />
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:44px_44px] opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="section-container relative grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">
            Available for software development work
          </span>

          <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink dark:text-white">
            {profile.name}
          </h1>

          <div className="mt-4 h-8 flex items-center">
            <span className="font-display text-lg sm:text-xl font-semibold text-secondary dark:text-accent">
              {typed}
              <span className="ml-0.5 inline-block w-[2px] h-5 bg-secondary dark:bg-accent align-middle animate-blink" />
            </span>
          </div>

          <p className="mt-6 max-w-xl text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => downloadResumePDF(profile.resumeImageUrl)}
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-full shadow-soft transition-all hover:-translate-y-0.5"
            >
              <FiDownload size={17} />
              Download CV
            </button>
            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-2 bg-white/80 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 hover:border-secondary text-ink dark:text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
            </button>
            <div className="flex items-center gap-3 ml-1">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-slate-600 dark:text-slate-200 hover:text-primary hover:border-primary transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-slate-600 dark:text-slate-200 hover:text-primary hover:border-primary transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <span className="w-8 h-8 rounded-full bg-secondary/10 dark:bg-accent/10 flex items-center justify-center text-secondary dark:text-accent">
                  <Icon size={14} />
                </span>
                {href ? (
                  <a href={href} className="hover:text-primary dark:hover:text-accent transition-colors">
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column - photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto lg:mx-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-secondary/30 via-accent/20 to-primary/20 blur-2xl animate-float-slow" />
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-primary via-secondary to-accent shadow-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                  className="w-full h-full object-cover"
                />
                <span
                  style={{ display: 'none' }}
                  className="w-full h-full items-center justify-center font-display font-bold text-6xl text-primary/70 dark:text-accent/70"
                >
                  {profile.initials}
                </span>
              </div>
            </div>
            <motion.span
              className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2 bg-white dark:bg-[#101a2e] shadow-sm rounded-2xl px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10"
            >
              Flutter &amp; Web
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import { contactItems, socialLinks, profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28 bg-white/60 dark:bg-white/[0.02]">
      <div className="section-container">
        <SectionWrapper direction="up" className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Let's connect</span>
          <h2 className="section-title">Contact</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Terbuka untuk peluang magang, kolaborasi proyek, maupun diskusi seputar Software Engineering.
          </p>
        </SectionWrapper>

        <div className="mt-12 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href || undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 flex flex-col items-center text-center gap-3 cursor-pointer"
            >
              <span className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">{label}</p>
                <p className="mt-1 font-medium text-ink dark:text-white text-sm break-all">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-5 py-2.5 rounded-full shadow-soft transition-all hover:-translate-y-0.5"
            >
              <Icon size={16} />
              {label}
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} />
            </a>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          atau kirim email langsung ke{' '}
          <a href={`mailto:${profile.contact.email}`} className="text-secondary dark:text-accent font-medium hover:underline">
            {profile.contact.email}
          </a>
        </p>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import SectionWrapper from './SectionWrapper'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="pb-24 sm:pb-28">
      <div className="section-container">
        <SectionWrapper direction="up">
          <span className="section-eyebrow">Academic background</span>
          <h2 className="section-title">Education</h2>
        </SectionWrapper>

        <div className="mt-10 space-y-5">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 sm:p-8 flex items-center gap-5 sm:gap-6"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent">
                <HiOutlineAcademicCap size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg text-ink dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-secondary dark:text-accent font-medium text-sm mt-0.5">{edu.degree}</p>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

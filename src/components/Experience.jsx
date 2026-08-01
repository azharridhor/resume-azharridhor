import { motion } from 'framer-motion'
import { HiOutlineBriefcase } from 'react-icons/hi'
import SectionWrapper from './SectionWrapper'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 bg-white/60 dark:bg-white/[0.02]">
      <div className="section-container">
        <SectionWrapper direction="up">
          <span className="section-eyebrow">On the ground</span>
          <h2 className="section-title">Experience</h2>
        </SectionWrapper>

        <div className="mt-12 relative pl-8 sm:pl-10">
          <div className="absolute left-3.5 sm:left-4 top-1 bottom-1 w-px bg-gradient-to-b from-secondary via-accent to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-4"
            >
              <span className="absolute -left-8 sm:-left-10 top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-soft">
                <HiOutlineBriefcase size={16} />
              </span>
              <div className="glass-card p-6 sm:p-7">
                <h3 className="font-display font-semibold text-lg text-ink dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-secondary dark:text-accent text-sm font-medium mt-0.5">
                  {exp.organization}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary dark:bg-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

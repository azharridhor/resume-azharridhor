import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { skillCategories } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 bg-white/60 dark:bg-white/[0.02]">
      <div className="section-container">
        <SectionWrapper direction="up">
          <span className="section-eyebrow">What I work with</span>
          <h2 className="section-title">Technical Skills</h2>
        </SectionWrapper>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <SectionWrapper key={cat.title} direction="up" delay={ci * 0.06} className="glass-card p-6 sm:p-7">
              <h3 className="font-display font-semibold text-base text-ink dark:text-white mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map(({ name, icon: Icon }) => (
                  <motion.span
                    key={name}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-secondary/10 dark:hover:bg-accent/10 border border-transparent hover:border-secondary/30 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-secondary dark:hover:text-accent transition-colors cursor-default"
                  >
                    <Icon size={15} />
                    {name}
                  </motion.span>
                ))}
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

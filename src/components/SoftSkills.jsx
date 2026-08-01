import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import { softSkills } from '../data/portfolio'

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionWrapper direction="up">
          <span className="section-eyebrow">Beyond the code</span>
          <h2 className="section-title">Soft Skills</h2>
        </SectionWrapper>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 glass-card px-5 py-4"
            >
              <span className="w-9 h-9 rounded-full bg-secondary/10 dark:bg-accent/10 flex items-center justify-center text-secondary dark:text-accent shrink-0">
                <FiCheckCircle size={17} />
              </span>
              <span className="font-medium text-ink dark:text-white text-[15px]">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

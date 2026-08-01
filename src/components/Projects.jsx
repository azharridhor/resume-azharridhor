import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionWrapper direction="up">
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">Projects</h2>
        </SectionWrapper>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col glass-card p-6 sm:p-7 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-secondary/10 dark:bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="text-xs font-semibold tracking-wide uppercase text-secondary dark:text-accent">
                {project.context}
              </span>
              <h3 className="font-display font-semibold text-lg text-ink dark:text-white mt-2">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <FiCheck className="text-secondary dark:text-accent shrink-0" size={13} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-200/70 dark:border-white/10">
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-accent hover:underline"
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-500">
                    <FiExternalLink size={14} />
                    Live Demo
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors"
                >
                  <FiGithub size={14} />
                  Github
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

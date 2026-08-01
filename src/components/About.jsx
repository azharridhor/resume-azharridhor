import SectionWrapper from './SectionWrapper'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionWrapper direction="up">
          <span className="section-eyebrow">Get to know me</span>
          <h2 className="section-title">{about.title}</h2>
        </SectionWrapper>

        <div className="mt-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <SectionWrapper direction="left" className="glass-card p-8 sm:p-10">
            <p className="font-display font-semibold text-xl text-ink dark:text-white leading-snug">
              Membangun perangkat lunak yang rapi, terstruktur, dan siap digunakan &mdash; dari analisis kebutuhan hingga rilis.
            </p>
            <div className="mt-6 h-px w-16 bg-secondary/40" />
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              Berbasis di Yogyakarta, aktif mengembangkan aplikasi web &amp; mobile.
            </p>
          </SectionWrapper>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <SectionWrapper key={i} direction="right" delay={i * 0.08}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] sm:text-base">
                  {p}
                </p>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

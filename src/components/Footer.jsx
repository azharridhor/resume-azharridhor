import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/70 dark:border-white/10 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Built with React + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

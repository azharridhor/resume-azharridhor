import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-[#0B1220] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <h1 className="font-display font-extrabold text-7xl sm:text-8xl bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent">
          404
        </h1>
        <p className="mt-4 font-display font-semibold text-xl text-ink dark:text-white">
          Halaman tidak ditemukan
        </p>
        <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-full shadow-soft transition-all hover:-translate-y-0.5"
        >
          <FiArrowLeft size={16} />
          Kembali ke Beranda
        </a>
      </motion.div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isDesktop) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const overCheck = (e) => {
      const target = e.target
      setHovering(!!target.closest('a, button, [role="button"], input, textarea'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', overCheck)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', overCheck)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full border-2 border-secondary"
        animate={{
          x: pos.x - (hovering ? 22 : 12),
          y: pos.y - (hovering ? 22 : 12),
          width: hovering ? 44 : 24,
          height: hovering ? 44 : 24,
          opacity: hovering ? 0.6 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.3 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full bg-secondary"
        animate={{ x: pos.x - 3, y: pos.y - 3, width: 6, height: 6 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40, mass: 0.2 }}
      />
    </>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type MagneticButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
}

export function MagneticButton({ children, href = '#contact', variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18 })
  const springY = useSpring(y, { stiffness: 220, damping: 18 })

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  const styles = variant === 'primary'
    ? 'bg-gradient-to-br from-white to-zinc-100 text-black shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-[1.02]'
    : 'glass text-white hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-medium transition-all duration-300 overflow-hidden ${styles}`}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      )}
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  )
}

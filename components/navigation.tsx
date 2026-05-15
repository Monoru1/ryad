'use client'

import { useState, useEffect } from 'react'
import { GitBranch, LinkIcon, Mail, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#method', label: 'Méthode' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = links.map(link => link.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) setActiveSection(`#${currentSection}`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`glass relative flex items-center justify-between rounded-2xl px-4 py-3 shadow-2xl transition-all duration-500 ${
          scrolled ? 'shadow-black/40 backdrop-blur-xl' : 'shadow-black/20'
        }`}
      >
        <a href="#top" className="group flex items-center gap-3 transition-transform hover:scale-105">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-sm font-black tracking-tight transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
            RS
          </span>
          <span className="hidden text-sm font-medium text-zinc-200 transition-colors group-hover:text-white sm:block">
            Ryad SAKA
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative rounded-xl px-4 py-2 text-sm transition-all duration-300 ${
                activeSection === link.href
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            aria-label="GitHub"
            href="https://github.com/Monoru1"
            className="group rounded-xl p-2 text-zinc-400 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:scale-110"
          >
            <GitBranch className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </a>
          <a
            aria-label="LinkedIn"
            href="#contact"
            className="group rounded-xl p-2 text-zinc-400 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:scale-110"
          >
            <LinkIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </a>
          <a
            aria-label="Email"
            href="mailto:contact@example.com"
            className="group rounded-xl p-2 text-zinc-400 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:scale-110"
          >
            <Mail className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2 rounded-xl p-2 text-zinc-400 transition-all duration-300 hover:bg-white/[0.08] hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass mt-3 rounded-2xl p-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    activeSection === link.href
                      ? 'bg-white/[0.08] text-white border border-white/10'
                      : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

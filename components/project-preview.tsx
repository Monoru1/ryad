'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Shield, Workflow } from 'lucide-react'

const projects = [
  {
    title: 'Astra Core',
    category: 'AI Infrastructure',
    description: 'Plateforme d\'orchestration intelligente pour automatisations, agents IA et systemes backend premium.',
    icon: Zap,
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
  },
  {
    title: 'BlackGrid',
    category: 'Cybersecurity',
    description: 'Infrastructure defensive orientee monitoring temps reel, observabilite et protection avancee.',
    icon: Shield,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    title: 'Nexus Flow',
    category: 'Automation Systems',
    description: 'Moteur d\'automatisation enterprise connecte aux APIs, workflows et pipelines intelligents.',
    icon: Workflow,
    gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
  },
]

export function ProjectPreview() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Future Projects
            </span>

            <h2 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight">
              Des projets concus comme de vrais produits technologiques.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Chaque projet du portfolio sera presente comme une veritable case study premium.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.8 }}
                className="group glass relative overflow-hidden rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400 transition-all group-hover:border-primary/30 group-hover:bg-white/[0.06]">
                      {project.category}
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>

                  <div className="mb-8 relative h-[220px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="relative flex h-full items-center justify-center">
                      <Icon className="h-16 w-16 text-primary/40 transition-all duration-500 group-hover:scale-125 group-hover:text-primary/60" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <div className="h-2 flex-1 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors" />
                      <div className="h-2 flex-1 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors" style={{ transitionDelay: '50ms' }} />
                      <div className="h-2 flex-1 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors" style={{ transitionDelay: '100ms' }} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-black tracking-tight transition-colors group-hover:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

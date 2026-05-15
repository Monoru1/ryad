import { Shield, Workflow, Server, ArrowRight, GitBranch, Link, Mail, Sparkles, Bot, Code2, Terminal, Zap } from 'lucide-react'

const services = [
  { title: 'Sites premium', desc: 'Landing pages, portfolios et vitrines rapides, propres et orientés conversion.', icon: Sparkles },
  { title: 'Automatisation', desc: 'Workflows n8n, scripts PowerShell, webhooks et orchestration de tâches récurrentes.', icon: Workflow },
  { title: 'Outils internes', desc: 'Dashboards, interfaces métier, reporting et outils exploitables par les équipes.', icon: Server },
  { title: 'IA & cybersécurité', desc: 'Prototypes IA, audit, monitoring, détection et systèmes défensifs modernes.', icon: Shield },
]

const liveSystems = [
  { label: 'Workflow n8n actif', icon: Workflow, value: '98%' },
  { label: 'Audit IA prêt', icon: Bot, value: '97%' },
  { label: 'API backend stable', icon: Code2, value: '96%' },
  { label: 'Dashboard client', icon: Terminal, value: '95%' },
]

const projects = [
  ['Audit AI', 'Outil d’audit automatisé avec génération de rapport PDF professionnel.', 'FastAPI · React · Python · PDF'],
  ['DDoS Shield AI', 'Détection et réponse automatisée aux attaques réseau avec visualisation temps réel.', 'Python · IA · Docker · Security'],
  ['Workflows n8n IT', 'Automatisation patching, Veeam, reporting, alerting et tâches d’exploitation.', 'n8n · PowerShell · API · Linux'],
  ['Lovely', 'Expérience web émotionnelle à partir de souvenirs visuels, messages et QR code.', 'Next.js · UX · Motion · Product'],
]

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'FastAPI', 'Python', 'n8n', 'PowerShell', 'Docker', 'Linux', 'Nginx', 'GitHub']

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030306] text-white selection:bg-violet-500/40">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.30),transparent_32%),radial-gradient(circle_at_85%_5%,rgba(34,211,238,.18),transparent_28%),linear-gradient(180deg,#030306_0%,#09090b_45%,#050505_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,.62))]" />

      <header className="fixed left-1/2 top-5 z-50 w-[min(1160px,calc(100%-28px))] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/45 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <nav className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-sm font-black text-black shadow-[0_0_35px_rgba(255,255,255,.22)]">RS</span>
            <span className="hidden sm:block">Ryad SAKA</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <a href="#expertise" className="transition hover:text-white">Expertise</a>
            <a href="#projects" className="transition hover:text-white">Projets</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200">Discuter</a>
        </nav>
      </header>

      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-36 md:px-8">
        <div className="grid w-full gap-16 lg:grid-cols-[1.04fr_.96fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-zinc-300 shadow-xl shadow-black/20 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_#34d399]" />
              Systems Engineer · AI Builder · Automation Architect
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[.88] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">Des systèmes intelligents. Une ingénierie premium.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">Je conçois des sites, dashboards et automatisations qui donnent une vraie impression de maîtrise : rapides, propres, exploitables et pensés pour convertir.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-black shadow-2xl shadow-white/10 transition hover:-translate-y-1 hover:bg-zinc-200">Voir les projets <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-7 py-4 font-bold text-white shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.09]">Me contacter <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {['Architecture Premium', 'Automation Engineering', 'AI Systems', 'Cybersecurity'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-xs uppercase tracking-[.18em] text-zinc-300 shadow-xl shadow-black/20 backdrop-blur-xl">{item}</div>)}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-violet-950/40 backdrop-blur-2xl md:p-5">
              <div className="rounded-[1.7rem] border border-white/10 bg-black/65 p-5">
                <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[.24em] text-zinc-500"><span>Live system</span><span className="text-emerald-400">Online</span></div>
                <div className="grid gap-4">
                  {liveSystems.map(({ label, icon: Icon, value }) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:bg-white/[0.075]">
                      <span className="flex items-center gap-3 text-zinc-200"><Icon className="h-4 w-4 text-violet-300" />{label}</span>
                      <span className="text-sm font-bold text-emerald-400">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 text-sm leading-7 text-zinc-300">Objectif : créer des interfaces et systèmes qui rassurent, automatisent et vendent mieux.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8" id="expertise">
        <div className="mb-12 max-w-3xl"><p className="mb-4 text-sm uppercase tracking-[.3em] text-violet-400">Expertise</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Je transforme les problèmes métier en outils digitaux concrets.</h2></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((s) => { const Icon = s.icon; return <div key={s.title} className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/[0.07]"><div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-300"><Icon className="h-6 w-6" /></div><h3 className="mb-3 text-xl font-bold">{s.title}</h3><p className="leading-7 text-zinc-400">{s.desc}</p></div> })}</div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-sm uppercase tracking-[.3em] text-cyan-300">Projets</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Des projets vendables, pas des maquettes.</h2></div><p className="max-w-xl leading-7 text-zinc-400">Chaque projet montre une capacité utile : automatiser, sécuriser, analyser, présenter ou convertir.</p></div>
        <div className="grid gap-6 md:grid-cols-2">{projects.map(([name, desc, tech], index) => <article key={name} className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/30"><div className="mb-8 grid h-44 place-items-center rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,.38),transparent_35%),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))]"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-black/35 text-cyan-200 ring-1 ring-white/10"><Zap className="h-7 w-7" /></div></div><p className="mb-3 text-sm uppercase tracking-[.25em] text-zinc-500">0{index + 1}</p><h3 className="text-2xl font-bold">{name}</h3><p className="mt-3 leading-7 text-zinc-400">{desc}</p><p className="mt-5 text-sm uppercase tracking-[.2em] text-zinc-500">{tech}</p></article>)}</div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-5 py-24 md:px-8"><div className="rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/25 backdrop-blur-2xl md:p-12"><p className="mb-4 text-sm uppercase tracking-[.3em] text-violet-400">Stack</p><h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Une stack moderne pour construire vite et proprement.</h2><div className="mt-10 flex flex-wrap gap-3">{stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-black/35 px-5 py-3 text-zinc-300 shadow-lg shadow-black/20">{item}</span>)}</div></div></section>
      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8"><div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-500/18 via-white/[0.045] to-cyan-500/12 p-8 text-center shadow-2xl shadow-violet-950/30 md:p-16"><h2 className="text-4xl font-black tracking-tight md:text-6xl">Travaillons sur votre prochain outil.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-300">Site web, dashboard, automatisation, workflow, outil interne ou prototype IA : je construis vite, proprement et avec une vraie logique produit.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><a href="mailto:contact@ryadsaka.dev" className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-black transition hover:-translate-y-1"><Mail className="h-4 w-4" /> Email</a><a href="https://github.com/Monoru1" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-4 font-bold transition hover:-translate-y-1 hover:bg-white/[0.09]"><GitBranch className="h-4 w-4" /> GitHub</a><a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-4 font-bold transition hover:-translate-y-1 hover:bg-white/[0.09]"><Link className="h-4 w-4" /> LinkedIn</a></div></div></section>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">Built with Next.js, TypeScript & focused execution — Ryad SAKA</footer>
    </main>
  )
}

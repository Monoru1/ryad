import type { Metadata } from 'next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { LoadingScreen } from '@/components/loading-screen'

export const metadata: Metadata = {
  title: 'Ryad SAKA — Systems Engineer & Automation Architect',
  description: 'Portfolio premium orienté IA, automatisation, backend, cybersécurité et infrastructures digitales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <style>{`
          *{box-sizing:border-box}html{scroll-behavior:smooth;background:#050505}body{margin:0;min-height:100vh;background:radial-gradient(circle at 50% 0%,rgba(139,92,246,.2),transparent 40%),radial-gradient(circle at 90% 25%,rgba(56,189,248,.12),transparent 35%),radial-gradient(circle at 10% 75%,rgba(124,58,237,.16),transparent 38%),#050505;color:#f5f5f5;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow-x:hidden}a{color:inherit;text-decoration:none}button,a,input,textarea{font:inherit}.noise:before{content:"";position:fixed;inset:0;z-index:0;background:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:4px 4px;opacity:.28;pointer-events:none}.noise>*{position:relative}.glass{background:linear-gradient(135deg,rgba(255,255,255,.085),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.12);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 24px 80px rgba(0,0,0,.4);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}.grid-bg,.bg-grid{background-image:linear-gradient(to right,rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.045) 1px,transparent 1px);background-size:42px 42px}.bg-background{background-color:#050505}.text-foreground{color:#f5f5f5}.text-primary{color:#8b5cf6}.bg-primary{background-color:#8b5cf6}.border-primary\/20{border-color:rgba(139,92,246,.2)}.bg-primary\/10{background-color:rgba(139,92,246,.1)}.bg-primary\/20{background-color:rgba(139,92,246,.2)}.text-zinc-300{color:#d4d4d8}.text-zinc-400{color:#a1a1aa}.text-zinc-500{color:#71717a}.text-white{color:#fff}.bg-white\/\[0\.03\]{background-color:rgba(255,255,255,.03)}.border-white\/10{border-color:rgba(255,255,255,.1)}.shadow-primary\/10{box-shadow:0 25px 50px -12px rgba(139,92,246,.1)}@keyframes pulseGlow{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}.animate-pulseGlow{animation:pulseGlow 6s ease-in-out infinite}@keyframes fadeInUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.animate-fadeInUp{animation:fadeInUp .8s cubic-bezier(.22,1,.36,1) forwards}.fade-top{mask-image:linear-gradient(to bottom,transparent,black 15%)}.fade-bottom{mask-image:linear-gradient(to top,transparent,black 15%)}::selection{background:rgba(139,92,246,.35);color:white}
        `}</style>
      </head>
      <body>
        <SmoothScroll>
          <LoadingScreen />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

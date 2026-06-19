import Link from "next/link"
import { GradientText } from "@/components/ui/GradientText"
import { GlassCard } from "@/components/ui/GlassCard"
import { WA_LINK } from "@/lib/constants"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_70%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-violet/12 border border-violet/25 rounded-full px-4 py-1.5 text-xs font-dm text-violet-light mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
          Done-for-you digital systems for serious business growth
        </div>
        <h1 className="font-syne font-extrabold text-[clamp(2.8rem,6vw,5.2rem)] leading-[1.1] tracking-tight">
          Build. Automate.<br />
          <GradientText>Scale Beyond Limits.</GradientText>
        </h1>
        <p className="text-[var(--text-muted)] text-lg md:text-xl font-dm font-light leading-loose max-w-2xl mx-auto mt-6">
          We build the digital systems that grow your business — websites, AI automations, apps, and marketing that turn traffic into revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet to-cyan text-white rounded-full px-8 py-3.5 font-dm font-medium shadow-[0_8px_32px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200">
            Book Free Demo →
          </a>
          <Link href="#services" className="inline-flex items-center gap-2 border border-white/[0.08] text-white rounded-full px-8 py-3.5 font-dm font-medium hover:bg-white/[0.07] transition-all duration-200">
            Explore Services
          </Link>
        </div>
        <GlassCard className="mt-12 p-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          <div><div className="font-syne font-bold text-3xl bg-gradient-to-r from-violet-light to-cyan-light bg-clip-text text-transparent">10</div><div className="text-sm text-text-muted">Days to go live</div></div>
          <div><div className="font-syne font-bold text-3xl bg-gradient-to-r from-violet-light to-cyan-light bg-clip-text text-transparent">20h+</div><div className="text-sm text-text-muted">Saved per week</div></div>
          <div><div className="font-syne font-bold text-3xl bg-gradient-to-r from-violet-light to-cyan-light bg-clip-text text-transparent">3×</div><div className="text-sm text-text-muted">Revenue growth</div></div>
          <div><div className="font-syne font-bold text-3xl bg-gradient-to-r from-violet-light to-cyan-light bg-clip-text text-transparent">50+</div><div className="text-sm text-text-muted">Integrations</div></div>
        </GlassCard>
      </div>
    </section>
  )
}

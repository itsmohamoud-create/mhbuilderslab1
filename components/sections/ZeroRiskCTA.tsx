import Link from "next/link"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { WA_LINK } from "@/lib/constants"

export default function ZeroRiskCTA() {
  return (
    <section id="cta" className="py-20 px-6 max-w-4xl mx-auto">
      <GlassCard className="rounded-[28px] p-12 md:p-16 text-center bg-gradient-to-br from-violet/15 via-cyan/10 to-blue/12 shadow-[0_0_80px_rgba(124,58,237,0.15)]">
        <SectionLabel>Start With Zero Risk</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight mb-4">
          Every Qualified Business Gets a <GradientText>Free Strategy Demo</GradientText>
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto mb-8">
          No commitment. No pressure. Just a 30-minute session where we map out exactly what your business needs to grow.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <span className="bg-emerald/10 text-emerald border border-emerald/20 rounded-full px-4 py-1.5 text-sm">✓ No commitment required</span>
          <span className="bg-emerald/10 text-emerald border border-emerald/20 rounded-full px-4 py-1.5 text-sm">✓ Personalised strategy</span>
          <span className="bg-emerald/10 text-emerald border border-emerald/20 rounded-full px-4 py-1.5 text-sm">✓ Expert consultation</span>
          <span className="bg-emerald/10 text-emerald border border-emerald/20 rounded-full px-4 py-1.5 text-sm">✓ Live within 10 days</span>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-violet to-cyan text-white rounded-full px-10 py-4 text-lg font-dm font-medium shadow-[0_8px_32px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200"
        >
          Book Free Demo on WhatsApp →
        </a>
        <p className="text-xs text-text-faint mt-3">Opens WhatsApp instantly · No forms · No waiting</p>
      </GlassCard>
    </section>
  )
}

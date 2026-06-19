import { RevealWrapper } from "@/components/ui/RevealWrapper"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { GradientText } from "@/components/ui/GradientText"
import { GlassCard } from "@/components/ui/GlassCard"

const industries = [
  "🏨 Hotels & Restaurants",
  "💆 Med Spas & Wellness",
  "🏠 Real Estate",
  "⚖️ Legal Services",
  "🏥 Healthcare",
  "🛒 E-commerce",
  "🏗️ Contractors",
  "❤️ Charities & NGOs",
  "🎯 Coaches",
  "🚗 Automotive",
  "🎓 Education",
  "🚌 Transport & Logistics",
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <SectionLabel>Who We Serve</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          Built For <GradientText>Your Industry</GradientText>
        </h2>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {industries.map((industry, idx) => (
          <RevealWrapper key={industry} delay={idx * 0.03}>
            <GlassCard className="px-5 py-2.5 text-sm font-dm hover:border-cyan/30 hover:-translate-y-1 transition-all duration-200 cursor-default">
              {industry}
            </GlassCard>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

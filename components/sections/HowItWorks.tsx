import { SectionLabel } from "@/components/ui/SectionLabel"
import { GradientText } from "@/components/ui/GradientText"
import { GlassCard } from "@/components/ui/GlassCard"
import { RevealWrapper } from "@/components/ui/RevealWrapper"

const steps = [
  {
    number: "01",
    title: "Book Free Demo",
    desc: "Share your goals. Get a free 30-minute strategy session with actionable insights and a custom system blueprint — before you spend a penny.",
  },
  {
    number: "02",
    title: "We Build the System",
    desc: "Custom execution, delivered fast. We configure, integrate, and test your entire digital system. You focus on your business, we handle the tech.",
  },
  {
    number: "03",
    title: "You Grow",
    desc: "Launch, automate, and scale with confidence. We monitor performance and optimise monthly so your systems keep getting better over time.",
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 px-6 max-w-6xl mx-auto relative">
      <div className="text-center mb-12">
        <SectionLabel>The Process</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          Up & Running <GradientText>in 10 Days</GradientText>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet to-cyan to-transparent -translate-y-1/2" />
        {steps.map((step, idx) => (
          <RevealWrapper key={step.number} delay={idx * 0.15}>
            <GlassCard className="p-8 text-center relative">
              <div className="font-syne font-bold text-6xl bg-gradient-to-r from-violet-light to-cyan-light bg-clip-text text-transparent opacity-20 absolute top-4 right-6">
                {step.number}
              </div>
              <div className="text-3xl mb-3">0{idx + 1}</div>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
            </GlassCard>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

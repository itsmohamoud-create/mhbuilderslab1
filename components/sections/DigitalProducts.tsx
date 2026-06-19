import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { RevealWrapper } from "@/components/ui/RevealWrapper"
import { PRODUCTS, WA_LINK } from "@/lib/constants"

const colorMap: Record<string, string> = {
  cyan: "bg-cyan/20 text-cyan-light",
  violet: "bg-violet/20 text-violet-light",
  emerald: "bg-emerald/20 text-emerald",
  amber: "bg-amber/20 text-amber",
  rose: "bg-rose/20 text-rose",
}

export default function DigitalProducts() {
  return (
    <section id="products" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <SectionLabel>Digital Products</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          Buy Once. <GradientText>Use Forever.</GradientText>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product, idx) => (
          <RevealWrapper key={product.name} delay={idx * 0.08}>
            <GlassCard className="p-6 h-full flex flex-col">
              <span className={inline-block text-xs px-3 py-1 rounded-full  mb-3}>
                {product.badge}
              </span>
              <h3 className="font-syne font-bold text-lg text-white mb-2">{product.name}</h3>
              <p className="text-text-muted text-sm flex-1">{product.desc}</p>
              <p className="text-xs text-text-faint mt-3">{product.format}</p>
              <a
                href={${WA_LINK}?text=}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-violet-light hover:underline font-dm text-sm inline-flex items-center gap-1"
              >
                Get this →
              </a>
            </GlassCard>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

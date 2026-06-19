"use client"
import { useReducedMotion } from "framer-motion"
import { INTEGRATIONS_ROW1, INTEGRATIONS_ROW2 } from "@/lib/constants"

const colorMap: Record<string, string> = {
  violet: "bg-violet/20 text-violet-light",
  blue: "bg-blue/20 text-blue-300",
  emerald: "bg-emerald/20 text-emerald",
  amber: "bg-amber/20 text-amber",
  rose: "bg-rose/20 text-rose",
  cyan: "bg-cyan/20 text-cyan-light",
}

export default function IntegrationsTicker() {
  const reduced = useReducedMotion()
  const row1 = [...INTEGRATIONS_ROW1, ...INTEGRATIONS_ROW1, ...INTEGRATIONS_ROW1]
  const row2 = [...INTEGRATIONS_ROW2, ...INTEGRATIONS_ROW2, ...INTEGRATIONS_ROW2]

  return (
    <section id="integrations" className="py-16 overflow-hidden">
      <div className="text-center mb-10">
        <p className="inline-flex items-center gap-2 text-xs font-dm font-medium tracking-widest uppercase text-violet-light">
          <span className="w-6 h-px bg-violet-light" />
          Powered by & Integrates With 50+ Platforms
          <span className="w-6 h-px bg-violet-light" />
        </p>
      </div>
      <div className="relative flex flex-col gap-4">
        <div className={lex }>
          {row1.map((item, i) => (
            <span key={1-} className={inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] mx-3 whitespace-nowrap }>
              <span className="w-6 h-6 rounded text-xs font-bold flex items-center justify-center bg-white/10">{item.abbr}</span>
              {item.name}
            </span>
          ))}
        </div>
        <div className={lex }>
          {row2.map((item, i) => (
            <span key={2-} className={inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] mx-3 whitespace-nowrap }>
              <span className="w-6 h-6 rounded text-xs font-bold flex items-center justify-center bg-white/10">{item.abbr}</span>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

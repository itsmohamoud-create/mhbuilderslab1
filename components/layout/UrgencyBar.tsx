"use client"
import { motion, useReducedMotion } from "framer-motion"
import { WA_LINK } from "@/lib/constants"

export function UrgencyBar() {
  const reduced = useReducedMotion()
  return (
    <div className="sticky top-0 z-[100] bg-gradient-to-r from-violet/15 to-cyan/15 border-b border-violet/20 py-2.5 px-4 text-center">
      <div className="flex items-center justify-center gap-3 flex-wrap text-[0.82rem] font-dm tracking-wide text-white/90">
        <motion.span
          className="inline-block w-2 h-2 rounded-full bg-emerald"
          animate={reduced ? {} : { opacity: [1, 0.6, 1], scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>10 client slots remaining this month — We only take on select projects to guarantee quality.</span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-violet-light hover:underline font-medium">
          Secure your spot →
        </a>
      </div>
    </div>
  )
}

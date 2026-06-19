"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { TESTIMONIALS } from "@/lib/constants"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (paused || reduced) return
    const interval = setInterval(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), 4000)
    return () => clearInterval(interval)
  }, [paused, reduced])

  const t = TESTIMONIALS[current]

  return (
    <section id="testimonials" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <SectionLabel>Client Results</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          Businesses <GradientText>Growing With Us</GradientText>
        </h2>
      </div>

      <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="absolute top-4 left-6 text-9xl font-syne text-violet/20 select-none leading-none">"</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <GlassCard className="p-8 md:p-10">
              <div className="text-amber text-2xl mb-3">★★★★★</div>
              <p className="text-text-muted text-lg italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="font-dm font-medium text-white">{t.name}</div>
                  <div className="text-sm text-text-muted">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={	ransition-all duration-300 rounded-full  h-2}
              aria-label={Go to testimonial }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

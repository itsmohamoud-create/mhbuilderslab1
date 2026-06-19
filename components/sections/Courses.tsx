"use client"
import { motion, useReducedMotion } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { RevealWrapper } from "@/components/ui/RevealWrapper"
import { COURSES, WA_LINK } from "@/lib/constants"

export default function Courses() {
  const reduced = useReducedMotion()

  return (
    <section id="courses" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <SectionLabel>Learn</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          Learn What We Do. <GradientText>Build It Yourself.</GradientText>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COURSES.map((course, idx) => (
          <RevealWrapper key={course.title} delay={idx * 0.1}>
            <GlassCard className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber/10 text-amber border border-amber/20 rounded-full px-3 py-0.5 text-xs font-medium inline-flex items-center gap-1.5">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-amber"
                    animate={reduced ? {} : { opacity: [1, 0.6, 1], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  Waitlist Open
                </span>
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-2">{course.title}</h3>
              <p className="text-text-muted text-sm flex-1">{course.desc}</p>
              <div className="flex gap-4 text-xs text-text-muted mt-3">
                <span>⏱ {course.duration}</span>
                <span>👥 {course.audience}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {course.outcomes.map(o => (
                  <li key={o} className="text-sm text-text-muted flex items-start gap-2">
                    <span className="text-emerald">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
              <a
                href={${WA_LINK}?text=}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-amber/20 text-amber border border-amber/20 rounded-full px-6 py-2.5 text-sm font-dm font-medium text-center hover:bg-amber/30 transition-colors"
              >
                Join Waitlist →
              </a>
            </GlassCard>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

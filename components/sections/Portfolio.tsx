"use client"
import { useState } from "react"
import Image from "next/image"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { RevealWrapper } from "@/components/ui/RevealWrapper"
import { PROJECTS } from "@/lib/constants"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

const filters = ["All", "Websites", "Apps", "AI & Auto", "Marketing", "Branding"]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")
  const filteredProjects = PROJECTS.filter(p => filter === "All" || p.category === filter)

  return (
    <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <SectionLabel>Our Work</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          Real Projects. <GradientText>Real Results.</GradientText>
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={px-5 py-2 rounded-full text-sm font-dm transition-all duration-200 }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <RevealWrapper key={project.id} delay={idx * 0.05}>
            <Dialog>
              <DialogTrigger asChild>
                <GlassCard className="group cursor-pointer overflow-hidden p-0">
                  <div className="h-48 bg-gradient-to-br from-violet/30 to-cyan/30 flex items-center justify-center text-6xl relative">
                    {project.icon}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-dm font-medium">View Project ↗</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-text-muted">{t}</span>
                      ))}
                    </div>
                    <h3 className="font-syne font-bold text-lg text-white">{project.name}</h3>
                    <p className="text-text-muted text-sm mt-1">{project.shortDesc}</p>
                    <div className="mt-3 inline-block bg-emerald/10 text-emerald border border-emerald/20 rounded-full px-3 py-0.5 text-xs font-medium">
                      {project.metric}
                    </div>
                  </div>
                </GlassCard>
              </DialogTrigger>
              <DialogContent className="bg-[var(--bg2)] border-white/[0.08] text-white max-w-lg">
                <DialogHeader>
                  <div className="text-6xl mb-3">{project.icon}</div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-text-muted">{t}</span>
                    ))}
                  </div>
                  <DialogTitle className="font-syne text-2xl">{project.name}</DialogTitle>
                  <DialogDescription className="text-text-muted text-base mt-2">
                    {project.longDesc}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex items-center gap-4">
                  <span className="bg-emerald/10 text-emerald border border-emerald/20 rounded-full px-3 py-1 text-sm font-medium">{project.metric}</span>
                  <a
                    href={https://wa.me/254723783337?text=Hi%2C%20I%20want%20to%20build%20something%20similar%20to%20}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-violet to-cyan text-white rounded-full px-6 py-2 text-sm font-dm font-medium hover:scale-105 transition-transform"
                  >
                    Build Something Similar →
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

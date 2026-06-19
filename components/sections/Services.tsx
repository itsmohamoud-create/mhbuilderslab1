"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { RevealWrapper } from "@/components/ui/RevealWrapper"

const services = [
  {
    icon: "🌐",
    title: "Digital Presence",
    accent: "violet" as const,
    tags: ["Websites", "Mobile Apps", "Web Apps", "Brand Identity", "Content Design"],
    description: "High-converting websites and apps that build trust and drive revenue.",
    subs: ["Fast high-converting websites", "Web & mobile apps built for scale", "Logo, brand guidelines & identity", "Social graphics & ad creatives", "Figma design systems"],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    accent: "cyan" as const,
    tags: ["AI Voice Agents", "Lead Gen", "CRM Integration", "Workflows", "Google Reviews"],
    description: "24/7 AI systems that capture leads and automate your operations.",
    subs: ["24/7 AI voice agents that qualify leads", "Intelligent inbound & outbound capture", "End-to-end workflow automation", "CRM sync across all touchpoints", "Automated Google review generation"],
  },
  {
    icon: "📈",
    title: "Growth & Marketing",
    accent: "amber" as const,
    tags: ["Paid Ads", "SEO", "Funnels", "Email Marketing", "Analytics"],
    description: "Data-driven marketing that turns traffic into paying customers.",
    subs: ["Meta, Google & TikTok campaigns", "Local & national SEO", "High-converting sales funnels", "Email & SMS marketing sequences", "Growth dashboards & analytics"],
  },
  {
    icon: "🛠️",
    title: "Build Your Own",
    accent: "emerald" as const,
    tags: ["Online Courses", "Digital Products", "Business Systems", "SOPs"],
    description: "Systems, courses, and templates to build your own digital empire.",
    subs: ["Custom course platforms & LMS", "Automation templates & workflow kits", "SOPs, CRMs & ops infrastructure", "Business dashboards & reporting", "Done-with-you coaching & training"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <SectionLabel>What We Build</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          Four Systems. <GradientText>Scale Beyond Limits.</GradientText>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <RevealWrapper key={service.title} delay={idx * 0.1}>
            <ServiceCard {...service} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, accent, tags, description, subs }: any) {
  const [hovered, setHovered] = useState(false)
  return (
    <GlassCard
      accentColor={accent}
      className="group p-8 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-syne font-bold text-xl text-white mb-2">{title}</h3>
      <p className="text-text-muted text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag: string) => (
          <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-text-muted">
            {tag}
          </span>
        ))}
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1.5 text-sm text-text-muted overflow-hidden"
          >
            {subs.map((sub: string) => (
              <li key={sub} className="flex items-start gap-2">
                <span className="text-violet-light">•</span>
                {sub}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </GlassCard>
  )
}

"use client"
import { useState } from "react"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { WA_LINK } from "@/lib/constants"
import type { ROIResults } from "@/lib/types"

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(10000)
  const [leads, setLeads] = useState(100)
  const [conv, setConv] = useState(5)
  const [acv, setAcv] = useState(500)
  const [results, setResults] = useState<ROIResults>({ monthlyGain: 0, annualGain: 0, extraClients: 0, roi: 0 })

  const calcROI = () => {
    const improvedLeads = leads * 1.45
    const improvedConv = Math.min(conv * 1.5, 75)
    const extraClients = (improvedLeads * improvedConv / 100) - (leads * conv / 100)
    const monthlyGain = Math.round(extraClients * acv)
    const annualGain = monthlyGain * 12
    const roi = revenue > 0 ? Math.round((monthlyGain / (revenue * 0.1)) * 100) : 0
    setResults({ monthlyGain, annualGain, extraClients: Math.round(extraClients), roi })
  }

  useState(() => calcROI())

  return (
    <section id="roi" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <SectionLabel>ROI Calculator</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          See Your <GradientText>Revenue Potential</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <h3 className="font-syne font-bold text-lg text-white mb-6">Your Business Numbers</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-text-muted block mb-1">Monthly Revenue ($)</label>
              <input
                type="number"
                value={revenue}
                onChange={(e) => { setRevenue(Number(e.target.value)); calcROI() }}
                className="w-full bg-[var(--bg3)] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet/50"
              />
            </div>
            <div>
              <label className="text-sm text-text-muted block mb-1">Monthly Leads: {leads}</label>
              <input
                type="range"
                min="10"
                max="2000"
                value={leads}
                onChange={(e) => { setLeads(Number(e.target.value)); calcROI() }}
                className="w-full accent-violet"
              />
            </div>
            <div>
              <label className="text-sm text-text-muted block mb-1">Conversion Rate: {conv}%</label>
              <input
                type="range"
                min="1"
                max="80"
                value={conv}
                onChange={(e) => { setConv(Number(e.target.value)); calcROI() }}
                className="w-full accent-violet"
              />
            </div>
            <div>
              <label className="text-sm text-text-muted block mb-1">Avg Customer Value: </label>
              <input
                type="range"
                min="50"
                max="10000"
                step="50"
                value={acv}
                onChange={(e) => { setAcv(Number(e.target.value)); calcROI() }}
                className="w-full accent-violet"
              />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-8 flex flex-col justify-center">
          <h3 className="font-syne font-bold text-lg text-white mb-4">Your Potential</h3>
          <div className="space-y-2">
            <p className="text-sm text-text-muted">Additional Monthly Revenue</p>
            <p className="font-syne font-bold text-4xl"><GradientText></GradientText></p>
            <p className="text-sm text-text-muted mt-4">Additional Annual Revenue</p>
            <p className="font-syne font-bold text-4xl"><GradientText></GradientText></p>
            <hr className="border-white/[0.08] my-4" />
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Extra Leads/Month</span>
              <span className="text-white font-medium">{results.extraClients}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Estimated ROI</span>
              <span className="text-emerald font-medium">{results.roi}%</span>
            </div>
            <p className="text-xs text-text-faint mt-2">* Estimates based on typical results. Actual results may vary.</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-violet to-cyan text-white rounded-full px-8 py-3.5 font-dm font-medium mt-4 hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Free Demo →
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

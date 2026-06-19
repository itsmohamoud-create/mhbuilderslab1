"use client"
import { useState, useRef, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import type { ChatMessage } from "@/lib/types"

const quickReplies = ["What services?", "Pricing?", "Timeline?", "Small businesses?"]

export default function AIAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "👋 Hey! I'm MH Assistant. Ask me anything about our services, pricing, or how we can help your business grow." }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showQuick, setShowQuick] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

  useEffect(scrollToBottom, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim() || loading) return
    setLoading(true)
    setShowQuick(false)
    const userMsg: ChatMessage = { role: "user", content }
    setMessages(prev => [...prev, userMsg])
    setInput("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: "assistant", content: data.content || "I'm here to help! Please reach us on WhatsApp at +254 723 783 337 for more details." }])
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong. Please reach us directly on WhatsApp at +254 723 783 337!" }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="ask" className="py-20 px-6 max-w-[760px] mx-auto">
      <div className="text-center mb-8">
        <SectionLabel>Ask Anything</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
          Talk to <GradientText>Our AI Assistant</GradientText>
        </h2>
        <p className="text-text-muted text-sm mt-2">Ask about our services, pricing, or how we can help. Get instant answers 24/7.</p>
      </div>

      <GlassCard className="p-0 overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet to-cyan flex items-center justify-center text-sm">🤖</div>
          <div>
            <div className="font-dm font-medium text-white text-sm">MH Assistant</div>
            <div className="text-xs text-text-muted">Powered by Claude AI · Always online</div>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald" />
            <span className="text-xs text-text-faint">Online</span>
          </div>
        </div>

        <div className="max-h-[280px] min-h-[120px] overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={lex }>
              <div className={max-w-[80%] px-4 py-2.5 rounded-2xl text-sm }>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-violet/10 border border-violet/15 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                {[0,1,2].map(i => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 rounded-full bg-violet-light"
                    animate={reduced ? {} : { y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showQuick && (
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {quickReplies.map(q => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08] text-text-muted hover:border-violet/30 hover:text-white transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-2 p-4 border-t border-white/[0.08] bg-white/[0.01]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask about services, pricing..."
            className="flex-1 bg-[var(--bg3)] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet/50"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={loading || !input.trim()}
            className="bg-gradient-to-r from-violet to-cyan text-white rounded-xl px-5 py-2.5 text-sm font-dm font-medium disabled:opacity-50 hover:scale-105 transition-transform"
          >
            Send →
          </button>
        </div>
      </GlassCard>
    </section>
  )
}

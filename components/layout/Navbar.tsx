"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { WA_LINK, CALENDLY } from "@/lib/constants"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/#industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <nav className="sticky top-0 z-[90] bg-[var(--bg)]/75 backdrop-blur-2xl border-b border-white/[0.08] h-18 px-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="MH Builders Lab" width={140} height={40} priority className="h-10 w-auto" />
      </Link>

      <div className="hidden lg:flex items-center gap-8 text-sm font-dm">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={	ransition-colors hover:text-violet-light }
          >
            {link.name}
          </Link>
        ))}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-violet-light transition-colors text-sm font-dm"
        >
          Schedule a Call
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-violet to-cyan text-white rounded-full px-6 py-2.5 font-dm font-medium shadow-[0_8px_32px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200 text-sm"
        >
          Book Free Demo
        </a>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bg-[var(--bg)]/95 backdrop-blur-2xl border-b border-white/[0.08] p-6 flex flex-col gap-4 lg:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={	ext-lg font-dm transition-colors hover:text-violet-light }
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-lg text-white/70 hover:text-violet-light transition-colors font-dm"
            >
              Schedule a Call
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-violet to-cyan text-white rounded-full px-8 py-4 text-center font-dm font-medium shadow-[0_8px_32px_rgba(124,58,237,0.35)]"
            >
              Book Free Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import Image from "next/image"
import Link from "next/link"
import { WA_LINK, EMAIL } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <Image src="/logo.png" alt="MH Builders Lab" width={140} height={40} className="h-10 w-auto" />
          <p className="text-sm text-text-muted mt-4 leading-relaxed max-w-xs">AI-powered digital systems for small business growth. Build. Automate. Scale.</p>
          <div className="flex gap-3 mt-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-lg">💬</a>
            <a href={mailto:} aria-label="Email" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-lg">✉️</a>
          </div>
        </div>

        <div>
          <h4 className="font-syne font-bold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><Link href="/services" className="hover:text-white transition-colors">Digital Presence</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">AI & Automation</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Growth & Marketing</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Build Your Own</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold text-white mb-4">Industries</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><Link href="/#industries" className="hover:text-white transition-colors">Hotels & Restaurants</Link></li>
            <li><Link href="/#industries" className="hover:text-white transition-colors">Real Estate</Link></li>
            <li><Link href="/#industries" className="hover:text-white transition-colors">Healthcare</Link></li>
            <li><Link href="/#industries" className="hover:text-white transition-colors">E-commerce</Link></li>
            <li><Link href="/#industries" className="hover:text-white transition-colors">Coaches</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold text-white mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><Link href="/products" className="hover:text-white transition-colors">Digital Products</Link></li>
            <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><a href={mailto:} className="hover:text-white transition-colors">{EMAIL}</a></li>
            <li><a href={	el:+254723783337} className="hover:text-white transition-colors">+254 723 783 337</a></li>
            <li><Link href="/#cta" className="text-violet-light hover:underline">Book Free Demo →</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.08] mt-12 pt-6 flex flex-col sm:flex-row justify-between text-sm text-text-faint max-w-7xl mx-auto">
        <p>© 2026 MH Builders Lab. All rights reserved. Built to build builders.</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

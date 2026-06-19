import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MH Builders Lab — Build. Automate. Scale.",
  description: "AI-powered digital systems for small business growth.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0F] text-white antialiased font-dm">
        {children}
      </body>
    </html>
  )
}

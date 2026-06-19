export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A0A0F] text-white px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold font-syne mb-4 bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#93c5fd] bg-clip-text text-transparent">
          MH Builders Lab
        </h1>
        <p className="text-xl text-gray-400 mb-6 font-dm">Build. Automate. Scale.</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          AI-powered digital systems for small business growth.
        </p>
        <a 
          href="https://wa.me/254723783337" 
          target="_blank"
          className="inline-block bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white rounded-full px-8 py-4 font-dm font-medium hover:scale-105 transition-transform shadow-[0_8px_32px_rgba(124,58,237,0.35)]"
        >
          Book Free Demo →
        </a>
      </div>
    </main>
  )
}

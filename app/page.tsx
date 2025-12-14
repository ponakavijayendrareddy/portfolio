import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Background } from "@/components/background"

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900">
      <Background />
      <Navbar />
      <Hero />
      <Services />
      <Contact />

      <footer className="py-8 text-center text-slate-500 text-sm glass border-t border-white/20">
        <p>© {new Date().getFullYear()} Vijayendra Reddy. All rights reserved.</p>
      </footer>
    </main>
  )
}

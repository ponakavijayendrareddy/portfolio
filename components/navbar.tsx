import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-500"
        >
          VR
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-300/50 rounded-full px-6"
          asChild
        >
          <Link href="#contact">Hire Me</Link>
        </Button>
      </div>
    </header>
  )
}

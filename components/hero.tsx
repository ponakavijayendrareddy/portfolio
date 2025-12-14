import { ArrowRight, Code2, Cpu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for projects
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400 text-glow">
              Vijayendra Reddy
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
            A high-potential freelancer specializing in modern web development, automation bots, and scalable SaaS
            solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-300/40 rounded-full h-12 px-8 text-base group"
              asChild
            >
              <a href="#contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-white/50 hover:bg-white/50 text-slate-700 rounded-full h-12 px-8 text-base bg-transparent"
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>

        <div className="relative lg:h-[600px] flex items-center justify-center animate-float">
          {/* Abstract composition representing services */}
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-blue-500 to-sky-400 rounded-[2rem] opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-indigo-500 to-purple-400 rounded-[2rem] opacity-10 animate-blob animation-delay-2000"></div>

            {/* Glass Cards Floating */}
            <div className="absolute top-10 left-0 right-10 glass-card p-6 rounded-2xl z-10 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Web Development</h3>
                  <p className="text-xs text-slate-500">Modern & Responsive</p>
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                <div className="h-full bg-blue-500 w-3/4"></div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-4 left-20 glass-card p-6 rounded-2xl z-20 transform rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Bots & Automation</h3>
                  <p className="text-xs text-slate-500">Efficient & Intelligent</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] bg-sky-50 px-2 py-1 rounded text-sky-600 font-mono">{"<bot>"}</span>
                <span className="text-[10px] bg-sky-50 px-2 py-1 rounded text-sky-600 font-mono">{"</api>"}</span>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass p-4 rounded-full z-30 shadow-2xl shadow-blue-200/50">
              <Code2 className="h-10 w-10 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

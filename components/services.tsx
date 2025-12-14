import { Layout, Cpu, Database, ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Website Development",
    description:
      "Custom, high-performance websites built with modern technologies like React and Next.js. Fully responsive and SEO optimized.",
    icon: Layout,
    color: "text-blue-600",
    bg: "bg-blue-50",
    features: ["Responsive Design", "SEO Optimization", "Fast Performance"],
  },
  {
    title: "Bots Development",
    description:
      "Intelligent automation bots for Telegram, Discord, and web scraping. Streamline your workflows and save time.",
    icon: Cpu,
    color: "text-sky-600",
    bg: "bg-sky-50",
    features: ["Telegram/Discord Bots", "Process Automation", "Data Scraping"],
  },
  {
    title: "SaaS Services",
    description:
      "Scalable Software as a Service applications designed to grow with your business. Secure, reliable, and user-friendly.",
    icon: Database,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    features: ["User Authentication", "Subscription Payments", "Admin Dashboards"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">My Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technology to deliver premium digital solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div
                className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed text-sm">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Reveal } from "./reveal"
import { Layers, Fingerprint, Network, Globe } from "lucide-react"

const PHASES = [
  { phase: "Phase 1", icon: Layers, title: "Memory Layer", desc: "Persistent storage and retrieval infrastructure for agents." },
  { phase: "Phase 2", icon: Fingerprint, title: "Agent Identity", desc: "Verifiable, continuous identity across interactions." },
  { phase: "Phase 3", icon: Network, title: "Agent Network", desc: "Cross-agent memory sharing and collective intelligence." },
  { phase: "Phase 4", icon: Globe, title: "Universal AI Memory Protocol", desc: "The standard memory layer for every AI agent." },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 lg:px-6">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Roadmap</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The Path To Universal Memory.
          </h2>
        </div>
      </Reveal>

      <div className="relative mt-16">
        {/* connecting line */}
        <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#06B6D4] lg:block" aria-hidden="true" />
        <div className="grid gap-8 lg:grid-cols-4">
          {PHASES.map((p, i) => (
            <Reveal key={p.phase} delay={i * 0.1}>
              <div className="relative">
                <div className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)] lg:mx-0">
                  <p.icon className="size-6" />
                </div>
                <div className="mt-5 rounded-2xl border border-border/70 bg-card p-6 text-center shadow-sm lg:text-left">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.phase}</span>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Reveal } from "./reveal"
import { Infinity as InfinityIcon, Fingerprint, Search, Network, Share2, TrendingUp } from "lucide-react"

const FEATURES = [
  { icon: InfinityIcon, title: "Persistent Memory", desc: "Remember forever." },
  { icon: Fingerprint, title: "Agent Identity", desc: "Maintain continuity." },
  { icon: Search, title: "Memory Retrieval", desc: "Recall instantly." },
  { icon: Network, title: "Context Retention", desc: "Preserve relationships." },
  { icon: Share2, title: "Cross-Agent Intelligence", desc: "Share knowledge." },
  { icon: TrendingUp, title: "Long-Term Learning", desc: "Build experience over time." },
]

export function Solution() {
  return (
    <section id="technology" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 lg:px-6">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Solution</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Introducing Abraham Memory.
          </h2>
          <p className="mt-5 text-pretty text-muted-foreground">
            A complete memory infrastructure giving every agent the ability to retain, recall, and reason
            across a lifetime of interactions.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(37,99,235,0.5)]">
              <div
                className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-primary/15 to-[#06B6D4]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.7)]">
                <f.icon className="size-5.5" />
              </div>
              <h3 className="relative text-lg font-semibold tracking-tight text-foreground">{f.title}</h3>
              <p className="relative mt-1.5 text-muted-foreground">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

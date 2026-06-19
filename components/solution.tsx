import { Reveal } from "./reveal"
import {
  Infinity as InfinityIcon,
  Fingerprint,
  Search,
  Network,
  Share2,
  TrendingUp,
} from "lucide-react"

const FEATURES = [
  {
    icon: InfinityIcon,
    title: "Persistent Memory Layer",
    desc: "Memory is no longer session-based. It persists across time and interactions.",
  },
  {
    icon: Fingerprint,
    title: "Stable Agent Identity",
    desc: "Agents maintain continuous identity instead of resetting per session.",
  },
  {
    icon: Search,
    title: "Semantic Memory Retrieval",
    desc: "Context is recalled based on meaning, not just recent prompts.",
  },
  {
    icon: Network,
    title: "Connected Context Graph",
    desc: "All interactions form a unified memory network across time.",
  },
  {
    icon: Share2,
    title: "Cross-Agent Memory Sharing",
    desc: "Multiple AI agents operate on shared persistent memory state.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning System",
    desc: "System improves over time through accumulated memory experience.",
  },
]

export function Solution() {
  return (
    <section
      id="technology"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 lg:px-6"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Solution
          </p>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Abraham Memory: The Persistent Intelligence Layer
          </h2>

          <p className="mt-5 text-pretty text-muted-foreground">
            We transform stateless AI into a persistent memory system where
            every interaction becomes part of a continuous intelligence graph.
          </p>
        </div>
      </Reveal>

      {/* SYSTEM GRID */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(37,99,235,0.4)]">

              {/* ENERGY BACKGROUND (SUBTLE SYSTEM LAYER) */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-primary/15 to-[#06B6D4]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* ICON */}
              <div className="relative mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.7)]">
                <f.icon className="size-5.5" />
              </div>

              {/* TITLE */}
              <h3 className="relative text-lg font-semibold tracking-tight text-foreground">
                {f.title}
              </h3>

              {/* DESC */}
              <p className="relative mt-1.5 text-muted-foreground">
                {f.desc}
              </p>

            </div>
          </Reveal>
        ))}
      </div>

      {/* SYSTEM STATEMENT */}
      <Reveal>
        <div className="mt-16 rounded-2xl border border-border/70 bg-card/60 p-10 text-center">
          <div className="text-sm text-muted-foreground">
            System Outcome
          </div>

          <div className="mt-4 text-lg font-medium text-foreground">
            AI is no longer stateless. It becomes a memory-driven intelligence system.
          </div>
        </div>
      </Reveal>
    </section>
  )
}
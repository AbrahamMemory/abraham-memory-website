import { Reveal } from "./reveal"
import {
  Infinity as InfinityIcon,
  Fingerprint,
  Search,
  Network,
  Share2,
  TrendingUp,
} from "lucide-react"
import { motion } from "framer-motion"

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
      {/* HEADER */}
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

      {/* GRID */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(37,99,235,0.4)]">

              {/* 🌊 ENERGY FIELD BACKGROUND */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <motion.div
                  className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-primary/20 to-[#06B6D4]/10 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              </div>

              {/* 📡 SCAN LINE EFFECT */}
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  y: [-200, 200],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              />

              {/* ICON */}
              <motion.div
                className="relative mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.7)]"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              >
                <f.icon className="size-5.5" />
              </motion.div>

              {/* TITLE */}
              <h3 className="relative text-lg font-semibold tracking-tight text-foreground">
                {f.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative mt-1.5 text-muted-foreground">
                {f.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* SYSTEM OUTCOME */}
      <Reveal>
        <div className="mt-16 rounded-2xl border border-border/70 bg-card/60 p-10 text-center">
          <div className="text-sm text-muted-foreground">
            System Outcome
          </div>

          <div className="mt-4 text-lg font-medium text-foreground">
            AI transitions from stateless computation into a persistent memory-driven intelligence system.
          </div>
        </div>
      </Reveal>
    </section>
  )
}
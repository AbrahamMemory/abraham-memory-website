"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { User, Bot, Brain, Database, ListTree, Search, Layers, Sparkles } from "lucide-react"

const FLOW = [
  { icon: User, label: "User", sub: "Sends input" },
  { icon: Bot, label: "AI Agent", sub: "Receives request" },
  { icon: Brain, label: "Abraham Memory", sub: "Protocol layer", highlight: true },
  { icon: Database, label: "Memory Storage", sub: "Durable persistence" },
  { icon: ListTree, label: "Memory Indexing", sub: "Vector embeddings" },
  { icon: Search, label: "Memory Retrieval", sub: "Relevant recall" },
  { icon: Layers, label: "Context Injection", sub: "Augmented prompt" },
  { icon: Sparkles, label: "Smarter Responses", sub: "Continuous intelligence" },
]

export function Architecture() {
  return (
    <section id="architecture" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 lg:px-6">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Architecture</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The Memory Infrastructure Layer
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every request flows through Abraham Memory — transforming stateless intelligence into
            continuous, context-aware reasoning.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-3 lg:grid-cols-4">
        {FLOW.map((step, i) => (
          <Reveal key={step.label} delay={i * 0.05}>
            <div className="relative h-full">
              <div
                className={`group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 ${
                  step.highlight
                    ? "border-primary/40 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.7)]"
                    : "border-border/70 bg-card hover:border-primary/30"
                }`}
              >
                <div
                  className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl ${
                    step.highlight ? "bg-white/20 text-white" : "bg-secondary text-primary"
                  }`}
                >
                  <step.icon className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-semibold ${step.highlight ? "text-white/70" : "text-muted-foreground"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold tracking-tight">{step.label}</h3>
                  </div>
                  <p className={`text-sm ${step.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                    {step.sub}
                  </p>
                </div>
                {/* animated flow line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 ${step.highlight ? "bg-white/60" : "bg-primary/50"}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 + 0.3 }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

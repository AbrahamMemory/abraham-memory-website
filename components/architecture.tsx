"use client"

import { motion } from "framer-motion"
import { Database, Brain, Network, Cpu, Layers } from "lucide-react"

const ITEMS = [
  {
    icon: Layers,
    title: "Identity Layer",
    description:
      "Stores user identity, preferences, and long-term continuity across sessions.",
  },
  {
    icon: Database,
    title: "Memory Engine",
    description:
      "Writes, updates, and retrieves persistent memory records.",
  },
  {
    icon: Network,
    title: "Model Router",
    description:
      "Routes requests between OpenAI, Claude, and future AI models.",
  },
  {
    icon: Brain,
    title: "Vector Retrieval",
    description:
      "Finds relevant memories across stored context and historical interactions.",
  },
  {
    icon: Cpu,
    title: "Future Agent Network",
    description:
      "Enables memory sharing between autonomous AI agents.",
  },
]

export function Architecture() {
  return (
    <section id="architecture" className="py-24">
      <div className="mx-auto max-w-6xl px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">
            Architecture Overview
          </div>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            The Memory Infrastructure Stack
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A persistent memory layer connecting users, AI models,
            and long-term context infrastructure.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {ITEMS.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card/60 p-6 backdrop-blur"
              >
                <Icon className="mb-4 h-8 w-8 text-primary" />

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-16 rounded-2xl border bg-card/40 p-8 text-center">

          <div className="text-sm text-muted-foreground">
            Protocol Flow
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            <span>User</span>
            <span>→</span>
            <span>Abraham Memory</span>
            <span>→</span>
            <span>OpenAI</span>
            <span>•</span>
            <span>Claude</span>
            <span>→</span>
            <span>Memory Engine</span>
          </div>

        </div>

      </div>
    </section>
  )
}
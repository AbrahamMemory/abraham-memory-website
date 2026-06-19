"use client"

import { motion } from "framer-motion"
import { Brain, Database, RefreshCw, Zap, Network } from "lucide-react"

const ITEMS = [
  {
    icon: RefreshCw,
    title: "Session Reset",
    description:
      "Every interaction starts from zero. AI agents lose all previous context after session ends.",
  },
  {
    icon: Database,
    title: "No Persistent Memory",
    description:
      "User preferences and learned behavior are not stored in a structured long-term memory system.",
  },
  {
    icon: Brain,
    title: "Context Fragmentation",
    description:
      "Information is scattered across prompts, making continuity unreliable and inconsistent.",
  },
  {
    icon: Zap,
    title: "Stateless Intelligence",
    description:
      "AI models operate without persistent state, limiting their ability to evolve over time.",
  },
  {
    icon: Network,
    title: "No Agent Connectivity",
    description:
      "Memory cannot be shared or transferred between autonomous AI agents or systems.",
  },
]

export function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Current AI Limitation
          </div>

          <h2 className="text-3xl font-semibold sm:text-4xl text-gray-900">
            AI Agents Have No Memory Layer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Today’s AI systems operate in isolated sessions without persistent
            memory, causing loss of context, identity, and continuity.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {ITEMS.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <Icon className="mb-4 h-7 w-7 text-blue-500" />

                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* FLOW SECTION */}
        <div className="mt-16 rounded-2xl border bg-gray-50 p-8 text-center">

          <div className="text-sm text-gray-500">
            System Reality Flow
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-gray-800">
            <span>User Input</span>
            <span>→</span>
            <span>LLM Response</span>
            <span>→</span>
            <span>Session Ends</span>
            <span>→</span>
            <span>Memory Lost</span>
            <span>→</span>
            <span>Context Reset</span>
          </div>

        </div>

      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"

const FLOW = [
  "User Input",
  "Memory Engine",
  "Context Retrieval",
  "Model Router (OpenAI / Claude)",
  "Response Generation",
  "Memory Update",
]

export function SystemFlow() {
  return (
    <section id="system" className="py-24">
      <div className="mx-auto max-w-5xl px-4">

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl font-semibold"
        >
          AI Memory System Flow
        </motion.h2>

        <div className="mt-12 space-y-4">
          {FLOW.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-lg border border-border bg-card/60 p-4"
            >
              {i + 1}. {item}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
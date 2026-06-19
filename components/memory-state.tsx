"use client"

import { motion } from "framer-motion"

export function MemoryState() {
  return (
    <section id="memory" className="py-24">
      <div className="mx-auto max-w-5xl px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold">
            Memory State Simulator
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Live view of AI memory persistence and system state
          </p>
        </motion.div>

        {/* STATE CARDS */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-xl border bg-card/60 p-5"
          >
            <div className="text-sm text-muted-foreground">User Identity</div>
            <div className="mt-2 text-lg font-medium">Irfan</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-xl border bg-card/60 p-5"
          >
            <div className="text-sm text-muted-foreground">Memory Status</div>
            <div className="mt-2 text-lg font-medium text-green-500">
              Persistent
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-xl border bg-card/60 p-5"
          >
            <div className="text-sm text-muted-foreground">Active Context</div>
            <div className="mt-2 text-lg font-medium">
              AI Agents + Memory Systems
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-xl border bg-card/60 p-5"
          >
            <div className="text-sm text-muted-foreground">Model Routing</div>
            <div className="mt-2 text-lg font-medium">
              OpenAI • Claude
            </div>
          </motion.div>

        </div>

        {/* SYSTEM NOTE */}
        <div className="mt-10 text-center text-xs text-muted-foreground">
          Abraham Memory Engine maintains persistent state across AI interactions
        </div>

      </div>
    </section>
  )
}
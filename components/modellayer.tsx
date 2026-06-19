"use client"

import { motion } from "framer-motion"
import { Brain, Database, Cpu } from "lucide-react"

export function ModelLayer() {
  return (
    <section id="models" className="py-24">
      <div className="mx-auto max-w-6xl px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-3 text-xs font-medium tracking-[0.2em] text-primary uppercase">
            AI MODEL LAYER
          </div>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            One Memory Layer. Multiple AI Models.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Abraham Memory sits between users and AI models,
            providing persistent memory, identity, and context continuity
            across every interaction.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* OpenAI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card/60 p-8 text-center"
          >
            <Brain className="mx-auto mb-4 h-10 w-10 text-primary" />

            <h3 className="text-xl font-semibold">
              OpenAI
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              Generates reasoning, responses, and intelligence.
            </p>

            <div className="mt-6 text-xs text-green-500">
              ● CONNECTED
            </div>
          </motion.div>

          {/* Abraham Memory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center shadow-lg"
          >
            <Database className="mx-auto mb-4 h-10 w-10 text-primary" />

            <h3 className="text-xl font-semibold">
              Abraham Memory
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              Stores identity, retrieves context,
              and maintains persistent memory across sessions.
            </p>

            <div className="mt-6 text-xs text-primary">
              MEMORY ENGINE ACTIVE
            </div>
          </motion.div>

          {/* Claude */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card/60 p-8 text-center"
          >
            <Cpu className="mx-auto mb-4 h-10 w-10 text-primary" />

            <h3 className="text-xl font-semibold">
              Claude
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              Provides long-context reasoning and advanced analysis.
            </p>

            <div className="mt-6 text-xs text-green-500">
              ● CONNECTED
            </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          OpenAI ↔ Abraham Memory ↔ Claude
        </div>

      </div>
    </section>
  )
}
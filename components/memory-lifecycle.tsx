"use client"

import { motion } from "framer-motion"

const STEPS = [
  {
    title: "User Request",
    status: "INPUT",
    content: "Build an AI memory protocol using OpenAI and Claude.",
  },
  {
    title: "Memory Write",
    status: "STORED",
    content: "Context saved into Abraham Memory Engine.",
  },
  {
    title: "Context Retrieval",
    status: "FOUND",
    content: "3 relevant memory records retrieved.",
  },
  {
    title: "Model Routing",
    status: "ACTIVE",
    content: "Request routed to OpenAI. Claude available as fallback.",
  },
  {
    title: "Memory Update",
    status: "UPDATED",
    content: "New context written back into persistent memory.",
  },
]

export function MemoryLifecycle() {
  return (
    <section id="memory-lifecycle" className="py-24">
      <div className="mx-auto max-w-6xl px-4">

        <div className="text-center">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Persistent Memory Lifecycle
          </div>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            Memory That Persists Beyond a Session
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Abraham Memory continuously stores, retrieves,
            and updates context across AI interactions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card/60 p-5 backdrop-blur"
            >
              <div className="mb-3 text-xs text-primary">
                STEP {index + 1}
              </div>

              <h3 className="font-semibold">
                {step.title}
              </h3>

              <div className="mt-3 inline-flex rounded-full border px-2 py-1 text-xs">
                {step.status}
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {step.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border bg-card/40 p-6">

          <div className="mb-4 text-sm font-medium">
            Active Memory Snapshot
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <div className="text-xs text-muted-foreground">
                Current Context
              </div>

              <div className="mt-2 text-sm">
                AI Memory Protocol
              </div>
            </div>

            <div>
              <div className="text-xs text-muted-foreground">
                Active Models
              </div>

              <div className="mt-2 text-sm">
                OpenAI • Claude
              </div>
            </div>

            <div>
              <div className="text-xs text-muted-foreground">
                Memory Records
              </div>

              <div className="mt-2 text-sm">
                1,284 Entries
              </div>
            </div>

            <div>
              <div className="text-xs text-muted-foreground">
                Last Update
              </div>

              <div className="mt-2 text-sm">
                2 Seconds Ago
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
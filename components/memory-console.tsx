"use client"

import { Database, Brain, Clock3, Activity } from "lucide-react"

export function MemoryConsole() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">

        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Live Memory Console
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Abraham Memory Engine
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Persistent memory infrastructure for AI agents.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur">

          <div className="flex items-center gap-2 border-b border-border px-6 py-4">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">
              Memory Engine Online
            </span>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-2">

            <div className="space-y-4">

              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Database size={16} />
                  Stored Memories
                </div>

                <div className="mt-2 text-3xl font-semibold">
                  1,284
                </div>
              </div>

              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Brain size={16} />
                  Active Context
                </div>

                <div className="mt-2 font-medium">
                  AI Infrastructure
                </div>
              </div>

            </div>

            <div className="space-y-4">

              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Activity size={16} />
                  Active Models
                </div>

                <div className="mt-2 flex gap-2">
                  <span className="rounded-full border px-3 py-1 text-sm">
                    OpenAI
                  </span>

                  <span className="rounded-full border px-3 py-1 text-sm">
                    Claude
                  </span>
                </div>
              </div>

              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock3 size={16} />
                  Last Retrieval
                </div>

                <div className="mt-2 font-medium">
                  2 seconds ago
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
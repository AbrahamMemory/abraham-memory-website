"use client"

import { Brain, Database, Clock3, Activity } from "lucide-react"

export function MemoryConsole() {
return ( <section className="py-20"> <div className="mx-auto max-w-6xl px-4">

```
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.25em] text-primary">
        Memory Engine
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        Persistent AI Memory Infrastructure
      </h2>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        A unified memory layer connecting users, AI agents,
        and language models through persistent context.
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl">

      <div className="flex items-center justify-between border-b border-border px-6 py-4">

        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />

          <span className="text-sm text-muted-foreground">
            Abraham Memory Engine Online
          </span>
        </div>

        <span className="text-xs uppercase tracking-widest text-primary">
          Live Console
        </span>

      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-3">

        <div className="rounded-2xl border border-border/70 p-5">
          <Database className="mb-3 h-5 w-5 text-primary" />

          <div className="text-sm text-muted-foreground">
            Stored Memories
          </div>

          <div className="mt-2 text-3xl font-semibold">
            1,284
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 p-5">
          <Activity className="mb-3 h-5 w-5 text-primary" />

          <div className="text-sm text-muted-foreground">
            Active Models
          </div>

          <div className="mt-2 text-3xl font-semibold">
            2
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 p-5">
          <Clock3 className="mb-3 h-5 w-5 text-primary" />

          <div className="text-sm text-muted-foreground">
            Last Retrieval
          </div>

          <div className="mt-2 text-lg font-medium">
            2 seconds ago
          </div>
        </div>

      </div>

      <div className="grid gap-6 border-t border-border p-6 lg:grid-cols-2">

        <div className="rounded-2xl border border-border/70 p-5">

          <div className="mb-4 flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-medium">
              Active Models
            </span>
          </div>

          <div className="space-y-3">

            <div className="flex items-center justify-between rounded-xl border px-4 py-3">
              <span>OpenAI</span>
              <span className="text-emerald-500">Online</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border px-4 py-3">
              <span>Claude</span>
              <span className="text-emerald-500">Online</span>
            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-border/70 p-5">

          <div className="mb-4 font-medium">
            Current Memory Context
          </div>

          <p className="leading-relaxed text-muted-foreground">
            Abraham Memory is building a persistent memory
            infrastructure layer that allows AI agents to
            retain identity, context, and experience across time.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
```

)
}

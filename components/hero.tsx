"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MemoryNetwork } from "./memory-network"
import { ArrowRight, Database } from "lucide-react"

const BADGES = [
"Persistent Memory",
"OpenAI Connected",
"Claude Connected",
]

export function Hero() {
return ( <section id="top" className="relative overflow-hidden pt-28 lg:pt-32"> <div className="pointer-events-none absolute inset-0 mesh-bg" aria-hidden="true" />

```
  <div className="absolute inset-0 -z-0">
    <MemoryNetwork
      className="h-full w-full opacity-70"
      density={1.2}
    />
  </div>

  <div
    className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background"
    aria-hidden="true"
  />

  <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 lg:px-6 lg:pb-32 lg:pt-16">
    <div className="mx-auto max-w-4xl text-center">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="glass inline-flex items-center gap-2 rounded-full border border-border/70 px-3.5 py-1.5 text-xs font-medium text-foreground/80"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            {badge}
          </span>
        ))}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
      >
        AI Agents Forget.
        <br className="hidden sm:block" />
        Abraham <span className="text-gradient">Remembers.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.16 }}
        className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        The memory infrastructure layer for AI agents.
        Persistent identity, context, and retrieval across models,
        sessions, and time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22 }}
        className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground"
      >
        <span>OpenAI</span>
        <span>•</span>
        <span>Claude</span>
        <span>•</span>
        <span>Abraham Memory Engine</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <Button
          size="lg"
          className="group gap-2 bg-primary text-primary-foreground"
          nativeButton={false}
          render={
            <a href="#community">
              Join Early Access
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          }
        />

        <Button
          size="lg"
          variant="outline"
          className="gap-2 border-border bg-card/70 backdrop-blur"
          nativeButton={false}
          render={
            <a href="#architecture">
              <Database className="size-4" />
              View Architecture
            </a>
          }
        />
      </motion.div>

    </div>
  </div>
</section>
```

)
}

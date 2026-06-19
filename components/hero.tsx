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
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />

      <div className="absolute inset-0 -z-0">
        <MemoryNetwork className="h-full w-full opacity-70" density={1.2} />
      </div>

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
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-7 text-4xl font-semibold sm:text-6xl lg:text-7xl"
          >
            AI Agents Forget.
            <br className="hidden sm:block" />
            Abraham <span className="text-gradient">Remembers.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-muted-foreground"
          >
            The memory infrastructure layer for AI agents.
            Persistent identity, context, and retrieval across
            models, sessions, and time.
          </motion.p>

          <div className="mt-5 text-xs text-muted-foreground">
            OpenAI • Claude • Abraham Memory Engine
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <Button size="lg" nativeButton={false}
              render={
                <a href="#community">
                  Join Early Access
                </a>
              }
            />

            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <a href="#architecture">
                  <Database className="mr-2 h-4 w-4" />
                  View Architecture
                </a>
              }
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
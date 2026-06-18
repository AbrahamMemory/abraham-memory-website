"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MemoryNetwork } from "./memory-network"
import { Wallet, ArrowRight, FileText } from "lucide-react"

const BADGES = ["Built for AI Agents", "Memory Infrastructure Protocol", "Base Ecosystem Ready"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-32">
      {/* background visual */}
      <div className="pointer-events-none absolute inset-0 mesh-bg" aria-hidden="true" />
      <div className="absolute inset-0 -z-0">
        <MemoryNetwork className="h-full w-full opacity-70" density={1.2} />
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
            {BADGES.map((b) => (
              <span
                key={b}
                className="glass inline-flex items-center gap-2 rounded-full border border-border/70 px-3.5 py-1.5 text-xs font-medium text-foreground/80 shadow-sm"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {b}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Every AI Agent Needs <br className="hidden sm:block" /> a{" "}
            <span className="text-gradient">Memory.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Abraham Memory is the infrastructure layer enabling AI agents to remember, learn, evolve,
            and retain identity across every interaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              size="lg"
              className="group gap-2 bg-primary text-primary-foreground shadow-[0_12px_32px_-10px_rgba(37,99,235,0.7)] transition hover:shadow-[0_16px_40px_-10px_rgba(37,99,235,0.8)]"
              nativeButton={false}
              render={
                <a href="#community">
                  Join Waitlist
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              }
            />
            <Button size="lg" variant="outline" className="gap-2 border-border bg-card/70 backdrop-blur hover:bg-card">
              <Wallet className="size-4" /> Connect Wallet
            </Button>
            <Button size="lg" variant="ghost" className="gap-2 text-foreground hover:bg-secondary">
              Follow on X
            </Button>
            <Button size="lg" variant="ghost" className="gap-2 text-foreground hover:bg-secondary">
              <FileText className="size-4" /> Read Litepaper
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { TrendingUp, FlaskConical, Palette, Headphones, Share2, Building2 } from "lucide-react"

const AGENTS = [
  { icon: TrendingUp, label: "Trading Agent" },
  { icon: FlaskConical, label: "Research Agent" },
  { icon: Palette, label: "Creator Agent" },
  { icon: Headphones, label: "Customer Support Agent" },
  { icon: Share2, label: "Social Agent" },
  { icon: Building2, label: "Enterprise Agent" },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative scroll-mt-24 overflow-hidden border-y border-border/70 bg-card/50">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ecosystem</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A Shared Memory Layer For All AI Agents.
            </h2>
          </div>
        </Reveal>

        {/* Orbit visual */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-square w-full max-w-2xl">
            {/* connecting lines */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="eco-grad" x1="0" y1="0" x2="400" y2="400">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              {AGENTS.map((_, i) => {
                const angle = (i / AGENTS.length) * Math.PI * 2 - Math.PI / 2
                const x = 200 + Math.cos(angle) * 150
                const y = 200 + Math.sin(angle) * 150
                return (
                  <motion.line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={x}
                    y2={y}
                    stroke="url(#eco-grad)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                )
              })}
              {AGENTS.map((_, i) => {
                const angle = (i / AGENTS.length) * Math.PI * 2 - Math.PI / 2
                const x = 200 + Math.cos(angle) * 150
                const y = 200 + Math.sin(angle) * 150
                return (
                  <motion.circle
                    key={`p-${i}`}
                    r="3"
                    fill="#2563EB"
                    initial={{ cx: 200, cy: 200 }}
                    animate={{ cx: [200, x], cy: [200, y] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                  />
                )
              })}
            </svg>

            {/* center node */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex size-28 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-center text-white shadow-[0_20px_50px_-15px_rgba(37,99,235,0.8)] sm:size-32"
              >
                <span className="text-xs font-medium opacity-80">Powered by</span>
                <span className="text-sm font-semibold leading-tight">Abraham<br />Memory</span>
              </motion.div>
            </div>

            {/* agent nodes */}
            {AGENTS.map((agent, i) => {
              const angle = (i / AGENTS.length) * Math.PI * 2 - Math.PI / 2
              const left = 50 + Math.cos(angle) * 37.5
              const top = 50 + Math.sin(angle) * 37.5
              return (
                <motion.div
                  key={agent.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-border/70 bg-card text-primary shadow-md transition hover:-translate-y-1 hover:border-primary/40 sm:size-16">
                      <agent.icon className="size-6" />
                    </div>
                    <span className="max-w-[90px] text-center text-[11px] font-medium leading-tight text-foreground sm:text-xs">
                      {agent.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

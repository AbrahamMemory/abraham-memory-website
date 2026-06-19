"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const LINES = [
  "Modern AI can think.",
  "Modern AI can reason.",
  "Modern AI can act.",
  "But it cannot persist across time.",
]

const LOSSES = [
  "No persistent memory state",
  "No evolving identity over sessions",
  "No long-term contextual continuity",
]

export function Problem() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-card/50">
      <div
        className="pointer-events-none absolute inset-0 mesh-bg opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-2 lg:items-center lg:px-6">

        {/* LEFT TEXT */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Problem
            </p>

            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Intelligence Without Memory Is Stateless Computation
            </h2>
          </Reveal>

          {/* CORE LINES */}
          <div className="mt-8 space-y-2.5">
            {LINES.map((line, i) => (
              <Reveal key={line} delay={i * 0.08}>
                <p
                  className={`text-lg ${
                    line.startsWith("But")
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {line}
                </p>
              </Reveal>
            ))}
          </div>

          {/* LOSS TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {LOSSES.map((l, i) => (
              <Reveal key={l} delay={0.25 + i * 0.08}>
                <span className="rounded-full border border-destructive/30 bg-destructive/5 px-3.5 py-1.5 text-sm font-medium text-destructive">
                  {l}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL (ENHANCED MEANING, SAME STYLE) */}
        <Reveal delay={0.15}>
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_24px_60px_-30px_rgba(15,23,42,0.3)]">

            <svg viewBox="0 0 400 400" className="h-full w-full">

              <defs>
                <linearGradient id="prob-grad" x1="0" y1="0" x2="400" y2="400">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>

              {/* LEFT SIDE = EPHEMERAL MEMORY (FADES = SESSION RESET) */}
              {Array.from({ length: 7 }).map((_, i) => {
                const x = 60 + (i % 3) * 40
                const y = 80 + Math.floor(i / 3) * 70

                return (
                  <motion.circle
                    key={`left-${i}`}
                    cx={x}
                    cy={y}
                    r="5"
                    fill="#94a3b8"
                    initial={{ opacity: 0.35, scale: 1 }}
                    animate={{
                      opacity: [0.35, 0.1, 0.35],
                      scale: [1, 0.95, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                )
              })}

              {/* CENTER = MEMORY RESET EVENT (NEW IMPORTANT MEANING) */}
              <motion.circle
                cx="200"
                cy="200"
                r="45"
                fill="url(#prob-grad)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.18, 0],
                  scale: [0.8, 1.05, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* RIGHT SIDE = PERSISTENT MEMORY (SLOWLY STABILIZES) */}
              {Array.from({ length: 7 }).map((_, i) => {
                const x = 250 + (i % 3) * 45
                const y = 80 + Math.floor(i / 3) * 70

                return (
                  <g key={`right-${i}`}>
                    {i > 0 && (
                      <motion.line
                        x1={x}
                        y1={y}
                        x2={250 + ((i - 1) % 3) * 45}
                        y2={80 + Math.floor((i - 1) / 3) * 70}
                        stroke="url(#prob-grad)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: [0, 1],
                          opacity: [0, 0.6, 0.4],
                        }}
                        transition={{
                          duration: 2.5,
                          delay: 0.6 + i * 0.2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    )}

                    <motion.circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="url(#prob-grad)"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  </g>
                )
              })}
            </svg>

            {/* LABEL */}
            <div className="absolute inset-x-0 bottom-0 flex justify-between px-6 pb-4 text-xs font-medium">
              <span className="text-muted-foreground">
                Ephemeral Session Memory
              </span>
              <span className="text-primary">
                Persistent Memory Layer
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
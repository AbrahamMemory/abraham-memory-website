"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const LINES = ["Modern AI can think.", "Modern AI can reason.", "Modern AI can act.", "But AI still forgets."]
const LOSSES = ["It loses context.", "It loses continuity.", "It loses identity."]

export function Problem() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-card/50">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-2 lg:items-center lg:px-6">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Problem</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              AI Has Intelligence. But It Lacks Memory.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-2.5">
            {LINES.map((line, i) => (
              <Reveal key={line} delay={i * 0.08}>
                <p
                  className={`text-lg ${
                    line.startsWith("But") ? "font-semibold text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {line}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {LOSSES.map((l, i) => (
              <Reveal key={l} delay={0.3 + i * 0.08}>
                <span className="rounded-full border border-destructive/30 bg-destructive/5 px-3.5 py-1.5 text-sm font-medium text-destructive">
                  {l}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Broken network → reformed */}
        <Reveal delay={0.15}>
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_24px_60px_-30px_rgba(15,23,42,0.3)]">
            <svg viewBox="0 0 400 400" className="h-full w-full">
              <defs>
                <linearGradient id="prob-grad" x1="0" y1="0" x2="400" y2="400">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              {/* broken side (left) */}
              {Array.from({ length: 7 }).map((_, i) => {
                const x = 60 + (i % 3) * 40
                const y = 80 + Math.floor(i / 3) * 70
                return (
                  <motion.circle
                    key={`b-${i}`}
                    cx={x}
                    cy={y}
                    r="5"
                    fill="#94a3b8"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.15, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                )
              })}
              {/* reformed side (right) - connected glowing nodes */}
              {Array.from({ length: 7 }).map((_, i) => {
                const x = 250 + (i % 3) * 45
                const y = 80 + Math.floor(i / 3) * 70
                return (
                  <g key={`a-${i}`}>
                    {i > 0 && (
                      <motion.line
                        x1={x}
                        y1={y}
                        x2={250 + ((i - 1) % 3) * 45}
                        y2={80 + Math.floor((i - 1) / 3) * 70}
                        stroke="url(#prob-grad)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.15 }}
                      />
                    )}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="url(#prob-grad)"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.18 }}
                    />
                  </g>
                )
              })}
              {/* transformation arrow */}
              <motion.path
                d="M165 200 L235 200"
                stroke="url(#prob-grad)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                markerEnd="url(#arrow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#06B6D4" />
                </marker>
              </defs>
            </svg>
            <div className="absolute inset-x-0 bottom-0 flex justify-between px-6 pb-4 text-xs font-medium">
              <span className="text-muted-foreground">Fragmented memory</span>
              <span className="text-primary">Abraham Memory</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

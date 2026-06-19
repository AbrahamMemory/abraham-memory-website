"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function Problem() {
  const [session, setSession] = useState(1)

  const memory = [
    "User prefers structured responses",
    "User builds AI agent system",
    "User focuses on memory infrastructure",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSession((prev) => (prev === 1 ? 2 : 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const isReset = session === 2

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-100 blur-[120px] top-[-180px] left-[-150px] opacity-60" />
        <div className="absolute w-[450px] h-[450px] bg-purple-100 blur-[120px] bottom-[-200px] right-[-180px] opacity-50" />
      </div>

      <div className="relative container mx-auto px-6">

        {/* 🧠 TEXT PROBLEM (KEEP THIS FIRST - IMPORTANT) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            AI agents don’t remember anything
          </h2>

          <p className="mt-4 text-gray-500 text-base md:text-lg">
            Every interaction starts from zero. No continuity. No persistent state. No memory across sessions.
          </p>
        </motion.div>

        {/* VISUAL SIMULATION */}
        <div className="mt-20 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT: SESSION MEMORY VISUAL */}
          <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-500">Agent Memory State</span>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs text-gray-500">
                  Session {session}
                </span>
              </div>
            </div>

            {/* MEMORY LIST */}
            <div className="space-y-3 min-h-[140px] relative">

              <AnimatePresence mode="wait">
                {!isReset ? (
                  memory.map((m, i) => (
                    <motion.div
                      key={m}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm text-gray-700">{m}</span>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-gray-400 italic"
                  >
                    Memory reset. No context carried forward.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: EXPLANATION */}
          <div className="space-y-5">

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-medium text-gray-900"
            >
              Context is lost between sessions
            </motion.h3>

            <p className="text-gray-600 leading-relaxed">
              Today’s AI systems do not maintain persistent memory.
              Each session behaves as a standalone computation without continuity.
            </p>

            <div className="space-y-2 text-sm text-gray-500">
              <div>• No persistent state across sessions</div>
              <div>• No long-term memory structure</div>
              <div>• No evolution of agent behavior over time</div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-4 text-blue-600 font-medium"
            >
              → This is the problem Abraham Memory solves.
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
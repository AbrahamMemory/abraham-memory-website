"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function Problem() {
  const [session, setSession] = useState(1)
  const [memory, setMemory] = useState<string[]>([
    "User prefers dark mode",
    "User works in AI development",
    "User is building agent system",
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setSession((prev) => (prev === 1 ? 2 : 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const isReset = session === 2

  return (
    <section className="relative py-28 overflow-hidden bg-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[120px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="relative container mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-semibold text-center"
        >
          Probleim AI Agents Don’t Remember Anything
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-white/60 mt-4 max-w-2xl mx-auto"
        >
          Every session starts from zero. No continuity. No state. No memory.
        </motion.p>

        {/* SIMULATION BOX */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT: SESSION VISUAL */}
          <div className="relative border border-white/10 rounded-2xl p-6 backdrop-blur-xl bg-white/5">

            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-white/60">Agent Session</span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10">
                Session {session}
              </span>
            </div>

            {/* MEMORY NODES */}
            <div className="space-y-3 min-h-[160px]">
              <AnimatePresence>
                {!isReset &&
                  memory.map((m, i) => (
                    <motion.div
                      key={m}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, scale: 0.95 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                      <span className="text-sm text-white/80">{m}</span>
                    </motion.div>
                  ))}
              </AnimatePresence>

              {/* RESET STATE */}
              {isReset && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/40 text-sm italic"
                >
                  Memory wiped. Agent restarted.
                </motion.div>
              )}
            </div>
          </div>

          {/* RIGHT: EXPLANATION */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-medium"
            >
              Context disappears between sessions
            </motion.h3>

            <p className="mt-4 text-white/60 leading-relaxed">
              AI agents today do not maintain persistent state.
              Every interaction is isolated — meaning decisions, preferences,
              and learned context are lost instantly after session ends.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/50">
              <div>• No persistent memory layer</div>
              <div>• No state continuity across sessions</div>
              <div>• No evolution of agent behavior</div>
            </div>

            <div className="mt-8 text-cyan-300 text-sm">
              → This is where Abraham Memory begins.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
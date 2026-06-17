"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { Button } from "@/components/ui/button"
import { Brain, Save, Sparkles, Check } from "lucide-react"

export function MemoryDemo() {
  const [memory, setMemory] = useState("")
  const [input, setInput] = useState("My favorite color is blue.")
  const [saved, setSaved] = useState(false)
  const [answer, setAnswer] = useState<string | null>(null)
  const [thinking, setThinking] = useState(false)

  const handleSave = () => {
    if (!input.trim()) return
    setMemory(input.trim())
    setSaved(true)
    setAnswer(null)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleAsk = () => {
    setThinking(true)
    setAnswer(null)
    setTimeout(() => {
      setThinking(false)
      if (!memory) {
        setAnswer("I don't have any memory stored yet. Save a memory first.")
        return
      }
      const match = memory.match(/favorite color is (\w+)/i)
      if (match) setAnswer(`Your favorite color is ${match[1]}.`)
      else setAnswer(`I remember: "${memory}"`)
    }, 900)
  }

  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-card/50">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 py-24 lg:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Live Memory Demo</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              See Memory In Action.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Store a memory, then ask the agent to recall it. This is how persistent memory works under the hood.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-5 md:grid-cols-2">
            {/* Save */}
            <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Save className="size-4 text-primary" /> Step 1 — Store a memory
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-secondary/40 p-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <Button onClick={handleSave} className="mt-3 w-full gap-2 bg-primary text-primary-foreground">
                {saved ? <Check className="size-4" /> : <Save className="size-4" />}
                {saved ? "Memory Saved" : "Save Memory"}
              </Button>
            </div>

            {/* Ask */}
            <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Brain className="size-4 text-primary" /> Step 2 — Ask the agent
              </div>
              <div className="rounded-xl border border-border bg-secondary/40 p-3 text-sm text-foreground">
                What is my favorite color?
              </div>
              <Button onClick={handleAsk} variant="outline" className="mt-3 w-full gap-2 border-border bg-card">
                <Sparkles className="size-4 text-primary" /> Retrieve Memory
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Response */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-5 max-w-3xl rounded-2xl border border-primary/30 bg-gradient-to-br from-secondary/60 to-card p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Agent Response
            </div>
            <p className="text-lg font-medium text-foreground">
              {thinking ? (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  Recalling memory
                  <span className="flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="size-1.5 animate-bounce rounded-full bg-primary"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </span>
                </span>
              ) : answer ? (
                answer
              ) : (
                <span className="text-muted-foreground">Retrieve a memory to see the agent respond.</span>
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

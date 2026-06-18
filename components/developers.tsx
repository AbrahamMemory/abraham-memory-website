"use client"

import { useEffect, useState } from "react"
import { Reveal } from "./reveal"
import { Button } from "@/components/ui/button"
import { Code2, Boxes, Cpu, Search, Layers, BookOpen, Package, FileCode } from "lucide-react"

const FEATURES = [
  { icon: Code2, title: "Memory API", desc: "REST & streaming endpoints for store and recall." },
  { icon: Boxes, title: "Agent SDK", desc: "Drop-in memory for any agent framework." },
  { icon: Cpu, title: "Vector Memory Engine", desc: "High-recall semantic embeddings." },
  { icon: Search, title: "Retrieval System", desc: "Sub-100ms relevant memory lookup." },
  { icon: Layers, title: "Context Layer", desc: "Automatic context injection at runtime." },
]

const CODE_LINES = [
  { t: "import", k: "import", rest: " { AbrahamMemory } from '@abraham/sdk'" },
  { t: "blank", rest: "" },
  { t: "code", rest: "const memory = new AbrahamMemory({ agentId })" },
  { t: "blank", rest: "" },
  { t: "comment", rest: "// store a memory" },
  { t: "code", rest: "await memory.store('User prefers concise answers')" },
  { t: "blank", rest: "" },
  { t: "comment", rest: "// recall relevant context" },
  { t: "code", rest: "const ctx = await memory.recall('user preferences')" },
  { t: "code", rest: "// → ['User prefers concise answers']" },
]

export function Developers() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible((v) => (v >= CODE_LINES.length ? 0 : v + 1))
    }, 600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="developers" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 lg:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Developers</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Build Agents That Remember.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-xl border border-border/70 bg-card p-4 shadow-sm transition hover:border-primary/30">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight text-foreground">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap gap-2">
              <Button className="gap-2 bg-primary text-primary-foreground">
                <BookOpen className="size-4" /> Documentation
              </Button>
              <Button variant="outline" className="gap-2 border-border bg-card">
                <FileCode className="size-4" /> "GitHub" , href: "https://github.com/AbrahamMemory"
              </Button>
              <Button variant="outline" className="gap-2 border-border bg-card">
                <Package className="size-4" /> SDK
              </Button>
              <Button variant="outline" className="gap-2 border-border bg-card">
                <FileCode className="size-4" /> API Reference
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-[#0f172a] shadow-[0_30px_70px_-30px_rgba(15,23,42,0.6)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="size-3 rounded-full bg-[#ef4444]/80" />
              <span className="size-3 rounded-full bg-[#f59e0b]/80" />
              <span className="size-3 rounded-full bg-[#22c55e]/80" />
              <span className="ml-3 text-xs font-medium text-white/50">agent.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                {CODE_LINES.slice(0, visible).map((line, i) => (
                  <div key={i} className="min-h-[1.4em]">
                    {line.t === "import" && (
                      <>
                        <span className="text-[#c084fc]">import</span>
                        <span className="text-[#7dd3fc]">{line.rest}</span>
                      </>
                    )}
                    {line.t === "comment" && <span className="text-white/40">{line.rest}</span>}
                    {line.t === "code" && <span className="text-[#e2e8f0]">{line.rest}</span>}
                    {line.t === "blank" && <span>&nbsp;</span>}
                  </div>
                ))}
                <span className="inline-block h-4 w-2 animate-pulse bg-[#38BDF8] align-middle" />
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
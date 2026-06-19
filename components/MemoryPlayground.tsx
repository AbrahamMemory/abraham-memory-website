"use client"

import { useEffect, useState } from "react"

type Memory = {
  id: string
  content: string
  type?: string
  createdAt: number
}

export function MemoryPlayground() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [memories, setMemories] = useState<Memory[]>([])

  // LOAD MEMORY
  async function loadMemories() {
    const res = await fetch("/api/memory?userId=user-1")
    const data = await res.json()
    setMemories(data.memories || [])
  }

  // SAVE MEMORY
  async function saveMemory() {
    if (!input.trim()) return

    setLoading(true)

    const res = await fetch("/api/memory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "user-1",
        content: input,
        type: "note",
      }),
    })

    const data = await res.json()

    setMemories((prev) => [data.memory, ...prev])
    setInput("")
    setLoading(false)
  }

  useEffect(() => {
    loadMemories()
  }, [])

  return (
    <section className="relative mx-auto max-w-4xl px-4 py-16">

      {/* HEADER */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          AI Memory Playground
        </h2>
        <p className="text-sm text-muted-foreground">
          Store and retrieve agent memory in real time
        </p>
      </div>

      {/* INPUT CARD */}
      <div className="rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a memory for AI agent..."
          className="h-24 w-full resize-none rounded-lg border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
        />

        <div className="mt-3 flex justify-end">
          <button
            onClick={saveMemory}
            disabled={loading}
            className="rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Memory"}
          </button>
        </div>
      </div>

      {/* MEMORY FEED */}
      <div className="mt-8 space-y-3">
        {memories.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground">
            No memories yet. Start writing one above.
          </div>
        ) : (
          memories.map((m) => (
            <div
              key={m.id}
              className="rounded-xl border bg-white/40 p-4 backdrop-blur transition hover:bg-white/60"
            >
              <p className="text-sm">{m.content}</p>

              <div className="mt-2 text-xs text-muted-foreground">
                {new Date(m.createdAt).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>

    </section>
  )
}
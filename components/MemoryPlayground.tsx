"use client"

import { useEffect, useState } from "react"

type Memory = {
  id: string
  content: string
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

  // ENTER TO SAVE
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      saveMemory()
    }
  }

  // AUTO REFRESH (REAL AI FEEL)
  useEffect(() => {
    loadMemories()

    const interval = setInterval(() => {
      loadMemories()
    }, 5000) // refresh tiap 5 detik

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">

      {/* HEADER */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold">
          AI Memory Playground
        </h2>
        <p className="text-sm text-muted-foreground">
          Real-time memory layer for AI agents
        </p>
      </div>

      {/* INPUT */}
      <div className="rounded-2xl border bg-white/60 p-4 backdrop-blur">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write a memory for AI agent..."
          className="h-24 w-full resize-none rounded-lg border p-3 text-sm outline-none focus:ring-2"
        />

        <div className="mt-3 flex justify-end">
          <button
            onClick={saveMemory}
            disabled={loading}
            className="rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Save Memory"}
          </button>
        </div>
      </div>

      {/* MEMORY LIST */}
      <div className="mt-8 space-y-3">

        {memories.length === 0 ? (
          <div className="rounded-xl border bg-white/40 p-6 text-center text-sm text-muted-foreground">
            No memory yet. AI is waiting for your input.
          </div>
        ) : (
          memories.map((m) => (
            <div
              key={m.id}
              className="rounded-xl border bg-white/40 p-4 transition hover:bg-white/60"
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
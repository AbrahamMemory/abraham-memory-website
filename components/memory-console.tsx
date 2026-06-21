"use client"

import { useState } from "react"

export function MemoryConsole() {
  const [input, setInput] = useState("")
  const [logs, setLogs] = useState<
    { type: "user" | "ai"; text: string }[]
  >([])
  const [loading, setLoading] = useState(false)

  async function sendMessage() {
    if (!input.trim()) return

    const userMessage = input

    // langsung tampilkan user message
    setLogs((prev) => [
      ...prev,
      { type: "user", text: userMessage },
    ])

    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          userId: "user-1",
        }),
      })

      const data = await res.json()

      console.log("API RESPONSE:", data)

      if (!res.ok) {
        throw new Error(data?.error || "API request failed")
      }

      setLogs((prev) => [
        ...prev,
        {
          type: "ai",
          text: data.reply || "No response from AI",
        },
      ])
    } catch (err: any) {
      console.error("SEND MESSAGE ERROR:", err)

      setLogs((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Error: " + err.message,
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-5xl py-16">
      <div className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
          Memory Engine Console (Live OpenAI)
        </div>

        {/* LOG AREA */}
        <div className="h-[320px] overflow-auto space-y-3 rounded-lg border bg-background p-4 text-sm">
          {logs.length === 0 && (
            <p className="text-muted-foreground">
              Start interacting with memory system...
            </p>
          )}

          {logs.map((log, i) => (
            <div key={i}>
              <span className="font-semibold">
                {log.type === "user" ? "You" : "AI"}:
              </span>{" "}
              <span className="text-muted-foreground">
                {log.text}
              </span>
            </div>
          ))}

          {loading && (
            <div className="text-muted-foreground">
              AI is thinking...
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage()
            }}
            placeholder="Type memory input..."
            className="flex-1 rounded-lg border px-3 py-2 text-sm"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-lg bg-primary px-4 py-2 text-sm text-white disabled:opacity-50"
          >
            {loading ? "Processing..." : "Send"}
          </button>
        </div>

        {/* STATUS */}
        <div className="mt-3 text-xs text-muted-foreground">
          Connected to OpenAI • Memory persists in runtime (Phase 1)
        </div>
      </div>
    </section>
  )
}
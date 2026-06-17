import { Reveal } from "./reveal"
import { X, Check } from "lucide-react"

const ROWS = [
  { trad: "Forgets Context", am: "Persistent Context" },
  { trad: "No Identity", am: "Agent Identity" },
  { trad: "No Continuity", am: "Continuous Learning" },
  { trad: "No Shared Knowledge", am: "Cross-Agent Memory" },
  { trad: "No Long-Term Experience", am: "Memory-Based Intelligence" },
]

export function WhyMemory() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Memory Matters</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Intelligence Alone Is Not Enough.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_24px_60px_-30px_rgba(15,23,42,0.25)]">
          <div className="grid grid-cols-2 border-b border-border/70">
            <div className="flex items-center justify-center gap-2 bg-secondary/50 p-5 text-sm font-semibold text-muted-foreground sm:text-base">
              Traditional AI
            </div>
            <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] p-5 text-sm font-semibold text-white sm:text-base">
              Abraham Memory
            </div>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={row.am}
              className={`grid grid-cols-2 ${i !== ROWS.length - 1 ? "border-b border-border/60" : ""}`}
            >
              <div className="flex items-center gap-3 p-5 text-sm text-muted-foreground sm:text-base">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <X className="size-3.5" />
                </span>
                {row.trad}
              </div>
              <div className="flex items-center gap-3 bg-secondary/30 p-5 text-sm font-medium text-foreground sm:text-base">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                {row.am}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

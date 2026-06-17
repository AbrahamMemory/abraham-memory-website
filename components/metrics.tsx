import { Counter } from "./counter"
import { Reveal } from "./reveal"
import { Database, Users, Zap, Activity, Code2 } from "lucide-react"

const METRICS = [
  { icon: Database, label: "Memories Stored", value: 482_193_044, suffix: "" },
  { icon: Users, label: "Active Agents", value: 38_420, suffix: "" },
  { icon: Zap, label: "Memory Requests", value: 1_204_887, suffix: "/day" },
  { icon: Activity, label: "Network Uptime", value: 99.98, suffix: "%", decimals: 2 },
  { icon: Code2, label: "Developer Integrations", value: 2_140, suffix: "+" },
]

export function Metrics() {
  return (
    <section className="relative border-y border-border/70 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <Reveal>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Live Network Metrics
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.45)]">
                <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                  <m.icon className="size-4.5" />
                </div>
                <div className="text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                  <Counter value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

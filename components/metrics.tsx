import { Counter } from "./counter"
import { Reveal } from "./reveal"
import {
  Database,
  Users,
  Zap,
  Activity,
  Code2,
} from "lucide-react"

const METRICS = [
  {
    icon: Database,
    label: "Memory Records",
    value: 1_284_000_000,
    suffix: "+",
  },
  {
    icon: Users,
    label: "Active Sessions",
    value: 84_000,
    suffix: "+",
  },
  {
    icon: Zap,
    label: "Daily Retrievals",
    value: 3_400_000,
    suffix: "+",
  },
  {
    icon: Activity,
    label: "Retrieval Accuracy",
    value: 99.98,
    suffix: "%",
    decimals: 2,
  },
  {
    icon: Code2,
    label: "Developer Integrations",
    value: 2_140,
    suffix: "+",
  },
]

export function Metrics() {
  return (
    <section className="relative border-y border-border/70 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">

        <Reveal>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            MEMORY INFRASTRUCTURE METRICS
          </p>

          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            The Foundation of Persistent AI Memory
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Abraham Memory enables persistent context, identity continuity,
            and scalable memory retrieval across AI interactions.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {METRICS.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.45)]">

                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <metric.icon className="size-5" />
                </div>

                <div className="text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                  <Counter
                    value={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.decimals ?? 0}
                  />
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
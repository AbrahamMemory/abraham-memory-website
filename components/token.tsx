import { Reveal } from "./reveal"
import { Database, Search, UserPlus, Crown, Vote, Gift } from "lucide-react"

const UTILITY = [
  { icon: Database, title: "Memory Storage", desc: "Pay to persist agent memories on the protocol." },
  { icon: Search, title: "Memory Retrieval", desc: "Settle recall and query operations." },
  { icon: UserPlus, title: "Agent Registration", desc: "Register and verify agent identities." },
  { icon: Crown, title: "Premium Features", desc: "Unlock advanced memory capabilities." },
  { icon: Vote, title: "Governance", desc: "Shape the future of the protocol." },
  { icon: Gift, title: "Protocol Incentives", desc: "Reward network contributors and builders." },
]

export function Token() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Protocol Token</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The Abraham Token
          </h2>
          <p className="mt-5 text-muted-foreground">
            The utility token that powers memory operations, agent identity, and governance across the network.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {UTILITY.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.06}>
            <div className="group flex h-full items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_44px_-20px_rgba(37,99,235,0.45)]">
              <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white">
                <u.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-foreground">{u.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{u.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { Counter } from "./counter"
import { Button } from "@/components/ui/button"
import { Wallet, Check, ArrowRight } from "lucide-react"

const STATS = [
  { label: "Community Members", value: 124_300, suffix: "+" },
  { label: "Waitlist Count", value: 41_820, suffix: "" },
  { label: "Developer Signups", value: 6_740, suffix: "" },
]

export function Community() {
  const [email, setEmail] = useState("")
  const [wallet, setWallet] = useState("")
  const [done, setDone] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
  }

  return (
    <section id="community" className="relative scroll-mt-24 overflow-hidden border-y border-border/70 bg-card/50">
      <div className="pointer-events-none absolute inset-0 mesh-bg" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 py-24 lg:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Community</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Become An Early Believer.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Join thousands building the memory layer for AI agents. Get early access to the protocol.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-border/70 bg-card p-7 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.3)]">
            {done ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">You&apos;re on the list.</h3>
                <p className="text-muted-foreground">
                  Welcome to the future of AI memory. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@protocol.ai"
                    className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="wallet" className="mb-1.5 block text-sm font-medium text-foreground">
                    Wallet Address <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="wallet"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                    placeholder="0x..."
                    className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 font-mono text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                  <Button type="submit" className="flex-1 gap-2 bg-primary text-primary-foreground">
                    Join Waitlist <ArrowRight className="size-4" />
                  </Button>
                  <Button
  type="button"
  variant="outline"
  className="gap-2 border-border bg-card"
  onClick={() =>
    window.open(
      "https://x.com/AbrahamMemory",
      "_blank",
      "noopener,noreferrer"
    )
  }
>
  Follow on X
</Button>
                  <Button type="button" variant="outline" className="gap-2 border-border bg-card">
                    <Wallet className="size-4" /> Connect
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.2 + i * 0.08}>
              <div className="rounded-2xl border border-border/70 bg-card p-5 text-center shadow-sm">
                <div className="text-2xl font-semibold tracking-tight text-foreground">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

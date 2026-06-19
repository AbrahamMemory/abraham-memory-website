import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ModelLayer } from "@/components/modellayer"
import { SystemFlow } from "@/components/systemflow"
import { MemoryState } from "@/components/memory-state"
import { MemoryLifecycle } from "@/components/memory-lifecycle"
import { Metrics } from "@/components/metrics"
import { WhyMemory } from "@/components/why-memory"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { MemoryDemo } from "@/components/memory-demo"
import { Architecture } from "@/components/architecture"
import { Ecosystem } from "@/components/ecosystem"
import { Developers } from "@/components/developers"
import { Token } from "@/components/token"
import { Vision } from "@/components/vision"
import { Roadmap } from "@/components/roadmap"
import { Community } from "@/components/community"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main className="relative overflow-hidden">

        {/* HERO */}
        <Hero />

        {/* AI MODEL LAYER */}
        <ModelLayer />

        {/* MEMORY CORE */}
        <SystemFlow />
        <MemoryState />

        {/* PROTOCOL METRICS */}
        <Metrics />

        {/* WHY MEMORY */}
        <WhyMemory />
        <Problem />
        <Solution />

        {/* MEMORY DEMONSTRATION */}
        <MemoryLifecycle />

        {/* TECHNICAL ARCHITECTURE */}
        <Architecture />
        <Ecosystem />
        <Developers />

        {/* TOKEN LAYER */}
        <Token />

        {/* LONG TERM VISION */}
        <Vision />
        <Roadmap />

        {/* COMMUNITY */}
        <Community />

      </main>

      <SiteFooter />
    </>
  )
}

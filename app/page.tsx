import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ModelLayer } from "@/components/modellayer"
import { MemoryConsole } from "@/components/memory-console"
import { MemoryState } from "@/components/memory-state"
import { MemoryLifecycle } from "@/components/memory-lifecycle"
import { Metrics } from "@/components/metrics"
import { WhyMemory } from "@/components/why-memory"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { MemoryDemo } from "@/components/memory-demo"
import { Architecture } from "@/components/architecture"
import { OpenInfrastructure } from "@/components/open-infrastructure"
import { Vision } from "@/components/vision"
import { Roadmap } from "@/components/roadmap"
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
        <MemoryConsole />

        {/* MEMORY CORE */}
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
        <OpenInfrastructure />

        {/* LONG TERM VISION */}
        <Vision />
        <Roadmap />


      </main>

      <SiteFooter />
    </>
  )
}

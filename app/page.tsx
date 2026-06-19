import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"

import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"

import { ModelLayer } from "@/components/modellayer"

import { MemoryConsole } from "@/components/memory-console"

import { Metrics } from "@/components/metrics"
import { WhyMemory } from "@/components/why-memory"

import { Architecture } from "@/components/architecture"

import { Vision } from "@/components/vision"
import { Roadmap } from "@/components/roadmap"

import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main className="relative overflow-hidden">

        {/* 1. HERO */}
        <Hero />

        {/* 2. PROBLEM */}
        <Problem />

        {/* 3. SOLUTION */}
        <Solution />

        {/* 4. CORE MEMORY CONCEPT */}
        <section className="py-20">
          <ModelLayer />
        </section>

        {/* 5. LIVE DEMO (MAIN FOCUS) */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <MemoryConsole />
          </div>
        </section>

        {/* 6. PROOF */}
        <Metrics />

        {/* 7. WHY IT MATTERS */}
        <WhyMemory />

        {/* 8. TECHNICAL ARCHITECTURE */}
        <Architecture />

        {/* 9. FUTURE */}
        <Vision />

        {/* 10. ROADMAP */}
        <Roadmap />

      </main>

      <SiteFooter />
    </>
  )
}
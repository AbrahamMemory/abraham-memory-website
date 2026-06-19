import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SystemFlow } from "@/components/systemflow"
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
        <Hero />
        <SystemFlow />
        <Metrics />
        <WhyMemory />
        <Problem />
        <Solution />
        <MemoryDemo />
        <Architecture />
        <Ecosystem />
        <Developers />
        <Token />
        <Vision />
        <Roadmap />
        <Community />
      </main>
      <SiteFooter />
    </>
  )
}

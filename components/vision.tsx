import { Reveal } from "./reveal"

export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-24 overflow-hidden border-y border-border/70 bg-gradient-to-br from-[#2563EB] via-[#3b82f6] to-[#06B6D4]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(40% 40% at 20% 20%, rgba(255,255,255,0.4), transparent), radial-gradient(40% 40% at 80% 80%, rgba(255,255,255,0.25), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-28 text-center lg:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Vision</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            The Future of AI Is Memory.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-pretty text-lg leading-relaxed text-white/90">
            <p>Today AI can think. Tomorrow AI will remember.</p>
            <p>
              The next generation of AI will not be defined by intelligence alone. It will be defined by
              memory, continuity, identity, and experience.
            </p>
            <p className="font-medium text-white">
              Abraham Memory is building the foundation for that future.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

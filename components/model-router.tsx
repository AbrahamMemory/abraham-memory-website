"use client"

export function ModelRouter() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Model Routing
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Route Memory Across Models
          </h2>

          <p className="mt-4 text-muted-foreground">
            Abraham Memory acts as a persistent layer between users,
            memory storage, and language models.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center">

          <div className="rounded-2xl border px-6 py-4">
            User Request
          </div>

          <div className="my-6 h-12 w-px bg-border" />

          <div className="rounded-2xl border border-primary/30 bg-primary/5 px-8 py-5">
            Abraham Memory
          </div>

          <div className="my-6 h-12 w-px bg-border" />

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border px-8 py-5 text-center">
              OpenAI
            </div>

            <div className="rounded-2xl border px-8 py-5 text-center">
              Claude
            </div>

          </div>

          <div className="my-6 h-12 w-px bg-border" />

          <div className="rounded-2xl border px-8 py-5">
            Memory Update
          </div>

        </div>

      </div>
    </section>
  )
}
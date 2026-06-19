"use client"

import { motion } from "framer-motion"
import { Github, FileText, BookOpen } from "lucide-react"

const ITEMS = [
  {
    icon: Github,
    title: "GitHub Organization",
    description:
      "Open-source development, public repositories, and transparent progress.",
    link: "github.com/AbrahamMemory",
  },
  {
    icon: FileText,
    title: "Litepaper",
    description:
      "Protocol vision, architecture, and long-term roadmap.",
    link: "Abraham-Litepaper",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description:
      "Developer resources, integration guides, and future SDK references.",
    link: "abraham-docs",
  },
]

export function OpenInfrastructure() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">

        <div className="text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">
            Open Infrastructure
          </div>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            Built in Public
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Abraham Memory is being developed through open repositories,
            public documentation, and transparent architecture design.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card/60 p-6"
              >
                <Icon className="mb-4 h-8 w-8 text-primary" />

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-5 text-xs text-primary">
                  {item.link}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
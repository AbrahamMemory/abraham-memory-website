"use client"

import { motion } from "framer-motion"
import {
  FolderGit2,
  FileText,
  BookOpen,
} from "lucide-react"

const ITEMS = [
  {
    icon: FolderGit2,
    title: "GitHub Organization",
    description:
      "Open-source development, public repositories, transparent progress, and public collaboration.",
    link: "github.com/AbrahamMemory",
  },
  {
    icon: FileText,
    title: "Litepaper",
    description:
      "Protocol vision, memory architecture, technical direction, and long-term roadmap.",
    link: "Abraham-Litepaper",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description:
      "Developer resources, integration guides, implementation examples, and future SDK references.",
    link: "abraham-docs",
  },
]

export function OpenInfrastructure() {
  return (
    <section id="open-infrastructure" className="py-24">
      <div className="mx-auto max-w-6xl px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Open Infrastructure
          </div>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            Built in Public
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Abraham Memory is being developed through open repositories,
            public documentation, and transparent architecture design.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border/70 bg-card/60 p-6 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-5 text-xs font-medium text-primary">
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
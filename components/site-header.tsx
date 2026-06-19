"use client"

import { useEffect, useState } from "react"
import { Logo } from "./logo"
import { Menu, X, Rocket, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const NAV_ITEMS = [
  { label: "Vision", href: "#vision" },
  { label: "Technology", href: "#technology" },
  { label: "Architecture", href: "#architecture" },
  { label: "Roadmap", href: "#roadmap" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50">

      {/* ANNOUNCEMENT BAR */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#06B6D4] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-center text-xs font-medium sm:text-sm">

          <Rocket className="hidden size-4 shrink-0 sm:block" />

          <span className="text-balance">
            Building the Memory Layer for AI Agents
          </span>

          <a
            href="https://github.com/AbrahamMemory"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur transition hover:bg-white/30 sm:inline-block"
          >
            GitHub
          </a>

        </div>
      </div>

      {/* HEADER */}
      <header
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "glass-strong border-border/70 shadow-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">

          {/* LOGO */}
          <Link href="#top" className="flex items-center">
            <Logo />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 lg:flex">

            {/* X */}
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://x.com/abraham_memoryz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on X
              </a>
            </Button>

            {/* GITHUB FIXED ICON */}
            <Button size="sm" asChild>
              <a
                href="https://github.com/AbrahamMemory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>

          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t border-border/70 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}

              <Button variant="outline" className="w-full" asChild>
                <a
                  href="https://x.com/abraham_memoryz"
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  Follow on X
                </a>
              </Button>

              <Button className="w-full" asChild>
                <a
                  href="https://github.com/AbrahamMemory"
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>

            </div>
          </div>
        )}

      </header>
    </div>
  )
}
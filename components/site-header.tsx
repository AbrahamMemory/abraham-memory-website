"use client"

import { useEffect, useState } from "react"
import { Logo } from "./logo"
import { Menu, X, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const NAV_ITEMS = [
  { label: "Vision", href: "#vision" },
  { label: "Technology", href: "#technology" },
  { label: "Architecture", href: "#architecture" },
  { label: "Roadmap", href: "#roadmap" },
]

/* =========================
   ICONS (SAFE SVG)
========================= */

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 1.8.8 2.2.9.6 2.2.4 2.8.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.3 5.6 18.3.5 12 .5z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M18.244 2h3.256l-7.62 8.7L23 22h-6.93l-5.4-6.9L4.7 22H1.44l8.13-9.3L1 2h7.05l4.9 6.26L18.244 2zm-1.21 18h1.88L6.18 3.98H4.2L17.034 20z"/>
    </svg>
  )
}

/* =========================
   COMPONENT
========================= */

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

      {/* TOP BANNER */}
      <div className="bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#06B6D4] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-xs sm:text-sm">

          <Rocket className="hidden h-4 w-4 sm:block" />

          <span className="text-center">
            Building the Memory Layer for AI Agents
          </span>

        </div>
      </div>

      {/* HEADER */}
      <header
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur border-border"
            : "bg-transparent border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

          {/* LOGO */}
          <Link href="#top" className="flex items-center">
            <Logo />
          </Link>

          {/* NAV */}
          <div className="hidden gap-2 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="hidden items-center gap-2 lg:flex">

            {/* X BUTTON */}
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://x.com/abraham_memoryz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-black hover:text-white transition"
              >
                <XIcon />
                Follow on X
              </a>
            </Button>

            {/* GITHUB BUTTON */}
            <Button size="sm" asChild>
              <a
                href="https://github.com/AbrahamMemory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <GitHubIcon />
                GitHub
              </a>
            </Button>

          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t lg:hidden">
            <div className="flex flex-col gap-2 p-4">

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* X MOBILE */}
              <a
                href="https://x.com/abraham_memoryz"
                className="flex items-center justify-center gap-2 rounded border px-3 py-2 text-sm hover:bg-black hover:text-white transition"
              >
                <XIcon />
                Follow on X
              </a>

              {/* GITHUB MOBILE */}
              <a
                href="https://github.com/AbrahamMemory"
                className="flex items-center justify-center gap-2 rounded bg-black px-3 py-2 text-sm text-white"
                onClick={() => setOpen(false)}
              >
                <GitHubIcon />
                GitHub
              </a>

            </div>
          </div>
        )}

      </header>
    </div>
  )
}
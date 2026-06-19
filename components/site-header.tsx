"use client"

import { useEffect, useState } from "react"
import { Logo } from "./logo"
import { Menu, X, Rocket, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      {/* Announcement bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#06B6D4] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-center text-xs font-medium sm:text-sm">
          <Rocket className="hidden size-4 shrink-0 sm:block" />
          <span className="text-balance">
            Building the Memory Layer for AI Agents — Early Access Now Open
          </span>
          <a
            href="#community"
            className="hidden shrink-0 rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur transition hover:bg-white/30 sm:inline-block"
          >
            Join Waitlist
          </a>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`border-b transition-all duration-300 ${scrolled ? "glass-strong border-border/70 shadow-sm" : "border-transparent bg-transparent"
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <a href="#top" aria-label="Abraham Memory home">
            <Logo />
          </a>

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

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              variant="outline"
              size="sm"
              className="border-border bg-card hover:bg-secondary"
              nativeButton={false}
              render={
                <a
                  href="https://x.com/Abraham_Memoryz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on X
                </a>
              }
            />
            <Button
              size="sm"
              className="bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] transition hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.7)]"
              nativeButton={false}
              render={<a href="#community">Join Waitlist</a>}
            />
          </div>

          <button
            className="inline-flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="glass-strong border-t border-border/70 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button variant="outline" className="w-full gap-2">
                  <Wallet className="size-4" /> Connect Wallet
                </Button>
                <Button
                  className="w-full bg-primary text-primary-foreground"
                  nativeButton={false}
                  render={
                    <a href="#community" onClick={() => setOpen(false)}>
                      Join Waitlist
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

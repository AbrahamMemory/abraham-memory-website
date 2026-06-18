import { Logo } from "./logo"

// Update LINKS dengan URL yang benar
const LINKS = [
  { label: "X", href: "https://x.com/Abraham_Memoryz" },
  { label: "GitHub", href: "https://github.com/AbrahamMemory" },
  { label: "Documentation", href: "#docs" },
  { label: "Litepaper", href: "#litepaper" },
  { label: "Community", href: "#community" },
  { label: "Newsletter", href: "#newsletter" },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="scale-150">
            <Logo />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "X" || link.label === "GitHub" ? "_blank" : undefined}
                rel={link.label === "X" || link.label === "GitHub" ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-border to-transparent" />

          <p className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            &ldquo;Intelligence Decides. <span className="text-gradient">Memory Defines.</span>&rdquo;
          </p>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Abraham Memory. The Memory Layer for AI Agents.
          </p>
        </div>
      </div>
    </footer>
  )
}
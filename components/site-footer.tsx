import { Logo } from "./logo"

const LINKS = ["X", "GitHub", "Documentation", "Litepaper", "Community", "Newsletter"]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="scale-150">
            <Logo />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {l}
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

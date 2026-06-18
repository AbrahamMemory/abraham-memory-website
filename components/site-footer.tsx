import { Logo } from "./logo"
import { Github, X } from "lucide-react" // Import ikon

// Update LINKS - pisahkan menjadi navigation links
const NAV_LINKS = ["Documentation", "Litepaper", "Community", "Newsletter"]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="scale-150">
            <Logo />
          </div>

          {/* Navigation links - tanpa X dan GitHub */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Social Media Links - GitHub dan X dengan ikon */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AbrahamMemory"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://x.com/Abraham_Memoryz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              aria-label="X (Twitter)"
            >
              <X className="size-5" />
            </a>
          </div>

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
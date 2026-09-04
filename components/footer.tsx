import { GitHubIcon } from "@/components/icon/GitHub"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">
            <span className="text-coral">crom</span>
          </p>
          <a
            href="https://github.com/fiqriPram/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/60"
          >
            <GitHubIcon className="size-4" aria-hidden="true" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          Not affiliated with any project. All trademarks belong to their respective owners.
        </p>
      </div>
    </footer>
  )
}

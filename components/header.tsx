"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark")
  }, [])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light")
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="text-coral">crom</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">Directory</span>
        </Link>

        <div className="flex items-center gap-3">
          {pathname !== "/" && (
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All entries
            </Link>
          )}
          <button
            onClick={toggleTheme}
            className="flex size-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0Zm0 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06Zm9.193 9.193a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.06-1.06a.75.75 0 0 1 0-1.061ZM16 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm10.657-5.657a.75.75 0 0 1 0 1.061l-1.061 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M6 .75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5A.75.75 0 0 1 6 .75Zm5 2.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3.25a.75.75 0 0 1 .75-.75ZM6 10.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm5-2.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM3.5 5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm5 3a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0V8.5ZM2.75 7.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Zm8 0a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

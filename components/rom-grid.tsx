"use client"

import { useMemo, useState } from "react"
import { roms } from "@/lib/roms"
import { RomCard } from "@/components/rom-card"

type Filter = "all" | "rom" | "os"
type Sort = "name-asc" | "name-desc"

export function RomGrid() {
  const [filter, setFilter] = useState<Filter>("all")
  const [sort, setSort] = useState<Sort>("name-asc")

  const items = useMemo(() => {
    let list = roms
    if (filter !== "all") {
      list = list.filter((rom) => rom.type === filter)
    }
    return [...list].sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name)
      return b.name.localeCompare(a.name)
    })
  }, [filter, sort])

  const counts = useMemo(
    () => ({
      all: roms.length,
      rom: roms.filter((r) => r.type === "rom").length,
      os: roms.filter((r) => r.type === "os").length,
    }),
    []
  )

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: `All (${counts.all})` },
    { key: "rom", label: `ROM (${counts.rom})` },
    { key: "os", label: `OS (${counts.os})` },
  ]

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
          Browse by ROM
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Choose your <span className="text-coral">ROM</span>
        </h2>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-coral text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort</span>
          <button
            onClick={() =>
              setSort((s) => (s === "name-asc" ? "name-desc" : "name-asc"))
            }
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            Name
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className={`size-3 transition-transform ${sort === "name-desc" ? "rotate-180" : ""}`}
            >
              <path d="M8 2.75a.75.75 0 0 1 .53.22l4.25 4.25a.75.75 0 0 1-1.06 1.06L8.75 5.06v8.19a.75.75 0 0 1-1.5 0V5.06L5.28 8.28a.75.75 0 1 1-1.06-1.06l4.25-4.25a.75.75 0 0 1 .53-.22Z" />
            </svg>
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No entries in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((rom, i) => (
            <RomCard key={rom.slug} rom={rom} index={i} />
          ))}
        </div>
      )}
    </section>
  )
}

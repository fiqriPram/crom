"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { CromGrid } from "@/components/crom-grid"

export type Filter = "all" | "rom" | "os"

export default function Home() {
  const [filter, setFilter] = useState<Filter>("all")

  return (
    <div className="flex flex-col flex-1">
      <Hero filter={filter} />
      <CromGrid filter={filter} onFilterChange={setFilter} />
    </div>
  )
}

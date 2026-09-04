"use client"

import { roms } from "@/lib/roms"
import { RomCard } from "@/components/rom-card"

export function RomGrid() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {roms.map((rom, i) => (
        <RomCard key={rom.slug} rom={rom} index={i} />
      ))}
    </section>
  )
}

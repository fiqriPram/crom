import { Hero } from "@/components/hero"
import { RomGrid } from "@/components/rom-grid"

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <RomGrid />
    </div>
  )
}

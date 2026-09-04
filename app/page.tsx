import { Hero } from "@/components/hero"
import { CromGrid } from "@/components/crom-grid"

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <CromGrid />
    </div>
  )
}

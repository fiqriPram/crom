import { roms } from "@/lib/croms"
import type { Filter } from "@/app/page"

interface HeroProps {
  filter: Filter
}

export function Hero({ filter }: HeroProps) {
  const count =
    filter === "all" ? roms.length : roms.filter((r) => r.type === filter).length

  return (
    <section className="flex flex-col items-center gap-6 px-6 pt-24 pb-16 text-center sm:pt-32">
      <div className="animate-fade-in-up">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom <span className="text-coral">crom</span> Directory
        </h1>
      </div>
      <div className="animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:both]">
        <p className="max-w-lg text-lg text-muted-foreground">
          Discover a directory of custom ROMs, operating systems, and tools
          to boost performance, privacy, and customization on your device.
        </p>
      </div>
      <div className="animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:both]">
        <p className="text-sm text-muted-foreground/60">
          {count} entries available
        </p>
      </div>
    </section>
  )
}

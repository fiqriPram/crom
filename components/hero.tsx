import { roms } from "@/lib/croms"
import type { Filter } from "@/app/page"

interface HeroProps {
  filter: Filter
}

export function Hero({ filter }: HeroProps) {
  const count =
    filter === "all" ? roms.length : roms.filter((r) => r.type === filter).length

  return (
    <section className="relative flex flex-col items-center gap-5 px-6 pt-28 pb-14 text-center sm:pt-36 sm:pb-20">
      <div className="animate-fade-in-up space-y-4">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom <span className="text-coral">crom</span> Directory
        </h1>
        <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
          Discover a directory of custom ROMs, operating systems, and tools to
          boost performance, privacy, and customization on your device.
        </p>
      </div>
      <div className="animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:both]">
        <p className="text-xs text-muted-foreground/60">
          {count} {count === 1 ? "entry" : "entries"} available
        </p>
      </div>
    </section>
  )
}

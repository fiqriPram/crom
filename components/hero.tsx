import { roms } from "@/lib/roms"

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 px-6 pt-24 pb-16 text-center sm:pt-32">
      <div className="animate-fade-in-up">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom Android <span className="text-coral">ROM</span> Directory
        </h1>
      </div>
      <div className="animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:both]">
        <p className="max-w-lg text-lg text-muted-foreground">
          Discover the best custom Android ROMs to improve performance,
          privacy, and customization on your device.
        </p>
      </div>
      <div className="animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:both]">
        <p className="text-sm text-muted-foreground/60">
          {roms.length} ROMs available
        </p>
      </div>
    </section>
  )
}

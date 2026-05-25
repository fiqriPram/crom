import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const roms = [
  {
    name: "crDroid",
    tagline: "increase performance and reliability over stock Android",
    description:
      "crDroid is a custom ROM based on LineageOS that aims to improve the performance, reliability and customizability of your Android device. It comes with lots of customization options without compromising on performance or security.",
    features: [
      "Status Bar & Quick Settings customization",
      "Lock screen personalization",
      "Gesture & button navigation options",
      "Dark mode & UI color theming",
      "Notification & sound behavior control",
      "Game mode, smart charging, pocket detection",
    ],
    color: "text-coral",
    bgColor: "bg-coral/10",
    borderColor: "border-coral/20",
    url: "https://crdroid.net/",
    thumbnail: (
      <svg viewBox="0 0 80 80" fill="none" className="size-20">
        <circle cx="40" cy="40" r="34" fill="currentColor" className="text-coral/10" />
        <circle cx="40" cy="40" r="34" stroke="currentColor" className="text-coral/30" strokeWidth="2" />
        <path
          d="M28 36c0-6.627 5.373-12 12-12s12 5.373 12 12v2c0 6.627-5.373 12-12 12s-12-5.373-12-12v-2Z"
          fill="currentColor"
          className="text-coral/20"
        />
        <circle cx="40" cy="38" r="8" fill="currentColor" className="text-coral/50" />
        <circle cx="40" cy="38" r="4" fill="currentColor" className="text-coral" />
        <path
          d="M30 58c0-5.523 4.477-10 10-10s10 4.477 10 10"
          stroke="currentColor"
          className="text-coral/40"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "LineageOS",
    tagline: "A free and open-source operating system for various devices",
    description:
      "LineageOS is a free and open-source operating system for various devices, based on the Android mobile platform. It extends the functionality and lifespan of mobile devices from more than 20 different manufacturers thanks to its open-source community.",
    features: [
      "User personalization & preference focus",
      "Monthly security updates to every device",
      "Trust system for device security monitoring",
      "Extended device lifespan (20+ manufacturers)",
      "Open-source apps & Unix command-line utilities",
      "Enhanced dev tools & debugging capabilities",
    ],
    color: "text-zen-blue",
    bgColor: "bg-zen-blue/10",
    borderColor: "border-zen-blue/20",
    url: "https://lineageos.org/",
    thumbnail: (
      <svg viewBox="0 0 80 80" fill="none" className="size-20">
        <circle cx="40" cy="40" r="34" fill="currentColor" className="text-zen-blue/10" />
        <circle cx="40" cy="40" r="34" stroke="currentColor" className="text-zen-blue/30" strokeWidth="2" />
        <path
          d="M56 36c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16"
          stroke="currentColor"
          className="text-zen-blue/50"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M56 36h-8l4-6 4 6Z"
          fill="currentColor"
          className="text-zen-blue"
        />
        <circle cx="32" cy="36" r="3" fill="currentColor" className="text-zen-blue/60" />
        <circle cx="48" cy="36" r="3" fill="currentColor" className="text-zen-blue/60" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <section className="flex flex-col items-center gap-6 px-6 pt-24 pb-16 text-center sm:pt-32">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom Android <span className="text-coral">ROM</span> Directory
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Discover the best custom Android ROMs to improve performance,
          privacy, and customization on your device.
        </p>
      </section>

      <section className="flex flex-col items-center gap-16 px-6 pb-24">
        {roms.map((rom, i) => (
          <Card
            key={rom.name}
            className={`w-full max-w-4xl overflow-hidden border-2 ${rom.borderColor}`}
          >
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
              <div className={`flex shrink-0 items-center justify-center rounded-2xl ${rom.bgColor} p-4`}>
                {rom.thumbnail}
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <h2 className={`text-3xl font-semibold tracking-tight ${rom.color}`}>
                    {rom.name}
                  </h2>
                  <p className="mt-1 text-base text-muted-foreground">
                    {rom.tagline}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {rom.description}
                </p>
                <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {rom.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <svg
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className={`size-4 shrink-0 ${rom.color}`}
                      >
                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM6.75 11.5l-3-3L5 7.25l1.75 1.75L11 4.5l1.25 1.25-5.5 5.75Z" />
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2">
                  <a href={rom.url} target="_blank" rel="noopener noreferrer">
                    <Button variant={i === 0 ? "default" : "outline"}>
                      Visit {rom.name}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  )
}

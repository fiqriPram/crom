"use client"

import Link from "next/link"
import { roms } from "@/lib/roms"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
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

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {roms.map((rom, i) => (
          <Link key={rom.slug} href={`/roms/${rom.slug}`}>
            <Card
              className={`group flex cursor-pointer flex-col border-2 ring-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-2 ${rom.borderColor} ${rom.ringColor} h-72 animate-fade-in-up`}
              style={{ animationDelay: `${300 + i * 40}ms` }}
            >
              <CardHeader className="items-center gap-3 pt-6 text-center">
                <div
                  className={`flex items-center justify-center rounded-2xl ${rom.bgColor} p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm`}
                >
                  {rom.thumbnail}
                </div>
                <CardTitle className={`text-xl leading-tight ${rom.color}`}>
                  {rom.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 text-center">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {rom.tagline}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  )
}

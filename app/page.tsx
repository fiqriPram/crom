"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { roms } from "@/lib/roms"

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

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {roms.map((rom) => (
          <Link key={rom.slug} href={`/roms/${rom.slug}`}>
            <Card
              className={`flex aspect-square cursor-pointer flex-col border-2 transition-all hover:ring-2 ${rom.borderColor} ${rom.color}/20`}
            >
              <CardHeader className="items-center gap-4 pt-8 text-center">
                <div className={`flex items-center justify-center rounded-2xl ${rom.bgColor} p-4`}>
                  {rom.thumbnail}
                </div>
                <CardTitle className={`text-2xl ${rom.color}`}>
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

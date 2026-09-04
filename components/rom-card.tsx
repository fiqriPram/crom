"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Rom } from "@/lib/roms"

interface RomCardProps {
  rom: Rom
  index: number
}

export function RomCard({ rom, index }: RomCardProps) {
  return (
    <Link href={`/roms/${rom.slug}`}>
      <Card
        className={`group flex cursor-pointer flex-col border-2 ring-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-2 ${rom.borderColor} ${rom.ringColor} h-72 animate-fade-in-up`}
        style={{ animationDelay: `${300 + index * 40}ms` }}
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
  )
}

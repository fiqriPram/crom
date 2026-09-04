"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Rom } from "@/lib/croms"

interface CromCardProps {
  rom: Rom
  index: number
}

export function CromCard({ rom, index }: CromCardProps) {
  return (
    <Link href={`/crom/${rom.slug}`}>
      <Card
        className={`group relative flex cursor-pointer flex-col overflow-hidden border-2 ring-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-2 ${rom.borderColor} ${rom.ringColor} h-72 animate-fade-in-up`}
        style={{ animationDelay: `${300 + index * 40}ms` }}
      >
        <div
          className={`absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${rom.bgColor}`}
        />
        <CardHeader className="justify-items-center items-center gap-3 pt-8 text-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.06] bg-[#1d1d1d] transition-transform duration-300 group-hover:scale-105">
            <img
              src={rom.icon}
              alt={`${rom.name} logo`}
              className="block h-9 w-9 object-contain"
              loading="lazy"
            />
          </div>
          <CardTitle className={`text-xl leading-tight ${rom.color}`}>
            {rom.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {rom.tagline}
          </p>
          <span
            className={`mt-4 inline-flex items-center gap-1 text-xs font-medium ${rom.color} opacity-0 transition-all duration-300 group-hover:opacity-100`}
          >
            View ROMs
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-3 transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

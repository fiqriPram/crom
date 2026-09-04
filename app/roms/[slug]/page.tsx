import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getRom, roms } from "@/lib/roms"

export function generateStaticParams() {
  return roms.map((rom) => ({ slug: rom.slug }))
}

export default async function RomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const rom = getRom(slug)
  if (!rom) notFound()

  return (
    <div className="flex flex-col flex-1">
      <section className="flex flex-col items-center gap-6 px-6 pt-24 pb-16 text-center sm:pt-32">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/[0.06] bg-[#1d1d1d] transition-transform duration-300 hover:scale-105">
          <img
            src={rom.icon}
            alt={`${rom.name} logo`}
            className="block h-14 w-14 object-contain"
          />
        </div>
        <h1 className={`text-4xl font-semibold tracking-tight sm:text-5xl ${rom.color}`}>
          {rom.name}
        </h1>
        <p className="max-w-md text-sm text-muted-foreground italic">
          {rom.tagline}
        </p>
        <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
          {rom.description}
        </p>
        <div className="flex gap-3 pt-2">
          <a href={rom.url} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              Visit {rom.name}
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </Button>
          </a>
          <Link href="/">
            <Button variant="outline" size="lg">
              Back
            </Button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 px-6 pb-24">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 lg:grid-cols-2">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className={`text-lg ${rom.color}`}>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {rom.longDescription}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className={`text-lg ${rom.color}`}>Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {rom.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className={`mt-0.5 size-4 shrink-0 ${rom.color}`}
                    >
                      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM6.75 11.5l-3-3L5 7.25l1.75 1.75L11 4.5l1.25 1.25-5.5 5.75Z" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full max-w-4xl border-2">
          <CardHeader>
            <CardTitle className={`text-lg ${rom.color}`}>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {rom.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm">
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
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

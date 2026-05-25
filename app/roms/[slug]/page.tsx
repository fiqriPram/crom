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
        <div className={`flex items-center justify-center rounded-2xl ${rom.bgColor} p-4`}>
          <svg viewBox="0 0 64 64" fill="none" className="size-20">
            <circle cx="32" cy="32" r="28" stroke="currentColor" className={`${rom.color}/30`} strokeWidth="1.5" />
            {rom.slug === "crdroid" && (
              <>
                <path d="M22 30c0-5.523 4.477-10 10-10s10 4.477 10 10v1c0 5.523-4.477 10-10 10s-10-4.477-10-10v-1Z" fill="currentColor" className={`${rom.color}/20`} />
                <circle cx="32" cy="31" r="6" fill="currentColor" className={`${rom.color}/50`} />
                <circle cx="32" cy="31" r="3" fill="currentColor" />
              </>
            )}
            {rom.slug === "lineageos" && (
              <>
                <path d="M46 30c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14" stroke="currentColor" className={`${rom.color}/50`} strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M46 30h-7l3.5-5 3.5 5Z" fill="currentColor" />
                <circle cx="26" cy="30" r="2.5" fill="currentColor" className={`${rom.color}/60`} />
                <circle cx="38" cy="30" r="2.5" fill="currentColor" className={`${rom.color}/60`} />
              </>
            )}
            {rom.slug === "evolution-x" && (
              <>
                <path d="M22 22h20v14c0 5.523-4.477 10-10 10s-10-4.477-10-10V22Z" fill="currentColor" className={`${rom.color}/20`} />
                <path d="M22 28h20" stroke="currentColor" className={`${rom.color}/50`} strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="40" r="4" fill="currentColor" className={`${rom.color}/40`} />
                <path d="M28 44c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
            {rom.slug === "pixel-experience" && (
              <>
                <rect x="20" y="18" width="24" height="28" rx="5" fill="currentColor" className={`${rom.color}/20`} />
                <circle cx="32" cy="30" r="5" fill="currentColor" className={`${rom.color}/40`} />
                <path d="M26 42c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" className={`${rom.color}/60`} strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="38" cy="24" r="2" fill="currentColor" className={`${rom.color}/30`} />
              </>
            )}
            {rom.slug === "pixelos" && (
              <>
                <path d="M20 28h24l-4-8H24l-4 8Z" fill="currentColor" className={`${rom.color}/20`} />
                <path d="M20 28v10c0 3.314 2.686 6 6 6h12c3.314 0 6-2.686 6-6V28" fill="currentColor" className={`${rom.color}/20`} />
                <path d="M20 28h24" stroke="currentColor" className={`${rom.color}/50`} strokeWidth="1.5" />
                <circle cx="32" cy="34" r="4" fill="currentColor" className={`${rom.color}/40`} />
                <path d="M28 40c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" className={`${rom.color}/60`} strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
            {rom.slug === "nusantara" && (
              <>
                <path d="M20 22h24v20c0 5.523-4.477 10-10 10H30c-5.523 0-10-4.477-10-10V22Z" fill="currentColor" className={`${rom.color}/20`} />
                <path d="M24 28h16M24 34h16M24 40h8" stroke="currentColor" className={`${rom.color}/50`} strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="44" cy="26" r="3" fill="currentColor" className={`${rom.color}/40`} />
              </>
            )}
            {rom.slug === "project-elixir" && (
              <>
                <path d="M24 18c-4.418 0-8 3.582-8 8v12c0 4.418 3.582 8 8 8h16c4.418 0 8-3.582 8-8V26c0-4.418-3.582-8-8-8H24Z" fill="currentColor" className={`${rom.color}/20`} />
                <path d="M28 32l3 3 6-6" stroke="currentColor" className={`${rom.color}/50`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="44" cy="24" r="3" fill="currentColor" className={`${rom.color}/40`} />
                <path d="M22 40c0-1.5 1.5-3 3-3h14c1.5 0 3 1.5 3 3" stroke="currentColor" className={`${rom.color}/30`} strokeWidth="1.5" />
              </>
            )}
            {rom.slug === "derpfest" && (
              <>
                <path d="M20 24c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H24c-2.21 0-4-1.79-4-4V24Z" fill="currentColor" className={`${rom.color}/20`} />
                <path d="M28 28l4 4 4-4M28 36l4 4 4-4" stroke="currentColor" className={`${rom.color}/50`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="44" cy="22" r="3" fill="currentColor" className={`${rom.color}/40`} />
              </>
            )}
            {rom.slug === "blissroms" && (
              <>
                <path d="M20 24l12-8 12 8v16c0 2.21-1.79 4-4 4H24c-2.21 0-4-1.79-4-4V24Z" fill="currentColor" className={`${rom.color}/20`} />
                <path d="M20 24l12 4 12-4" stroke="currentColor" className={`${rom.color}/50`} strokeWidth="1.5" />
                <circle cx="32" cy="34" r="4" fill="currentColor" className={`${rom.color}/40`} />
                <circle cx="44" cy="22" r="2.5" fill="currentColor" className={`${rom.color}/30`} />
              </>
            )}
          </svg>
        </div>
        <h1 className={`text-4xl font-semibold tracking-tight sm:text-5xl ${rom.color}`}>
          {rom.name}
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          {rom.description}
        </p>
        <div className="flex gap-3">
          <a href={rom.url} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Visit {rom.name}</Button>
          </a>
          <Link href="/">
            <Button variant="outline" size="lg">
              Back to Directory
            </Button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center gap-12 px-6 pb-24">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {rom.longDescription}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {rom.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
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
            <CardTitle className="text-xl">Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
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
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

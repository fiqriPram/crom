export type Rom = {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  benefits: string[]
  features: string[]
  color: string
  bgColor: string
  borderColor: string
  ringColor: string
  url: string
  thumbnail: React.ReactNode
}

export const roms: Rom[] = [
  {
    slug: "crdroid",
    name: "crDroid",
    tagline: "Performance & reliability over stock",
    description:
      "crDroid is a custom ROM based on LineageOS that aims to improve performance, reliability and customizability without compromising security.",
    longDescription:
      "crDroid is designed for users who want the best performance from their device without sacrificing reliability. Built on top of LineageOS, crDroid adds a wealth of customization options while maintaining the stability and security that users expect. Whether you're a power user looking to tweak every aspect of your phone or someone who wants a smoother daily experience, crDroid delivers.",
    benefits: [
      "Improved system performance and battery life compared to stock ROMs",
      "Regular security updates to keep your device safe",
      "Active community of developers and maintainers",
      "Support for a wide range of devices",
      "Balance between customization and stability",
    ],
    features: [
      "Status Bar & QS customization",
      "Lock screen personalization",
      "Gesture & button navigation",
      "Dark mode & UI theming",
      "Notification & sound control",
      "Game mode & smart charging",
    ],
    color: "text-coral",
    bgColor: "bg-coral/10",
    borderColor: "border-coral/20",
    ringColor: "ring-coral/30",
    url: "https://crdroid.net/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-coral/30" strokeWidth="1.5" />
        <path d="M22 30c0-5.523 4.477-10 10-10s10 4.477 10 10v1c0 5.523-4.477 10-10 10s-10-4.477-10-10v-1Z" fill="currentColor" className="text-coral/20" />
        <circle cx="32" cy="31" r="6" fill="currentColor" className="text-coral/50" />
        <circle cx="32" cy="31" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "lineageos",
    name: "LineageOS",
    tagline: "Free & open-source for all devices",
    description:
      "A free and open-source operating system for various devices based on the Android mobile platform, extending functionality and lifespan.",
    longDescription:
      "LineageOS is the most widely used custom Android ROM in the world. It extends the life of devices from over 20 different manufacturers, giving them a new lease on life with modern Android versions. Built by a passionate open-source community, LineageOS focuses on privacy, security, and user freedom while providing a clean and familiar Android experience.",
    benefits: [
      "Extends device lifespan — supports devices over 5 years old",
      "Monthly security patches — among the fastest in custom ROMs",
      "Trust system for transparent privacy and security monitoring",
      "Huge community with official support for 100+ devices",
      "Clean, near-stock Android experience with useful additions",
    ],
    features: [
      "User personalization focus",
      "Monthly security updates",
      "Trust security monitoring",
      "20+ manufacturer support",
      "Open-source apps & tools",
      "Enhanced dev debugging",
    ],
    color: "text-zen-blue",
    bgColor: "bg-zen-blue/10",
    borderColor: "border-zen-blue/20",
    ringColor: "ring-zen-blue/30",
    url: "https://lineageos.org/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-blue/30" strokeWidth="1.5" />
        <path d="M46 30c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14" stroke="currentColor" className="text-zen-blue/50" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M46 30h-7l3.5-5 3.5 5Z" fill="currentColor" />
        <circle cx="26" cy="30" r="2.5" fill="currentColor" className="text-zen-blue/60" />
        <circle cx="38" cy="30" r="2.5" fill="currentColor" className="text-zen-blue/60" />
      </svg>
    ),
  },
  {
    slug: "evolution-x",
    name: "Evolution X",
    tagline: "Pixel UI with deep customization",
    description:
      "Replicates the Google Pixel experience with added customization, based on LineageOS and built to bring Android 16 to your device.",
    longDescription:
      "Evolution X brings the best of Google's Pixel software to a wide range of devices. It combines the clean, polished Pixel UI with deep customization options that let you make your device truly yours. With frequent updates, strong security practices, and an active development community, Evolution X is the go-to ROM for users who want a premium Pixel-like experience without buying a Pixel.",
    benefits: [
      "Authentic Google Pixel UI and features on any supported device",
      "Frequent OTA updates with latest security patches",
      "Deep customization engine beyond what Pixel offers",
      "Based on LineageOS for a rock-solid stable foundation",
      "Optimized for both performance and battery efficiency",
    ],
    features: [
      "Google Pixel look & feel",
      "Latest security patches",
      "Deep customization options",
      "LineageOS stable base",
      "Performance & battery tuned",
      "Active community support",
    ],
    color: "text-zen-green",
    bgColor: "bg-zen-green/10",
    borderColor: "border-zen-green/20",
    ringColor: "ring-zen-green/30",
    url: "https://evolution-x.org/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-green/30" strokeWidth="1.5" />
        <path d="M22 22h20v14c0 5.523-4.477 10-10 10s-10-4.477-10-10V22Z" fill="currentColor" className="text-zen-green/20" />
        <path d="M22 28h20" stroke="currentColor" className="text-zen-green/50" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="40" r="4" fill="currentColor" className="text-zen-green/40" />
        <path d="M28 44c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function getRom(slug: string): Rom | undefined {
  return roms.find((r) => r.slug === slug)
}

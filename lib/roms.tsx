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
  {
    slug: "pixel-experience",
    name: "Pixel Experience",
    tagline: "Pure Google Pixel feel on any device",
    description:
      "A ROM based on AOSP that aims to provide the exact Google Pixel experience, with all Pixel features and minimal modifications.",
    longDescription:
      "Pixel Experience is a custom Android ROM that brings the authentic Google Pixel experience to a wide range of devices. Based on AOSP (Android Open Source Project), it focuses on delivering the stock Pixel look, feel, and features with minimal modifications. It's the go-to choice for users who want their non-Pixel device to feel exactly like a Google Pixel.",
    benefits: [
      "True Google Pixel experience on non-Pixel devices",
      "All Pixel-exclusive features and apps included",
      "Clean, bloatware-free system",
      "Regular updates with security patches",
      "Great for users who prefer stock Android",
    ],
    features: [
      "Pixel Launcher & wallpapers",
      "Pixel sounds & ringtones",
      "Google Camera integration",
      "At a Glance widget",
      "Now Playing support",
      "Stock Android stability",
    ],
    color: "text-zen-purple",
    bgColor: "bg-zen-purple/10",
    borderColor: "border-zen-purple/30",
    ringColor: "ring-zen-purple/30",
    url: "https://get.pixelexperience.org/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-purple/30" strokeWidth="1.5" />
        <rect x="20" y="18" width="24" height="28" rx="5" fill="currentColor" className="text-zen-purple/20" />
        <circle cx="32" cy="30" r="5" fill="currentColor" className="text-zen-purple/40" />
        <path d="M26 42c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" className="text-zen-purple/60" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="24" r="2" fill="currentColor" className="text-zen-purple/30" />
      </svg>
    ),
  },
  {
    slug: "pixelos",
    name: "PixelOS",
    tagline: "AOSP with Pixel goodies & performance",
    description:
      "An AOSP-based ROM with Google apps included and all Pixel goodies, providing an experience similar to Google Pixel phones.",
    longDescription:
      "PixelOS is an AOSP-based ROM that comes with Google apps included and all Pixel goodies. It aims to provide an experience similar to Google Pixel phones with numerous performance enhancements and a small amount of useful additional features. It's perfect for users who want the Pixel experience with added performance tweaks.",
    benefits: [
      "Google apps included out of the box",
      "All Pixel goodies and features",
      "Performance enhancements over stock Pixel ROM",
      "Small but useful set of additional features",
      "Clean, lightweight AOSP base",
    ],
    features: [
      "Pixel Launcher with Google Discover",
      "Google Camera & Pixel apps included",
      "Performance-optimized kernel",
      "Useful additional customization",
      "Monthly security updates",
      "Active development community",
    ],
    color: "text-zen-teal",
    bgColor: "bg-zen-teal/10",
    borderColor: "border-zen-teal/30",
    ringColor: "ring-zen-teal/30",
    url: "https://pixelos.net/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-teal/30" strokeWidth="1.5" />
        <path d="M20 28h24l-4-8H24l-4 8Z" fill="currentColor" className="text-zen-teal/20" />
        <path d="M20 28v10c0 3.314 2.686 6 6 6h12c3.314 0 6-2.686 6-6V28" fill="currentColor" className="text-zen-teal/20" />
        <path d="M20 28h24" stroke="currentColor" className="text-zen-teal/50" strokeWidth="1.5" />
        <circle cx="32" cy="34" r="4" fill="currentColor" className="text-zen-teal/40" />
        <path d="M28 40c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" className="text-zen-teal/60" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "nusantara",
    name: "Nusantara ROM",
    tagline: "Android OS dari Nusantara untuk siapa saja",
    description:
      "A clean, bloatware-free Android ROM developed with enthusiasm from Indonesia, focusing on privacy and customization.",
    longDescription:
      "Nusantara ROM is an Android operating system developed from Nusantara (Indonesia) for everyone. It focuses on delivering a clean, bloatware-free experience with useful customizations from various trusted sources. Developed by passionate developers, it gives users full control over their device with no ads, no bloatware, and a clean interface — all completely free.",
    benefits: [
      "Completely bloatware-free and ad-free experience",
      "Developed by passionate, experienced developers",
      "Features curated from trusted sources",
      "Full user control over device privacy",
      "Free and open-source — no cost ever",
    ],
    features: [
      "Clean, bloatware-free interface",
      "Customization from trusted sources",
      "Privacy-first approach",
      "Active Indonesian development community",
      "Regular updates & improvements",
      "Free for everyone",
    ],
    color: "text-zen-orange",
    bgColor: "bg-zen-orange/10",
    borderColor: "border-zen-orange/30",
    ringColor: "ring-zen-orange/30",
    url: "https://nusantararom.org/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-orange/30" strokeWidth="1.5" />
        <path d="M20 22h24v20c0 5.523-4.477 10-10 10H30c-5.523 0-10-4.477-10-10V22Z" fill="currentColor" className="text-zen-orange/20" />
        <path d="M24 28h16M24 34h16M24 40h8" stroke="currentColor" className="text-zen-orange/50" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="44" cy="26" r="3" fill="currentColor" className="text-zen-orange/40" />
      </svg>
    ),
  },
  {
    slug: "project-elixir",
    name: "Project Elixir",
    tagline: "Redefine simplicity with minimalistic design",
    description:
      "A clean and minimal AOSP-based custom ROM focusing on stock Android with thoughtful, balanced enhancements.",
    longDescription:
      "Project Elixir is a clean and minimal AOSP-based custom ROM that focuses on delivering the best of stock Android with thoughtful, balanced enhancements. Designed for users who value stability, performance, and clean UI, Elixir eliminates unnecessary bloat while still offering meaningful customization features. Built by experienced developers, it brings Android 16 with a minimalist design and the perfect balance of customization options.",
    benefits: [
      "Clean AOSP base with Pixel-like UI/UX",
      "Lightweight and optimized for daily use",
      "Monthly updates with security patches",
      "Smooth performance & battery efficiency",
      "Strong privacy and security focus",
    ],
    features: [
      "Minimalist design with stock Android feel",
      "iOS-inspired automated depth clock",
      "Perfectly balanced customization",
      "Android 16 (Baklava) based",
      "Optimized for daily driver use",
      "Experienced development team",
    ],
    color: "text-zen-pink",
    bgColor: "bg-zen-pink/10",
    borderColor: "border-zen-pink/30",
    ringColor: "ring-zen-pink/30",
    url: "https://projectelixiros.com/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-pink/30" strokeWidth="1.5" />
        <path d="M24 18c-4.418 0-8 3.582-8 8v12c0 4.418 3.582 8 8 8h16c4.418 0 8-3.582 8-8V26c0-4.418-3.582-8-8-8H24Z" fill="currentColor" className="text-zen-pink/20" />
        <path d="M28 32l3 3 6-6" stroke="currentColor" className="text-zen-pink/50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="44" cy="24" r="3" fill="currentColor" className="text-zen-pink/40" />
        <path d="M22 40c0-1.5 1.5-3 3-3h14c1.5 0 3 1.5 3 3" stroke="currentColor" className="text-zen-pink/30" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "derpfest",
    name: "DerpFest",
    tagline: "Feature-rich AOSP with community-driven features",
    description:
      "An AOSP-based custom ROM twisted with the latest features from all over the Android development community.",
    longDescription:
      "DerpFest is an AOSP-based custom ROM that incorporates the best features from across the Android development community. Quality and stability are top priorities, bringing you the best Android has to offer. Now supporting Android 16 QPR2 with the latest security patches from Google, DerpFest continues to be one of the last open source custom ROMs still contributing code to the community.",
    benefits: [
      "Latest Android 16 QPR2 with Google security patches",
      "Features curated from across the Android community",
      "Strong focus on quality and stability",
      "One of the last truly open-source ROMs",
      "Active development with frequent updates",
    ],
    features: [
      "Latest Android 16 QPR2 base",
      "Community-driven feature set",
      "Quality & stability first approach",
      "Unique DerpFest contributions",
      "Wide device support",
      "Active Telegram community",
    ],
    color: "text-zen-yellow",
    bgColor: "bg-zen-yellow/10",
    borderColor: "border-zen-yellow/30",
    ringColor: "ring-zen-yellow/30",
    url: "https://derpfest.org/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-yellow/30" strokeWidth="1.5" />
        <path d="M20 24c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H24c-2.21 0-4-1.79-4-4V24Z" fill="currentColor" className="text-zen-yellow/20" />
        <path d="M28 28l4 4 4-4M28 36l4 4 4-4" stroke="currentColor" className="text-zen-yellow/50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="44" cy="22" r="3" fill="currentColor" className="text-zen-yellow/40" />
      </svg>
    ),
  },
  {
    slug: "blissroms",
    name: "BlissRoms",
    tagline: "Open-source OS focused on design, usability & security",
    description:
      "An open-source Android-based OS delivering a harmonious blend of customization, security, and performance across a wide range of devices.",
    longDescription:
      "BlissRoms is an open-source Android-based operating system built to deliver a harmonious blend of customization, security, and performance across a wide range of devices. Started in 2014 and based on LineageOS, BlissRoms focuses on bringing the open-source community a quality OS that can run on all your devices as a daily driver, syncing your apps, settings, and customizations across all platforms.",
    benefits: [
      "Harmonious blend of customization, security & performance",
      "Based on LineageOS for a rock-solid foundation",
      "Cross-platform support — phones, laptops & PCs",
      "Daily driver quality with synced customizations",
      "Active development since 2014",
    ],
    features: [
      "Deep customization options",
      "Enhanced security features",
      "Performance optimizations",
      "Cross-platform compatibility",
      "LineageOS stable base",
      "Active community support",
    ],
    color: "text-zen-lime",
    bgColor: "bg-zen-lime/10",
    borderColor: "border-zen-lime/30",
    ringColor: "ring-zen-lime/30",
    url: "https://blissroms.org/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-lime/30" strokeWidth="1.5" />
        <path d="M20 24l12-8 12 8v16c0 2.21-1.79 4-4 4H24c-2.21 0-4-1.79-4-4V24Z" fill="currentColor" className="text-zen-lime/20" />
        <path d="M20 24l12 4 12-4" stroke="currentColor" className="text-zen-lime/50" strokeWidth="1.5" />
        <circle cx="32" cy="34" r="4" fill="currentColor" className="text-zen-lime/40" />
        <circle cx="44" cy="22" r="2.5" fill="currentColor" className="text-zen-lime/30" />
      </svg>
    ),
  },
  {
    slug: "voltageos",
    name: "VoltageOS",
    tagline: "Pure AOSP — simple, secure, performant",
    description:
      "A simplistic, no-frills pure AOSP experience with the right dab of customizations, security patches, and privacy features.",
    longDescription:
      "VoltageOS delivers a simplistic, no-frills pure AOSP experience that won't let you down in getting through every day uninterrupted. With just the right amount of customizations, latest security patches from Google, sandboxed Google Play inspired by GrapheneOS, and Monet theme support, it strikes the perfect balance between simplicity and functionality. Perfect for users who want a clean, secure, and performant daily driver.",
    benefits: [
      "Pure AOSP — no bloatware or unnecessary modifications",
      "Latest security patches as soon as Google releases them",
      "Sandboxed Google Play for enhanced privacy (GrapheneOS-inspired)",
      "Google Monet theming support",
      "Clean, performant daily driver experience",
    ],
    features: [
      "Pure AOSP experience",
      "Sandboxed Google Play",
      "Monet theme engine",
      "Latest security patches",
      "Performance optimizations",
      "Active community & maintainers",
    ],
    color: "text-zen-rose",
    bgColor: "bg-zen-rose/10",
    borderColor: "border-zen-rose/30",
    ringColor: "ring-zen-rose/30",
    url: "https://www.voltageos.com/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-rose/30" strokeWidth="1.5" />
        <path d="M24 20h16c2.21 0 4 1.79 4 4v8l-6 6H24c-2.21 0-4-1.79-4-4V24c0-2.21 1.79-4 4-4Z" fill="currentColor" className="text-zen-rose/20" />
        <path d="M24 28h16M24 34h10" stroke="currentColor" className="text-zen-rose/50" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="44" cy="22" r="2.5" fill="currentColor" className="text-zen-rose/30" />
        <path d="M38 38l6-6v4c0 2.21-1.79 4-4 4h-2Z" fill="currentColor" className="text-zen-rose/20" />
      </svg>
    ),
  },
  {
    slug: "projectblaze",
    name: "Project Blaze",
    tagline: "Enhanced Android with customizable features",
    description:
      "An AOSP-based custom ROM with GAPPS and VANILLA variants, focusing on optimized performance, security, and medium-to-minimal customizations.",
    longDescription:
      "Project Blaze is a custom Android ROM based on AOSP that delivers an enhanced Android experience with customizable features, optimized performance, and strong security. Available in both GAPPS and VANILLA variants, it supports 15+ official devices. Blaze focuses on providing medium to minimal customizations — just the right amount to make your device feel personal without overwhelming you. Built on Android 14 (with past versions on 13 and 12.1), it ships with the latest security patches for a stable and secure daily driver.",
    benefits: [
      "Available in both GAPPS and VANILLA variants for user flexibility",
      "Latest security patches for enhanced protection",
      "Medium to minimal customizations — balanced and clean",
      "Optimized for performance and battery efficiency",
      "Active development with official device support",
    ],
    features: [
      "AOSP-based clean foundation",
      "GAPPS & VANILLA variants",
      "Optimized performance tuning",
      "Latest security patches",
      "Medium-to-minimal customizations",
      "15+ officially supported devices",
    ],
    color: "text-zen-sky",
    bgColor: "bg-zen-sky/10",
    borderColor: "border-zen-sky/30",
    ringColor: "ring-zen-sky/30",
    url: "https://www.projectblaze.me/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-sky/30" strokeWidth="1.5" />
        <path d="M32 16l10 12c4 4.5 4 11 0 15.5-2 2.5-5 4-8 4s-6-1.5-8-4c-4-4.5-4-11 0-15.5l8-12Z" fill="currentColor" className="text-zen-sky/20" />
        <path d="M32 16l6 8c3 3.5 3 8 0 11-1.5 2-3.5 3-6 3s-4.5-1-6-3c-3-3-3-7.5 0-11l6-8Z" fill="currentColor" className="text-zen-sky/30" />
        <path d="M30 28l2 4 2-4" stroke="currentColor" className="text-zen-sky/60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="38" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "superioros",
    name: "SuperiorOS",
    tagline: "Elevate your Android experience with AOSP",
    description:
      "An AOSP-based custom ROM offering lightning-fast performance, extensive customization, and rock-solid stability.",
    longDescription:
      "SuperiorOS is an AOSP-based custom ROM designed to elevate your Android experience. It focuses on delivering lightning-fast performance, extensive customization options, and rock-solid stability. Developed by a passionate team, SuperiorOS aims to provide users with a premium Android experience that balances speed, features, and reliability.",
    benefits: [
      "Lightning-fast performance optimizations",
      "Extensive customization options",
      "Rock-solid stability for daily use",
      "Clean AOSP base with thoughtful enhancements",
      "Active development and community support",
    ],
    features: [
      "AOSP-based clean experience",
      "Performance-tuned kernel",
      "Extensive UI customization",
      "Stable daily driver quality",
      "Regular updates & security patches",
      "Active community & support",
    ],
    color: "text-zen-indigo",
    bgColor: "bg-zen-indigo/10",
    borderColor: "border-zen-indigo/30",
    ringColor: "ring-zen-indigo/30",
    url: "https://superioros.github.io/",
    thumbnail: (
      <svg viewBox="0 0 64 64" fill="none" className="size-14">
        <circle cx="32" cy="32" r="28" stroke="currentColor" className="text-zen-indigo/30" strokeWidth="1.5" />
        <path d="M22 26c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H26c-2.21 0-4-1.79-4-4V26Z" fill="currentColor" className="text-zen-indigo/20" />
        <path d="M28 28l4 4-4 4M32 36h6" stroke="currentColor" className="text-zen-indigo/50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="44" cy="24" r="2.5" fill="currentColor" className="text-zen-indigo/30" />
      </svg>
    ),
  },
]

export function getRom(slug: string): Rom | undefined {
  return roms.find((r) => r.slug === slug)
}

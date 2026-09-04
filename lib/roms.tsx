export type Rom = {
  slug: string
  name: string
  type: "rom" | "os"
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
  icon: string
}

export const roms: Rom[] = [
  {
    slug: "crdroid",
    name: "crDroid",
    type: "rom",
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
    icon: "/rom-logos/crdroid.png",
  },
  {
    slug: "lineageos",
    name: "LineageOS",
    type: "rom",
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
    icon: "/rom-logos/lineageos.png",
  },
  {
    slug: "evolution-x",
    name: "Evolution X",
    type: "rom",
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
    icon: "/rom-logos/evolution-x.png",
  },
  {
    slug: "pixel-experience",
    name: "Pixel Experience",
    type: "rom",
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
    icon: "/rom-logos/pixel-experience.png",
  },
  {
    slug: "pixelos",
    name: "PixelOS",
    type: "rom",
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
    icon: "/rom-logos/pixelos.png",
  },
  {
    slug: "nusantara",
    name: "Nusantara ROM",
    type: "rom",
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
    icon: "/rom-logos/nusantara.png",
  },
  {
    slug: "project-elixir",
    name: "Project Elixir",
    type: "rom",
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
    icon: "/rom-logos/project-elixir.png",
  },
  {
    slug: "derpfest",
    name: "DerpFest",
    type: "rom",
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
    icon: "/rom-logos/derpfest.png",
  },
  {
    slug: "blissroms",
    name: "BlissRoms",
    type: "rom",
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
    icon: "/rom-logos/blissroms.png",
  },
  {
    slug: "voltageos",
    name: "VoltageOS",
    type: "rom",
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
    icon: "/rom-logos/voltageos.png",
  },
  {
    slug: "grapheneos",
    name: "GrapheneOS",
    type: "rom",
    tagline: "Security-hardened & privacy-focused mobile OS",
    description:
      "A privacy and security-focused mobile OS with applied security hardening, exploit mitigations, and Sandboxed Google Play compatibility.",
    longDescription:
      "GrapheneOS is a private and secure mobile operating system with special emphasis on security and privacy. It's based on the Android Open Source Project with significant hardening of the privacy and security model. Running on Google Pixel devices, it provides extensive exploit mitigations, a hardened memory allocator, a sandboxed Google Play compatibility layer, and a robust verified boot chain. GrapheneOS is the gold standard for mobile security, used by journalists, activists, and security-conscious individuals worldwide.",
    benefits: [
      "Industry-leading security hardening and exploit mitigations",
      "Full Google Play compatibility via sandboxed environment",
      "No tracking, telemetry, or data collection",
      "Verified boot chain with secure enclave integration",
      "Timely security updates — often faster than Google",
    ],
    features: [
      "Hardened memory allocator (Scudo)",
      "Sandboxed Google Play support",
      "Vanadium hardened web browser",
      "Attestation & verification tools",
      "Secure contact discovery",
      "Permission auto-reset & network permission",
    ],
    color: "text-zen-gray",
    bgColor: "bg-zen-gray/10",
    borderColor: "border-zen-gray/30",
    ringColor: "ring-zen-gray/30",
    url: "https://grapheneos.org/",
    icon: "/rom-logos/grapheneos.png",
  },
  {
    slug: "superioros",
    name: "SuperiorOS",
    type: "rom",
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
    icon: "/rom-logos/superioros.png",
  },
]

export function getRom(slug: string): Rom | undefined {
  return roms.find((r) => r.slug === slug)
}

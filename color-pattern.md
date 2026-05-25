# Color Pattern

Semua warna didefinisikan di `src/styles/global.css`.

## Primary Palette (`@theme inline`)

| Token | Nilai | Tailwind Utility |
|-------|-------|------------------|
| `--color-paper` | `var(--zen-paper)` | `bg-paper`, `text-paper`, `border-paper` |
| `--color-coral` | `#f76f53` | `text-coral`, `bg-coral`, `border-coral` |
| `--color-dark` | `var(--zen-dark)` | `text-dark`, `bg-dark`, `border-dark` |
| `--color-subtle` | `var(--zen-subtle)` | `bg-subtle`, `border-subtle` |
| `--color-muted` | `var(--zen-muted)` | `bg-muted` |
| `--color-zen-blue` | `#6287f5` | `text-zen-blue`, `bg-zen-blue`, `border-zen-blue` |
| `--color-zen-green` | `#63f78b` | (didefinisikan, belum dipakai) |

## CSS Variables (Light & Dark Mode)

### Light (`:root`) — default

| Variable | Nilai | Deskripsi |
|----------|-------|-----------|
| `--zen-paper` | `#f2f0e3` | Background/kertas |
| `--zen-dark` | `#2e2e2e` | Foreground/teks |
| `--zen-muted` | `rgba(0,0,0,0.05)` | Latar redup |
| `--zen-subtle` | `rgba(0,0,0,0.05)` | Border halus |

### Dark (`[data-theme='dark']`)

| Variable | Nilai | Deskripsi |
|----------|-------|-----------|
| `--zen-paper` | `#1f1f1f` | Background |
| `--zen-dark` | `#d1cfc0` | Foreground/teks |
| `--zen-muted` | `rgba(255,255,255,0.05)` | Latar redup |
| `--zen-subtle` | `rgba(255,255,255,0.1)` | Border halus |

## Twilight Mode

Diaktifkan via parameter URL `?twilight`. Coral (`#f76f53`) diganti dengan Zen Blue (`#6287f5`) pada komponen tertentu (contoh: `ButtonCard.astro`, `download.astro`).

## Meta / Browser

| Lokasi | Nilai | Konteks |
|--------|-------|---------|
| `Layout.astro` | `#da755b` | `theme-color` & `og:color` |
| `favicon.svg` | `#F2F0E3` / `#F76F53` | Background & circle strokes |

## Release Note Type Colors (`ReleaseNoteListItem.astro`)

| Type | Light | Dark |
|------|-------|------|
| `security` | `#e3401f` | — |
| `feature` | `#bf3316` | `#ffb1a1` |
| `fix` | `#fe846b` | — |
| `theme` | `#f76f53` | — |
| `change` | `#f7a74b` | — |
| `break` | `#471308` | `#D02908` |

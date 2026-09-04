"use client";

import { useMemo } from "react";
import { roms } from "@/lib/croms";
import { CromCard } from "@/components/crom-card";
import type { Filter } from "@/app/page";

interface CromGridProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export function CromGrid({ filter, onFilterChange }: CromGridProps) {
  const items = useMemo(() => {
    let list = roms;
    if (filter !== "all") {
      list = list.filter((rom) => rom.type === filter);
    }
    return [...list];
  }, [filter]);

  const counts = useMemo(
    () => ({
      all: roms.length,
      rom: roms.filter((r) => r.type === "rom").length,
      os: roms.filter((r) => r.type === "os").length,
      tools: roms.filter((r) => r.type === "tools").length,
    }),
    [],
  );

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: `All (${counts.all})` },
    { key: "rom", label: `ROM (${counts.rom})` },
    { key: "os", label: `OS (${counts.os})` },
    { key: "tools", label: `Tools (${counts.tools})` },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
          Browse by category
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Choose your <span className="text-coral">crom</span>
        </h2>
      </div>

      <div className="mb-8 flex items-center justify-center">
        <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => onFilterChange(f.key)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-coral text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No entries in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((rom, i) => (
            <CromCard key={rom.slug} rom={rom} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}

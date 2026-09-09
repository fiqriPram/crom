"use client";

import { useMemo, useState } from "react";
import { roms } from "@/lib/croms";
import { CromCard } from "@/components/crom-card";
import type { Filter } from "@/app/page";

interface CromGridProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export function CromGrid({ filter, onFilterChange }: CromGridProps) {
  const [showFilters, setShowFilters] = useState(false);
  const items = useMemo(() => {
    if (filter === "all") return [];
    return roms.filter((rom) => rom.type === filter);
  }, [filter]);

  const counts = useMemo(
    () => ({
      all: roms.length,
      rom: roms.filter((r) => r.type === "rom").length,
      linux: roms.filter((r) => r.type === "linux").length,
      tools: roms.filter((r) => r.type === "tools").length,
    }),
    [],
  );

  const filters: { key: Filter; label: string }[] = [
    { key: "rom", label: `ROM (${counts.rom})` },
    { key: "linux", label: `Linux (${counts.linux})` },
    { key: "tools", label: `Tools (${counts.tools})` },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="mb-8 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 rounded-2xl border border-border/70 bg-card/70 p-1.5 shadow-sm backdrop-blur-sm">
          <button
            onClick={() => {
              setShowFilters(!showFilters);
              if (filter !== "all") onFilterChange("all");
            }}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
              filter === "all"
                ? "bg-coral text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
            }`}
          >
            Open
          </button>
          {showFilters &&
            filters.map((f) => (
              <button
                key={f.key}
                onClick={() => onFilterChange(f.key)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  filter === f.key
                    ? "bg-coral text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                }`}
              >
                {f.label}
              </button>
            ))}
        </div>
      </div>

      {items.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((rom, i) => (
            <CromCard key={rom.slug} rom={rom} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}

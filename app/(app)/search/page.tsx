import { Search, FileText, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  mockLaws,
  mockRecentSearches,
  branchLabels,
  branchColors,
} from "@/lib/mock-data";

export const metadata = {
  title: "Buscar Leyes | LegisClara",
  description: "Búsqueda híbrida de legislación mexicana",
};

export default function SearchPage() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-4 py-2.5 md:px-6">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <h1 className="text-sm font-medium">Buscar Leyes</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6 md:px-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por artículo, ley o tema..."
              className="w-full rounded-md border bg-muted/50 py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          <div className="mb-6">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Búsquedas recientes
            </p>
            <div className="flex flex-wrap gap-1.5">
              {mockRecentSearches.map((search) => (
                <button
                  key={search}
                  className="flex items-center gap-1.5 rounded-md border bg-card px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-accent-foreground"
                >
                  <Clock className="h-3 w-3" />
                  {search}
                </button>
              ))}
            </div>
          </div>

          <Separator className="mb-6" />

          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Legislación disponible
            </p>
            <div className="space-y-px rounded-md border">
              {mockLaws.map((law, i) => (
                <div
                  key={law.id}
                  className={`flex items-center gap-3 px-3 py-2.5 transition-colors duration-150 hover:bg-accent/50 cursor-pointer ${
                    i < mockLaws.length - 1 ? "border-b" : ""
                  }`}
                >
                  <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{law.title}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {law.articleCount} artículos · Última reforma:{" "}
                      {law.lastReformAt}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`shrink-0 text-[10px] ${branchColors[law.branch]}`}
                  >
                    {branchLabels[law.branch]}
                  </Badge>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

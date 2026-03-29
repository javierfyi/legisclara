import { AlertTriangle } from "lucide-react";

export function ChatDisclaimer() {
  return (
    <div className="flex items-center gap-1.5 rounded-md border border-amber-500/20 bg-amber-500/5 px-2.5 py-1.5 text-[11px] text-amber-600 dark:text-amber-400">
      <AlertTriangle className="h-3 w-3 shrink-0" />
      <span>
        Información orientativa — no constituye asesoría legal profesional.
        Consulte a un abogado para casos específicos.
      </span>
    </div>
  );
}

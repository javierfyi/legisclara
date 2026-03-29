import { AlertTriangle } from "lucide-react";

export function ChatDisclaimer() {
  return (
    <div className="mx-6 mb-2 flex items-center gap-2 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-950/50 dark:text-amber-200">
      <AlertTriangle className="h-3 w-3 shrink-0" />
      <span>
        Esta información es orientativa y no constituye asesoría legal
        profesional. Consulte a un abogado para casos específicos.
      </span>
    </div>
  );
}

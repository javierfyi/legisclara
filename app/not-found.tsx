import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Scale className="h-5 w-5 text-muted-foreground" />
        </div>
        <h1 className="mb-1 text-lg font-semibold">Página no encontrada</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/chat">
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}

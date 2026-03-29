import Link from "next/link";
import {
  Scale,
  MessageSquare,
  Search,
  BookOpen,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground">
              <Scale className="h-3.5 w-3.5 text-background" />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              LegisClara
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="text-xs">
              <Link href="/chat">Iniciar sesión</Link>
            </Button>
            <Button size="sm" asChild className="text-xs">
              <Link href="/chat">
                Comenzar
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Legislación mexicana,
              <br />
              clara y accesible
            </h1>
            <p className="mb-8 text-sm text-muted-foreground md:text-base">
              Consulta leyes de México con IA. Respuestas fundamentadas con
              artículos específicos y fuentes verificables.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button asChild>
                <Link href="/chat">
                  Comenzar consulta
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/search">Explorar leyes</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="mx-auto grid max-w-5xl gap-px bg-border md:grid-cols-3">
            <div className="bg-background px-6 py-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mb-1 text-sm font-semibold">Chat Legal con IA</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Pregunta en lenguaje natural. Cada respuesta cita artículos
                específicos con enlaces a su fuente oficial.
              </p>
            </div>
            <div className="bg-background px-6 py-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mb-1 text-sm font-semibold">Búsqueda Híbrida</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Busca por semántica o palabras clave. Encuentra el artículo
                exacto entre miles de disposiciones legales.
              </p>
            </div>
            <div className="bg-background px-6 py-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mb-1 text-sm font-semibold">Lector de Leyes</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Navega leyes completas con historial de reformas y comparador de
                versiones entre periodos.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="mx-auto grid max-w-5xl gap-px bg-border md:grid-cols-2">
            <div className="flex items-center gap-3 bg-background px-6 py-6">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted">
                <Zap className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Respuestas en tiempo real</p>
                <p className="text-xs text-muted-foreground">
                  Streaming con Claude para respuestas rápidas y precisas
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background px-6 py-6">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted">
                <Shield className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Fuentes verificables</p>
                <p className="text-xs text-muted-foreground">
                  Cada cita incluye artículo, ley y enlace al DOF
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <p className="text-[11px] text-muted-foreground">
            LegisClara — Información orientativa, no asesoría legal.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
            <Link href="/chat" className="transition-colors hover:text-foreground">
              Chat
            </Link>
            <Link href="/search" className="transition-colors hover:text-foreground">
              Buscar
            </Link>
            <Link href="/laws" className="transition-colors hover:text-foreground">
              Leyes
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

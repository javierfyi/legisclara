"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MessageSquare,
  Search,
  BookOpen,
  Moon,
  Sun,
  Scale,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

/* Emil: command menus used hundreds of times/day → NO animation on open/close.
   Raycast has no open/close animation. That is optimal for high-frequency actions. */
export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function runCommand(fn: () => void) {
    setOpen(false);
    fn();
  }

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50"
        onClick={() => setOpen(false)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      />
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-[480px] translate-x-[-50%] translate-y-[-50%]">
        <VisuallyHidden><h2>Menú de comandos</h2></VisuallyHidden>
        <Command
          className="overflow-hidden rounded-lg border bg-popover shadow-lg [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Buscar leyes, artículos o acciones..."
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto p-1">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No se encontraron resultados.
            </Command.Empty>
            <Command.Group heading="Navegación">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/chat"))}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-100 ease-out aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <MessageSquare className="h-4 w-4" />
                Chat Legal
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/search"))}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-100 ease-out aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <Search className="h-4 w-4" />
                Buscar Leyes
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/laws"))}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-100 ease-out aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <BookOpen className="h-4 w-4" />
                Lector de Leyes
              </Command.Item>
            </Command.Group>
            <Command.Separator className="my-1 h-px bg-border" />
            <Command.Group heading="Leyes frecuentes">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/laws"))}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-100 ease-out aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <Scale className="h-4 w-4" />
                Constitución Política de los Estados Unidos Mexicanos
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/laws"))}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-100 ease-out aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <Scale className="h-4 w-4" />
                Ley Federal del Trabajo
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/laws"))}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-100 ease-out aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <Scale className="h-4 w-4" />
                Código Penal Federal
              </Command.Item>
            </Command.Group>
            <Command.Separator className="my-1 h-px bg-border" />
            <Command.Group heading="Tema">
              <Command.Item
                onSelect={() =>
                  runCommand(() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  )
                }
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-100 ease-out aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                {theme === "dark" ? "Modo claro" : "Modo oscuro"}
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </>
  );
}

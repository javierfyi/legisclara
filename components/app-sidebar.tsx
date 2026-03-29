"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageSquare,
  Search,
  BookOpen,
  Scale,
  Settings,
  User,
  LogOut,
  Command,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navigation = [
  { name: "Chat Legal", href: "/chat", icon: MessageSquare },
  { name: "Buscar Leyes", href: "/search", icon: Search },
  { name: "Lector de Leyes", href: "/laws", icon: BookOpen },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-full w-[220px] flex-col border-r bg-sidebar">
      <div className="flex items-center gap-2 px-4 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground">
          <Scale className="h-3.5 w-3.5 text-background" />
        </div>
        <span className="text-sm font-semibold tracking-tight">LegisClara</span>
      </div>

      <div className="px-3 py-1">
        <button
          onClick={() =>
            document.dispatchEvent(
              new KeyboardEvent("keydown", { key: "k", metaKey: true })
            )
          }
          className="flex w-full items-center gap-2 rounded-md border bg-background/50 px-2.5 py-1.5 text-xs text-muted-foreground transition-[background-color,color] duration-150 ease-out hover:bg-accent hover:text-accent-foreground cursor-pointer"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="flex-1 text-left">Buscar...</span>
          <kbd className="pointer-events-none flex h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <Command className="h-2.5 w-2.5" />K
          </kbd>
        </button>
      </div>

      <Separator className="my-1" />

      <nav className="flex-1 space-y-0.5 px-2 py-1">
        <p className="px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Principal
        </p>
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[13px] font-medium transition-[background-color,color] duration-150 ease-out",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <Separator className="my-1" />

      <div className="flex items-center justify-between px-3 py-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-md px-1 py-1 text-sm transition-[background-color] duration-150 ease-out hover:bg-accent cursor-pointer">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground">Usuario</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="start" className="w-48">
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="h-4 w-4" />
              Configuración
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="h-4 w-4" />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <ThemeToggle />
            </span>
          </TooltipTrigger>
        </Tooltip>
      </div>
    </aside>
  );
}

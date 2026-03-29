"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, Search, BookOpen, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Chat Legal", href: "/chat", icon: MessageSquare },
  { name: "Buscar Leyes", href: "/search", icon: Search },
  { name: "Lector de Leyes", href: "/laws", icon: BookOpen },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-sidebar">
      <div className="flex items-center gap-2 border-b px-6 py-4">
        <Scale className="h-6 w-6" />
        <span className="text-lg font-bold">LegisClara</span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t px-6 py-4">
        <p className="text-xs text-muted-foreground">
          LegisClara v0.1.0
          <br />
          Legislación mexicana con IA
        </p>
      </div>
    </aside>
  );
}

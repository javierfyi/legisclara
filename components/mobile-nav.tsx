"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  MessageSquare,
  Search,
  BookOpen,
  Scale,
  Command,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Chat Legal", href: "/chat", icon: MessageSquare },
  { name: "Buscar Leyes", href: "/search", icon: Search },
  { name: "Lector de Leyes", href: "/laws", icon: BookOpen },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between border-b px-3 py-2 md:hidden">
      <div className="flex items-center gap-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[260px] p-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground">
                  <Scale className="h-3.5 w-3.5 text-background" />
                </div>
                <span className="text-sm font-semibold">LegisClara</span>
              </div>
              <Separator />
              <nav className="flex-1 space-y-0.5 px-2 py-2">
                {navigation.map((item) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors duration-150",
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-1.5">
          <Scale className="h-4 w-4" />
          <span className="text-sm font-semibold">LegisClara</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() =>
            document.dispatchEvent(
              new KeyboardEvent("keydown", { key: "k", metaKey: true })
            )
          }
        >
          <Command className="h-4 w-4" />
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}

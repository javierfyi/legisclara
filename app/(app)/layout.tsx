import { AppSidebar } from "@/components/app-sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { CommandMenu } from "@/components/command-menu";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <AppSidebar />
      <MobileNav />
      <main className="flex-1 overflow-hidden">{children}</main>
      <CommandMenu />
    </div>
  );
}

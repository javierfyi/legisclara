import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "LegisClara — Legislación Mexicana con IA",
  description:
    "Consulta, busca y comprende las leyes de México con inteligencia artificial. Respuestas fundamentadas con artículos específicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <ThemeProvider>
          <TooltipProvider delayDuration={0}>
            {children}
            <Toaster
              position="bottom-right"
              toastOptions={{
                className: "text-sm",
              }}
            />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

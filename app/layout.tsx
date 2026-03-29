import type { Metadata } from "next";
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
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

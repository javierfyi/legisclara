export const metadata = {
  title: "Buscar Leyes | LegisClara",
  description: "Búsqueda híbrida de legislación mexicana",
};

export default function SearchPage() {
  return (
    <div className="flex h-full items-center justify-center p-8">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-semibold">Buscador de Leyes</h1>
        <p className="text-muted-foreground">
          Próximamente: búsqueda semántica y por palabras clave en toda la
          legislación mexicana.
        </p>
      </div>
    </div>
  );
}

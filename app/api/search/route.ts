import { NextResponse } from "next/server";
import { searchArticles } from "@/lib/embeddings/search";

export async function POST(req: Request) {
  try {
    const { query, limit = 10 } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Se requiere un término de búsqueda" },
        { status: 400 }
      );
    }

    const results = await searchArticles(query, limit);

    return NextResponse.json({
      query,
      results,
      totalResults: results.length,
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Error al realizar la búsqueda" },
      { status: 500 }
    );
  }
}

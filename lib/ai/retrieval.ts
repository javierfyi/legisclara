import { prisma } from "@/lib/prisma/client";

export interface RetrievalResult {
  articleId: string;
  lawTitle: string;
  articleNumber: string;
  content: string;
  similarity: number;
}

/**
 * Hybrid search: combines semantic (pgvector) and keyword (ILIKE) search.
 */
export async function hybridSearch(
  query: string,
  embedding: number[],
  limit = 10
): Promise<RetrievalResult[]> {
  const results = await prisma.$queryRaw<RetrievalResult[]>`
    SELECT
      a.id AS "articleId",
      l.title AS "lawTitle",
      a.number AS "articleNumber",
      a.content,
      1 - (a.embedding <=> ${embedding}::vector) AS similarity
    FROM articles a
    JOIN laws l ON l.id = a.law_id
    WHERE a.embedding IS NOT NULL
      AND (
        1 - (a.embedding <=> ${embedding}::vector) > 0.7
        OR a.content ILIKE ${"%" + query + "%"}
      )
    ORDER BY similarity DESC
    LIMIT ${limit}
  `;

  return results;
}

/**
 * Format retrieved articles as context for the AI model.
 */
export function formatContext(results: RetrievalResult[]): string {
  if (results.length === 0) {
    return "No se encontraron artículos relevantes en la base de datos.";
  }

  return results
    .map(
      (r) =>
        `**Art. ${r.articleNumber}** de ${r.lawTitle}:\n${r.content}\n(Relevancia: ${(r.similarity * 100).toFixed(1)}%)`
    )
    .join("\n\n---\n\n");
}

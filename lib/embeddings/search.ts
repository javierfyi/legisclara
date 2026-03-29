import { generateEmbedding } from "./generate";
import { hybridSearch, type RetrievalResult } from "@/lib/ai/retrieval";

/**
 * Search for relevant articles given a natural language query.
 */
export async function searchArticles(
  query: string,
  limit = 10
): Promise<RetrievalResult[]> {
  const embedding = await generateEmbedding(query);
  return hybridSearch(query, embedding, limit);
}

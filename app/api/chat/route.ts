import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { SYSTEM_PROMPT, DISCLAIMER } from "@/lib/ai/prompts";
import { searchArticles } from "@/lib/embeddings/search";
import { formatContext } from "@/lib/ai/retrieval";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const lastUserMessage = messages.findLast(
    (m: { role: string }) => m.role === "user"
  );

  let context = "";
  if (lastUserMessage) {
    try {
      const results = await searchArticles(lastUserMessage.content, 5);
      context = formatContext(results);
    } catch {
      context =
        "No se pudo acceder a la base de datos de artículos en este momento.";
    }
  }

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: `${SYSTEM_PROMPT}\n\nCONTEXTO LEGAL RELEVANTE:\n${context}\n\n${DISCLAIMER}`,
    messages,
  });

  return result.toTextStreamResponse();
}

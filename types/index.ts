export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  citedArticles?: CitedArticle[];
  createdAt: Date;
}

export interface CitedArticle {
  articleId: string;
  lawTitle: string;
  articleNumber: string;
  content: string;
  similarity: number;
}

export interface SearchResult {
  articles: CitedArticle[];
  query: string;
  totalResults: number;
}

export interface LawSummary {
  id: string;
  title: string;
  branch: string;
  publishedAt: string;
  lastReformAt?: string;
  articleCount: number;
}

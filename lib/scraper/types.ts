/**
 * Types for law scraping and ingestion pipeline.
 */

export interface ScrapedLaw {
  title: string;
  branch: string;
  publishedAt: string;
  lastReformAt?: string;
  sourceUrl: string;
  articles: ScrapedArticle[];
}

export interface ScrapedArticle {
  number: string;
  content: string;
}

export interface IngestionResult {
  lawId: string;
  articlesCreated: number;
  embeddingsGenerated: number;
}

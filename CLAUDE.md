# LegisClara — Asistente de Legislación Mexicana con IA

## Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **AI**: Vercel AI SDK + Anthropic Claude API
- **Database**: Prisma ORM + PostgreSQL + pgvector
- **Package Manager**: pnpm (NUNCA npm ni yarn)

## Project Structure

```
app/(public)/          — Landing, demo, pricing (public pages)
app/(app)/             — Chat AI, buscador, lector de leyes (app pages)
app/api/chat/          — Streaming AI endpoint (Vercel AI SDK)
app/api/search/        — Hybrid search endpoint
components/ui/         — shadcn/ui components
components/chat/       — Chat interface components
components/law/        — Law reader, diff viewer
lib/ai/               — RAG pipeline, prompts, retrieval
lib/embeddings/        — Embedding generation and search
lib/prisma/            — Prisma client singleton
lib/scraper/           — Law ingestion utilities
types/                 — Shared TypeScript types
scripts/               — Ingestion and processing scripts
prisma/                — Prisma schema and migrations
```

## Conventions

### Code
- Code in English (variable names, functions, comments)
- UI text and legal content in Spanish
- No `src/` directory — all code at root level
- Use `@/*` import alias for all imports
- TypeScript strict mode — no `any` types

### Package Manager
- **ALWAYS use pnpm** — never npm or yarn
- `pnpm add` for dependencies, `pnpm add -D` for devDependencies
- `pnpm dlx` instead of `npx`

### AI & RAG
- **ALWAYS cite specific articles** — never generate legal info without source
- Embeddings stored in pgvector (vector(1536) via text-embedding-3-small)
- Hybrid search: semantic (pgvector cosine similarity) + keyword (ILIKE)
- Streaming responses via Vercel AI SDK `streamText`
- System prompt enforces citation and disclaimer rules

### Legal Disclaimer
- **MUST be visible in every chat interaction**
- Text: "Esta información es orientativa y no constituye asesoría legal profesional. Consulte a un abogado para casos específicos."
- Rendered as a persistent banner in the chat UI

### Database
- Prisma ORM with PostgreSQL
- pgvector extension for embedding storage and similarity search
- Models: Law, Article, Reform, Consultation, User, Subscription
- Run `pnpm prisma generate` after schema changes
- Run `pnpm prisma migrate dev` for migrations

### Styling
- Tailwind CSS with shadcn/ui components (neutral theme)
- Use `cn()` utility from `lib/utils.ts` for conditional classes
- Dark mode support via `.dark` class

## Environment Variables

See `.env.example` for required variables:
- `DATABASE_URL` — PostgreSQL connection string
- `ANTHROPIC_API_KEY` — Claude API key
- `OPENAI_API_KEY` — For embeddings (text-embedding-3-small)

## Common Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm lint             # Run ESLint
pnpm prisma generate  # Generate Prisma client
pnpm prisma migrate dev  # Run migrations
pnpm prisma studio    # Open Prisma Studio
```

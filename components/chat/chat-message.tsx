import type { UIMessage } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import { Scale, User } from "lucide-react";

interface ChatMessageProps {
  message: UIMessage;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  const textContent = message.parts
    .filter(
      (part): part is Extract<typeof part, { type: "text" }> =>
        part.type === "text"
    )
    .map((part) => part.text)
    .join("");

  return (
    <div className={cn("flex gap-3 py-3", isUser && "flex-row-reverse")}>
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        )}
      >
        {isUser ? (
          <User className="h-3.5 w-3.5" />
        ) : (
          <Scale className="h-3.5 w-3.5 text-muted-foreground" />
        )}
      </div>
      <div
        className={cn(
          "min-w-0 flex-1 text-sm leading-relaxed",
          isUser && "text-right"
        )}
      >
        <p className="mb-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {isUser ? "Tú" : "LegisClara"}
        </p>
        <div
          className={cn(
            "whitespace-pre-wrap",
            !isUser && "prose prose-sm max-w-none dark:prose-invert prose-p:leading-relaxed prose-p:my-1"
          )}
        >
          {textContent}
        </div>
      </div>
    </div>
  );
}

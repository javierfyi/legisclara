import type { UIMessage } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import { Scale, User } from "lucide-react";

interface ChatMessageProps {
  message: UIMessage;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  const textContent = message.parts
    .filter((part): part is Extract<typeof part, { type: "text" }> => part.type === "text")
    .map((part) => part.text)
    .join("");

  return (
    <div className={cn("flex gap-3", isUser && "flex-row-reverse")}>
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Scale className="h-4 w-4" />}
      </div>
      <div
        className={cn(
          "rounded-lg px-4 py-3 text-sm",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted prose prose-sm max-w-none dark:prose-invert"
        )}
      >
        {textContent}
      </div>
    </div>
  );
}

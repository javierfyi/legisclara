"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { ArrowUp, Scale, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "@/components/chat/chat-message";
import { ChatDisclaimer } from "@/components/chat/chat-disclaimer";

const suggestions = [
  "¿Cuáles son los derechos laborales de una embarazada?",
  "¿Qué dice el Art. 123 sobre el salario mínimo?",
  "¿Cuál es la pena por robo agravado?",
  "¿Cómo funciona el amparo en México?",
];

export function ChatInterface() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "streaming" || status === "submitted";
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 160) + "px";
    }
  }, [input]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  function handleSuggestion(text: string) {
    sendMessage({ text });
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-4 py-2.5 md:px-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-muted-foreground" />
          <h1 className="text-sm font-medium">Chat Legal</h1>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center px-4 animate-page-enter">
            <div className="w-full max-w-lg text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Scale className="h-5 w-5 text-muted-foreground" />
              </div>
              <h2 className="mb-1 text-base font-semibold">
                Consulta legislación mexicana
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Haz preguntas sobre leyes mexicanas. Cada respuesta incluye
                artículos citados con sus fuentes.
              </p>
              {/* Emil: stagger on first-time/rare view elements */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 animate-stagger">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSuggestion(s)}
                    className="rounded-md border bg-card px-3 py-2 text-left text-xs text-muted-foreground transition-[background-color,color] duration-150 ease-out hover:bg-accent hover:text-accent-foreground cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl space-y-1 px-4 py-4 md:px-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-3 py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted">
                  <Scale className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-1 pt-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/40" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/40 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/40 [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t bg-background px-4 pb-3 pt-2 md:px-6">
        <ChatDisclaimer />
        <form onSubmit={handleSubmit} className="relative mt-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu pregunta legal..."
            disabled={isLoading}
            rows={1}
            className="w-full resize-none rounded-md border bg-muted/50 px-3 py-2 pr-10 text-sm placeholder:text-muted-foreground transition-[border-color,box-shadow] duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="absolute bottom-1.5 right-1.5 h-7 w-7 rounded-md"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </Button>
        </form>
      </div>
    </div>
  );
}

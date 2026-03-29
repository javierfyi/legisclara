"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/components/chat/chat-message";
import { ChatDisclaimer } from "@/components/chat/chat-disclaimer";

export function ChatInterface() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "streaming" || status === "submitted";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-6 py-4">
        <h1 className="text-lg font-semibold">Chat Legal</h1>
        <p className="text-sm text-muted-foreground">
          Consulta legislación mexicana con inteligencia artificial
        </p>
      </div>

      <ScrollArea className="flex-1 px-6 py-4">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <div className="max-w-md text-center">
              <h2 className="mb-2 text-xl font-semibold">
                Bienvenido a LegisClara
              </h2>
              <p className="mb-4 text-muted-foreground">
                Haz una pregunta sobre legislación mexicana. Citaré los
                artículos relevantes y sus fuentes.
              </p>
              <div className="space-y-2 text-left text-sm text-muted-foreground">
                <p>Ejemplos de preguntas:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    &quot;¿Cuáles son los derechos laborales de una
                    embarazada?&quot;
                  </li>
                  <li>
                    &quot;¿Qué dice la Constitución sobre la libertad de
                    expresión?&quot;
                  </li>
                  <li>
                    &quot;¿Cuál es la pena por robo agravado en el Código
                    Penal?&quot;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        )}
      </ScrollArea>

      <ChatDisclaimer />

      <form onSubmit={handleSubmit} className="border-t px-6 py-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta legal..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}

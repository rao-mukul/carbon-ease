import { useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export default function GeminiChatbot() {
  const apiKey = useMemo(() => import.meta.env.VITE_GEMINI_API_KEY?.trim(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi there! I'm the CarbonEase assistant. Ask me anything about the platform or carbon markets.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    if (!apiKey) {
      setError(
        "Gemini API key is missing. Add VITE_GEMINI_API_KEY to your environment."
      );
      return;
    }

    const newMessages = [...messages, { role: "user", text: trimmed }];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(GEMINI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: trimmed,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Gemini request failed with ${response.status}`);
      }

      const data = await response.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "I didn't understand that, but I'm here to help!";

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: reply,
        },
      ]);
    } catch (fetchError) {
      console.error("Gemini request error", fetchError);
      setError(
        "Something went wrong while contacting Gemini. Please try again."
      );
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: "I ran into an issue reaching Gemini. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="mb-3 w-80 rounded-xl border border-border/70 bg-card/95 shadow-lg backdrop-blur">
          <div className="flex items-center justify-between rounded-t-xl border-b border-border/60 bg-primary/10 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">
                CarbonEase Assistant
              </p>
              <p className="text-xs text-muted-foreground">
                Powered by Google Gemini
              </p>
            </div>
            <Button size="icon" variant="ghost" onClick={handleToggle}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>

          <div className="h-72 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm shadow-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {error && (
              <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </p>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-border/60 px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask something..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
            <p className="mt-2 text-[10px] leading-4 text-muted-foreground">
              Responses are generated by Gemini and may be inaccurate. Please
              verify key details.
            </p>
          </form>
        </div>
      ) : null}

      <Button
        size="lg"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={handleToggle}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sr-only">Open Gemini chat</span>
      </Button>
    </div>
  );
}

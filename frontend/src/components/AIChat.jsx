import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, X, RotateCcw, User } from "lucide-react";
import { sendAIMessage } from "../services/aiService";

const initialMessage = {
  role: "assistant",
  content:
    "Hi! I'm Deepak's portfolio AI assistant. Ask me about his skills, projects, experience listed on this portfolio, or how to get in touch.",
};

const suggestions = [
  "What skills does Deepak have?",
  "Tell me about his projects",
  "What technologies does he use?",
];

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(text = input) {
    const content = text.trim();

    if (!content || loading) return;

    const userMessage = { role: "user", content };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await sendAIMessage(
        nextMessages
          .filter((message) => message.role === "user" || message.role === "assistant")
          .slice(-10)
      );

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            response.data.message ||
            "I couldn't generate a response. Please try again.",
        },
      ]);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "I couldn't connect to the AI assistant right now. Please try again.";

      setMessages((current) => [
        ...current,
        { role: "assistant", content: message },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }

  function resetChat() {
    setMessages([initialMessage]);
    setInput("");
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[60] w-[calc(100vw-2rem)] sm:w-[390px] h-[min(650px,calc(100vh-7rem))] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-indigo-950/40 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800 bg-zinc-900/95">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Portfolio AI</h3>
                <p className="text-xs text-zinc-500">Ask about Deepak</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                aria-label="Reset chat"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              >
                <RotateCcw size={17} />
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close AI assistant"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex gap-2 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="shrink-0 h-8 w-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center mt-1">
                    <Bot size={16} />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-wrap ${
                    message.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-md"
                      : "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-bl-md"
                  }`}
                >
                  {message.content}
                </div>

                {message.role === "user" && (
                  <div className="shrink-0 h-8 w-8 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center mt-1">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {messages.length === 1 && !loading && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-zinc-500">Try asking:</p>
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    className="block w-full text-left text-sm px-3 py-2.5 rounded-xl border border-zinc-800 text-zinc-300 hover:border-indigo-500 hover:text-white hover:bg-zinc-900 transition"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <div className="h-8 w-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="flex gap-1 px-3 py-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-zinc-800 bg-zinc-950">
            <div className="flex items-end gap-2 rounded-xl border border-zinc-700 bg-zinc-900 focus-within:border-indigo-500 transition">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                maxLength={1000}
                placeholder="Ask me anything..."
                className="min-h-11 max-h-28 flex-1 resize-none bg-transparent px-3 py-3 text-sm text-white placeholder:text-zinc-600 outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="m-1.5 h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-indigo-500 transition"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-zinc-600 mt-2 text-center">
              AI responses are based on information available on this portfolio.
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close portfolio AI" : "Open portfolio AI"}
        className="fixed bottom-5 right-4 sm:right-6 z-[60] h-14 w-14 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-900/30 flex items-center justify-center transition-all hover:scale-105"
      >
        {open ? <X size={24} /> : <Bot size={25} />}
        {!open && (
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-cyan-400 border-2 border-black" />
        )}
      </button>
    </>
  );
}

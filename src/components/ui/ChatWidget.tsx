"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I'm Ananya from S.S. Sodhi Interiors 👋 What space are you looking to transform?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Chat request failed");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now — please reach us directly on WhatsApp or call +91 92725 69524.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
        className="fixed left-5 sm:left-8 z-40"
        style={{
          bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Ambient pulse ring */}
          {!open ? (
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full bg-gold/40"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : null}

          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close chat" : "Chat with our design consultant"}
            data-cursor="hover"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-gradient shadow-gold-glow"
          >
            {open ? (
              <X size={24} strokeWidth={1.75} className="text-obsidian-950" />
            ) : (
              <Sparkles size={24} strokeWidth={1.75} className="text-obsidian-950" />
            )}

            {/* Desktop hover tooltip */}
            {!open ? (
              <span className="pointer-events-none absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden flex-col items-start gap-0.5 whitespace-nowrap rounded-sm glass px-4 py-2 opacity-0 -translate-x-2 transition-all duration-300 ease-luxury group-hover:opacity-100 group-hover:translate-x-0 sm:flex">
                <span className="text-xs tracking-[0.1em] text-ivory">
                  Ask Ananya
                </span>
                <span className="text-[0.65rem] tracking-wide text-gold">
                  AI Design Consultant
                </span>
              </span>
            ) : null}
          </motion.button>

          {/* Live indicator badge */}
          {!open ? (
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-obsidian-950"
            />
          ) : null}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 bottom-0 right-0 left-0 sm:left-8 sm:bottom-8 sm:right-auto w-full sm:w-[380px] h-[80vh] sm:h-[560px] max-h-[640px] flex flex-col glass border border-ivory/10 sm:rounded-sm overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-ivory/10">
              <div>
                <p className="font-display text-lg text-ivory">Ananya</p>
                <p className="text-xs text-obsidian-400 tracking-wide">
                  Design Consultant &middot; S.S. Sodhi Interiors
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                data-cursor="hover"
                className="flex items-center justify-center w-8 h-8 text-obsidian-300 hover:text-gold transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed rounded-sm ${
                    m.role === "user"
                      ? "self-end bg-gold-gradient text-obsidian-950"
                      : "self-start bg-obsidian-900/70 text-ivory border border-ivory/10"
                  }`}
                >
                  {m.content}
                </div>
              ))}

              {loading ? (
                <div className="self-start flex items-center gap-1.5 px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" />
                </div>
              ) : null}
            </div>

            <div className="flex items-end gap-3 px-4 py-4 border-t border-ivory/10">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Type your message..."
                className="flex-1 resize-none bg-obsidian-900/60 border border-ivory/10 rounded-sm px-4 py-3 text-base sm:text-sm text-ivory placeholder:text-obsidian-400 focus:outline-none focus:border-gold transition-colors duration-300 max-h-24"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                data-cursor="hover"
                className="flex items-center justify-center w-11 h-11 shrink-0 bg-gold-gradient text-obsidian-950 rounded-sm disabled:opacity-40 transition-opacity"
              >
                <Send size={16} strokeWidth={1.75} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

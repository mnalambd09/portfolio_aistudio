import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Brain, Check, Copy, Bot, User, RefreshCw, Mail } from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AIPersonaModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AIPersonaModal: React.FC<AIPersonaModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text:
        lang === 'bn'
          ? `আসসালামু আলাইকুম! আমি মোঃ নুরুল আলম (M. N. Alam)-এর অফিসিয়াল এআই পার্সোনা। আমি gemini-4-argon মডেলের 'High Thinking' মোডে চালিত। আমার সিস্টেম আর্কিটেকচার, ফুল-স্ট্যাক অভিজ্ঞতা, রিয়্যাক্ট ১৯, গো (Golang), এআই ও এলএলএম প্রজেক্ট বা নিয়োগ সংক্রান্ত যেকোনো গভীর প্রযুক্তিগত প্রশ্ন করতে পারেন!`
          : `Hello! I am Md. Nurul Alam's (M. N. Alam) AI Persona & Technical Twin, powered by Gemini 4 Argon with High Thinking enabled. Ask me anything about my software architecture, React 19 / Go microservices, GenAI platforms, or why I am an ideal fit for your engineering team!`,
      modelUsed: 'gemini-4-argon',
      thinkingMode: 'HIGH',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions =
    lang === 'bn'
      ? [
          'আপনার ব্যাকগ্রাউন্ড ও ক্যারিয়ার জার্নি সম্পর্কে বলুন',
          'NexusPulse প্রজেক্টে হাই-থ্রুপুট RAG কীভাবে ডিজাইন করেছেন?',
          'কেন নুরুল আলম যেকোনো সিনিয়র ইঞ্জিনিয়ারিং রোলের জন্য উপযুক্ত?',
          'ডিস্ট্রিবিউটেড সিস্টেমে ডাটাবেস লকিং কীভাবে সমাধান করেন?',
        ]
      : [
          'What makes you a high-impact Lead Full-Stack & AI candidate?',
          'Explain the architecture of your NexusPulse RAG orchestrator',
          'How do you optimize React 19 performance and concurrency?',
          'How do you approach zero-downtime database migrations?',
        ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const handleSend = async (questionToSend?: string) => {
    const q = (questionToSend || input).trim();
    if (!q || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat-persona', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.concat(userMsg),
          userQuestion: q,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get answer');
      }

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.text,
        modelUsed: data.modelUsed || 'gemini-4-argon',
        thinkingMode: data.thinkingMode || 'HIGH',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text:
          lang === 'bn'
            ? `দুঃখিত, সংযোগে একটি সমস্যা হয়েছে। অনুগ্রহ করে সরাসরি ইমেইলে যোগাযোগ করুন: ${PERSONAL_INFO.email}`
            : `I encountered an issue connecting to the inference engine. You can reach Nurul directly at ${PERSONAL_INFO.email}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-3xl h-[85vh] max-h-[750px] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="p-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm sm:text-base">
                  {lang === 'bn' ? 'নুরুল আলমের এআই পার্সোনা' : "Md. Nurul Alam's AI Twin"}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>gemini-4-argon</span>
                </span>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Thinking Level: HIGH</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="hidden sm:inline text-slate-400">{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setMessages([messages[0]]);
              }}
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'model' && (
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-sky-600 text-white rounded-br-none shadow-md shadow-sky-600/20'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-none'
                }`}
              >
                {/* Model badge */}
                {m.role === 'model' && m.modelUsed && (
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-slate-800/80">
                    <span className="flex items-center gap-1 text-sky-400">
                      <Sparkles className="w-3 h-3" />
                      {m.modelUsed} • High Thinking
                    </span>
                    <button
                      onClick={() => copyText(m.id, m.text)}
                      className="hover:text-white flex items-center gap-1 text-[10px]"
                    >
                      {copiedId === m.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                <div className="whitespace-pre-wrap">{m.text}</div>

                <div
                  className={`text-[10px] mt-2 font-mono ${
                    m.role === 'user' ? 'text-sky-200 text-right' : 'text-slate-500'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {/* Reasoning / Thinking State */}
          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                <Brain className="w-4 h-4 animate-pulse text-sky-400" />
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-sky-500/30 rounded-bl-none text-xs text-slate-300 space-y-2 max-w-[85%]">
                <div className="flex items-center gap-2 text-sky-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                  <span>Gemini 4 Argon: High Thinking Mode active...</span>
                </div>
                <p className="text-slate-400 font-mono text-[11px]">
                  {lang === 'bn'
                    ? 'আর্কিটেকচার ট্রেড-অফ, টেক স্ট্যাক এবং সিস্টেমের কার্যকারিতা গভীরভাবে বিশ্লেষণ করা হচ্ছে...'
                    : 'Reasoning through distributed architecture trade-offs, engineering constraints, and technical fit...'}
                </p>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 w-1/2 animate-pulse" />
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Quick Question Pills */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto flex items-center gap-2 scrollbar-none">
          <span className="text-[11px] font-mono text-slate-500 whitespace-nowrap">
            {lang === 'bn' ? 'সরাসরি প্রশ্ন:' : 'Prompt ideas:'}
          </span>
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={loading}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-sky-500/40 whitespace-nowrap transition-colors flex-shrink-0 cursor-pointer disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                lang === 'bn'
                  ? 'নুরুল আলমের অভিজ্ঞতা ও আর্কিটেকচার নিয়ে যা জানতে চান লিখুন...'
                  : 'Ask about Nurul’s systems, React 19, Go microservices, AI pipelines...'
              }
              disabled={loading}
              className="flex-1 bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:from-sky-400 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-sky-500/20 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Powered by @google/genai • gemini-4-argon</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-sky-400 hover:underline flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

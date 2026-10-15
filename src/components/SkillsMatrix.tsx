import React, { useState } from 'react';
import { Code2, Server, BrainCircuit, Database, Cloud, Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { SKILL_CATEGORIES, CODE_SNIPPETS } from '../data/portfolioData';

interface SkillsMatrixProps {
  lang: Language;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'snippets'>('matrix');
  const [activeSnippetKey, setActiveSnippetKey] = useState<'aiPipeline' | 'concurrency' | 'reactCustomHook'>('aiPipeline');
  const [copied, setCopied] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const snippetLabels = {
    aiPipeline: {
      en: 'AI Inference Pipeline (Gemini 4 Argon)',
      bn: 'এআই ইনফারেন্স পাইপলাইন (Gemini 4 Argon)',
    },
    concurrency: {
      en: 'Go Concurrency Worker Pool',
      bn: 'গো কনকারেন্সি ওয়ার্কার পুল',
    },
    reactCustomHook: {
      en: 'React 19 Real-Time Event Hook',
      bn: 'রিয়্যাক্ট ১৯ রিয়েল-টাইম ইভেন্ট হুক',
    },
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#070b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'প্রযুক্তিগত দক্ষতা ও কোড প্যাটার্ন' : 'Technical Matrix & Code Patterns'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {lang === 'bn' ? 'দক্ষতা ও ইঞ্জিনিয়ারিং স্ট্যাক' : 'Core Engineering Competencies'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              {lang === 'bn'
                ? '৭+ বছরের অভিজ্ঞতায় অর্জিত ফ্রন্টএন্ড, ব্যাকএন্ড, ডিস্ট্রিবিউটেড ডাটাবেস এবং জেনারেটিভ এআই সিস্টেমের সার্বিক দক্ষতা।'
                : 'Deep hands-on proficiency across modern full-stack web architectures, distributed systems, and LLM-native development.'}
            </p>
          </div>

          {/* Toggle between Matrix & Code Snippets */}
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-sky-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? 'দক্ষতার তালিকা' : 'Skills Grid'}
            </button>
            <button
              onClick={() => setActiveTab('snippets')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'snippets'
                  ? 'bg-sky-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'কোড আর্কিটেকচার স্যাম্পল' : 'Code Patterns'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Skills Matrix */}
        {activeTab === 'matrix' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all space-y-4"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {lang === 'bn' ? cat.titleBn : cat.title}
                    </h3>
                    <div className="text-[11px] font-mono text-slate-400">
                      {cat.skills.length} core proficiencies
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">{s.name}</span>
                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span className="text-slate-400">{s.years}</span>
                          <span className="text-sky-400 font-bold">{s.level}%</span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-500"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>

                      {s.highlight && (
                        <div className="text-[10px] text-slate-400 font-mono truncate">
                          {s.highlight}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Code Patterns & Architecture Snippets */}
        {activeTab === 'snippets' && (
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
            {/* Top Toolbar */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                {(['aiPipeline', 'concurrency', 'reactCustomHook'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveSnippetKey(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                      activeSnippetKey === key
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {snippetLabels[key][lang]}
                  </button>
                ))}
              </div>

              <button
                onClick={() => copyCode(CODE_SNIPPETS[activeSnippetKey])}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-mono transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-6 font-mono text-xs text-slate-300 overflow-x-auto bg-[#070b13] leading-relaxed">
              <pre>
                <code>{CODE_SNIPPETS[activeSnippetKey]}</code>
              </pre>
            </div>

            {/* Snippet Explanation Footer */}
            <div className="p-3 bg-slate-900/70 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Production-grade snippet authored by Md. Nurul Alam</span>
              </div>
              <span className="text-slate-500">TypeScript / Go / React</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

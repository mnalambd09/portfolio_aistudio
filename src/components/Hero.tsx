import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, Copy, Check, ShieldCheck, Cpu, Code2, Layers, Download } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
  onOpenAIPersona: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenAIPersona,
  onOpenTerminal,
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const rolesEn = [
    'Senior Full-Stack Architect',
    'Generative AI & LLM Systems Engineer',
    'Distributed Microservices Specialist',
    'React 19 & Go Craftsman',
  ];

  const rolesBn = [
    'সিনিয়র ফুল-স্ট্যাক আর্কিটেক্ট',
    'জেনারেটিভ এআই ও এলএলএম ইঞ্জিনিয়ার',
    'ডিস্ট্রিবিউটেড মাইক্রোসার্ভিসেস বিশেষজ্ঞ',
    'রিয়্যাক্ট ১৯ ও গো ডেভেলপার',
  ];

  const roles = lang === 'bn' ? rolesBn : rolesEn;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-purple-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-500/5 blur-2xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{lang === 'bn' ? PERSONAL_INFO.availabilityBn : PERSONAL_INFO.availability}</span>
            </div>

            {/* Name & Titles */}
            <div className="space-y-2">
              <div className="text-slate-400 text-sm md:text-base font-mono tracking-wide">
                {lang === 'bn' ? 'আসসালামু আলাইকুম / হ্যালো, আমি' : "Hello World, I am"}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {lang === 'bn' ? PERSONAL_INFO.nameBn : PERSONAL_INFO.name}
              </h1>
              <div className="text-xl sm:text-2xl font-bold h-9 flex items-center">
                <span className="text-gradient">
                  {roles[activeRoleIndex]}
                </span>
                <span className="inline-block w-0.5 h-6 ml-1.5 bg-sky-400 animate-pulse" />
              </div>
            </div>

            {/* Pitch */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {lang === 'bn' ? PERSONAL_INFO.taglineBn : PERSONAL_INFO.tagline}
            </p>

            {/* Quick Email & Copy Widget */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-xl font-mono text-xs text-slate-300">
                <span className="text-sky-400">email:</span>
                <span className="text-slate-100 font-medium">{PERSONAL_INFO.email}</span>
                <button
                  onClick={copyEmail}
                  className="p-1 hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-white"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'bn' ? 'ঢাকা, বাংলাদেশ • রিমোট' : 'Dhaka, BD • Remote'}</span>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>{lang === 'bn' ? 'প্রজেক্ট ও আর্কিটেকচার দেখুন' : 'Explore Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenAIPersona}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800/90 text-sky-300 border border-sky-500/40 hover:border-sky-400 transition-all shadow-md group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>{lang === 'bn' ? 'এআই পার্সোনাকে প্রশ্ন করুন' : 'Ask AI Persona'}</span>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded font-mono font-medium">
                  High Thinking
                </span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-xs bg-slate-950 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors cursor-pointer"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4" />
                <span>CLI</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                title="Download / View Resume"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>{lang === 'bn' ? 'সিভি' : 'Resume'}</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {PERSONAL_INFO.yearsOfExperience}
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years Experience'}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
                  {PERSONAL_INFO.completedProjects}
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'bn' ? 'সফল প্রজেক্ট' : 'Shipped Systems'}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {PERSONAL_INFO.uptimeRecord}
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'bn' ? 'আপটাইম রেকর্ড' : 'Production Uptime'}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">
                  15M+
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'bn' ? 'দৈনিক এআই টোকেন' : 'Daily AI Tokens'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Card & Architecture Holo-Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c121e] border border-slate-800 p-6 shadow-2xl shadow-sky-500/5 group hover:border-sky-500/40 transition-all duration-300">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  <span>architect-node-v24.local</span>
                </div>
              </div>

              {/* Live Architectural Metrics Stream */}
              <div className="py-4 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-200">Full-Stack Core Stack</div>
                      <div className="text-[11px] font-mono text-slate-400">React 19 • TypeScript • Go • Node</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-200">GenAI Reasoning Hub</div>
                      <div className="text-[11px] font-mono text-slate-400">Gemini 4 Argon • Thinking Mode</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                    High Thinking
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-200">Data & Vector Sharding</div>
                      <div className="text-[11px] font-mono text-slate-400">Postgres • pgvector • Redis Cache</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                    140ms p99
                  </span>
                </div>
              </div>

              {/* Code Insight Snip */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-400">
                <div className="text-slate-500 text-[11px]">// Nurul's Engineering Philosophy</div>
                <div className="text-sky-300">const <span className="text-amber-300">architect</span> = () =&gt; &#123;</div>
                <div className="pl-4 text-slate-300">
                  return <span className="text-emerald-400">"Build resilient systems, minimize complexity, deliver 10x value"</span>;
                </div>
                <div className="text-sky-300">&#125;;</div>
              </div>

              {/* Bottom Quick Trigger */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Senior Engineer</span>
                <button
                  onClick={onOpenAIPersona}
                  className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <span>Chat with Twin</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
